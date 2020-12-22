import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import Header from './components/Header';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <Header />

      <Image
        source={require('./assets/img/cryptomonedas.png')}
        style={styles.image}
      />
      <View style={styles.formContainer}>
        <Form />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '28%',
  },
  formContainer: {
    margin: '2.5%'
  }
});

export default App;
