import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const Form = ({ currency, cryptocurrency, setCurrency, setCryptocurrency, setConsultAPI }) => {

    const [cryptocurrencies, setCryptocurrencies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getCryptocurrencies = async () => {
        try {
            setIsLoading(true);
            const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
            const { data: result } = await axios.get(url);

            setCryptocurrencies(result.Data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCryptocurrencies();
    }, []);

    const handleButton = () => {
        if (currency.trim() === '' || cryptocurrency.trim() === '') {
            Alert.alert('Error', 'Both currencies are required.', [{ text: 'OK' }]);
            return;
        } else {
            setConsultAPI(true);
        }
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
                    return (<Picker.Item key={crypto.CoinInfo.Id} label={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name} />);
                })}
            </Picker>
            <TouchableOpacity style={styles.button} onPress={() => handleButton()}>
                <Text style={styles.buttonText}>Get Price</Text>
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
        marginBottom: '2.5%',
        padding: '2.5%',
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Lato-Black',
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase'
    }
})
export default Form;