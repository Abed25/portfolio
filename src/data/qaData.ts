export interface QAPair {
  question: string;
  answer: string;
  keywords: string[];
}

export const qaData: QAPair[] = [
  {
    question: "What are your main skills?",
    answer: "I specialize in full-stack web development with expertise in React, Next.js, TypeScript, and Node.js. I'm also proficient in UI/UX design, database management, and cloud services.",
    keywords: ["skills", "expertise", "what can you do", "technologies", "tech stack"]
  },
  {
    question: "What kind of projects have you worked on?",
    answer: "I've worked on various projects including e-commerce platforms, portfolio websites, real-time chat applications, and data visualization dashboards. Each project demonstrates my ability to create scalable, user-friendly solutions.",
    keywords: ["projects", "portfolio", "work", "experience", "what have you built"]
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me through the contact form on this website, or connect with me on LinkedIn, GitHub, or Twitter. I'm always open to discussing new opportunities and collaborations.",
    keywords: ["contact", "reach", "email", "connect", "get in touch"]
  },
  {
    question: "What services do you offer?",
    answer: "I offer web development services including custom website development, e-commerce solutions, API development, and website maintenance. I also provide consulting services for technical architecture and optimization.",
    keywords: ["services", "offer", "what do you do", "help", "work"]
  },
  {
    question: "What is your development process?",
    answer: "My development process follows agile methodologies. It includes requirement gathering, planning, design, development, testing, and deployment. I maintain clear communication throughout the project and ensure regular updates.",
    keywords: ["process", "methodology", "how do you work", "approach", "workflow"]
  },
  {
    question: "Do you work remotely?",
    answer: "Yes, I work remotely and have experience collaborating with teams across different time zones. I'm comfortable using various communication and project management tools to ensure smooth collaboration.",
    keywords: ["remote", "work from home", "location", "where do you work", "onsite"]
  },
  {
    question: "What are your rates?",
    answer: "My rates vary depending on the project scope, complexity, and timeline. I offer both hourly and project-based pricing. Feel free to contact me for a detailed quote based on your specific requirements.",
    keywords: ["rates", "pricing", "cost", "how much", "budget"]
  },
  {
    question: "What technologies do you use?",
    answer: "I primarily work with modern web technologies including React, Next.js, TypeScript, Node.js, and various databases. I'm also familiar with cloud platforms like AWS and Azure, and use tools like Git for version control.",
    keywords: ["technologies", "tech stack", "tools", "programming languages", "frameworks"]
  }
]; 