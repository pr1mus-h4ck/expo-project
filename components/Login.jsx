import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from "expo-linear-gradient"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const Login = ({ handleVisualize }) => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {
    try {
      if (!email || !password) {
        alert("Debes ingresar un correo y una contraseña")
        return
      }

      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo: email, contrasena: password }),
      })

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }

      const data = await res.json()

      if (data.tipo === "exito") {
        alert("Inicio de sesión exitoso")
        navigation.navigate("home", { userData: data })
      } else {
        alert(data.mensaje || "Error al iniciar sesión")
      }
    } catch (error) {
      console.error("Error en login:", error)
      alert("Error al conectar con el servidor")
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#00C853", "#00E676"]} style={styles.header}>
        <MaterialCommunityIcons name="school" size={50} color="white" />
        <Text style={styles.headerTitle}>Credenciales de Ingreso</Text>
        <Text style={styles.headerSubtitle}>¿Olvidaste tus credenciales?</Text>
        <TouchableOpacity
          style={styles.visualizarButton}
          onPress={handleVisualize}
        >
          <Text style={styles.visualizarText}>Visualizar</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.loginContainer}>
        <Text style={styles.welcomeText}>¡Bienvenido!</Text>
        <Text style={styles.loginTitle}>Inicia sesión</Text>
        <Text style={styles.description}>Usando tu cuenta de estudiante.</Text>

        <Text style={styles.label}>Correo Electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo electrónico"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.loginButton} onPress={login}>
          <Text style={styles.loginButtonText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  headerSubtitle: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
  },
  visualizarButton: {
    backgroundColor: "transparent",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  visualizarText: {
    color: "white",
    fontWeight: "bold",
  },
  loginContainer: {
    padding: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00C853",
  },
  description: {
    fontSize: 14,
    color: "black",
    marginBottom: 20,
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#00C853",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
})

export default Login
