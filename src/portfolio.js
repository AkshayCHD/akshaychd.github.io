
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "AkshayCHD",
  title: "Hi all, I'm Akshay",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/AkshayCHD",
  linkedin: "https://www.linkedin.com/in/dev-akshay-kumar/",
  gmail: "email.akshay98@gmail.com",
  gitlab: "https://gitlab.com/AkshayCHD",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  skills: [
    emoji("⚡ Develop highly scalable backend services using latest javascript frameworks like loopback4 and nestjs"),
    emoji("⚡ Create and contribute to open source projects that aim at solving real world problems faced by people."),
    emoji("⚡ Develop decentralized logic along with frontend applications to interact with it, using libraries like web3js."),
    emoji("⚡ Solve optimisations and efficiency based problems based on Data structures and Algorithms.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "ethereum",
      fontAwesomeClassname: "fab fa-ethereum"
    },
    {
      skillName: "blockchain",
      fontAwesomeClassname: "fab fa-btc"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Structures and Algorithms",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "60%"
    },
    {
      Stack: "Blockchain Development",
      progressPercentage: "90%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Intern",  
      company: "Block8",
      companylogo:  require("./assets/images/block8logo.png"),
      date: "January 2020 – Present",
      desc: 'The internship was a sixth month onsite program at block8 chandigarh. Block8 is an Austrailian company, which majorly deals with blockchain based projects. My learnings at block8 can be summarized as ',
      subPoints: [
        "In the first phase we gatherered some general learnings abount the company's tech stack, and created some minor project on them",
        "In the second phase we created a full stack leave management system application using loopback4 framework for backend, to build a scalable and efficient api adhereing to the best architecture practices",
        "In the third phase we worked on a project that was aimed at creating a decentralized instant exchange for ERC20 tokens, on the ethereum blockchain, that could manage the exchange rates based on supply and demand on the respective tokens"
      ]
    },
    {
      role: "Google Summer of Code",
      company: "KDE",
      companylogo: require("./assets/images/gsoclogo.png"),
      date: "May 2017 – May 2018",
      desc: "The internship was a three month remote program that was sponsored by Google. My project was based on KDE's open source project Gcompris, to which I was already contributing for the past 9 months. My work during gsoc can be summarized as. ",
      subPoints: [
        "Worked on KDE’s Project Gcompris to add multiple datasets to activities",
        "Improved activity code by integrating logic to use multiple datasets instead of a single one.",
        "Improved the reach of an activity my making it usable for students of various age groups",
        "Leveraged knowledge of version control tools like git, phabricator, arcanist and languages like qml, javascript, Qt."
      ]
    },
    {
      role: "Software Engineer Intern",  
      company: "Chaincode Consulting LLP",
      companylogo: require("./assets/images/chaincodeconsultinglogo.png"),
      date: "Jan 2019 – Sep 2019",
      desc: "The internship was a three months part time program at a Chandigarh based company. We worked on a hyperledger fabric based project, that was realted to automating the process of money collection at petrol pumps using blockchain",
      subPoints: [
        "Studied the architecture of hyperledger fabric.",
        "Worked on making the fabric network more dynamic by using Fabric CA instead of static certificate generators like cryptogen and implementing functionality to add new orgs.",
        "Improved the reach of an activity my making it usable for students of various age groups",
        "Leveraged knowledge in hyperledger fabric architecture and implementation, node js, GoLang."
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_AUTH,
  githubUserName: "AkshayCHD", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Major Projects",
  projects: [
    {
      title: "Swappy",
      subtitle: "An ethereum based decentralized exchange to swap ERC20 tokens.",
      image:
        require("./assets/images/swappylogo.jpg"),
      footerLink: [
      ]
    },
    {
      title: "BidChain",
      subtitle: "A platform to host anonymous auctions in a decentralized fashion.",
      image:
        require("./assets/images/bidchain.jpg"),
      footerLink: [
        { name: "Deployment", url: "http://bidchain.herokuapp.com/" }
      ]
    },
    {
      title: "Sensor Api",
      subtitle: "A realtime dashboard to display data from various sensors in real time, through a websockets based nodejs backend",
      image:
        require("./assets/images/sensorapilogo.jpg"),
      footerLink: [
        { name: "Deployment", url: "http://sensorapiturings.herokuapp.com/" }
      ]
    },
    {
      title: "LMS",
      subtitle: "A production grade leave management system, with backend created using latest loopback 4 framework",
      image:
        require("./assets/images/lmslogo.png"),
      footerLink: [
        { name: "Frontend", url: "http://13.127.203.165:3000/" },
        { name: "Backend", url: "http://54.198.227.235:5000/explorer/" }
      ]
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "SIH 2019 Winner",
      subtitle: "Won SIH 2019 Hardware edition, under the problem statement given by company Kokuyo Camlin",
      image:
        require("./assets/images/sihlogo.png"),
      footerLink: [
        { name: "Certificate", url: "https://drive.google.com/file/d/1lfaI-ftCnS_luvLSRU6oboBMigt_uuRy/view?usp=sharing" }
      ]
    },
    {
      title: "Codechef CDSAP Certification",
      subtitle: "Successfully passed Codechef's CCDSAP Foundation level exam",
      image: 
        require("./assets/images/codecheflogo.jpg"),
      footerLink: [{ name: "Certificate", url: "https://www.codechef.com/certificates/public/f337745" }]
    },
    {
      title: "Winner at Advitya IIT Ropar",
      subtitle: "Secured positions at IIT Ropar's intercollege hackathons twice.",
      image: require("./assets/images/iitroparlogo.png"),
      footerLink: [
        { name: "Year 2017", url: "https://drive.google.com/file/d/18MgikYU6ScZpat6Qq7-62_iYSTpWhGs4/view?usp=sharing" },
        { name: "Year 2018", url: "https://drive.google.com/file/d/1MFwIop4R6TmSGSfpJ94myksDS3sIJbMC/view?usp=sharing" }
      ]
    },

    {
      title: "Winner at Pecfest Chandigarh",
      subtitle: "Secured positions at PEC Chandigarh's annual intercollege hackathon twice",
      image:  require("./assets/images/pecchandigarhlogo.png"),
      footerLink: [
        { name: "Year 2017", url: "https://drive.google.com/file/d/1-CIW84lxipr8HChp49CznzzMwFoUeEBX/view?usp=sharing" },
        { name: "Year 2018", url: "https://drive.google.com/file/d/13b5sYSFP1geH2WduVnguNcHSLTGYl97G/view?usp=sharing" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://gist.github.com/AkshayCHD/54a0d1a0d19b96a538bfe7deb2d81602",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "My Journey with Gcompris",
      subtitle: "KDE conf 2020",
      slides_url: "https://docs.google.com/presentation/d/10DK7GMzlBHcmBvXbPV3BW2xpUGBwcxvb6d6Yp9iiXqQ/edit?usp=sharing",
      event_url: "https://conf.kde.in/",
      image:
        require("./assets/images/kdelogo.png"),
    },
    {
      title: "Unblocking Blockchain Webminar",
      subtitle: "Block8 Blockchain Bootcamp",
      slides_url: "https://docs.google.com/presentation/d/1TadCwf5jZXjlqaHRzPrSBIVoDBRHYV-hue_rrW_IVGo/edit?usp=sharing",
      image:
        require("./assets/images/kdelogo.png"),
    },
    {
      title: "Open Source vs CP Panel",
      subtitle: "Software Freedom Day",
      event_url: "http://softwarefreedomday.in/#Gallery",
      image:
        require("./assets/images/kdelogo.png"),
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8968923902",
  email_address: "email.akshay98@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
