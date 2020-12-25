import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const Form = () => {
    const [currency, setCurrency] = useState('');
    const [cryptocurrency, setCryptocurrency] = useState('');
    const [cryptocurrencies, setCryptocurrencies] = useState([]);

    const consultAPI = async () => {
        const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
        const { data: result } = await axios.get(url);
        setCryptocurrencies(result.Data);
    }

    useEffect(() => {
        consultAPI();
    }, []);

    const handleButton = () => {
        console.log('cotizando..')
    }

    return (
        <View>
            <Text style={styles.label}>Currency</Text>
            <Picker
                style={styles.picker}
                selectedValue={currency}
                onValueChange={currency => setCurrency(currency)}
            >
                <Picker.Item label='- Select -' />
                <Picker.Item label='American Dolar' value="USD" />
                <Picker.Item label='Euro' value="EUR" />
                <Picker.Item label='Pound Sterling' value="GBP" />
                <Picker.Item label='Argentine Peso' value="ARS" />
            </Picker>
            <Text style={styles.label}>CryptoCurrency</Text>
            <Picker
                style={styles.picker}
                selectedValue={cryptocurrency}
                onValueChange={cryptocurrency => setCryptocurrency(cryptocurrency)}
            >
                <Picker.Item label='- Select -' />
                {cryptocurrencies.map(crypto => {
                    return (<Picker.Item key={crypto.CoinInfo.Id} label={crypto.CoinInfo.FullName} value={crypto.CoinInfo.FullName} />);
                })}
            </Picker>
            <TouchableOpacity style={styles.button} onPress={() => handleButton()}>
                <Text style={styles.buttonText}>Cotizar</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontFamily: 'Lato-Black',
    },
    picker: {
        padding: '10%'
    },
    button: {
        backgroundColor: '#3D52D5',
        marginHorizontal: '25%',
        padding: '5%',
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Lato-Black',
        textAlign: 'center',
        fontSize: 20,
    }
})
export default Form;