import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Form = () => {
    const [currency, setCurrency] = useState('');
    const [cryptocurrency, setCryptocurrency] = useState('');
    return (
        <View>
            <Text style={styles.label}>Currency</Text>
            <Picker
                selectedValue={currency}
                onValueChange={currency => setCurrency(currency)}
            >
                <Picker.Item label='American Dolar' value="USD" />
                <Picker.Item label='Euro' value="EUR" />
                <Picker.Item label='Pound Sterling' value="GBP" />
                <Picker.Item label='Argentine Peso' value="ARS" />
            </Picker>
            <Text style={styles.label}>CryptoCurrency</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        textTransform: 'uppercase',
        fontFamily: 'Lato-Black',
    }
})
export default Form;