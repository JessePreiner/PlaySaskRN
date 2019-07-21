import { Product as ProductModel } from '../../models/Product';
import { ListItem } from 'react-native-material-ui';
import { Linking, Image } from 'react-native';
import React from 'react';
import format from 'date-fns/format';

export default function Product({ post }: { key: number; post: ProductModel }) {
    return (
        <ListItem
            divider
            leftElement={
                <Image source={{ uri: post._links['wp:featuredmedia'].href }} resizeMode="cover" style={{ width: 64, height: 64 }} />
            }
            numberOfLines={3}
            style={{ leftElementContainer: { marginRight: 16 } }}
            centerElement={{
                primaryText: post.title.rendered,
                secondaryText: post.excerpt.rendered,
                tertiaryText: format(post.date_gmt, 'MMMM Do YYYY'),
            }}
            onPress={() => Linking.openURL(post.link)}
        />
    );
}
