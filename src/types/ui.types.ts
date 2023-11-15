import type { Control } from "react-hook-form";

type InputParams = {
  label: string;
  disabled: boolean;
  placeholder: string;
  name: string;
  control: Control;
};

export { InputParams };
