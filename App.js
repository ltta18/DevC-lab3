import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
} from 'react-native';
import styles from './assets/Styles';

const ConversionTypeButton = ({ fromCurrency, from, toCurrency, to }) => {
  const backgroundColor = (fromCurrency === from && toCurrency === to) 
                          ? 'lightblue' 
                          : 'transparent'
  const buttonBackground = { backgroundColor: backgroundColor }

  const fromFlag = from === 'usd' ? '🇺🇲' : '🇻🇳';
  const toFlag = to === 'usd' ? '🇺🇲' : '🇻🇳';

  return (
    <TouchableOpacity 
      style={[ styles.conversionChoiceButton, buttonBackground ]}
      onPress={() => setConversionChoices(from, to)}
    >
      <Text>{fromFlag} to {toFlag}</Text>
    </TouchableOpacity>
  );
};

const FormattedCurrency = ({ type, value }) => {
  const currency = type === 'usd' ? '$' : 'vnđ';
  const flag = type === 'usd' ? '🇺🇸' : '🇻🇳';
  const formatter = value + currency
  
  return (
    <Text style={styles.currencyText}>
      {formatter} {flag}
    </Text>
  );
};

export default function App() {
  const [ currentCurrencyValue, setCurrentCurrencyValue ] = useState(0)
  const [ convertedCurrencyValue, setConvertedCurrencyValue ] = useState(0)
  const [ fromCurrency, setFromCurrency ] = useState('vnd')
  const [ toCurrency, setToCurrency ] = useState('usd')

  const setConversionChoices = (from, to) => {
    setFromCurrency(from)
    setToCurrency(to)
  }
  useEffect(() => {
    convertCurrency()
  }, [ currentCurrencyValue, fromCurrency ])

  const convertCurrency = () => {
    if (toCurrency === 'usd') {
      setConvertedCurrencyValue(currentCurrencyValue / 23000)
    }
    else {
      setConvertedCurrencyValue(currentCurrencyValue * 23000)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.instruction}>Please enter the value of the currency you want to convert</Text>
      <TextInput 
        autoFocus
        keyboardType="number-pad"
        placeholder="100,000,000 VND"
        selectionColor="red"
        textAlign="center"
        style={styles.userInput}
        onChangeText={(text) => setCurrentCurrencyValue(text)}
      />
      <View>
        <ConversionTypeButton 
          from="vnd" 
          to="usd" 
          fromCurrency={fromCurrency} 
          toCurrency={toCurrency} 
          setConversionChoices={setConversionChoices}
        />
        <ConversionTypeButton 
          from="usd" 
          to="vnd" 
          fromCurrency={fromCurrency} 
          toCurrency={toCurrency} 
          setConversionChoices={setConversionChoices}
        />
      </View>
      <View style={styles.currencyTextContainer}>
        <Text style={styles.currencyTextHeader}>Current currency:</Text>
        <FormattedCurrency 
          type={fromCurrency}
          value={currentCurrencyValue ? currentCurrencyValue : '0'}
        />
        <Text style={styles.currencyTextHeader}>Conversion currency:</Text>
        <FormattedCurrency 
          type={toCurrency}
          value={convertedCurrencyValue ? convertedCurrencyValue : '0'}
        />
      </View>
    </SafeAreaView>
  );
}
