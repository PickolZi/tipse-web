import Image from "next/image";
import { ContentContainer } from "./ContentContainer";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="h-[10rem] md:h-[8rem] bg-background2 ">
      <ContentContainer className="flex flex-row justify-between px-[1rem]">
        <div className="flex flex-row items-center">
          <Link href="/">
            <Image
              src="/logos/TIPSE-logo-light-transparent.png"
              alt="Technical Interview Preparation for Software Engineers (TIPSE) Logo"
              width={128}
              height={128}
              className="float"
            />
          </Link>
          {/* <span>Technical Interview Preparation for Software Engineers</span> */}
        </div>

        <div className="flex flex-row gap-[4rem]">
          <ul className="flex flex-col justify-center">
            <Link href="/">
              <li className="float link">Home</li>
            </Link>
            <Link href="/topics">
              <li className="float link">Topics</li>
            </Link>
            <Link href="/events">
              <li className="float link">Events</li>
            </Link>
            <Link href="/contact-us">
              <li className="float link">Contact Us</li>
            </Link>
          </ul>
          <ul className="flex flex-col justify-center">
            <Link href="https://www.discord.gg" target="_blank">
              <li className="float link">Discord</li>
            </Link>
            <Link
              href="https://www.linkedin.com/in/tipse-calstatela/"
              target="_blank"
            >
              <li className="float link">LinkedIn</li>
            </Link>
            <Link
              href="https://www.instagram.com/tipse.calstatela"
              target="_blank"
            >
              <li className="float link">Instagram</li>
            </Link>
          </ul>
        </div>
      </ContentContainer>
    </div>
  );
};
