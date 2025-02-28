import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EnviarOTP = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  const handleSendOTP = () => {
    // Aquí puedes manejar la lógica para enviar el OTP
    alert(`OTP enviado a: ${email}`);
    // Por ejemplo, podrías navegar a otra pantalla después de enviar el OTP
    // navigation.navigate('otra-pantalla');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar OTP</Text>
      <Text>Por favor, ingresa tu correo electrónico para recibir el OTP.</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Enviar OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#00C853',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default EnviarOTP;