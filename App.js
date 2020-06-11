import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import ContactList from './src/Components/ContactList';

export default class App extends Component {
  render() {
    return (
     <SafeAreaView style={styles.container}>
        <ContactList />
     </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
