import Post from '../components/Post';
import { Post as PostModel } from '../../models/Post';
import { useState } from 'react';
import { View, SectionList } from 'react-native';
import React from 'react';

export function Blog() {
    const [posts, setPosts] = useState<PostModel[]>([]);
    fetch('https://playsask.com/wp-json/wp/v2/posts')
        .then((response) => {
            var contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return response.json();
            }
            throw new TypeError('Non JSON response');
        })
        .then((posts: PostModel[]) => {
            setPosts(posts);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <View>
            <SectionList renderItem={({ item, index }) => <Post key={index} post={item} />} sections={[{ data: posts }]} />
        </View>
    );
}
