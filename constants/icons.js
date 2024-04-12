import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBookmark } from "react-icons/fa";
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

export { Hamburger, Bookmark };
