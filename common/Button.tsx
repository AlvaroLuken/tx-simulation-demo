import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> & {
  children?: ReactNode,
  onClick?: () => void,
  isLoading?: boolean,
  classNames?:string
}

export default function Button (props: ButtonProps) {
  const {children, isLoading,classNames, ...restProps} = props;

  return (
    <button
      {...restProps}
      className={`btn font-mono ${classNames}`}
    >
      {children}
    </button>
  )
}