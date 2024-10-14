import { useForm } from "formx-test";

export const DisplayValues = () => {
  const { formValues } = useForm();
  return (
    <div className="flex justify-center items-center text-lg">
      <ul className="text-left">
        {Object.keys(formValues).map((key) => {
          return (
            <li className="flex gap-3">
              <span>{key}</span>
              <span> : </span>
              <span>{formValues[key] || `""`}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
