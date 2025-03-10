import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const ButtonBar = () => {
  return (
    <View className="absolute bottom-0 w-full bg-black/80 py-6">
      <View className="flex-row items-center justify-between px-8">
        {/* Flash Mode Button */}
        <TouchableOpacity 
          className="w-12 h-12 items-center justify-center"
          onPress={() => console.log("Flash pressed")}
        >
          <Feather name="zap" size={24} color="white" />
        </TouchableOpacity>

        {/* Main Shutter Button */}
        <TouchableOpacity 
          onPress={() => console.log("Take photo")}
          activeOpacity={0.8}
          className="border-4 border-white/20 rounded-full p-1"
        >
          <View className="w-20 h-20 bg-white rounded-full" />
        </TouchableOpacity>

        {/* Camera Switch Button */}
        <TouchableOpacity 
          className="w-12 h-12 items-center justify-center"
          onPress={() => console.log("Switch camera")}
        >
          <Feather name="refresh-ccw" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonBar;