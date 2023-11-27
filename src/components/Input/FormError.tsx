import React from "react";
import { type FieldErrors } from "react-hook-form";
import { Text } from "react-native";

type FormError = {
  name: string;
  errors: FieldErrors;
};

const FormError = ({ name, errors }: FormError) => {
  return (
    <>
      {errors && (
        <Text className="text-sm text-red-500">
          {errors[name]?.message as string}
        </Text>
      )}
    </>
  );
};

export default FormError;
