import Image from "next/image";
import { ContentContainer } from "./ContentContainer";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="sticky top-0 bg-background2 min-h-[4rem] md:min-h-[5rem] flex">
      <ContentContainer className="flex flex-row justify-between items-center px-[1rem]">
        <Link href="/">
          <Image
            src="/logos/TIPSE-logo-light-transparent.png"
            alt="Technical Interview Preparation for Software Engineers (TIPSE) Logo"
            width={64}
            height={64}
            className="float"
          />
        </Link>

        <ul className="flex flex-row gap-[1rem]">
          <li className="float link">
            <Link href="/">Home</Link>
          </li>
          <li className="float link">
            <Link href="/topics">Topics</Link>
          </li>
          <li className="float link">
            <Link href="/events">Events</Link>
          </li>
          <li className="float link">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </ContentContainer>
    </div>
  );
};
