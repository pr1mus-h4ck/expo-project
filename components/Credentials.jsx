import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Clipboard,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const Credentials = ({ handleVisualize }) => {
  const copyToClipboard = (text) => {
    Clipboard.setString(text)
    alert("Copiado al portapapeles")
  }

  return (
    <View style={styles.container}>
      <View style={styles.credentialContainer}>
        <Text style={styles.label}>Correo de Alumno</Text>
        <Text style={styles.credential}>h1yhzo1z5w@ibolinva.com</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => copyToClipboard("h1yhzo1z5w@ibolinva.com")}
        >
          <Text style={styles.buttonText}>Copiar Correo</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Correo de Instructor</Text>
        <Text style={styles.credential}>ev1v4y5v7x@vvatxiy.com</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => copyToClipboard("ev1v4y5v7x@vvatxiy.com")}
        >
          <Text style={styles.buttonText}>Copiar Correo</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Contraseña Genérica</Text>
        <Text style={styles.credential}>54321</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => copyToClipboard("54321")}
        >
          <Text style={styles.buttonText}>Copiar Contraseña</Text>
        </TouchableOpacity>
      </View>

      <LinearGradient colors={["#00C853", "#00E676"]} style={styles.footer}>
        <MaterialCommunityIcons name="school" size={50} color="white" />
        <Text style={styles.footerTitle}>
          ¿Estás listo para ingresar a CVS?
        </Text>
        <Text style={styles.footerSubtitle}>
          No olvides copiar las credenciales.
        </Text>
        <TouchableOpacity style={styles.footerButton} onPress={handleVisualize}>
          <Text style={styles.footerButtonText}>Ingresar</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  credentialContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  credential: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#00C853",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  footerSubtitle: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
  },
  footerButton: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  footerButtonText: {
    color: "#00C853",
    fontWeight: "bold",
  },
})

export default Credentials
