import { useState, useRef } from "react"
import { Animated, StyleSheet, Easing } from "react-native"
import Login from "../../components/Login"
import Credentials from "../../components/Credentials"
import AnimatedBackground from "../../components/AnimatedBackground"

const LoginScreen = () => {
  const [showCredentials, setShowCredentials] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const fadeAnim = useRef(new Animated.Value(1)).current
  const slideAnim = useRef(new Animated.Value(0)).current
  const gradientAnim = useRef(new Animated.Value(0)).current

  const animate = (toValue) => {
    if (isAnimating) return
    setIsAnimating(true)

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(gradientAnim, {
        toValue: toValue ? 0 : 1,
        duration: 2000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ]).start(() => {
      setShowCredentials(!showCredentials)
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.in(Easing.ease),
      }).start(() => {
        setIsAnimating(false)
      })
    })
  }

  const handleVisualize = () => {
    animate(showCredentials)
  }

  return (
    <Animated.View style={styles.container}>
      <AnimatedBackground animatedValue={gradientAnim} />
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        {showCredentials ? (
          <Credentials handleVisualize={handleVisualize} />
        ) : (
          <Login handleVisualize={handleVisualize} />
        )}
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  content: {
    flex: 1,
    width: "100%",
    position: "relative",
    zIndex: 3,
  },
})

export default LoginScreen
