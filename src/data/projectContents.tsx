import { FiCode, FiLayers, FiShield, FiServer, FiBox, FiBarChart, FiDatabase, FiCloud } from 'react-icons/fi';
import { ReactNode } from 'react';
import Project1 from "../assets/project-images/Project1.png";
import Project2 from "../assets/project-images/Project2.png";
import Project3 from "../assets/project-images/Project3.png";
import Project4 from "../assets/project-images/Project4.png";
import Project5 from "../assets/project-images/Project5.png";

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
    tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "AWS", "Docker", "Kubernetes", "Redis", "AWS ECS", "AWS SNS"],
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
    tech: ["React", "Node.js", "AWS CloudFront", "AWS S3", "AWS SES", "Docker", "Kubernetes", "Redis", "OAuth 2.0", "JWT"],
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
    title: "Healthcare Platform with Real-Time Interaction",
    description: "Advanced healthcare platform featuring real-time communication capabilities and a sophisticated symptom-based recommendation engine, prioritizing high availability and security compliance. Achieved significant improvements in user satisfaction and system performance while maintaining HIPAA compliance.",
    image: Project4,
    tech: ["Node.js", "WebSocket", "TensorFlow", "Spring Boot", "MongoDB", "AWS", "Kubernetes", "Datadog", "WebRTC", "Socket.IO", "Redis", "Cassandra"],
    link: "",
    sections: [
      {
        title: "Real-Time Communication System",
        icon: <FiLayers className="w-6 h-6" />,
        overview: "Built a comprehensive real-time communication infrastructure for seamless healthcare interactions.",
        details: [
          {
            subtitle: "WebSocket Implementation",
            text: "Developed real-time chat service using WebSocket and Node.js backend, with Socket.IO for efficient message broadcasting and session management. Implemented real-time presence detection and message delivery confirmation.",
            color: "from-violet-100/80 to-purple-100/80"
          },
          {
            subtitle: "Video Consultation",
            text: "Integrated WebRTC for video calls with AWS EC2-hosted signaling servers, enabling secure and reliable healthcare consultations. Implemented adaptive bitrate streaming and fallback mechanisms for poor network conditions.",
            color: "from-purple-100/80 to-fuchsia-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-violet-500/10 to-purple-500/10"
      },
      {
        title: "Intelligent Recommendation Engine",
        icon: <FiBarChart className="w-6 h-6" />,
        overview: "Implemented an advanced symptom-based recommendation system with real-time processing capabilities.",
        details: [
          {
            subtitle: "Data Processing Pipeline",
            text: "Built real-time symptom ingestion using Kafka and deployed TensorFlow models for accurate specialist recommendations. Implemented continuous model training and validation pipeline with automated updates.",
            color: "from-cyan-100/80 to-sky-100/80"
          },
          {
            subtitle: "Personalization System",
            text: "Integrated patient medical history from Cassandra for personalized recommendations and stored session data in MongoDB for quick analytics. Achieved 85% accuracy in specialist recommendations through machine learning optimization.",
            color: "from-sky-100/80 to-blue-100/80"
          },
          {
            subtitle: "Performance Metrics",
            text: "Achieved <100ms latency for chat interactions, supporting over 50k concurrent users. Real-time capabilities led to a 50% increase in user satisfaction and 40% reduction in appointment scheduling time.",
            color: "from-blue-100/80 to-indigo-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-cyan-500/10 to-sky-500/10"
      },
      {
        title: "Infrastructure & Security",
        icon: <FiCloud className="w-6 h-6" />,
        overview: "Established a secure, scalable infrastructure with comprehensive compliance measures.",
        details: [
          {
            subtitle: "Scalable Architecture",
            text: "Implemented AWS ELB for traffic management and Kubernetes auto-scaling for WebSocket servers. Deployed in multi-AZ setup with Eureka for service registry and automated failover mechanisms.",
            color: "from-rose-100/80 to-pink-100/80"
          },
          {
            subtitle: "Security & Compliance",
            text: "Enforced HIPAA compliance with encrypted PII/PHI data, implemented MFA and JWT authentication, and deployed WAF for threat mitigation. Regular security audits and penetration testing using OWASP ZAP.",
            color: "from-pink-100/80 to-fuchsia-100/80"
          },
          {
            subtitle: "System Efficiency",
            text: "Built a horizontally scalable architecture supporting millions of daily active users with 99.99% uptime. Implemented comprehensive monitoring with Datadog for real-time system health tracking.",
            color: "from-fuchsia-100/80 to-purple-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-rose-500/10 to-pink-500/10"
      }
    ]
  },
  {
    id: 4,
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
  },
  {
    id: 5,
    title: "Legacy Database Migration & API Redesign",
    description: "Comprehensive migration of a legacy database to Apache Cassandra with a complete API redesign, focusing on scalability, fault tolerance, and enhanced performance while ensuring robust security. The project achieved significant performance improvements with optimized query response times and enhanced system reliability.",
    image: Project5,
    tech: ["Apache Cassandra", "Spring Boot", "Kafka", "Redis", "AWS", "OAuth 2.0", "Jenkins", "ELK Stack", "Apache Spark", "Swagger"],
    link: "",
    sections: [
      {
        title: "System Design & Architecture",
        icon: <FiDatabase className="w-6 h-6" />,
        overview: "Transformed a monolithic architecture into a scalable microservices ecosystem with enhanced data management capabilities.",
        details: [
          {
            subtitle: "Microservices Transition",
            text: "Decomposed monolithic architecture into independently deployable services using Spring Boot and Spring Cloud. Implemented Kafka for high-throughput event handling and asynchronous communication between services for user activity logging and data updates.",
            color: "from-purple-100/80 to-indigo-100/80"
          },
          {
            subtitle: "Data Layer Migration",
            text: "Successfully migrated legacy SQL data to Apache Cassandra with denormalized schema optimization and query-driven modeling. Implemented automated ETL workflows using Apache Spark and Redis caching for frequently accessed data, significantly improving read performance.",
            color: "from-indigo-100/80 to-blue-100/80"
          },
          {
            subtitle: "API Redesign",
            text: "Developed RESTful APIs with Swagger documentation, HATEOAS principles, and robust versioning strategy for legacy client compatibility. Integrated rate limiting and throttling through AWS API Gateway/NGINX for abuse prevention.",
            color: "from-blue-100/80 to-cyan-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-purple-500/10 to-indigo-500/10"
      },
      {
        title: "Scalability & Resilience",
        icon: <FiServer className="w-6 h-6" />,
        overview: "Implemented robust scalability and fault tolerance mechanisms to ensure high availability and system reliability.",
        details: [
          {
            subtitle: "Distributed Architecture",
            text: "Deployed Cassandra in multi-node setup across data centers with HAProxy for load balancing. Implemented horizontal scaling capabilities with automated failover mechanisms and data replication for zero downtime.",
            color: "from-emerald-100/80 to-teal-100/80"
          },
          {
            subtitle: "Resilience Patterns",
            text: "Integrated circuit breakers using Hystrix for graceful failure handling and cascading failure prevention. Implemented comprehensive retry policies and automated CI/CD pipelines with Jenkins, including unit testing with JUnit and Mockito.",
            color: "from-teal-100/80 to-cyan-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
      },
      {
        title: "Security Implementation",
        icon: <FiShield className="w-6 h-6" />,
        overview: "Enhanced system security with comprehensive authentication, encryption, and monitoring solutions.",
        details: [
          {
            subtitle: "Authentication & Authorization",
            text: "Implemented OAuth 2.0 with JWT tokens and RBAC at API gateway level. Secured sensitive data using AES-256 encryption and AWS KMS for key management, ensuring robust access control and data protection.",
            color: "from-orange-100/80 to-amber-100/80"
          },
          {
            subtitle: "Monitoring & Compliance",
            text: "Established centralized logging with ELK Stack and security monitoring using AWS CloudTrail and Splunk. Implemented comprehensive audit trails and automated security scanning for potential vulnerabilities.",
            color: "from-amber-100/80 to-yellow-100/80"
          },
          {
            subtitle: "System Outcomes",
            text: "Achieved 99.99% system availability, reduced API response times by 60%, and established a secure, compliant infrastructure capable of handling millions of daily transactions.",
            color: "from-yellow-100/80 to-orange-100/80"
          }
        ],
        bgClass: "bg-gradient-to-br from-orange-500/10 to-amber-500/10"
      }
    ]
  },
 
  // ... existing projects
];

// Helper function to get project by ID
export const getProjectById = (id: number): ProjectContent | undefined => {
  return projectsData.find(project => project.id === id);
};

// Helper function to get project by title
export const getProjectByTitle = (title: string): ProjectContent | undefined => {
  return projectsData.find(project => project.title === title);
}; 