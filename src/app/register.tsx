import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "api/auth";
import StyledButton from "components/Button/StyledButton";
import StyledPasswordInput from "components/Input/StyledPasswordInput";
import StyledTextInput from "components/Input/StyledTextInput";
import LinkText from "components/Link/LinkText";
import LoginTitle from "components/Title/LoginTitle";
import { loginSchema, registerSchema } from "constant/schema";
import { useFormMutation } from "hooks/useMutation";
import { View } from "react-native";
import { router } from 'expo-router';
import PaddingLayout from "components/Layout/PaddingLayout";

export default function Page() {
  const {
    form: { errors, control },
    submitData
  } = useFormMutation({
    formApi: registerUser,
    formSchema: registerSchema,
    dataName: "Register User",
    onSuccess: () => {
      router.replace('/');
    }
  });
  return (
<PaddingLayout>
<View className="flex flex-col mt-8 justify-between">
      <View className="flex flex-col">
        <LoginTitle title="Belum punya akun?" subtitle="Buat akun baru" />
        <View className="flex flex-col w-full mt-5">
          <StyledTextInput
            control={control}
            label="Username"
            placeholder={"biotalaut333"}
            name={"username"}
            errors={errors}
          />
          <StyledTextInput
            control={control}
            label="Nama"
            placeholder={"Crustacean"}
            name={"name"}
            errors={errors}
          />
          <StyledTextInput
            control={control}
            label="Email"
            placeholder={"biotalaut@gmail.com"}
            name={"email"}
            errors={errors}
          />
          <StyledPasswordInput
            control={control}
            label="Password"
            placeholder={"Password"}
            name={"password"}
            errors={errors}
          />
          <StyledPasswordInput
            control={control}
            label="Konfirmasi Password"
            placeholder={"Konfirmasi Password"}
            name={"passwordConfirm"}
            errors={errors}
          />
        </View>
      </View>
      <StyledButton
        title="Register"
        onPress={() => submitData()}
        extraClass="mt-24"
      />
      <View className="w-full flex flex-row justify-center mt-2">
      <LinkText route="/" text="Belum punya akun?"/>
      </View>
    </View>
</PaddingLayout>
  );
}
