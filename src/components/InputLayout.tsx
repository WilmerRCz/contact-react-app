import { FieldValues, Path, UseFormRegister } from "react-hook-form";
interface Props<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type: string;
  setNumber?: boolean;
  defaultValue?: string | number
  register: UseFormRegister<T>
  errorMessage?: string;
}
function InputLayout<T extends FieldValues>({
  label,
  name,
  type,
  setNumber,
  register,
  defaultValue,
  errorMessage,
}: Props<T>) {
  return (
    <div className="col-span-1">
      <label htmlFor={name} className="text-black dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        id={name}
        className={"rounded-md w-full px-1"}
        defaultValue={defaultValue}
        {...register(name, { valueAsNumber: setNumber })}
      />
      {errorMessage && (
        <span className="text-xs text-red-500 mt-1">{errorMessage}</span>
      )}
    </div>
  );
}

export default InputLayout;
