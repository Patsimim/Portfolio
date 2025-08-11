import BuudlLogo from "../assets/image/Buudl.png";
import SeniorAppLogo from "../assets/image/SeniorCare.png";
import GlobalChatLogo from "../assets/image/GlobalChat.png";
import SimpleNoteAppLogo from "../assets/image/SimpleNoteApp.png";

export const portfolioData = {
  profile: {
    name: "Russel Gem O. Rojo",
    title: "Fullstack Developer",
  },
  navigation: [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    { id: "resume", label: "Resume" },
  ],
  projects: [
    {
      id: 1,
      title: "Buudl",
      date: "Sept. 2024 - May 2025",
      category: "Fullstack Developer",
      designer: "Russel Gem O Rojo",
      description:
        "A comprehensive mobile and web application designed for community building and social networking. Features include real-time messaging, user profiles, content sharing, and cross-platform compatibility.",
      image: BuudlLogo,
      technologies: ["React Native", "NextJS", "React", "Laravel"],
      viewLive: [
        {
          platform: "Android",
          url: "https://play.google.com/store/apps/details?id=com.wonita.buudl&pcampaignid=web_share&pli=1",
          label: "Google Play Store",
        },
        {
          platform: "iOS",
          url: "https://apps.apple.com/ph/app/buudl/id6618117667",
          label: "App Store",
        },
        {
          platform: "Web",
          url: "https://buudl.com/",
          label: "Website",
        },
      ],
    },
    {
      id: 2,
      title: "Senior App Care",
      date: "Sept. 2023 - Feb. 2024",
      category: "Fullstack Developer",
      designer: "Russel Gem O Rojo",
      description:
        "Healthcare application designed for senior care management with features for hospital tracking, appointment scheduling, emergency contacts, and health monitoring.",
      image: SeniorAppLogo,
      technologies: ["React Native", "Laravel"],
      viewLive: [
        {
          platform: "Github",
          url: "https://github.com/Patsimim/SeniorCareApp/tree/main",
          label: "Github",
        },
      ],
    },
    {
      id: 3,
      title: "GlobalChat",
      date: "Mar. - Apr. 2025",
      category: "Fullstack Developer",
      designer: "Russel Gem O Rojo",
      description:
        "GlobalChat is a real-time chat web application that lets users create an account and instantly connect with people around the world. Engage in seamless, live conversations across borders with ease and simplicity.",
      image: GlobalChatLogo,
      technologies: [
        "Originally developed React Native and Laravel, rebuilt using MEAN stack",
      ],
      viewLive: [
        {
          platform: "Github",
          url: "https://github.com/Patsimim/GlobalChat/tree/master",
          label: "Github (Frontend)",
        },
        {
          platform: "Github",
          url: "https://github.com/Patsimim/globalchatbackend/tree/master",
          label: "Github (Backend)",
        },
      ],
    },
    {
      id: 4,
      title: "Simple Note Pad",
      date: "Aug. 2025",
      category: "Mobile Development",
      designer: "Russel Gem O Rojo",
      description:
        "Simple Note Pad is a lightweight, minimalistic application designed for quickly writing, editing, and organizing notes. It serves as a digital notepad for capturing thoughts, to-do lists, reminders, and ideas on the go.",
      image: SimpleNoteAppLogo,
      technologies: ["React Native"],
      viewLive: [
        {
          platform: "Github",
          url: "https://github.com/Patsimim/SimpleNoteApp",
          label: "Github",
        },
        {
          platform: "Expo: apk",
          url: "https://expo.dev/artifacts/eas/ubKkyx16oS1jpwzP72NGLA.apk",
          label: ".apk file",
        },
      ],
    },
  ],
};
