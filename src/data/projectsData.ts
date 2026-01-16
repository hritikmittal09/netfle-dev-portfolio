// src/data/projectsData.ts
import postgen from "../assets/images/social-media-post-genrator.jpg" 
import zera from "../assets/images/zera.webp"
import kudrat from "../assets/images/kudrat-img.jfif"
import zamoto from "../assets/images/zomato.png"
import destop from "../assets/images/electon-notes-app.jpg"
import recipe from "../assets/images/food app image.png"
import weather from "../assets/images/weather app.png"
import blog from "../assets/images/blog.webp"
import ecommerce from "../assets/images/ecommerce2.jpeg"




export interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
  linkText: string;
}

export const projects: Project[] = [
  {
    title: "Social Media Post Generator",
    image: postgen,
    description:
      "AI-powered Social Media Post Generator built with LLMs and Gemini Inference API. It creates engaging, customizable posts with smart text suggestions and design automation.",
    link: "https://social-media-post-generator-sandy.vercel.app/",
    linkText: "View Project",
  },
  {
    title: "Virtual Assistant",
    image: zera,
    description:
      "Virtual assistant with a GUI built using Python and Tkinter, featuring voice recognition and an intuitive desktop interface.",
    link: "https://www.linkedin.com/posts/hritik-mittal09_google-like-software-ugcPost-6979409782709366784-emnc",
    linkText: "View Project",
  },
  
  {
    title: "Kudrat's Landing Page",
    image: kudrat,
    description:
      "Landing page for a health & wellness brand featuring clean UI, product highlights, and Instagram integration.",
    link: "https://kudrat.netlify.app/",
    linkText: "View Project",
  },
  {
    title: "Zomato Landing Page",
    image: zamoto,
    description:
      "HTML/CSS clone of Zomato’s landing page created to demonstrate frontend layout and UI accuracy.",
    link: "https://hritikmittal09.github.io/ZOMATO-LANDING-PAGE/",
    linkText: "View Project",
  },
  {
    title: "Electron.js + React Notes App",
    image: destop,
    description:
      "Cross-platform desktop notes app built with Electron and React, featuring a modern UI and fast performance.",
    link: "https://github.com/hritikmittal09/elele-react-notes-desktop-app",
    linkText: "View Repository",
  },
  {
    title: "Recipe Generator (Angular)",
    image: recipe,
    description:
      "Angular-based recipe generator that dynamically fetches and displays random food recipes.",
    link: "https://659982897241e3ed35627027--spontaneous-pie-0c4775.netlify.app/",
    linkText: "View Project",
  },
  {
    title: "Weather App (React Native)",
    image: weather,
    description:
      "React Native weather app that fetches real-time weather data based on the user’s location.",
    link: "https://github.com/hritikmittal09/react-nativeweatherapp",
    linkText: "View Repository",
  },
  {
    title: "Blog Website (MERN)",
    image: blog,
    description:
      "MERN stack blog platform for posting, editing, and sharing development-related articles.",
    link: "https://blog-by-hritik.netlify.app/",
    linkText: "Visit Blog",
  },
  {
    title: "Hoody.com E-commerce Website",
    image: ecommerce,
    description:
      "Next.js ecommerce website with admin-only product management, Stripe payments, and a responsive DaisyUI-based design.",
    link: "https://hoodycom.vercel.app/",
    linkText: "View Website",
  },
];
