import BuudlLogo from '../assets/image/Buudl.png';
import SeniorAppLogo from '../assets/image/SeniorCare.png';


export const portfolioData = {
profile: {
  name: "Russel Gem O Rojo",
  title: "Fullstack Developer"
},
navigation: [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
],
projects: [
  {
    id: 1,
    title: "Buudl",
    date: "Sept. 2024 - May 2025",
    category: "Fullstack Developer",
    designer: "Russel Gem O Rojo",
    description: "A comprehensive mobile and web application designed for community building and social networking. Features include real-time messaging, user profiles, content sharing, and cross-platform compatibility.",
    image: BuudlLogo,
    technologies: [
      "React Native", 
      "NextJS",
      "React",
      "Laravel"
    ],
    viewLive: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.wonita.buudl&pcampaignid=web_share&pli=1",
        label: "Google Play Store"
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/ph/app/buudl/id6618117667",
        label: "App Store"
      },
      {
        platform: "Web",
        url: "https://buudl.com/",
        label: "Website"
      }
    ]
  },
  {
    id: 2,
    title: "Senior App Care",
    date: "Sept. 2023 - Feb. 2024",
    category: "Fullstack Developer",
    designer: "Russel Gem O Rojo",
    description: "Healthcare application designed for senior care management with features for medication tracking, appointment scheduling, emergency contacts, and health monitoring.",
    image: SeniorAppLogo,
    technologies: [
      "React Native",
      "Laravel"
    ],
    viewLive: null 
  },
  {
    id: 3,
    title: "Blue Beans Inc.",
    date: "Mar. 2025",
    category: "Fullstack Developer",
    designer: "Russel Gem O Rojo",
    description: "Modern corporate website and internal management system with CMS functionality, employee portal, and business analytics dashboard.",
    image: null,
    technologies: [
      "React Native",
      "Laravel"
    ],
    viewLive: null 
  },
]
};