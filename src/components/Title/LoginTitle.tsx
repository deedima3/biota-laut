import React from "react";
import { View, Text } from "react-native";

type LoginTitleParams = {
  title: string;
  subtitle: string;
};

const LoginTitle = ({ title, subtitle }: LoginTitleParams) => {
  return (
    <View className="flex flex-col">
      <Text className="text-4xl font-bold">{title}</Text>
      <Text className="text-base">{subtitle}</Text>
    </View>
  );
};

export default LoginTitle;
