import { View, Text, StyleSheet } from "react-native"
import { useRoute } from "@react-navigation/native"

export default function Home() {
  const route = useRoute()
  const userData = route.params?.userData || {}

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenido</Text>
      <View style={styles.userInfo}>
        <Text style={styles.label}>ID del Usuario:</Text>
        <Text>{userData.usuarioID || "No disponible"}</Text>

        <Text style={styles.label}>Correo:</Text>
        <Text>{userData.correo || "No disponible"}</Text>

        <Text style={styles.label}>Tipo de Usuario:</Text>
        <Text>{userData.tipo || "No disponible"}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  userInfo: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
})
