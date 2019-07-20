import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import {
  getTheme,
} from 'react-native-material-kit';

const theme = getTheme();

const App = () => {
  return (
    <View style={theme.cardStyle}>
  <Text style={theme.cardTitleStyle}>Welcome</Text>
  <Text style={theme.cardContentStyle}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  </Text>
  <Text style={theme.cardActionStyle}>My Action</Text>
</View>
  );
};

export default App;
