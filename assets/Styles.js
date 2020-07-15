import { StyleSheet } from 'react-native';
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  instruction: {
    textAlign: "center",
    marginBottom: 10
  },
  userInput: {
    height: 60,
    width: 300,
    fontSize: 35,
    padding: 5,
    borderWidth: 1,
    borderColor: 'lightblue'
  },
  conversionChoiceButton: {
    height: 35,
    width: 200,
    margin: 10,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'lightblue',
    justifyContent: 'center'
  },
  currencyTextHeader: {
    textAlign: 'center',
  },
  currencyText: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default styles;