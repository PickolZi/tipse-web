import { ReactNode } from "react";

export const ContentContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  // Centers the content of the page
  return (
    <div
      className={`w-[100%] lg:w-[1024px] 2xl:w-[1440px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
