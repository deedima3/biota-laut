import { QueryClientProvider } from "@tanstack/react-query";
import { Slot } from "expo-router";
import React from "react";
import { queryClient } from "utils/query/query";

const AppLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
};

export default AppLayout;
