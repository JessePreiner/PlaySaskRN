import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer } from './Navigator';

export function HomeScreen () {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Personalized Screen</Text>
        </View>
    );
};

export function Blog() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Blog Screen</Text>
        </View>
    );
};

export function Games() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Games Screen</Text>
        </View>
    );
};

export default function App() {
    return <AppContainer />;
}
