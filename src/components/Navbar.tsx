import Image from "next/image";
import { ContentContainer } from "./ContentContainer";

export const Navbar = () => {
  return (
    <div className="sticky top-0 bg-background2 min-h-[4rem] md:min-h-[5rem] flex">
      <ContentContainer className="flex flex-row justify-between items-center px-[1rem]">
        <a href="/">
          <Image
            src="/logos/TIPSE-logo-light-transparent.png"
            alt="Technical Interview Preparation for Software Engineers (TIPSE) Logo"
            width={64}
            height={64}
            className="float"
          />
        </a>

        <ul className="flex flex-row gap-[1rem]">
          <li className="float link">
            <a href="/">Home</a>
          </li>
          <li className="float link">
            <a href="/topics">Topics</a>
          </li>
          <li className="float link">
            <a href="/events">Events</a>
          </li>
          <li className="float link">
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
      </ContentContainer>
    </div>
  );
};
