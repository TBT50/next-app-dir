interface ButtonProps {
  incrementCounter: () => void;
}

const Button = ({ incrementCounter }: ButtonProps) => {
  return (
    <button type="button" onClick={incrementCounter}>
      Increment the counter
    </button>
  );
};

export default Button;
