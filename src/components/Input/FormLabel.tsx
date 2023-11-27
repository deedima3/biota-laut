import React from "react";
import { Text } from "react-native";

type FormLabel = {
  label: string;
  name: string;
};

const FormLabel = ({ label, name }: FormLabel) => {
  return (
    <Text
      aria-label={`Label for ${label}`}
      nativeID={name}
      className="text-xl text-black"
    >
      {label}
    </Text>
  );
};

export default FormLabel;
