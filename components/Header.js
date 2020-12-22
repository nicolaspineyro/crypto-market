import React from 'react';
import { Text, StyleSheet,Platform } from 'react-native';

const Header = () => {
    return (<>
        <Text style={styles.header}>Cryptomarket</Text>
    </>)
}

const styles = StyleSheet.create({
    header: {
        padding: Platform.OS === 'ios' ? 50 : '5%',
        textAlign: 'center',
        fontFamily: 'Lato-Black',
        fontSize: 20,
        backgroundColor: '#3D52D5',
        textTransform: 'uppercase',
        color: '#fff'
    }
});

export default Header;