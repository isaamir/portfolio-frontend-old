/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Aamir",
  title: "Hi all, I'm Aamir",
  subTitle: emoji(
    "A passionate Frontend Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Next.js / GraphQL and some other cool libraries and frameworks."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  resumeLink: "https://drive.google.com/file/d/13V3fD7yrIALcg4WcAf2tIyzc6x72a3DI/view", 
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/isaamir",
  linkedin: "https://www.linkedin.com/in/aamir-mushtaq-24b522149",
  gmail: "aamirmushtaqengr@gmail.com",
  gitlab: "https://github.com/isaamir",
  stackoverflow: "https://stackoverflow.com/users/12451800/aamir-mushtaq",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Frontend DEVELOPER WHO WANTS TO EXPLORE WEB DEVELOPMENT AND WEB3 TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ Develop highly interactive pixcel perfect Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Web3 and Smart Contract integrations on frontend"
    ),
    emoji(
      "⚡ Work on De-Fi systems and exchanges"
    ),
    emoji(
      "⚡ GraphQL and RESTful APIs integrations"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-brands fa-vuejs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-brands fa-github"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-brands fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Comsats University",
      logo: require("./assets/images/comsats-logo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "September 2017 - Janurary 2021",
      desc: "Participated in projects releted to web development, blockchain and web3",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Fazaia Degree College",
      logo: require("./assets/images/fazaia-logo.png"),
      subHeader: "Major in compoter science descipline",
      duration: "March 2016 - March 2017",
      desc: "Ranked top 10% in the program. Took courses about Programming Basics, Software Engineering, Web Development, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Problem Solving Skills",
      progressPercentage: "85%"
    },
    {
      Stack: "Backend Integrations",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Engineer",
      company: "Ideofuzion",
      companylogo: require("./assets/images/ideofuzion-logo.png"),
      date: "Sep 2021 – Present",
      desc: "Ideofuzion is a leading blockchain company where I work as a Frontend developer and a web3 and smart contract integrations developer.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Frontend Enginner",
      company: "Ropstam",
      companylogo: require("./assets/images/ropstam-logo.jpeg"),
      date: "Mar 2021 – August 2021",
      desc: "Ropstam is a multinational company, providing it's services in Pakistan and Canada, I had been working there as a Frontend Developer mainly in React.js and Vue.js."
    },
    {
      role: "Software Engineer Intern",
      company: "Flex Lab",
      companylogo: require("./assets/images/flex-lab-logo.png"),
      date: "Jan 2020 – Jan 2021",
      desc: "Flex Lab is a growing startup where I was trained as a Software Engineer exploring both frontend and backend technologies and some other cool libraries and frameworks."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/souqNft-logo.svg"),
      projectName: "Souq Nft",
      projectDesc: "Souq Nft is an ethical Nft Marketplace where user can collect, create and sell nfts",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://souq.mrhb.network/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/souqNft-logo.svg"),
      projectName: "Souq Nft Admin Pannel",
      projectDesc: "Souq Nft Admin Pannel for viewing users, nfts, categories, tokens in order to approve and reject them.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://souq-admin.netlify.app/"
        }
      ]
    }
    // {
    //   image: require("./assets/images/maxi-shop-logo.png"),
    //   projectName: "Maxi Shop",
    //   projectDesc: "Maxi Shop is a DApp and an e-commerce store where user can buy products with crypto.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://maxi.shop/"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/AtlasDEx-logo.svg"),
    //   projectName: "Atlas Dex",
    //   projectDesc: "Atlax Dex is a cross chain swap and a decentralized exchange where you can swap currencies.",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "https://atlasdex.finance/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3075160744",
  email_address: "aamirmushtaqengr@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
