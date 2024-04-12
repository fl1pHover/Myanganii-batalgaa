import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBookmark } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { IoArrowUpOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import mergeNames from "@/util/mergeNames";

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

export { Hamburger, Bookmark, Close, UpArrow, RightArrow };
