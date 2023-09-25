import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> & {
  children?: ReactNode,
  onClick?: () => void,
  isLoading?: boolean
}

export default function Button (props: ButtonProps) {
  const {children, isLoading, ...restProps} = props;

  return (
    <button
      {...restProps}
      className="btn bg-[#f8ff23] text-black font-mono hover:bg-[#92944f]"
    >
      {children}
    </button>
  )
}