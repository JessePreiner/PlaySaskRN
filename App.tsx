import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer } from './Navigator';
import { ThemeContext, getTheme } from 'react-native-material-ui';
export function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Personalized Screen</Text>
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
