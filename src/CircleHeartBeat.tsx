import React, { FC, useEffect } from 'react'
import { View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  withSequence,
  useAnimatedProps
} from 'react-native-reanimated'
import Svg, { Circle } from 'react-native-svg'

const SIZE = 60
const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export const CircleHBView: FC = () => {
  const scale = useSharedValue(1.3)
  const reanimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }))

  useEffect(() => {
    scale.value = withRepeat(withSequence(withTiming(1), withTiming(1, { duration: 200 }), withTiming(1, { duration: 200 }), withTiming(1.3, { duration: 200 }), withTiming(1, { duration: 200 }), withTiming(1.1, { duration: 100 })), -1, true)
  }, [])

  return (
    <View style={{ width: 80, height: 80, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[
          {
            backgroundColor: 'transparent',
            width: SIZE,
            height: SIZE,
            borderWidth: 5,
            borderColor: 'orange',
            borderRadius: SIZE / 2,
          },
          reanimatedStyle
        ]}
      />
    </View>
  )
}

export const CircleHBSvg: FC = () => {
  const scale = useSharedValue(1.3)

  useEffect(() => {
    scale.value = withRepeat(withSequence(withTiming(1), withTiming(1, { duration: 200 }), withTiming(1, { duration: 200 }), withTiming(1.3, { duration: 200 }), withTiming(1, { duration: 200 }), withTiming(1.1, { duration: 100 })), -1, true)
  }, [])

  const animatedProps = useAnimatedProps(() => ({
    r: (170 / (2 * Math.PI)) * scale.value
  }))

  return (
    <View style={{ width: 80, height: 80, justifyContent: 'center', alignItems: 'center' }}>
      <Svg width="100%" height="100%" viewBox="-10 -10 80 80">
        <AnimatedCircle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={170 / (2 * Math.PI)}
          fill="transparent"
          stroke="orange"
          strokeWidth="5"
          animatedProps={animatedProps}
        />
      </Svg>
    </View>
  )
}
