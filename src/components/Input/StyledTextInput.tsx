import React, { useState } from "react";
import { TextInput, View } from "react-native";
import type { InputParams } from "types/ui.types";

const StyledTextInput = ({
  label,
  disabled = false,
  placeholder,
  name,
  control,
}: InputParams) => {
  const [hidden, setHidden] = useState("password");

  const setHidePassword = () => {
    hidden == "password" ? setHidden("text") : setHidden("password");
  };
  return (
    <View className="flex-1 items-center justify-center">
      <TextInput className="" />
    </View>
  );
};

export default StyledTextInput;
