import { Post as PostModel } from '../../models/Post';
import { ListItem } from 'react-native-material-ui';
import format from 'date-fns/format';
import { Linking, Image } from 'react-native';
import React from 'react';

export default function Post({ post }: { key: number; post: PostModel }) {
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
}
