// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Souvik's Portfolio",
  description:
    "An individual fueled by passion, constantly driven to contribute to holistic products that foster both sustainable social ecosystems and scalable technical systems, all aimed at generating a meaningful impact.",
  og: {
    title: "Souvik Samanta Portfolio",
    type: "website",
    url: "http://Souviksamanta.com/",
  },
};

//Home Page
const greeting = {
  title: "Souvik Samanta",
  logo_name: "SouvikSamanta",
  nickname: "devil_check",
  subTitle:
    "An individual fueled by passion, constantly driven to contribute to holistic products that foster scalable technical systems, aimed at generating a meaningful impact.",
  resumeLink:
    "https://drive.google.com/file/d/1csVas3liuf7_hktrdfy_LSiPlEQu7WBS/view?usp=sharing",
  portfolio_repository: "https://github.com/Souviksamanta34/Portfolio",
  githubProfile: "https://github.com/Souviksamanta34",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Souviksamanta34",
  // linkedin: "https://www.linkedin.com/in/souviksamanta34/",
  // gmail: "souviksamanta34@gmail.com",
  // gitlab: "https://gitlab.com/souviksamanta34",
  // facebook: "https://www.facebook.com/profile.php?id=100004782946237",
  // twitter: "https://twitter.com/souviksamanta34",
  // instagram: "https://www.instagram.com/souviksamanta34/"

  {
    name: "Github",
    link: "https://github.com/Souviksamanta34",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/souviksamanta34/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@souviksamanta9908/",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:souviksamanta34@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/souviksamanta34",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100004782946237",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/souviksamanta34/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🌍Building responsive React-Redux website front ends.",
        "🌎Developing mobile apps with Flutter, React Native, and Kotlin.",
        "🌏Designing application backends using Node, Express & Flask.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "🌍 Leading creation of scalable ML models for diverse use cases.",
        "🌎 Expertise in Computer Vision and NLP projects.",
        "🌏 Proficient in complex quantitative modeling for real-time forecasting and analysis.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "🌍 Crafting captivating user interfaces for mobile and web apps.",
        "🌎 Tailoring logo designs and creating logos anew.",
        "🌏 Strategizing app functionality flow to enhance user experience.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "🌍 Extensive engagement with various cloud platforms.",
        "🌎 Hosting, managing websites on virtual machines, and integrating databases.",
        "🌏 Cloud deployment of deep learning models for mobile device utilization.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/souviksamanta34/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/souviksamanta34?hr_r=1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/souvik34",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/souviksamanta34",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@souviksamanta34",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/souviksamanta34",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Techno Main Salt Lake",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "tmsl5.png",
      alt_name: "TMSL",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have also done some courses on Data Science and Machine Learning.",
      ],
      website_link: "https://www.ticollege.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Philosophy",
      subtitle: "- Duncan Pritchard",
      logo_path: "edinburgh.png",
      certificate_link:
        "https://drive.google.com/file/d/1210HfwDjG3Gsuf-g3Z5jdom1oPfvuXms/view?usp=sharing",
      alt_name: "University of Edinburgh",
      color_code: "#8C151599",
    },
    {
      title: "Goldman Sachs-FinTech Engineering Virtual Experience",
      subtitle: "- Matthew Chung",
      logo_path: "Goldman-Sachs-Logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1bUEHF5PN1VLz7uat7nM74KwjxhBW8Hj9/view?usp=sharing",
      alt_name: "Goldman Sachs",
      color_code: "#00000099",
    },
    {
      title: "Cloud on GCP",
      subtitle: "- Google Cerification Cloud Security Engineer",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1RNtiACmVFotb7o0EeLeukpHll5EvmQ3-/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Accenture-Developer Virtual Experience Program",
      subtitle: "- Alex Aklson",
      logo_path: "accenture.png",
      certificate_link:
        "https://drive.google.com/file/d/16Z32GIxsyUQrQSgSVh0WAI4hSxejfTrB/view?usp=sharing",
      alt_name: "Accenture",
      color_code: "#1F70C199",
    },
    {
      title: "NDG Linux",
      subtitle: "- Rich Weeks",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1usz4ORyUqAEdX3ZcrOxjvHkdAGz15d6z/view?usp=sharing",
      alt_name: "Cisco",
      color_code: "#D83B0199",
    },
    {
      title: "Computer Vision",
      subtitle: "- Ryan Holbrook",
      logo_path: "kaggle2.png",
      certificate_link:
        "https://drive.google.com/file/d/1fz_QnUmMtgkA2POT_7CCiliUI0kWxHlo/view?usp=sharing",
      alt_name: "Kaggle",
      color_code: "#1F70C199",
    },
    {
      title: "Oracle Foundations Associate",
      subtitle: "- Damien Carey",
      logo_path: "Oracle-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1raT34_9NWz4xJddWOD88IhZz-EpQ7PFn/view?usp=sharing",
      alt_name: "Oracle",
      color_code: "#0C9D5899",
    },
    {
      title: "Cyber security",
      subtitle: "- Laura Quintana",
      logo_path: "cisco.png",
      certificate_link:
        "https://drive.google.com/file/d/1yMP0iS7Rm5AbBl9ybjkdTNp-uL2SVc3v/view?usp=sharing",
      alt_name: "cyber.ai",
      color_code: "#00000099",
    },
    {
      title: "Solutions Architecture Program",
      subtitle: "- Forage",
      logo_path: "aws.png",
      certificate_link:
        "https://drive.google.com/file/d/1wHg5aq7U__HOC_xOFroi1wVFN8fOM81c/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/8eb50b4c-f96a-46fb-ae1d-2831cf765543/badges/2178695",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Programming, Data Structures And Algorithms Using Python",
      subtitle: "- Prof. Madhavan Mukund",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1v0Q_YsXSga3JugiV5rVbgBE7ztppmuzg/view?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/8eb50b4c-f96a-46fb-ae1d-2831cf765543/badges/2186891",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    " I have embarked on internships, steering projects, and hackathons, showcasing my versatility. Proficiency in programming languages that has enabled me to contribute effectively. I am deeply engrossed in a machine learning project on Microsoft Azure, paralleled by my commitment to crafting a Chess App. ",
  header_image_path: "experience.svg",
  sections: [
    // {
    //   title: "Work",
    //   work: true,
    //   experiences: [
    //     {
    //       title: "Associate AI Engineer",
    //       company: "Legato Health Technology",
    //       company_url: "https://legatohealthtech.com/",
    //       logo_path: "legato_logo.png",
    //       duration: "June 2020 - Aug 2021",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //       color: "#0879bf",
    //     },
    //   ],
    //jo
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Engineering Intern",
          company: "Celebal Technologies",
          company_url:
            "https://celebaltech.com/",
          logo_path: "Celebal.jpg",
          duration: "May 2023 - July 2023",
          location: "Work From Home",
          description: 
            " I played a pivotal role in designing and implementing data pipelines, enabling seamless extraction, transformation, and loading of diverse datasets. Collaborating with cross-functional teams, I contributed to database design, ensuring efficient data storage and retrieval for analytical purposes. Through continuous learning and adaptation, I played a role in delivering efficient and reliable data engineering solutions.",
        },
        {
          title: "Python Development Intern",
          company: " CodeClause",
          company_url: "https://codeclause.com/",
          logo_path: "CodeClause.png",
          duration: "June 2023 - Aug 2023",
          location: "Kolkata, India",
          description:
             "I actively coded, tested, and optimized backend functionalities, honing my skills in algorithm design and data manipulation. Collaborating closely with the development team, I contributed to enhancing system performance and participated in troubleshooting to ensure seamless application functionality. Through continuous learning and adaptation, I played a role in delivering efficient and reliable Python-based solutions.",
        },
        {
          title: "Android App Development",
          company: "OASIS INFOBYTE",
          company_url: "https://oasisinfobyte.com/",
          logo_path: "Oasis.jpg",
          duration: "Oct 2023 - Present",
          location: "Kolkata, India",
          description:
                " I collaborated on building innovative mobile applications, gaining hands-on experience in coding, debugging, and enhancing user interfaces. I contributed to the development lifecycle by participating in code reviews and implementing new features, fostering a dynamic and efficient team environment. Through problem-solving and adapting to evolving technologies, I helped create user-friendly and visually appealing Android apps.",
        },
        {
          title: "Digital Marketing Intern",
          company: "IITB",
          company_url: "https://www.iitb.ac.in/",
          logo_path: "IITB.png",
          duration: "Nov 2022 - Jan 2023",
          location: "Work From Home",
          description:
            " I engaged in crafting compelling content and strategizing social media campaigns, amplifying brand presence and engagement. Through data analysis and optimization, I gained insights into audience behavior, aiding in tailoring targeted online initiatives. By collaborating with the marketing team, I actively contributed to increasing online visibility and driving measurable results in a dynamic digital landscape.",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Campus Ambassador",
          company: "IIT Delhi",
          company_url: "https://home.iitd.ac.in/",
          logo_path: "IITD.png",
          duration: "Feb 2021 - April 2021",
          location: "Kolkata, India",
          description:
            " I spearheaded engagement initiatives, fostering a vibrant community and promoting various academic and extracurricular events. Leveraging effective communication, I successfully conveyed institutional updates and opportunities, contributing to enhanced student involvement and participation. Through creative networking and organizational skills. ",
        },
        {
          title: "Anti-Ragging Committee (ARC) Squad Member",
          company: "Techno Main Salt Lake ",
          company_url: "https://www.ticollege.ac.in/",
          logo_path: "tmsl5.png",
          duration: "Oct 2021 - Present",
          location: "Kolkata, West Bengal",
          description:
            "I actively ensured a safe and respectful campus environment, assisting in preventing and addressing any instances of ragging. Through proactive vigilance and empathetic communication, I contributed to fostering a sense of security and well-being among fellow students. My dedication to upholding a harmonious atmosphere highlights my commitment to promoting a positive college experience for all.",
        },
        {
          title: "Internshala Student Partner",
          company: "Internshala",
          company_url: "https://internshala.com/",
          logo_path: "internshala.png",
          duration: "April 2021 - June 2021",
          location: "Kolkata, West Bengal",
          description:
            "I showcased exceptional dedication by ranking 3386 among 21,963 students from diverse Indian colleges. I effectively promoted Internshala and its offerings, demonstrating a genuine eagerness to tackle new challenges and contribute meaningfully. My role as an ISP underscored my commitment to education and collaboration, making me a valuable asset capable of providing a fresh and insightful perspective in various professional settings. ",
        },
        
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects span across a wide spectrum of the latest technology tools, with a pronounced focus on Android development. Additionally, I excel in deploying these projects onto web applications utilizing robust cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

//Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vector_pic-fotor.png",
    description:
      "You can find me across various social media platforms, and I'm readily accessible for messages. Rest assured, I'll respond within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "To empower individuals at their core, I derive immense satisfaction from crafting impactful lessons that resonate on a personal level, fostering profound character transformation for each reader.",
    link: "https://medium.com/@souviksamanta34/learning-ai-can-change-your-future-a-journey-into-the-world-of-possibilities-d1b1da5c69e1",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "V-24 Vivekananda Sarani, Garia Road, Kolkata, West Bengal - 700084",
    locality: "Vivekananda Sarani",
    country: "IN",
    region: "West Bengal",
    postalCode: "700084",
    streetAddress: "Garia Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/22UjZhbvNbhh2kbZ7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};