import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';
export default function App() {

  return (
    <View style={styles.container}>
      <Title></Title>
      <Main></Main>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});