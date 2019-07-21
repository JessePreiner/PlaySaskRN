import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation, useNavigationParam } from 'react-navigation-hooks';
import { Post } from '../../models/Post';
import { getTheme } from 'react-native-material-kit';
import HTML from 'react-native-render-html';
import { ThemeContext } from 'react-native-material-ui';
import { ScrollView } from 'react-native-gesture-handler';

const PostDetails = () => {
    const post: Post = useNavigationParam('post');
    const theme = getTheme();

    return (
        <ScrollView>
            {/* <Image source={{ uri: post.featured_image_src }} style={{ width: 400, height: 300, position: 'absolute' }} /> */}
            <Text style={{ fontSize: theme.fontSize * 2.5, textAlign: 'center', backgroundColor: 'gray' }}>{post.title.rendered}</Text>
            <View style={{ backgroundColor: 'white' }}>
                <HTML html={post.content.rendered} staticContentMaxWidth={400} baseFontStyle={theme.defaultFont} />
            </View>
        </ScrollView>
    );
};

export default PostDetails;
