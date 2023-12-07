import { Portal } from '@gorhom/portal';
import React from "react";
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface DarkenBackgroundProps {
  children: React.ReactNode;
  onClose: () => void
}

const DarkenBackground = ({ children, onClose }: DarkenBackgroundProps) => {
  return (
    <Portal>
       <View className="flex min-h-screen min-w-screen items-center justify-center">
        <TouchableOpacity className="z-7 absolute top-0 min-h-screen w-full bg-black opacity-80" onPress={onClose} />
        <View className="z-12">{children}</View>
      </View>
   </Portal>
  );
};

export default DarkenBackground;
