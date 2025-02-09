import Image from "next/image";
import { ContentContainer } from "./ContentContainer";
import Link from "next/link";
import { FaDiscord, FaHome, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ReactElement } from "react";
import { MdContactPhone, MdEventNote, MdTopic } from "react-icons/md";

const HoverableLinkWithIcon = ({
  text,
  url,
  icon,
  newPage,
}: {
  text: string;
  url: string;
  icon: ReactElement;
  newPage?: boolean;
}) => {
  return (
    <Link href={url} target={newPage ? "_blank" : ""}>
      <div className="flex flex-row float link items-center gap-[0.25rem]">
        {icon}
        <li>{text}</li>
      </div>
    </Link>
  );
};

export const Footer = () => {
  return (
    <div className="bg-background2">
      <ContentContainer className="flex flex-row justify-between px-[1rem]">
        <div>
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

        <div className="flex flex-row gap-[4rem] my-[1rem]">
          {/* Pages Column */}
          <ul className="flex flex-col">
            <HoverableLinkWithIcon
              text="Home"
              url="/"
              icon={<FaHome size={16} />}
            />
            <HoverableLinkWithIcon
              text="Topics"
              url="/topics"
              icon={<MdTopic size={16} />}
            />
            <HoverableLinkWithIcon
              text="Events"
              url="/events"
              icon={<MdEventNote size={16} />}
            />
            <HoverableLinkWithIcon
              text="Contact Us"
              url="/contact-us"
              icon={<MdContactPhone size={16} />}
            />
          </ul>

          {/* Social Media Column */}
          <ul className="flex flex-col">
            <HoverableLinkWithIcon
              text="Discord"
              url="https://www.discord.gg"
              icon={<FaDiscord size={16} />}
              newPage={true}
            />

            <HoverableLinkWithIcon
              text="LinkedIn"
              url="https://www.linkedin.com/in/tipse-calstatela/"
              icon={<FaLinkedin size={16} />}
              newPage={true}
            />

            <HoverableLinkWithIcon
              text="Instagram"
              url="https://www.instagram.com/tipse.calstatela"
              icon={<FaInstagram size={16} />}
              newPage={true}
            />
          </ul>
        </div>
      </ContentContainer>
    </div>
  );
};
