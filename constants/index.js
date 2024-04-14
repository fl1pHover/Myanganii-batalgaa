import IconBundle from "@/components/ui/IconBundle";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "./icons";

export const phone = "(+437) 800-2078";
export const logo = "./img/logo.png";
export const bg = "./img/hero-bg.jpg";
export const bg_footer = "./img/hero-bg.jpg";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About Us",
    url: "/about",
  },
  {
    id: "2",
    title: "Projects",
    url: "/project",
  },
  {
    id: "3",
    title: "Contact",
    url: "/contact",
  },
  {
    id: "4",
    title: "404",
    url: "/404",
  },
];

export const project = [
  {
    id: 0,
    title: "Best Home Design",
    image: bg,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas neque explicabo blanditiis minus eius excepturi non consequatur, nobis enim ipsa itaque placeat, hic doloribus quia tempora tempore aspernatur accusamus!",
  },
  {
    id: 0,
    title: "Best Home Design",
    image: bg,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas neque explicabo blanditiis minus eius excepturi non consequatur, nobis enim ipsa itaque placeat, hic doloribus quia tempora tempore aspernatur accusamus!",
  },
  {
    id: 0,
    title: "Best Home Design",
    image: bg,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas neque explicabo blanditiis minus eius excepturi non consequatur, nobis enim ipsa itaque placeat, hic doloribus quia tempora tempore aspernatur accusamus!",
  },
  {
    id: 0,
    title: "Best Home Design",
    image: bg,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptas neque explicabo blanditiis minus eius excepturi non consequatur, nobis enim ipsa itaque placeat, hic doloribus quia tempora tempore aspernatur accusamus!",
  },
];

export const achievements = [
  {
    id: 0,
    count: 258,
    title: "Projects",
  },
  {
    id: 1,
    count: 143,
    title: "Clients",
  },
  {
    id: 2,
    count: 19,
    title: "Awards",
  },
];

export const projects = [
  {
    id: 0,
    url: "",
    title: "Beauty Residence Design",
    image: bg,
  },
  {
    id: 1,
    url: "",
    title: "Beauty Residence Design",
    image: bg,
  },
  {
    id: 2,
    url: "",
    title: "Beauty Residence Design",
    image: bg,
  },
  {
    id: 3,
    url: "",
    title: "Beauty Residence Design",
    image: bg,
  },
  {
    id: 4,
    url: "",
    title: "Beauty Residence Design",
    image: bg,
  },
  {
    id: 5,
    url: "",
    title: "Beauty Residence Design",
    image: bg,
  },
];

export const sponsors = [
  {
    id: 1,
    name: "Sponsor1",
    image:
      "https://demo.xstheme.com/lacasa/wp-content/themes/lacasa/assets/images/partners/partner1.png",
  },
  {
    id: 2,
    name: "Sponsor1",
    image:
      "https://demo.xstheme.com/lacasa/wp-content/themes/lacasa/assets/images/partners/partner2.png",
  },
  {
    id: 3,
    name: "Sponsor1",
    image:
      "https://demo.xstheme.com/lacasa/wp-content/themes/lacasa/assets/images/partners/partner3.png",
  },
  {
    id: 4,
    name: "Sponsor1",
    image:
      "https://demo.xstheme.com/lacasa/wp-content/themes/lacasa/assets/images/partners/partner4.png",
  },
  {
    id: 5,
    name: "Sponsor1",
    image:
      "https://demo.xstheme.com/lacasa/wp-content/themes/lacasa/assets/images/partners/partner5.png",
  },
];

export const footerData = [
  {
    title: "Quick Contact",
    links: [
      {
        info: "3561 Aaron Smith Drive, Columbia",
      },
      {
        info: "Pennsylvania, USA 17512",
      },
      {
        info: "info@sitename.com",
      },
    ],
  },
  {
    title: "Useful Link",
    links: [
      {
        info: "TERMS & CONDITION",
      },
      {
        info: "PRIVACY POLICY",
      },
      {
        info: "HELP & CONTACT",
      },
      {
        info: "Contact",
      },
      {
        info: "FAQ",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        info: "About us",
        link: "/about",
      },
      {
        info: "Portfolios",
        link: "/portfolio",
      },
      {
        info: "Contact",
        link: "/contact",
      },
    ],
  },
];

export const socials = [
  {
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/",
  },
  {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com//",
  },
  {
    icon: <TwitterIcon />,
    url: "https://www.twitter.com/",
  },
  {
    icon: <GoogleIcon />,
    url: "https://www.google.com/",
  },
];

export const contactData = [
  {
    id: 1,
    icon: <PhoneIcon />,
    title: "Direct Call",
    info: "+1 347 800 2078 +1 347 800 3562 ",
  },
  {
    id: 2,
    icon: <MailIcon />,
    title: "Get In Touch",
    info: "hello@sitename.com \n www.sitename.com",
    additional: <IconBundle />,
  },
];
