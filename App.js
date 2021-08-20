import { View, Button } from "react-native";
import React from "react";
import { PanGestureHandler } from 'react-native-gesture-handler';

export default function AnimatedStyleUpdateExample(props) {

  const square = { width: 100, height: 100, backgroundColor: "black" }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <PanGestureHandler onGestureEvent={console.log}>
        <View
          pointerEvents="box-none"
        >
          <View style={[square]} />
        </View>
      </PanGestureHandler>
    </View>
  );
}
