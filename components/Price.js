import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Price = ({ coinPrice }) => {

    if (Object.keys(coinPrice).length === 0) return null;

    return (
        < View style={styles.result}>
            <Text style={styles.span}> {coinPrice.PRICE}</Text>
            <Text style={styles.text}> Highest value of the day: {''}
                <Text style={styles.span}>{coinPrice.HIGHDAY}</Text>
            </Text>
            <Text style={styles.text}>Lowest price of the day: {''}
                <Text style={styles.span}> {coinPrice.LOWDAY}</Text>
            </Text>
            <Text style={styles.text}>Percentage change in the day: {''}
                <Text style={styles.span}> {coinPrice.CHANGEPCT24HOUR} %</Text>
            </Text>
            <Text style={styles.text}>Last update:
                <Text style={styles.span}> {coinPrice.LASTUPDATE}</Text>
            </Text>
        </View >
    );
}

const styles = StyleSheet.create({
    result: {
        backgroundColor: '#3D52D5',
        padding: 20,

    },
    text: {

    },
    price: {

    },
    span: {

    }
})
export default Price;