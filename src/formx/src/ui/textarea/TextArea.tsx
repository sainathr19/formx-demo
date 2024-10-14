import { forwardRef, TextareaHTMLAttributes } from "react";
import { useField } from "../../useFeild";
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  debounce?: number;
}
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, className, debounce, ...props }, ref) => {
    const { onChange } = useField(id, "", [], debounce);
    return (
      <textarea
        ref={ref}
        {...props}
        className={`p-1 rounded-md border border-slate-400 outline-none ${className}`}
        onChange={onChange}
      />
    );
  }
);
export default TextArea;
