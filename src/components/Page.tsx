import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ContentContainer } from "./ContentContainer";

export const Page = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-[100vh] relative flex flex-col">
      <Navbar />
      <ContentContainer className="flex-grow bg-background">
        <main>{children}</main>
      </ContentContainer>
      <Footer />
    </div>
  );
};
