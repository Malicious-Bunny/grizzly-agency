// Real client projects that showcase our capabilities
export const workProjects = [
  {
    id: 1,
    title: "Chantelle International",
    description: "Built a sophisticated multi-regional e-commerce platform for the renowned French lingerie brand Chantelle. The site features seamless localization across 10+ countries including France, Deutschland, USA, and more. Implemented advanced geolocation routing, multi-currency support, and region-specific product catalogs. The elegant design perfectly captures the brand's feminine aesthetic while delivering optimal performance across all markets.",
    image: "https://ext.same-assets.com/2392545488/1916810146.jpeg",
    projectUrl: "https://chantelle.com/",
    technologies: ["Next.js", "TypeScript", "Internationalization", "Geolocation API", "Multi-currency"],
    category: "E-commerce",
    metrics: {
      regions: "10+ Countries",
      performance: "Fast Global Load",
      localization: "Multi-language"
    },
    quote: {
      text: "The international platform transformation exceeded our expectations. The seamless localization and elegant user experience has significantly improved our global customer engagement across all markets.",
      author: "Marie Dubois",
      title: "Digital Director, Chantelle"
    }
  },
  {
    id: 2,
    title: "Bountiful Baby",
    description: "Developed a comprehensive e-commerce platform for the world's largest reborn doll supply store. Built specialized product catalog systems for unique items like doll kits, paints, and supplies. Implemented advanced search and filtering for thousands of niche products, integrated community features, and created educational content sections. The platform serves artists and collectors worldwide with a user-friendly interface that makes complex product selection simple.",
    image: "/work/siliconbaaby.png",
    projectUrl: "https://www.bountifulbaby.com/",
    technologies: ["Shopify", "Custom Apps", "Advanced Filtering", "Community Features", "Educational Content"],
    category: "Specialty E-commerce",
    metrics: {
      products: "1000+ SKUs",
      community: "Artist Network",
      shipping: "Global Delivery"
    },
    quote: {
      text: "Grizzly Agency understood our unique market perfectly. They built a platform that serves both professional artists and hobbyists seamlessly, with features we never thought possible for our niche industry.",
      author: "Jennifer Stevens",
      title: "Owner, Bountiful Baby"
    }
  },
  {
    id: 3,
    title: "Grin Technologies (eBikes.ca)",
    description: "Created a technical e-commerce powerhouse for Canada's leading electric bike technology company. Built complex product configurators for custom e-bike kits, integrated advanced motor simulation tools, and developed educational content systems. The platform serves both DIY enthusiasts and professional bike builders with sophisticated filtering, detailed technical specifications, and innovative tools like the Motor Simulator that helps customers design optimal setups.",
    image: "https://ext.same-assets.com/711627106/3140898488.jpeg",
    projectUrl: "https://ebikes.ca/",
    technologies: ["Advanced Product Config", "Simulation Tools", "Technical Documentation", "Custom Calculators", "Educational Platform"],
    category: "Technical E-commerce",
    metrics: {
      products: "1000+ Components",
      tools: "Advanced Simulators",
      market: "Global Leader"
    },
    quote: {
      text: "The technical sophistication of our new platform has revolutionized how customers approach e-bike builds. The simulation tools and configurators have become industry standards that our competitors try to emulate.",
      author: "Justin Lemire-Elmore",
      title: "CTO, Grin Technologies"
    }
  },
  {
    id: 4,
    title: "Lectric eBikes",
    description: "Built a high-converting e-commerce platform for America's best-selling electric bike brand. Designed an engaging product showcase with interactive comparisons, implemented smooth checkout flows, and created compelling content sections. The site features advanced product filtering, customer review systems, and educational content that has helped establish Lectric as a market leader. Optimized for mobile-first shopping and conversion rate optimization.",
    image: "https://ext.same-assets.com/1262242874/1913552748.jpeg",
    projectUrl: "https://lectricebikes.com/",
    technologies: ["Shopify Plus", "React Components", "Conversion Optimization", "Mobile-First Design", "Review Systems"],
    category: "Consumer E-commerce",
    metrics: {
      brand: "#1 Best-Selling",
      satisfaction: "4.9 Star Rating",
      growth: "500K+ Customers"
    },
    quote: {
      text: "Grizzly Agency delivered a platform that perfectly captures our brand energy while driving serious results. Our conversion rates increased dramatically, and the user experience keeps customers coming back.",
      author: "Robbie Ferri",
      title: "Co-Founder, Lectric eBikes"
    }
  },
  {
    id: 5,
    title: "CB Reptile",
    description: "Developed a specialized e-commerce platform for one of the largest captive-bred reptile retailers in the US. Built complex animal catalog systems with detailed care information, implemented live arrival guarantees, and created educational content for responsible pet ownership. The platform handles unique challenges like live animal shipping, genetic tracking, and breeder verification while maintaining a beautiful, user-friendly interface.",
    image: "https://ext.same-assets.com/4075933377/3824653841.webp",
    projectUrl: "https://www.cbreptile.com/",
    technologies: ["Custom CMS", "Live Animal Systems", "Genetic Tracking", "Educational Platform", "Specialized Shipping"],
    category: "Specialized E-commerce",
    metrics: {
      species: "25+ Species",
      guarantee: "Live Arrival",
      expertise: "Breeding Specialists"
    },
    quote: {
      text: "The platform Grizzly Agency built handles the complexities of live animal sales beautifully. Our customers love the detailed information and seamless purchasing process, which has significantly increased our conversion rates.",
      author: "Chris Leone",
      title: "Owner, CB Reptile"
    }
  },
  {
    id: 6,
    title: "MistHub",
    description: "Created a comprehensive vaping products e-commerce platform serving customers globally. Built sophisticated product categorization for thousands of SKUs, implemented age verification systems, and developed educational content for responsible vaping. The platform features advanced filtering, loyalty programs, and regulatory compliance tools. Designed with mobile-first approach and optimized for high-volume transactions.",
    image: "https://ext.same-assets.com/3799875436/230259758.png",
    projectUrl: "https://misthub.com/",
    technologies: ["Shopify Plus", "Age Verification", "Loyalty Systems", "Compliance Tools", "Global Shipping"],
    category: "Regulated E-commerce",
    metrics: {
      products: "10K+ SKUs",
      compliance: "Multi-State",
      shipping: "Global Network"
    },
    quote: {
      text: "MistHub needed a platform that could handle complex regulations while delivering an excellent customer experience. Grizzly Agency delivered exactly that, with features that keep us compliant and customers happy.",
      author: "Michael Chen",
      title: "CEO, MistHub"
    }
  }
];

// Helper functions for filtering and organizing projects
export const getProjectsByCategory = (category) => {
  return workProjects.filter(project => project.category === category);
};

export const getAllCategories = () => {
  return [...new Set(workProjects.map(project => project.category))];
};

export const getFeaturedProjects = () => {
  return workProjects.slice(0, 3);
};

export default workProjects;
