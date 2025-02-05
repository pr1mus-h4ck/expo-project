import { Animated, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient)

const AnimatedBackground = ({ animatedValue }) => {
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 750],
    extrapolate: "clamp",
  })

  const scaleY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1.2],
    extrapolate: "clamp",
  })

  return (
    <AnimatedGradient
      colors={["#14CC5E", "#14CC5E"]}
      style={[
        styles.background,
        {
          transform: [{ translateY }, { scaleY }],
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 70,
    zIndex: 2,
    left: 0,
    top: 0,
  },
})

export default AnimatedBackground
