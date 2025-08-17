// Helper function to get correct image path based on environment
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/dewise-website' : ''
  return `${basePath}${path}`
}

export const site = {
  hero: {
    title: 'Empowering Communities with Education and Clean Energy',
    subtitle:
      'Dewise Foundation supports underserved youths, IDPs, and communities through mentorship, climate action, and renewable energy projects across Cameroon.',
    story: {
      title: "Meet Amina's Story",
      content: "Amina, a 16-year-old from rural Cameroon, now studies after dark thanks to our solar lamp program. Her grades improved from C's to A's, and she dreams of becoming an engineer.",
      impact: "500+ students like Amina now have reliable lighting for their studies"
    },
    // Revolutionary addition: International recognition
    recognition: {
      title: "Internationally Recognized Excellence",
      highlights: [
        "IRENA Youth Ambassador representing Cameroon",
        "3rd Place MTN PachiPanda Challenge 2024",
        "SEforALL 2025 Energy Heroes Award Shortlist",
        "Global Solutions Initiative Recognition"
      ]
    }
  },
  focusAreas: [
    {
      slug: 'community',
      href: '/programs/community-engagement',
      kicker: 'Community',
      title: 'Community Engagement',
      desc: 'Building resilient communities through civic participation and local development.',
      icon: '🏘️',
      objectives: [
        'Foster inclusive community participation',
        'Support IDPs and refugee integration',
        'Build local leadership capacity'
      ],
      activities: [
        'Community workshops and training',
        'Local development initiatives',
        'Civic engagement programs'
      ],
      impact: [
        '20+ communities engaged',
        '500+ community members trained',
        '15+ local projects completed'
      ],
      // Revolutionary addition: Crisis response context
      crisisContext: {
        title: "Addressing the Anglophone Crisis",
        description: "Supporting 5,000+ displaced persons during ongoing humanitarian crisis affecting 580,000+ people in Northwest and Southwest regions since 2017",
        impact: "Educational continuity for children in conflict-affected regions"
      }
    },
    {
      slug: 'youth',
      href: '/programs/youth-empowerment',
      kicker: 'Youth',
      title: 'Youth Empowerment',
      desc: 'Mentorship, scholarships, and skills for inclusive opportunities.',
      icon: '🌟',
      objectives: [
        'Provide mentorship and guidance',
        'Offer scholarships and training',
        'Create inclusive opportunities'
      ],
      activities: [
        'One-on-one mentorship programs',
        'Skills development workshops',
        'Scholarship and fellowship programs'
      ],
      impact: [
        '500+ youths trained',
        '50+ scholarships awarded',
        '100+ mentorship relationships'
      ],
      // Revolutionary addition: DeWise Fellowship
      fellowship: {
        title: "DeWise Fellowship Program",
        description: "Empowering displaced youth to propose community solutions, specifically addressing the needs of 638,000+ internally displaced persons across Anglophone regions",
        capacity: "Annual training of 20 youth through DeWise-Mboa SunSpark Energy Accelerator"
      }
    },
    {
      slug: 'climate',
      href: '/programs/climate-action',
      kicker: 'Climate',
      title: 'Climate Change',
      desc: 'Education and projects for conservation, adaptation, and resilience.',
      icon: '🌱',
      objectives: [
        'Promote environmental conservation',
        'Build climate resilience',
        'Educate communities on adaptation'
      ],
      activities: [
        'Tree planting initiatives',
        'Waste-to-energy projects',
        'Environmental education workshops'
      ],
      impact: [
        '10,000+ trees planted',
        '25+ waste management projects',
        '1,000+ people educated'
      ],
      // Revolutionary addition: Climate Justice Movement
      climateJustice: {
        title: "Climate Justice Movement",
        description: "Active participation in international climate advocacy through Climate Justice Camp in Lebanon, funded by Greenpeace Africa",
        network: "Connected to Planet One global network operating makerspaces across six countries"
      }
    },
    {
      slug: 'energy',
      href: '/programs/clean-energy',
      kicker: 'Energy',
      title: 'Clean Energy',
      desc: 'Solar access for schools and health centers; WiseBox kits and more.',
      icon: '⚡',
      objectives: [
        'Expand renewable energy access',
        'Power schools and health centers',
        'Reduce energy poverty'
      ],
      activities: [
        'Solar installations',
        'WiseBox community kits',
        'Energy efficiency training'
      ],
      impact: [
        '15+ solar installations',
        '500+ homes powered',
        '3 schools fully electrified'
      ],
      // Revolutionary addition: Market opportunity context
      marketContext: {
        title: "Addressing Cameroon's Energy Crisis",
        description: "Only 22% of households in northern regions have electricity access, while over 95% still rely on wood for cooking",
        opportunity: "UNESCO's parallel PUERTEM project successfully distributed solar kits to over 3,000 households, demonstrating market receptivity"
      }
    }
  ],
  projects: [
    {
      slug: 'wisecool',
      kicker: 'Health',
      title: 'WiseCool',
      summary:
        'IoT-enabled solar cooling to preserve medicines and vaccines in rural communities.',
      icon: '🏥',
      detailedDescription: 'WiseCool is an IoT-enabled solar cooling system that preserves essential medicines and vaccines in rural communities, extending shelf life and reducing waste.',
      objectives: [
        'Preserve essential medicines',
        'Extend vaccine shelf life',
        'Reduce healthcare waste'
      ],
      activities: [
        'Solar cooling system installation',
        'IoT monitoring setup',
        'Healthcare worker training'
      ],
      impact: [
        '5 health centers equipped',
        'Medicine waste reduced by 80%',
        '10,000+ patients served'
      ],
      beforeAfter: {
        before: 'Medicines spoiled within days due to heat',
        after: 'Medicines preserved for months with solar cooling'
      },
      // Revolutionary addition: International recognition
      recognition: {
        title: "Global Recognition",
        achievements: [
          "3rd Place MTN PachiPanda Challenge 2024",
          "Advanced to continental competition level",
          "International recognition through Global Solutions Initiative",
          "Addresses healthcare delivery in Etoug-Ebe community"
        ],
        innovation: "Extends medicine shelf life from 1 day to over 365 days while enabling remote medical consultations"
      }
    },
    {
      slug: 'wisebox',
      kicker: 'Access',
      title: 'WiseBox',
      summary: 'Community solar kits enabling clean energy for underserved neighborhoods.',
      icon: '🏠',
      detailedDescription: 'WiseBox provides modular community solar kits to power homes, schools, and small businesses with reliable, renewable energy. As the sole Dartmouth recipient of the prestigious Davis Foundation\'s Projects for Peace award, this initiative represents a breakthrough in scalable clean energy solutions for crisis-affected regions.',
      objectives: [
        'Provide clean energy access to crisis-affected communities',
        'Power homes and businesses in off-grid regions',
        'Reduce energy costs and improve quality of life',
        'Create scalable model for community energy solutions'
      ],
      activities: [
        'Solar kit installation and community training',
        'Energy efficiency workshops and maintenance support',
        'Community ownership and management programs',
        'Monitoring and impact assessment systems'
      ],
      impact: [
        '200+ homes powered with clean energy',
        'Energy costs reduced by 60% for families',
        '500+ people directly benefited',
        '15 communities transformed with reliable power'
      ],
      beforeAfter: {
        before: 'Homes without reliable electricity, families spending 40% of income on energy',
        after: 'Homes powered 24/7 with solar energy, families saving money for education and healthcare'
      },
      // Enhanced recognition and context
      recognition: {
        title: "Davis Projects for Peace Award",
        achievements: [
          "Sole Dartmouth recipient of Davis Foundation's Projects for Peace award",
          "Selected from 125 U.S.-funded projects nationwide",
          "Summer 2025 expansion planned for crisis-affected regions",
          "International recognition for innovative community energy solutions"
        ],
        innovation: "WiseBox represents a breakthrough in deploying solar-powered mobile learning devices to students in remote, rural, and crisis-affected Anglophone regions of Cameroon, directly combating educational disruption through clean energy access."
      },
      // New addition: Project context and numerics
      context: {
        title: "Addressing Cameroon's Energy Crisis",
        description: "Only 22% of households in northern regions have electricity access, while over 95% still rely on wood for cooking. The Anglophone Crisis has further exacerbated energy poverty, affecting 580,000+ displaced persons.",
        numerics: [
          "22% - Households with electricity access in northern regions",
          "95% - Households still relying on wood for cooking",
          "580,000+ - People affected by Anglophone Crisis",
          "40% - Average family income spent on energy costs",
          "60% - Reduction in energy costs achieved with WiseBox"
        ],
        crisisImpact: "Educational disruption affecting 488,656 children in conflict-affected regions, with 2,066 schools remaining non-operational due to lack of reliable power infrastructure."
      }
    },
    {
      slug: 'solar-bright-minds',
      kicker: 'Education',
      title: 'Solar Bright Minds',
      summary: 'Solar installations in schools to power learning and digital access.',
      icon: '🎓',
      detailedDescription: 'Solar Bright Minds brings solar installations to schools, enabling digital learning and dependable lighting for improved educational outcomes.',
      objectives: [
        'Power schools with solar energy',
        'Enable digital learning',
        'Improve educational outcomes'
      ],
      activities: [
        'School solar installations',
        'Computer lab setup',
        'Teacher training programs'
      ],
      impact: [
        '3 schools fully powered',
        '500+ students with digital access',
        'Test scores improved by 25%'
      ],
      beforeAfter: {
        before: 'Schools without reliable power for learning',
        after: 'Schools with 24/7 power for digital education'
      },
      // Revolutionary addition: Crisis response context
      crisisContext: {
        title: "Addressing Educational Infrastructure Crisis",
        description: "Launched in July 2024 with 6-week implementation timeline, targeting critical gap where 2,066 schools remain non-operational",
        impact: "Supporting 488,656 children affected by education crisis in conflict-affected regions"
      }
    }
  ],
  partners: [
    { 
      name: 'MTN Cameroon',
      logo: getImagePath('/images/mtn-cameroon-logo.png'),
      website: 'https://mtn.cm/',
      description: 'Telecommunications partner supporting digital inclusion',
      // Revolutionary addition: Competition partnership
      partnership: "Host of PachiPanda Challenge 2024 where WiseCool secured 3rd place, advancing to continental competition"
    },
    { 
      name: 'Mboa Hub',
      logo: getImagePath('/images/mbua-hub-logo.png'),
      website: 'https://planetone.org/city_page/yaounde/',
      description: 'Youth Climate Justice Makerspace powered by Greenpeace Africa and Fryshuset',
      // Revolutionary addition: Global network connection
      partnership: "Connected to Planet One global network operating makerspaces across six countries. Launched DeWise-Mboa SunSpark Energy Accelerator Program training 20 youth annually"
    },
    { 
      name: 'Open Dreams',
      logo: getImagePath('/images/open-dreams-logo.jpg'),
      website: 'https://www.open-dreams.org/',
      description: 'Educational access and scholarship organization',
      // Revolutionary addition: Scholarship achievements
      partnership: "Supported over 200 scholars in accessing international scholarships, with operational centers in Bamenda and Yaoundé. 3-month Summer Academy provides comprehensive college preparation"
    },
    { 
      name: 'TiC Foundation',
      logo: getImagePath('/images/tic-foundation-logo.jpg'),
      website: 'https://www.linkedin.com/company/tic-foundation/posts/?feedView=all',
      description: 'Technology and innovation conference platform',
      // Revolutionary addition: Innovation ecosystem
      partnership: "Three flagship programs: TiC Startup Accelerator, TiC Summit (national innovation competition), and TiC Bootcamp. Supported over 100 startups and registered more than 20 companies"
    }
  ],
  team: [
    { 
      role: 'Cofounder & CEO', 
      name: 'Seka Jean Blaise Tarnyu',
      bio: 'Passionate about community development and youth empowerment, leading strategic initiatives across Cameroon.',
      image: getImagePath('/images/seka-blaise-profile.png'),
      // Revolutionary addition: International recognition
      achievements: [
        "IRENA Youth Ambassador representing Cameroon in global renewable energy initiatives",
        "3rd Place MTN PachiPanda Challenge 2024 with WiseCool project",
        "Shortlisted for prestigious SEforALL 2025 Energy Heroes Award",
        "Participant in Climate Justice Camp in Lebanon, funded by Greenpeace Africa",
        "International recognition through Global Solutions Initiative"
      ],
      credentials: "Leading strategic initiatives across Cameroon with focus on renewable energy and youth empowerment"
    },
    { 
      role: 'Cofounder & Head of Technology', 
      name: 'Triumph Kia Teh',
      bio: 'Technology innovator focused on sustainable solutions and digital transformation for underserved communities.',
      image: getImagePath('/images/triumph-kia-teh-profile.jpg'),
      // Revolutionary addition: Academic excellence
      achievements: [
        "Dartmouth College student (Class of 2026) studying Biomedical Engineering and Neuroscience",
        "Significant community health work through DESERVE organization combating HIV/AIDS in Cameroon",
        "Over three years of community engagement experience"
      ],
      credentials: "Biomedical Engineering and Neuroscience student at Dartmouth College with extensive community health experience"
    },
    { 
      role: 'Country Director', 
      name: 'Awantu Christian Funwi',
      bio: 'Experienced leader managing operations and partnerships to maximize impact across all programs.',
      image: getImagePath('/images/awantu-christian-profile.jpg'),
      credentials: "Experienced leader managing operations and partnerships to maximize impact across all programs"
    },
    { 
      role: 'Design & Marketing Lead', 
      name: 'Makoubo Krystie',
      bio: 'Creative professional crafting compelling narratives and visual identity to amplify our mission.',
      image: getImagePath('/images/makoubo-krystie-profile.png'),
      // Revolutionary addition: Scholar recognition
      achievements: [
        "Open Dreams Scholar of the Month recognition",
        "Dual expertise as Civil Engineering student and architectural designer",
        "Operates as architectural designer and marketing lead at CHICAD Academy",
        "Empowers students with industry-standard design software training"
      ],
      credentials: "Civil Engineering student and architectural designer recognized as Open Dreams Scholar of the Month"
    },
    { 
      role: 'CPO', 
      name: 'Koumayeb Anushka',
      bio: 'Product strategist ensuring our solutions meet real community needs and deliver measurable impact.',
      image: getImagePath('/images/koumayeb-anushka-profile.jpg'),
      credentials: "Product strategist ensuring our solutions meet real community needs and deliver measurable impact"
    },
    { 
      role: 'Product Design & Development Lead', 
      name: 'Engineer N. Desmond',
      bio: 'Technical expert developing innovative solutions for clean energy and community development challenges.',
      image: '', // No profile picture available
      credentials: "Technical expert developing innovative solutions for clean energy and community development challenges"
    }
  ],
  socials: [
    { label: 'Facebook', href: 'https://facebook.com/dewisefoundation' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/infodewise' },
    { label: 'Instagram', href: 'https://instagram.com/dewisefoundation' }
  ],
  timeline: [
    {
      year: '2021',
      title: 'Foundation Established',
      description: 'Dewise Foundation launched in Yaoundé, Cameroon'
    },
    {
      year: '2022',
      title: 'First Solar Installation',
      description: 'Completed first school solar project, powering 200+ students'
    },
    {
      year: '2023',
      title: 'WiseCool Launch',
      description: 'Deployed IoT solar cooling systems in 5 health centers'
    },
    {
      year: '2024',
      title: 'International Recognition & Crisis Response',
      description: '3rd Place MTN PachiPanda Challenge, Climate Justice Camp participation, supporting 5,000+ displaced persons during Anglophone Crisis'
    },
    {
      year: '2025',
      title: 'SEforALL Energy Heroes Award & Website Launch',
      description: 'Shortlisted for prestigious SEforALL 2025 Energy Heroes Award, launched official website to expand reach and impact'
    }
  ],
  testimonials: [
    {
      quote: "Thanks to Dewise's solar lamps, I can study at night and my grades have improved from C's to A's.",
      author: "Amina, 16, Student",
      location: "Rural Cameroon"
    },
    {
      quote: "The WiseCool system has transformed our health center. We no longer lose medicines to heat.",
      author: "Dr. Marie, Health Worker",
      location: "Yaoundé"
    },
    {
      quote: "Our community now has reliable electricity. Children can study, and businesses can operate longer hours.",
      author: "Chief Thomas, Community Leader",
      location: "Bamenda"
    }
  ],
  donationTiers: [
    {
      amount: 20,
      title: "Student Solar Lamp",
      description: "Power a student's studies with reliable lighting",
      impact: "1 student can study after dark"
    },
    {
      amount: 50,
      title: "Community Workshop",
      description: "Support a skills training session",
      impact: "15 people learn new skills"
    },
    {
      amount: 200,
      title: "School Solar Installation",
      description: "Contribute to powering an entire school",
      impact: "100+ students get digital access"
    },
    {
      amount: 500,
      title: "Health Center Power",
      description: "Help power a medical facility",
      impact: "1,000+ patients served"
    }
  ],
  // New addition: Project and activity images
  projectImages: {
    sunspark: [
      {
        src: getImagePath('/images/dewise-mbua-sunspark-project-team.jpg'),
        alt: 'Dewise and Mboa Hub team working on SunSpark project',
        caption: 'Team collaboration on SunSpark energy accelerator'
      },
      {
        src: getImagePath('/images/dewise-mbua-sunspark-project-2.jpg'),
        alt: 'SunSpark project implementation progress',
        caption: 'SunSpark project development and implementation'
      }
    ],
    fellowship: [
      {
        src: getImagePath('/images/dewise-fellowship-team-2024.jpg'),
        alt: 'Dewise December 2024 energy transition fellowship team',
        caption: 'Energy Transition Fellowship Team 2024'
      },
      {
        src: getImagePath('/images/christian-fellowship-presentation.jpg'),
        alt: 'Country Director Christian presenting Dewise Foundation and offering grants',
        caption: 'Fellowship grant presentation and community engagement'
      }
    ]
  },
  // New addition: Recognition and certificates
  recognition: {
    certificates: [
      {
        src: getImagePath('/images/ceo-blaise-christian-certificate.jpg'),
        alt: 'CEO Blaise and Country Director Christian receiving Mboa Hub certificate',
        caption: 'Recognition for active participation in climate justice'
      }
    ]
  },
  // Revolutionary addition: Crisis response metrics
  crisisResponse: {
    title: "Humanitarian Crisis Response",
    context: "Addressing the ongoing Anglophone Crisis that has displaced 580,000+ people in Northwest and Southwest regions since 2017",
    impact: [
      "5,000+ displaced persons supported",
      "Educational continuity for children in conflict-affected regions",
      "Healthcare access improvement in off-grid communities",
      "Community resilience building through energy democracy"
    ],
    programs: [
      "DeWise Fellowship: Empowering displaced youth to propose community solutions",
      "Solar Bright Minds: Addressing educational infrastructure gap affecting 488,656 children",
      "Community engagement: Supporting 20+ communities across conflict-affected regions"
    ]
  },
  // Revolutionary addition: Innovation ecosystem
  innovationEcosystem: {
    title: "Cameroon's Innovation Ecosystem",
    context: "The country's innovation ecosystem has experienced 200% growth in entrepreneurship programs",
    opportunities: [
      "Multiple innovation hubs creating supportive environment for tech-enabled solutions",
      "UNESCO's parallel PUERTEM project successfully distributed solar kits to over 3,000 households",
      "Market receptivity for community solar solutions demonstrated",
      "Supportive environment for tech-enabled solutions"
    ]
  },
  // Revolutionary addition: Investment in youth
  youthInvestment: {
    title: "Investment in Youth Innovation",
    context: "Awarded over $5,000 in grants to support young innovators",
    impact: "Demonstrating concrete investment in youth empowerment beyond programmatic activities"
  }
}

export type ImageItem = { src: string; alt: string }


