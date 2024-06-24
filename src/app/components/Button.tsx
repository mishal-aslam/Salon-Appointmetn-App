// components/Button.tsx
import React, { ReactNode } from "react";

interface ButtonProps {
  type?: "primary" | "secondary";
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "primary",
  children,
  onClick,
  className,
  disabled,
}) => {
  const baseClasses = "px-5 py-3 rounded font-semibold focus:outline-none";
  const typeClasses = {
    primary: "bg-transparent flex text-secondary border border-secondary hover:bg-danger rounded-full ",
    secondary: "bg-secondary text-primary hover:bg-secondaryDark rounded-full ",
  };

  const combinedClasses = `${baseClasses} ${typeClasses[type]} ${className}`;

  return (
    <button
      className={combinedClasses}
      //   onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  className: "",
  disabled: false,
};

export default Button;


{/* <Button type="primary" onClick={() => alert('Primary Button Clicked')}>
      Primary Button
    </Button>
    <Button type="secondary" onClick={() => alert('Secondary Button Clicked')} className="mt-2">
      Secondary Button
    </Button> */}