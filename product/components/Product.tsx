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
                post._embedded &&
                post._embedded['wp:featuredmedia'].length && (
                    <Image
                        source={{ uri: post._embedded && post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url }}
                        resizeMode="cover"
                        style={{ width: 64, height: 64 }}
                    />
                )
            }
            numberOfLines={3}
            style={{ leftElementContainer: { marginRight: 16 } }}
            centerElement={{
                primaryText: post.title.rendered,
                tertiaryText: '- ' + format(post.date_gmt, 'MMMM Do YYYY'),
            }}
            onPress={() => Linking.openURL(post.link)}
        />
    );
}
