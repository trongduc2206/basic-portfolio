import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Duc Vu",
  title: "Hi, I'm Duc Vu",
  description:
    "I am a Master student in Computer Science at Aalto University with about two-year experience as a software developer. I am always eager to learn new technologies and improve my skills to deliver value to customers as well as companies.",
  resumeLink: "https://drive.google.com/file/d/1k100lBnmoIjPFg7KEmbIBwJ79Nou_Q45/view?usp=sharing",
};

export const openSource = {
  githubUserName: "trongduc2206",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:trongduc22062000@gmail.com",
  linkedin: "https://www.linkedin.com/in/duc-vu-trong-584b2b291/",
  github: "https://github.com/trongduc2206",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive web application using React"),
        emoji("⚡ Building RESTful APIs in Java Spring boot Framework"),
        emoji("⚡ Deploying applications using Docker and Kubernetes"),
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "devicon:typescript",
        },
        {
          skillName: "Java",
          iconifyTag: "devicon:java",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Angular",
          iconifyTag: "devicon:angular",
        },
        {
          skillName: "TailwindCSS",
          iconifyTag: "devicon:tailwindcss",
        },
        {
          skillName: "Spring boot",
          iconifyTag: "bxl:spring-boot",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          iconifyTag: "devicon:kubernetes"
        }
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Aalto University",
    subHeader: "Master of Science in Computer Science",
    duration: "September 2023 - May 2025",
    desc: "",
    grade: "Current GPA: 5.0/5.0",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Hanoi University of Science Technology",
    subHeader: "Bachelor of Science in Information Technology",
    duration: "September 2018 - September 2022",
    desc: "",
    grade: "GPA: 3.71/4.0",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Engineering",
    company: "Viettel",
    link: "https://viettel.com.vn/en",
    companyLogo: "/img/icons/common/viettel_logo.jpg",
    date: "July 2021 - July 2022",
    desc: "Developed frontend applications for AdTech system with React and Angular. Developed REST APIs with Java Spring boot. Deployed application with Docker and Kubernetes",
  },
  {
    role: "Web Developer",
    company: "TrueMoney Vietnam",
    link: "https://truemoney.com.vn/",
    companyLogo: "/img/icons/common/truemoney_logo.png",
    date: "July 2020 - June 2021",
    desc: "Developed frontend application for internal portal with ReactJs.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "otaniemi-subleasing",
    desc: "A web application where people not only can find subleased room which fit their needs but also post and promote rooms for subleasing.",
    link: "https://otasublease.netlify.app/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Duc Vu Trong",
  description: greetings.description,
  author: "Duc Vu Trong",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
  ],
};
