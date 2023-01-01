import { React, useState } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import axios from 'axios'
import tw from 'twrnc'

export default function ChatBox() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = () => {
    console.log(message)
    setMessages([...messages, message])
    axios.post('http://10.0.2.2:8080/predict', {
      message: message,
    })
      .then(response => {
        setMessages([...messages, message, response.data.answer])
      })
      .catch(error => {
        console.error(error);
      })
    setMessage('')
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        {messages.map((m, index) => (
          <Text style={tw`text-lg pb-2 `} key={index}>{m}</Text>
        ))}
      </View>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  chatContainer: {
    flex: 1,

  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    padding: 10,
  },
})
