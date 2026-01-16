export interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
  question: "Why am I looking for remote work?",
  answer:
    "I prefer remote opportunities as they allow me to work in a flexible and accessible environment. Due to a physical disability, remote work enables me to focus fully on delivering high-quality results while maintaining long-term productivity and consistency."
},
  
  {
    question: "What kind of projects are featured?",
    answer:
      "You’ll find frontend-focused projects, full-stack demos, UI-heavy applications, dashboards, and real-world inspired use cases."
  },
  {
    question: "Which technologies do you work with?",
    answer:
      "I mainly work with React and modern JavaScript, along with supporting tools and libraries used in real-world web applications."
  },
  {
    question: "Can I contact you for work or collaboration?",
    answer:
      "Yes. You can use the contact section of this portfolio to reach out for freelance work, remote roles, or collaborations."
  }
];

export default faqData;
