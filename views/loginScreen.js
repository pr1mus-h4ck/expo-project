import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aquí debes implementar la lógica de autenticación
        // Puedes validar las credenciales contra un servidor o una base de datos
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
        // Redirige a la pantalla principal o muestra un mensaje de éxito/error
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                onChangeText={setUsername}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
            />
            <Button title="Iniciar Sesión" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
});

export default LoginScreen;
