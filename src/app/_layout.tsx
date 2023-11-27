import { QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import React from "react";
import { queryClient } from "utils/query/query";
import Toast from "react-native-toast-message";
import { useLoginValidateData } from "hooks/useLoginValidateData";
import { View } from "moti";

const AppLayout = () => {
 useLoginValidateData()
  return (
    <QueryClientProvider client={queryClient}>
      <Toast />
        <View className="w-full h-full bg-white">
          <Slot />
        </View>
    </QueryClientProvider>
  );
};

export default AppLayout;
