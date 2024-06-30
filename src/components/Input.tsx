interface InputProps {
  type: string;
  placeholder: string;
  text: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const Input = ({ type, placeholder, text, inputRef }: InputProps) => {
  return (
    <div className="py-2 w-full">
      <h3>{text}</h3>
      <input
        ref={inputRef}
        className="w-full pl-2 py-1 shadow"
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
