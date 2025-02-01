import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  clickHandler?: () => void;
}

export default function Button({ children, clickHandler }: ButtonProps) {
  return (
    <button className="button" onClick={clickHandler}>
      {children}
    </button>
  );
}
