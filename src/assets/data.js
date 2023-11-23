import { nanoid } from "nanoid";
import Image from "./image1.jpg";
import DonateImage from "./donateDevices.jfif";
import ShareResImage from "./shareRes.jfif";
import PromoteRecyclingImage from "./promoteRecycling.jfif";
import RaiseAwarenessImage from "./raiseAwareness.jfif";
import MyoHtetSan from "./myohtetsan.jpeg";
import NawLinnLinnThantZin from "./nawlinnlinnthantzin.jpg";

// CALL TO ACTION CARDS DATA
export const callToActionCards = [
  {
    id: nanoid(),
    title: "Donate Used Devices",
    text: "Consider donating your used but functional smartphones, laptops, or tablets to organizations that distribute technology to underserved communities.",
    learnMoreLink:
      "https://chat.openai.com/share/c30a9eb2-b711-4e9c-b9ed-99f112b4a562",
    image: DonateImage,
  },
  {
    id: nanoid(),
    title: "Share Educational Resources",
    text: "Share educational resources and information about digital tools with those who may not have easy access to such information.",
    learnMoreLink:
      "https://chat.openai.com/share/c30a9eb2-b711-4e9c-b9ed-99f112b4a562",
    image: ShareResImage,
  },
  {
    id: nanoid(),
    title: "Promote Device Recycling",
    text: "Encourage responsible disposal of electronic devices and support programs that recycle and repurpose old devices for redistribution to those in need.",
    learnMoreLink:
      "https://chat.openai.com/share/c30a9eb2-b711-4e9c-b9ed-99f112b4a562",
    image: PromoteRecyclingImage,
  },
  {
    id: nanoid(),
    title: "Educate and Raise Awareness",
    text: "Raise awareness about the importance of digital inclusion and the impact of the digital divide on various aspects of life, including education and employment.",
    learnMoreLink:
      "https://chat.openai.com/share/c30a9eb2-b711-4e9c-b9ed-99f112b4a562",
    image: RaiseAwarenessImage,
  },
];

// ABOUT US PHOTOS
export const aboutUsPhotos = [
  { id: nanoid(), image: MyoHtetSan },
  { id: nanoid(), image: NawLinnLinnThantZin },
  { id: nanoid(), image: Image },
];

//ABOUT US PEOPLE
export const people = [
  {
    id: nanoid(),
    name: "Myo Htet San",
    about:
      "Hey there! Nice 2 meet u. I am the guy in black shirt. You'd be able to see me if u r on laptop or some large screen device. I am a junior web developer.",
    websiteLink: "https://myohtetsan.netlify.app/",
  },
  {
    id: nanoid(),
    name: "Naw Linn Linn Thant Zin",
    about: "Hey there! If u r on laptop, u'll see me sleeping. Me? I sleep.",
  },
];

// DIGITAL INEQUALITY
export const digitalInequality =
  "Digital inequality refers to disparities in access to, use of, or proficiency with digital technologies among individuals, communities, or societies. This inequality can manifest in various forms, including differences in access to the internet, availability of digital devices, and levels of digital literacy. Addressing digital inequality is crucial for promoting equal opportunities in education, employment, and participation in the modern digital society.";

// DIGITAL INEQUALITY IN THAILAND
export const digitalInequalityThailand =
  "17 students share 1 computer in the school. Only 16 percent of households have access to the computer. And the number of computer using population continues to decline. A large proportion of students do not have meaningful computing skills. 54% of 16 -19 years population did not use computer for creating presentations";

// LEARN MORE ABOUT THAILAND'S DIGITAL INEQUALITY LINK
export const learnMoreThaiDigitalDivideLink =
  "https://thailand.un.org/en/download/75624/140320#:~:text=Only%2016%20percent%20of%20households,using%20population%20continues%20to%20decline.&text=students%20do%20not%20have%20meaningful,use%20computer%20for%20creating%20presentations.";

// SOLUTIONS TO THAILAND'S DIGITAL DIVIDE
export const solutions = {
  solution1:
    "the Thailand Management Association (TMA), a non-profit organization, has established a new initiative that emphasizes the importance of digital transformation in helping Thailand's recovery. With almost 50 years of experience, TMA has long focused on promoting excellence in leadership and management integrity and competency. With their extensive knowledge, they have recognized digital disruption and adoption as a necessary process for enterprises to navigate evolving market landscapes and to help secure a stronger digital future for Thailand and its industries.",
  solution2:
    "The Village Broadband Internet Project, or Net Pracharat (Net for the People), launched in 2017, endeavours to expand the reach high-speed Internet services to every village in the country. High-speed fibre-optic cable networks with free public Wi-Fi hotspots have been installed in 24,700 pilot villages around Thailand.",
  solution3:
    "First Asia-Pacific Digital Ministerial Conference 2022: Shaping Our Common Future was a prime opportunity to discuss the status, challenges and pathways to advance digital transformation and strengthen regional digital cooperation with the ICT and Digital Ministers of the Asia-Pacific region towards building an inclusive digital society and economy.",
};
