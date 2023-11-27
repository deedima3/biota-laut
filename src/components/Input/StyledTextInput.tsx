import React from "react";
import { Controller, useController } from "react-hook-form";
import { TextInput, View, Text } from "react-native";
import type { InputParams } from "types/ui.types";
import FormLabel from "./FormLabel";
import FormError from "./FormError";

const StyledTextInput = ({
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

  return (
    <View className="w-full flex flex-col items-start">
      <FormLabel label={label} name={name} />

      <TextInput
        className={`mt-2 w-full border-[1px] border-gray-500 rounded-xl px-5 py-2 ${disabled ? "bg-gray-200" : ""
          }`}
        placeholder={placeholder}
        editable={!disabled}
        onBlur={field.onBlur}
        onChangeText={value => field.onChange(value)}
        value={field.value}
      />
      <FormError errors={errors} name={name} />
    </View>
  );
};

export default StyledTextInput;
