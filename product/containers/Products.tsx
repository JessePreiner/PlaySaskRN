import Product from '../components/Product';
import { Product as ProductModel } from '../../models/Product';
import { useState } from 'react';
import { View, SectionList } from 'react-native';
import React from 'react';

export function Products() {
    const [products, setProducts] = useState<ProductModel[]>([]);
    fetch('https://playsask.com/wp-json/wp/v2/product?_embed=1')
        .then((response) => {
            var contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            }
            throw new TypeError('Non JSON response');
        })
        .then((products: ProductModel[]) => {
            setProducts(products);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <View>
            <SectionList renderItem={({ item, index }) => <Product key={index} post={item} />} sections={[{ data: products }]} />
        </View>
    );
}
