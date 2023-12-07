import { QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import React from "react";
import { queryClient } from "utils/query/query";
import Toast from "react-native-toast-message";
import { useLoginValidateData } from "hooks/useLoginValidateData";
import { View } from "moti";
import { PortalProvider, PortalHost } from '@gorhom/portal';

const AppLayout = () => {
 useLoginValidateData()
  return (
    <QueryClientProvider client={queryClient}>
      <Toast />
      <PortalProvider>
      <PortalHost name="RootPortalHost" />
        <View className="w-full h-full bg-white">
          <Slot />
        </View>
     </PortalProvider>
    </QueryClientProvider>
  );
};

export default AppLayout;
