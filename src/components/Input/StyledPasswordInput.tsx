import React, { useState } from "react";
import { Controller, useController } from "react-hook-form";
import { TextInput, View, Button, Pressable } from "react-native";
import type { InputParams } from "types/ui.types";
import FormLabel from "./FormLabel";
import FormError from "./FormError";
import { styled } from "nativewind";
import Eye from "components/Icons/Eye";
import EyeSlash from "components/Icons/EyeSlash";

const StyledPasswordInput = ({
  label,
  disabled = false,
  placeholder = "",
  name,
  control,
  errors,
}: InputParams) => {
  const { field } = useController({
    name,
    control,
  });

  const [isSecureText, setIsSecureText] = useState(true);

  return (
    <View className="flex flex-col items-start justify-center w-full">
      <FormLabel label={label} name={name} />
      <View
        className={`relative flex flex-row items-center w-full border-[1px] border-gray-500 rounded-xl px-2 py-1 ${disabled ? "bg-gray-200" : ""
          }`}
      >
          <TextInput
              className={`w-full px-2 py-1`}
              placeholder={placeholder}
              editable={!disabled}
              onBlur={field.onBlur}
              onChangeText={value => field.onChange(value)}
              value={field.value}
              secureTextEntry={isSecureText}
            />
        <Pressable
          className="w-5 absolute right-2 h-full flex items-center justify-center"
          onPress={() => setIsSecureText(!isSecureText)}
        >
          {isSecureText ? <Eye /> : <EyeSlash />}
        </Pressable>
      </View>
      <FormError errors={errors} name={name} />
    </View>
  );
};

export default StyledPasswordInput;
