import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z, type ZodSchema } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from "react";
import Toast from 'react-native-toast-message';
import { translate } from "utils/utils/utils";

type useFormMutationParams<T> = {
  formApi: (addData: any) => any;
  formSchema: ZodSchema,
  dataName: string;
  onSuccess?: (data?: T) => void;
  onError?: (err: Error | ApiError) => void;
  refetch?: () => void;
}

export function useFormMutation<T>({
  formApi,
  formSchema,
  dataName,
  onSuccess,
  onError,
  refetch,
}: useFormMutationParams<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    getValues,
    watch,
    setError,
    trigger
  } = useForm({ 
    mode: "onBlur",
    resolver: zodResolver(formSchema) });

  const { data, mutate, isLoading } = useMutation<z.infer<typeof formSchema>>({
    mutationFn: (addData) => {
      return formApi(addData);
    },
    onSuccess: (data: T) => {
      Toast.show({
        type: "success",
        text1: `${dataName} berhasil`,
        position: "bottom",
      })
      if (refetch) {
        refetch();
      }
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: (err: Error | ApiError) => {
      if (err && err.response) {
        console.log(err)
        Toast.show({
          type: "error",
          text1: `${dataName} gagal`,
          text2: translate(err.response.code.toString()),
          position: "bottom",
        })
        Object.keys(err.response.data).map((value : string) => {
          setError(value, err.response.data[value])
        })
      }
      if (onError) {
        onError(err);
      }
    },
  });

  const pushData: SubmitHandler<any> = (data) => {
    mutate(data);
  };

  const submitData = () => {
    if(Object.keys(errors).length === 0){
      mutate(watch() as any)
    }
  }

  // useEffect(() => {
  //   console.log("Errors", errors)
  // }, [errors])

  // useEffect(() => {
  //   console.log("Data", watch())
  // }, [watch()])

  return {
    form: {
      register,
      handleSubmit,
      errors,
      setValue,
      control,
      getValues,
      watch,
    },
    mutation: { data, pushData, mutate, isLoading },
    submitData
  } as const;
}
