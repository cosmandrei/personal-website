import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Andrei",
  lastName: "Cosma",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer and Scrum Master",
  avatar: "/images/avatar.jpg",
  location: "Europe/Bucharest",
  languages: ["English", "Romanian", "French - Limited Working Proficiency"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cosmandrei",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/cosmandrei/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/cosmandrei",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:andrei.cosma55@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer and Scrum Master</>,
  subline: (
    <>
      I'm Andrei, a Technical Scrum Master at <InlineCode>Societe Generale</InlineCode>, where I craft financial applications.
      <br /> After hours, I build my own projects, pet my cat, swim and play games.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Passionate and results-driven Software Engineer and Scrum Master with over 12 years of experience in the
        industry. I have a strong background in web development, Java, Oracle/SQL Server, Spring
        Boot/Framework, Angular, React, NextJs and Scrum & DevOps methodologies.       
      </>
    ),
    description2: (
      <>
        I possess a deep passion for innovation and a commitment to driving success in every project I
        undertake. I am eager to bring my expertise, passion, and dedication to a new challenge where
        I can contribute to the development of robust and high-performing web applications.
      </>
    ),
    description3: (
      <>
        My personal values of transparency, action, determination, and discipline drive me to inspire and
        contribute to organizational success.
      </>
    )
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Societe Generale GSC",
        timeframe: "05/2022 - Present",
        role: "Technical Scrum Master",
        achievements: [
          <>
            Servant-leader of a team of 8 people, inspiring, motivating and empowering team individuals to
            take ownership and responsibility for their work
          </>,
          <>
            Reduced the Product Backlog by 40%, facilitating iterative meetings for the backlog stories
            prioritization and cleaning
          </>,
          <>
            Improved the team’s velocity by 15%, through addressing the blocking points which were
            discovered during the retrospective meetings
          </>,
          <>
            Collaborated with cross-functional teams to design, develop and implement new features
            and enhancements
          </>,
          <>
            Helped team members and stakeholders understand and embrace agile principles and
            practices, by addressing the discovered gaps (nurturing the relation between Product Owner and
            the Development Team)
          </>,
          <>
            Continuous contributions to creating a collaborative, high-performing and empowered team
          </>,
          <>
            Migrated backend services to a more resilient private cloud infrastructure
          </>,
          <>
            Contributed to the migration of UI to Angular for the Structured Products Repository and Orchestration application 
          </>,
          <>
            Providing Production L3 support
          </>,
        ],
        images: [],
      },
      {
        company: "Societe Generale GSC",
        timeframe: "10/2021 - 05/2022",
        role: "Software Engineer",
        achievements: [
          <>
            Developing new UI to replace the old legacy interface, by using the internal design language
            system within angular components
          </>,
          <>
            Fixed security vulnerabilities on the monolith backend
          </>,
          <>
            Decommissioned deprecated external API libraries and migrated to RESTful APIs with the
            help of Feign Clients
          </>,
          <>
            Collaborated with cross-functional teams to design, develop and implement new features
            and enhancements
          </>,
          <>
            Conducted code reviews and provided feedback to ensure code quality and adherence to
            best practices
          </>,
          <>
            Added filebeat to the application ELK stack, to ease the L3 support process
          </>,
          <>
            Providing Production L3 support for the legacy application
          </>,
        ],
        images: [],
      },
      {
        company: "Thales",
        timeframe: "06/2020 - 11/2021",
        role: "Software Engineer",
        achievements: [
          <>
            Created various reporting and monitoring widgets for dashboard web application, using
            polymer web components
          </>,
          <>
            Integrated with external APIs and services for data retrieval and processing
          </>,
          <>
            Created new microservices for the backend application
          </>,
          <>
            Bug fixing for legacy AngularJS (1.x) components
          </>,
          <>
            UI migration to Stencil Js from Polymer components
          </>,
        ],
        images: [],
      },
      {
        company: "Wipro Technologies",
        timeframe: "12/2019 - 06/2020",
        role: "Software Engineer",
        achievements: [
          <>
            Developed new UI, by using the internal design language system within angular components
          </>,
          <>
            Contributed to the backend implementation of a Healthcare application
          </>,
          <>
            Created REST APIs based on FHIR standard
          </>,
          <>
            Conducted code reviews and provided feedback to ensure code quality and adherence to best
            practices
          </>,
          <>
            Mentored a junior Frontend developer, to ease his onboarding in the project
          </>,
        ],
        images: [],
      },
      {
        company: "Societe Generale EBS",
        timeframe: "08/2017 - 12/2019",
        role: "Software Engineer",
        achievements: [
          <>
            Developed and maintained full stack marketing web applications using Java, JavaScript,
            Angular, HTML, and CSS
          </>,
          <>
            Addressed technical debt and created Jenkins jobs/ XL Deploy pipelines for project CI/CD
          </>,
          <>
            Deployed applications to production environments and managed continuous integration and
            deployment processes
          </>,
          <>
            R&D for a Incubator website using React
          </>,
          <>
            Created missing documentation for the devops, contributed to the existent documentation
          </>,
          <>
           Buddy and mentor for internal colleagues, easing their onboarding process and enhancing the
           overall experience
          </>,
        ],
        images: [],
      },
      {
        company: "Deutsche Bank",
        timeframe: "03/2015 - 08/2017",
        role: "Software Engineer",
        achievements: [
          <>
            Onboarded new feeds configuration in the ETL middleware application to be consumed by the
            Credit Risk department
          </>,
          <>
            Contributed to raising unit test coverage to over 85%
          </>,
          <>
            Designed and developed RESTful APIs using Java and Spring Framework
          </>,
          <>
            Conducted code reviews and provided feedback to ensure code quality and adherence to
            best practices
          </>,
          <>
            Contributed to the project documentation
          </>,
        ],
        images: [],
      },
      {
        company: "Inside Media Communication",
        timeframe: "09/2014 - 03/2015",
        role: "Frontend Developer",
        achievements: [
          <>
            Implemented responsive designs and optimized user interfaces for better user experience
          </>,
          <>
            Fixed various bugs discovered during Browser compatibility testing
          </>,
          <>
            Implemented .PSD design in HTML5/CSS3 components for the in-house application based on
            ASP.NET framework
          </>,
        ],
        images: [
           // optional: leave the array empty if you don't want to display images
           {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Template image for project",
            width: 0,
            height: 0,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Professional Scrum Master ( PSM I )",
        description: 
        <>
          Fundamental level of Scrum mastery, including the concepts of applying Scrum, and proven an understanding of Scrum, demonstrated a consistent use of terminology and approach to Scrum
          as described in the Scrum Guide.
        </>,
      },
      {
        name: "Valahia University",
        description: <>Bachelor of Computer Science.</>,
      },
      {
        name: "Voievodul Mircea High School",
        description: <>High School Diploma</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      "Spring Cloud/MVC/Security","Java","Oracle/SQL Server","Unix scripting","Angular","Spring Boot/Framework",
      "Javascript","Jenkins","Agile & DevOps","HTML 5/CSS 3","Maven","Websockets","Netflix Eureka/Zuul","Apache Tomcat",
      "XL Deploy","UX Design","Docker Basics","JQuery","Redux","Junit","Jasmine","Bootstrap","Tailwind Css","Sass/ Less",
      "FHIR","Git/ Github","Bitbucket","React","JWT/ Oauth","Npm","Liquibase","Jira","Stencil JS","Polymer", "Photoshop", "Illustrator", "Shotcut"
    ],
  },
  soft: {
    display: true, // set to false to hide this section
    title: "Soft skills",
    skills: [
      "Teamwork abilities", "Time Management", "Presentation Skills", "Critical Thinking", "Perseverance", "Adaptability", 
      "Effective Communication", "Mind Mapping", "Conflict Resolution", "Creativity", "Facilitation", "Leadership"
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about everything...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
