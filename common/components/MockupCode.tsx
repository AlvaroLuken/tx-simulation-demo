import { DEFAULT_DATA_DISPLAY } from "@common/utils/constants";
import { ReactNode} from "react";

const MockupCode = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mockup-code w-full h-full rounded-xl overflow-auto">
      {children}
    </div>
  )
}

const MockupCodeComponent = ({ children, center = false }: { children: ReactNode, center?: boolean }) => {
  if (center) {
    return (
      <MockupCode>
        <div className="w-full h-full items-center justify-center flex flex-col">
          {children}
        </div>
      </MockupCode>
    )
  }
  return (
    <MockupCode>
      <pre>
        {children}
      </pre>
    </MockupCode>
  )
}

export const DataDisplay = ({text, loading}: {text: string | null, loading?: boolean}) => {
  if (loading) {
    return (
      <MockupCodeComponent center>
        <span className="loading loading-ring loading-lg"></span>
      </MockupCodeComponent>
    )
  }
  return (
    <MockupCodeComponent>
      {text || DEFAULT_DATA_DISPLAY}
    </MockupCodeComponent>
  )
}