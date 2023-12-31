import { useMutation } from "@tanstack/react-query";
import { loginUser } from "api/auth";
import StyledButton from "components/Button/StyledButton";
import StyledPasswordInput from "components/Input/StyledPasswordInput";
import StyledTextInput from "components/Input/StyledTextInput";
import PaddingLayout from "components/Layout/PaddingLayout";
import LinkText from "components/Link/LinkText";
import LoginTitle from "components/Title/LoginTitle";
import { loginSchema } from "constant/schema";
import { router } from "expo-router";
import { useFormMutation } from "hooks/useMutation";
import { View } from "react-native";

export default function Page() {
  const {
    form: { errors, control },
    submitData
  } = useFormMutation({
    formApi: loginUser,
    formSchema: loginSchema,
    dataName: "Login User",
    onSuccess: () => {
      router.replace('/dashboard')
    }
  });
  return (
<PaddingLayout>
<View className="flex flex-col mt-8 justify-between">
      <View className="flex flex-col">
        <LoginTitle title="Selamat Datang 🙌" subtitle="Masuk ke akun anda" />
        <View className="flex flex-col w-full mt-5">
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
        </View>
      </View>
      <StyledButton
        title="Masuk"
        onPress={() => submitData()}
        extraClass="mt-24"
      />
      <View className="w-full flex flex-row justify-center mt-2">
      <LinkText route="/register" text="Belum punya akun?"/>
      </View>
    </View>
</PaddingLayout>
  );
}
