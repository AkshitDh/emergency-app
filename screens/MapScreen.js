import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements'
import call from 'react-native-phone-call'

const EmergencyCallScreen = ({ navigation }) => {
  const handleCallPress = () => {
    // Make the phone call
    const args = {
      number: '102', // String value with the number to call
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
    }
    call(args).catch(console.error)
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'Emergency Call', style: { fontSize: 20 } }}
      />
      <View style={styles.content}>
        <Text style={styles.text}>
          In case of an emergency, tap the button below to call an ambulance.
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleCallPress}>
          <Text style={styles.buttonText}>Call an ambulance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default EmergencyCallScreen;
