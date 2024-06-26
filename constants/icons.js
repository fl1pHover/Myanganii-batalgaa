import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBookmark } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IoArrowUpOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import mergeNames from "@/util/mergeNames";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import { SiMaildotru } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";

const Hamburger = (props) => (
  <span className={props.className}>
    <GiHamburgerMenu />
  </span>
);

const Bookmark = (props) => (
  <span className={props.className}>
    <FaRegBookmark />
  </span>
);

const Close = (props) => (
  <span className={props.className}>
    <MdClose />
  </span>
);

const UpArrow = (props) => (
  <span className={props.className}>
    <IoArrowUpOutline />
  </span>
);

const RightArrow = (props) => (
  <span className={props.className}>
    <GoArrowRight />
  </span>
);

const FacebookIcon = (props) => (
  <span className={props.className}>
    <FaFacebook />
  </span>
);

const InstagramIcon = (props) => (
  <span className={props.className}>
    <RiInstagramFill />
  </span>
);

const TwitterIcon = (props) => (
  <span className={props.className}>
    <FaTwitter />
  </span>
);

const GoogleIcon = (props) => (
  <span className={props.className}>
    <FaGoogle />
  </span>
);

const PhoneIcon = (props) => (
  <span className={props.className}>
    <MdLocalPhone />
  </span>
);

const MailIcon = (props) => (
  <span className={props.className}>
    <IoMdMailUnread />
  </span>
);

const AtIcon = (props) => (
  <span className={props.className}>
    <SiMaildotru />
  </span>
);

const UserIcon = (props) => (
  <span className={props.className}>
    <FaRegUser />
  </span>
);

export {
  Hamburger,
  Bookmark,
  Close,
  UpArrow,
  RightArrow,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  GoogleIcon,
  PhoneIcon,
  MailIcon,
  AtIcon,
  UserIcon,
};
