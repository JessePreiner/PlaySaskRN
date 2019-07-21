import React, { useState } from 'react';
import { View, Text, SectionList, Image, Linking } from 'react-native';
import { AppContainer } from './Navigator';
import { Post } from './models/Post';
import { COLOR, ThemeContext, getTheme, ListItem } from 'react-native-material-ui';
import format from 'date-fns/format';
export function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Personalized Screen</Text>
        </View>
    );
}

export function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);
    fetch('https://playsask.com/wp-json/wp/v2/posts')
        .then((response) => {
            var contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then((posts: Post[]) => {
            setPosts(posts);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <View>
            <SectionList
                renderItem={({ item, index, section, separators }) => <RenderPost key={index} post={item} />}
                sections={[{ data: posts }]}
            />
        </View>
    );
}

const RenderPost = ({ key, post }: { key: number; post: Post }) => {
    // const { themeStyles } = getTheme();

    return (
        <ListItem
            divider
            leftElement={
                <Image
                    source={{ uri: post.featured_image_src_square || post.featured_image_src }}
                    resizeMode="cover"
                    style={{ width: 64, height: 64 }}
                />
            }
            numberOfLines={3}
            style={{ leftElementContainer: { marginRight: 16 } }}
            centerElement={{
                primaryText: post.title.rendered,
                secondaryText: post.author_info.display_name,
                tertiaryText: format(post.date_gmt, 'MMMM Do YYYY'),
            }}
            // TODO: add screen for displaying post
            onPress={() => Linking.openURL(post.link)}
        />
    );
};

export function Games() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Games Screen</Text>
        </View>
    );
}

export default function App() {
    const theme = getTheme({});
    return (
        <ThemeContext.Provider value={theme}>
            <AppContainer />
        </ThemeContext.Provider>
    );
}
