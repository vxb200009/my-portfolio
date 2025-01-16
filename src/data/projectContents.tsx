import { FiCode, FiLayers, FiShield, FiServer, FiBox, FiBarChart, FiDatabase, FiCloud } from 'react-icons/fi';
import { ReactNode } from 'react';
import Project1 from "../assets/project-images/Project1.png";
import Project2 from "../assets/project-images/Project2.png";
import Project3 from "../assets/project-images/Project3.png";

interface ProjectSection {
  title: string;
  icon: ReactNode;
  overview: string;
  details: Array<{
    subtitle: string;
    text: string;
    color: string;
  }>;
  bgClass: string;
}

interface ProjectContent {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  sections: ProjectSection[];
}

export const projectsData: ProjectContent[] = [
  {
    id: 1,
    title: "MetaJungle",
    description: "MetaJungle is a comprehensive NFT trading platform facilitating the buying, selling, and trading of digital assets. The platform provides a seamless user experience with efficient transaction processing and robust scalability.",
    image: Project1,
    tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "AWS", "Docker", "Kubernetes", "Redis"],
    link: "http://www.nftspaceship.org",
    sections: [
      {
        title: "Architecture & System Design",
        icon: <FiCode className="w-6 h-6" />,
        overview: "Our architecture combines modern frontend technologies with a robust backend system, creating a seamless NFT trading experience.",
        details: [
          {
            subtitle: "Frontend Architecture",
            text: "Developed using React.js and Redux, the frontend offers a dynamic and responsive user interface, ensuring a seamless user experience.",
            color: "from-blue-100/80 to-indigo-100/80"
          },
          {
            subtitle: "Backend Infrastructure",
            text: "Implemented with Node.js and Express.js, the backend handles API requests, business logic, and integrates with blockchain networks for NFT transactions. MongoDB is utilized for its flexibility in managing diverse NFT metadata.",
            color: "from-indigo-100/80 to-purple-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-blue-100/90 to-indigo-100/90"
      },
      {
        title: "Blockchain Integration",
        icon: <FiLayers className="w-6 h-6" />,
        overview: "Advanced blockchain integration ensuring secure and efficient NFT transactions.",
        details: [
          {
            subtitle: "Smart Contract Optimization",
            text: "Optimized interactions with smart contracts to enhance data retrieval speed and ensure accurate transaction processing.",
            color: "from-purple-100/80 to-pink-100/80"
          },
          {
            subtitle: "Data Indexing",
            text: "Implemented efficient indexing mechanisms to manage and query blockchain data effectively, facilitating quick access to NFT information.",
            color: "from-pink-100/80 to-rose-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-purple-100/90 to-pink-100/90"
      },
      {
        title: "Scalability Measures",
        icon: <FiDatabase className="w-6 h-6" />,
        overview: "Comprehensive scalability solutions ensuring robust performance as user base grows.",
        details: [
          {
            subtitle: "Distributed Architecture",
            text: "Employed a distributed system design to handle increasing loads, ensuring the platform can scale horizontally as the user base grows. Utilized Redis for caching frequently accessed data, reducing database load and improving response times.",
            color: "from-amber-100/80 to-orange-100/80"
          },
          {
            subtitle: "Microservices",
            text: "Adopted a microservices architecture to allow independent scaling of services based on demand, enhancing maintainability and scalability.",
            color: "from-orange-100/80 to-yellow-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-amber-100/90 to-orange-100/90"
      },
      {
        title: "Deployment & Infrastructure",
        icon: <FiCloud className="w-6 h-6" />,
        overview: "Modern cloud infrastructure ensuring global accessibility and scalability.",
        details: [
          {
            subtitle: "Container Orchestration",
            text: "Used Docker to containerize the application and implemented Kubernetes for orchestrating containers, enabling automated deployments, scaling, and management of microservices.",
            color: "from-teal-100/80 to-cyan-100/80"
          },
          {
            subtitle: "Cloud Services",
            text: "Leveraged AWS services such as ECS for container management, S3 for storage, and CloudFront for content delivery, ensuring global accessibility and scalability.",
            color: "from-cyan-100/80 to-sky-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-teal-100/90 to-cyan-100/90"
      },
      {
        title: "Security & Compliance",
        icon: <FiShield className="w-6 h-6" />,
        overview: "Comprehensive security measures protecting user assets and data.",
        details: [
          {
            subtitle: "Authentication & Authorization",
            text: "Implemented OAuth 2.0 and JWT for secure user authentication and authorization, protecting user data and transactions.",
            color: "from-green-100/80 to-emerald-100/80"
          },
          {
            subtitle: "Data Protection",
            text: "Ensured all sensitive data is encrypted both in transit and at rest, with regular security audits and vulnerability assessments to maintain a robust security posture.",
            color: "from-emerald-100/80 to-teal-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-green-100/90 to-emerald-100/90"
      }
    ]
  },
  {
    id: 2,
    title: "Shock'em Comics",
    description: "Shock'em Comics is an innovative platform that combines the excitement of baseball card collecting with the rich narratives of comic books. It offers users the ability to purchase, trade, and read digital comics, each available in various collectible variants. The platform is designed to provide a seamless eCommerce experience alongside a high-performance digital reading interface.",
    image: Project2,
    tech: ["React", "Node.js", "AWS CloudFront", "Docker", "Kubernetes", "Redis", "OAuth 2.0", "JWT"],
    link: "https://shockem-comics.com",
    sections: [
      {
        title: "Architecture & System Design",
        icon: <FiCode className="w-6 h-6" />,
        overview: "Modern architecture designed for seamless eCommerce and digital reading experience.",
        details: [
          {
            subtitle: "Frontend Development",
            text: "Developed using React.js, the frontend delivers a dynamic and responsive user interface, ensuring an engaging user experience across all devices and platforms.",
            color: "from-blue-100/80 to-indigo-100/80"
          },
          {
            subtitle: "Backend & Content Delivery",
            text: "Implemented with Node.js for API management and business logic, integrated with payment gateways for secure transactions. Utilized AWS CloudFront for ultra-fast content delivery, ensuring comics are accessible with minimal latency.",
            color: "from-indigo-100/80 to-purple-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-blue-100/90 to-indigo-100/90"
      },
      {
        title: "eCommerce Functionality",
        icon: <FiServer className="w-6 h-6" />,
        overview: "Comprehensive eCommerce system for digital comics trading and collection.",
        details: [
          {
            subtitle: "Product Catalog & Management",
            text: "Designed a comprehensive catalog system to manage various comic variants, each with unique attributes and rarity levels. Developed an inventory management system to track stock levels of digital and physical comic variants.",
            color: "from-purple-100/80 to-pink-100/80"
          },
          {
            subtitle: "Shopping Experience",
            text: "Implemented a secure and user-friendly shopping cart and checkout process, supporting multiple payment methods and ensuring transaction security while preventing overselling.",
            color: "from-pink-100/80 to-rose-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-purple-100/90 to-pink-100/90"
      },
      {
        title: "Digital Reading Platform",
        icon: <FiBox className="w-6 h-6" />,
        overview: "Advanced digital reading platform with robust content protection.",
        details: [
          {
            subtitle: "Reader Interface",
            text: "Built an intuitive digital reader that supports various devices and screen sizes, providing a comfortable reading experience for users with offline access capabilities.",
            color: "from-amber-100/80 to-orange-100/80"
          },
          {
            subtitle: "Content Protection",
            text: "Implemented DRM measures to prevent unauthorized distribution and ensure content security, while enabling offline reading capabilities for downloaded comics.",
            color: "from-orange-100/80 to-yellow-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-amber-100/90 to-orange-100/90"
      },
      {
        title: "Scalability & Infrastructure",
        icon: <FiDatabase className="w-6 h-6" />,
        overview: "Robust infrastructure ensuring high availability and performance.",
        details: [
          {
            subtitle: "Microservices Architecture",
            text: "Adopted a microservices approach with Docker containerization and Kubernetes orchestration, allowing independent scaling of services and facilitating seamless deployments.",
            color: "from-teal-100/80 to-cyan-100/80"
          },
          {
            subtitle: "Performance Optimization",
            text: "Implemented Redis caching and load balancing strategies, with comprehensive monitoring systems to track performance metrics and quickly resolve issues.",
            color: "from-cyan-100/80 to-sky-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-teal-100/90 to-cyan-100/90"
      },
      {
        title: "Security & Compliance",
        icon: <FiShield className="w-6 h-6" />,
        overview: "Comprehensive security measures ensuring user data protection and platform reliability.",
        details: [
          {
            subtitle: "Authentication & Data Protection",
            text: "Implemented OAuth 2.0 and JWT for secure authentication, with encryption for all sensitive data in transit and at rest, adhering to industry best practices and regulations.",
            color: "from-green-100/80 to-emerald-100/80"
          },
          {
            subtitle: "Platform Performance",
            text: "Achieved 99.99% uptime with auto-scaling capabilities, handling peak traffic of up to 2 million simultaneous users and processing over 10,000 secure transactions daily.",
            color: "from-emerald-100/80 to-teal-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-green-100/90 to-emerald-100/90"
      }
    ]
  },
  {
    id: 3,
    title: "Content Management System",
    description: "This CMS empowers non-technical users to design, publish, and manage static websites effortlessly. It combines an intuitive user interface with robust backend functionalities, enabling users to create and maintain websites without coding expertise.",
    image: Project3,
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "AWS", "Docker", "Kubernetes", "Jenkins", "Storybook"],
    link: "https://cms-project.com",
    sections: [
      {
        title: "Frontend Development",
        icon: <FiCode className="w-6 h-6" />,
        overview: "Modern and intuitive user interface built with React.js and Tailwind CSS.",
        details: [
          {
            subtitle: "UI/UX Design",
            text: "Utilized React.js for building a dynamic and responsive user interface, ensuring a seamless experience across devices. Employed Tailwind CSS for rapid and customizable styling.",
            color: "from-blue-100/80 to-indigo-100/80"
          },
          {
            subtitle: "Component Development",
            text: "Implemented Storybook for developing and testing UI components in isolation, promoting reusability and consistency across the platform.",
            color: "from-indigo-100/80 to-purple-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-blue-100/90 to-indigo-100/90"
      },
      {
        title: "Backend Architecture",
        icon: <FiServer className="w-6 h-6" />,
        overview: "Robust backend system built with Node.js and Express.js.",
        details: [
          {
            subtitle: "Server Infrastructure",
            text: "Node.js serves as the runtime environment, providing a non-blocking, event-driven architecture. Express.js facilitates the creation of robust and scalable server-side applications.",
            color: "from-purple-100/80 to-pink-100/80"
          },
          {
            subtitle: "Database Management",
            text: "MongoDB chosen as the NoSQL database to store user data, website content, and configurations, offering flexibility and scalability for diverse content types.",
            color: "from-pink-100/80 to-rose-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-purple-100/90 to-pink-100/90"
      },
      {
        title: "Content Management",
        icon: <FiDatabase className="w-6 h-6" />,
        overview: "Comprehensive content management system with Wix Studio CMS integration.",
        details: [
          {
            subtitle: "Content Organization",
            text: "Integrated Wix Studio CMS to manage content collections, allowing users to store and organize text, images, and videos, enabling dynamic content display on static pages.",
            color: "from-amber-100/80 to-orange-100/80"
          },
          {
            subtitle: "Asset Management",
            text: "AWS S3 utilized for storing static assets, ensuring fast and reliable content delivery, with CloudFront CDN for global content distribution.",
            color: "from-orange-100/80 to-yellow-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-amber-100/90 to-orange-100/90"
      },
      {
        title: "DevOps & Deployment",
        icon: <FiCloud className="w-6 h-6" />,
        overview: "Automated deployment pipeline with containerization and orchestration.",
        details: [
          {
            subtitle: "Container Management",
            text: "Docker used for containerization, ensuring consistency across environments. Kubernetes implemented for orchestrating containerized applications and automated scaling.",
            color: "from-teal-100/80 to-cyan-100/80"
          },
          {
            subtitle: "CI/CD Pipeline",
            text: "Jenkins configured for automated build, test, and deployment processes, with GitHub integration for version control and collaborative development.",
            color: "from-cyan-100/80 to-sky-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-teal-100/90 to-cyan-100/90"
      },
      {
        title: "Platform Features",
        icon: <FiBox className="w-6 h-6" />,
        overview: "Comprehensive feature set for website creation and management.",
        details: [
          {
            subtitle: "Core Functionality",
            text: "Drag-and-Drop interface for intuitive page design, Template Library with customizable pre-designed templates, and Real-Time Preview for immediate visual feedback.",
            color: "from-violet-100/80 to-purple-100/80"
          },
          {
            subtitle: "Advanced Features",
            text: "Version control for website history, responsive design optimization, and SEO tools including dynamic meta tags and automated sitemap generation.",
            color: "from-purple-100/80 to-fuchsia-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-violet-100/90 to-purple-100/90"
      },
      {
        title: "Security & Analytics",
        icon: <FiShield className="w-6 h-6" />,
        overview: "Comprehensive security measures and performance monitoring.",
        details: [
          {
            subtitle: "Security Implementation",
            text: "OAuth 2.0 and JWT for authentication, Role-Based Access Control (RBAC), and data encryption both in transit and at rest adhering to industry standards.",
            color: "from-green-100/80 to-emerald-100/80"
          },
          {
            subtitle: "Monitoring & Analytics",
            text: "Google Analytics integration for user insights, Prometheus and Grafana for performance monitoring, and comprehensive customer support with interactive tutorials.",
            color: "from-emerald-100/80 to-teal-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-green-100/90 to-emerald-100/90"
      }
    ]
  }
];

// Helper function to get project by ID
export const getProjectById = (id: number): ProjectContent | undefined => {
  return projectsData.find(project => project.id === id);
};

// Helper function to get project by title
export const getProjectByTitle = (title: string): ProjectContent | undefined => {
  return projectsData.find(project => project.title === title);
}; 