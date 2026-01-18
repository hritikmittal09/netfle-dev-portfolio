// src/data/awardsData.ts
import hackoctober from '../assets/images/superContribtor.png'
import Rag from '../assets/images/deeplearning.jpg'
import leetcode from '../assets/images/leetcode.png' ;
import hack from '../assets/images/hackerrank.png' ;
import delloit from '../assets/images/deloit.jpg'
import awsfull from "../assets/images/awscloudtraing-101 .png"
import Aicerti from "../assets/images/OCI-ai-fundations .jpeg"

export interface Award {
  title: string;
  logo: string;
  description: string;
  link: string;
  linkText: string;
}

export const awards: Award[] = [
  {
    title: "Hacktoberfest Super Contributor",
    logo: hackoctober,
    description:
      "Achieved Super Contributor status in Hacktoberfest by making significant contributions to open-source projects.",
    link: "https://www.holopin.io/hacktoberfest2025/userbadge/cmgse55tb00k3kw04q5rcud79",
    linkText: "Show Credential",
  },
  {
    title: "Retrieval Augmented Generation (RAG)",
    logo: Rag,
    description:
      "Completed the RAG course by DeepLearning.AI on Coursera with 84.24% grade.",
    link: "https://coursera.org/account/accomplishments/verify/J125XOJVIRSX",
    linkText: "View Certificate",
  },
  {
    title: "LeetCode",
    logo: leetcode,
    description:
      "Solved 200+ problems and earned multiple badges on data structures and algorithms.",
    link: "https://leetcode.com/u/hHRITIKMITTAL/",
    linkText: "View Profile",
  },
  {
    title: "HackerRank",
    logo: hack,
    description:
      "Earned certifications in Problem Solving, Python, SQL, and more.",
    link: "https://www.hackerrank.com/profile/hritikmittal77",
    linkText: "View Certificates",
  },
  {
    title: "Technology Job Simulation",
    logo: delloit,
    description:
      "Completed the Deloitte Australia Technology Virtual Job Simulation Program.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_dn3wSvDZ9tA8e8TdE_1752181083620_completion_certificate.pdf",
    linkText: "Show Credential",
  },
  {
    title: "AWS Educate Introduction to Cloud 101",
    logo: awsfull,
    description: "Completed the AWS Educate Introduction to Cloud 101 program, gaining foundational skills in AWS cloud services and cloud computing concepts.",
    link: "https://www.credly.com/earner/earned/badge/f8c0c06b-e806-44cd-98e2-73f67e667aff",
    linkText: "Show Credential"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    logo: Aicerti,
    description: "The Oracle Cloud Infrastructure (OCI) AI Foundations certification introduces learners to AI and ML fundamentals, focusing on their practical use within OCI. It’s beginner-friendly and requires no prior technical experience.",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E533DE5350F95FC8FC4D3016C2CF516334FB2CE7CCFCC5597412EC6BD70E87A7",
    linkText: "Show Credential"
  }
];



































