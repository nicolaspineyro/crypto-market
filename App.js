import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import Price from './components/Price';
import axios from 'axios'

const App = () => {

  const [currency, setCurrency] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [consultAPI, setConsultAPI] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [coinPrice, setCoinPrice] = useState({});

  useEffect(() => {
    if (consultAPI) {
      getPrice();
    }
    setConsultAPI(false)
  }, [consultAPI]);

  const getPrice = async () => {
    try {
      setIsLoading(true);
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`
      const result = await axios.get(url);
      setCoinPrice(result.data.DISPLAY.[cryptocurrency].[currency]);
      setIsLoading(false)
    }
    catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />

      <Image
        source={require('./assets/img/cryptomonedas.png')}
        style={styles.image}
      />
      <View style={styles.formContainer}>
        <Form
          currency={currency}
          cryptocurrency={cryptocurrency}
          setCurrency={setCurrency}
          setCryptocurrency={setCryptocurrency}
          setConsultAPI={setConsultAPI}
        />
        
      </View>
      <Price coinPrice={coinPrice} />
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
