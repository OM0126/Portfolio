type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "OM Yengantiwar — DevOps & Cloud Portfolio",
    fullName: "OM Yengantiwar",
    email: "omyengantiwar26@gmail.com",
  },
  hero: {
    name: "OM Yengantiwar",
    p: ["I build Cloud infrastructure, DevOps", "pipelines and Linux-based systems"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a B.Tech student with hands-on experience in Python, JavaScript,
      and Linux-based systems. I actively work on real-world projects like self-hosted
      cloud infrastructure and system monitoring tools. I focus on learning by building,
      exploring DevOps tools, and understanding how scalable systems work in practice.
      Let's build something reliable and scalable together!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories. They reflect my ability to solve complex
    problems, work with different technologies, and build systems from scratch.`,
    },
  },
};
