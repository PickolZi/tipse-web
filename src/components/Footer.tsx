import Image from "next/image";
import { ContentContainer } from "./ContentContainer";

export const Footer = () => {
  return (
    <div className="h-[10rem] md:h-[8rem] bg-background2 ">
      <ContentContainer className="flex flex-row justify-between px-[1rem]">
        <div className="flex flex-row items-center">
          <a href="/">
            <Image
              src="/logos/TIPSE-logo-light-transparent.png"
              alt="Technical Interview Preparation for Software Engineers (TIPSE) Logo"
              width={128}
              height={128}
              className="float"
            />
          </a>
          {/* <span>Technical Interview Preparation for Software Engineers</span> */}
        </div>

        <div className="flex flex-row gap-[4rem]">
          <ul className="flex flex-col justify-center">
            <a href="/">
              <li className="float link">Home</li>
            </a>
            <a href="/topics">
              <li className="float link">Topics</li>
            </a>
            <a href="/events">
              <li className="float link">Events</li>
            </a>
            <a href="/contact-us">
              <li className="float link">Contact Us</li>
            </a>
          </ul>
          <ul className="flex flex-col justify-center">
            <a href="https://www.discord.gg" target="_blank">
              <li className="float link">Discord</li>
            </a>
            <a
              href="https://www.linkedin.com/in/tipse-calstatela/"
              target="_blank"
            >
              <li className="float link">LinkedIn</li>
            </a>
            <a
              href="https://www.instagram.com/tipse.calstatela"
              target="_blank"
            >
              <li className="float link">Instagram</li>
            </a>
          </ul>
        </div>
      </ContentContainer>
    </div>
  );
};
