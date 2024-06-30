interface InputProps {
  type: string;
  placeholder: string;
  text: string;
  ref: any;
}

const Input = (props: InputProps) => {
  return (
    <div className="py-2 w-full">
      <h3>{props.text}</h3>
      <input
        ref={props.ref}
        className="w-full pl-2 py-1"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
