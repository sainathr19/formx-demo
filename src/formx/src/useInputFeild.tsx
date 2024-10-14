import { useEffect } from "react";
import { useForm } from "./FormProvider";

const useInputFeild = (feildId: string, defaultValue: string) => {
  const { registerFeild, formValues } = useForm();
  useEffect(() => {
    registerFeild(feildId, defaultValue);
  }, []);
  return {};
};

export default useInputFeild;
