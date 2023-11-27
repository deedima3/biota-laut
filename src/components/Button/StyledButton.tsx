import React from "react";
import { Text, Pressable } from "react-native";
import { StyledButtonParams } from "types/ui.types";

const StyledButton = ({ title, onPress, extraClass }: StyledButtonParams) => {
  return (
    <Pressable
      className={`w-full bg-blue-400 px-5 py-5 rounded-xl flex items-center justify-center active:bg-blue-500 transition-all ease-in-out duration-200  ${extraClass}`}
      onPress={() => onPress()}
    >
      <Text className="text-xl text-white ">{title}</Text>
    </Pressable>
  );
};

export default StyledButton;
