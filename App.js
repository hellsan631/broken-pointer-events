import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";
import { View, Button } from "react-native";
import React from "react";
import { PanGestureHandler } from 'react-native-gesture-handler';

export default function AnimatedStyleUpdateExample(props) {
  const x = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
    },
  });

  const square = { width: 100, height: 100, backgroundColor: "black" }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
      ],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={animatedStyle}
          pointerEvents="box-none"
        >
          <View style={[square]} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
