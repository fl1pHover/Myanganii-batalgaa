import IconBundle from "@/components/ui/IconBundle";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "./icons";
import { Strings } from "./string";

export const phone = "(+976) 0000-0000";
export const logo = "/img/logo.png";
export const bg = "/img/hero-bg.jpg";
export const bg_footer = "/img/hero-bg.jpg";

export const navigation = [
  {
    id: "0",
    title: "Нүүр",
    url: "/",
  },
  {
    id: "1",
    title: "Бидний тухай",
    url: "/about",
  },
  {
    id: "2",
    title: "Төслүүд",
    url: "/project",
  },
  {
    id: "3",
    title: "Холбоо барих",
    url: "/contact",
  },
  // {
  //   id: "4",
  //   title: "404",
  //   url: "/404",
  // },
];

export const project = [
  {
    title: "Бидний үйлчилгээ",
    image: "hero-bg.jpg",
    description: "Барилга угсралт\nБарилгын дотор, гадна засал\nЦахилгаан холбоо, дохиолол\nГадна ногоон байгууламж, зүлэгжүүлэлт, тохижилт\nЗүлэгний үрийн худалдаа\nХог ургамал, шарилж устгалын бодисын худалдаа"
  },
  {
    title: "АЛСЫН ХАРАА",
    image: "hero-bg.jpg",
    description:
      "Үйлчлүүлэгчийн итгэлийг хүлээсэн, салбартаа манлайлагч мэргэжлийн цогц үйлчилгээ бүхий итгэл даагч, хариуцлагатай байгууллага. ТАНЫ ИТГЭЛ, БИДНИЙ ЗҮТГЭЛ",
  },
  {
    title: "ЭРХЭМ ЗОРИЛГО",
    image: "hero-bg.jpg",
    description:
      "БАЙГАЛЬ ОРЧИНД ЭЭЛТЭЙ, ДЭВШИЛТЭТ ТЕХНИК ТЕХНОЛОГИЙГ АШИГЛАн ЭХ ОРНЫ БОЛОН ОЛОН УЛСЫН СТАНДАРТ ХАНГАХ. ",
  },
  {
    title: "ҮНЭТ ЗҮЙЛС",
    image: "hero-bg.jpg",
    description:
      "Хөдөлмөрийн аюулгүй байдал, эрүүл ахуй НЭГДҮГЭЭРТ\nАЮУЛГҮЙ орчинд ажиллах ЭРҮҮЛ ажилтан\nХүний эрүүл, аюулгүй орчинг бий болгох",
  },
];

export const achievements = [
  {
    id: 0,
    count: 258,
    title: Strings.projects,
  },
  {
    id: 1,
    count: 143,
    title: Strings.client,
  },
  {
    id: 2,
    count: 2,
    title: Strings.certificate,
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
    title: "Хаяг",
    links: [
      {
        info: "3561 Aaron Smith Drive, Columbia",
      },
      {
        info: "Pennsylvania, USA 17512",
      },
      {
        info: "admin@myanganiibatalgaa.mn",
      },
    ],
  },
  {
    title: "Бусад холбоосууд",
    links: [
      {
        info: "Нөхцөл",
      },
      {
        info: "Нууцлалын бодлого",
      },
      {
        info: "Тусламж",
      },
      // {
      //   info: "Contact",
      // },
      {
        info: "FAQ",
      },
    ],
  },
  {
    title: "Компани",
    links: [
      {
        info: "Бидний тухай",
        link: "/about",
      },
      {
        info: "Төслүүд",
        link: "/portfolio",
      },
      {
        info: "Холбоо барих",
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
