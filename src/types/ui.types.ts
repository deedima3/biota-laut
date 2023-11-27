import type { Control, FieldErrors } from "react-hook-form";

type InputParams = {
  label: string;
  disabled?: boolean;
  placeholder?: string;
  name: string;
  control: Control;
  errors : FieldErrors
};

type IconParams = {
  currentColor? : string;
  extraClass? : string;
}

type StyledButtonParams = {
  title : string;
  onPress : () => void;
  extraClass? : string
}

export { InputParams, IconParams, StyledButtonParams};
