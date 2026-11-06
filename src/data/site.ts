// All editable content lives here. Set `img` to a path like '/images/officers/grand-triskelion.webp'
// (files go in /public/images/...). Leave null to show a placeholder.
export const nav: [string, string][] = [
  ['Home', '/'], ['About Us', '/about'], ['Leadership', '/leadership'],
  ['Activities', '/activities'], ['Recruitment', '/recruitment'], ['Get in touch', '/contact'],
];

export const site = {
  name: 'Mindoro State University - Bongabong Chapter',
  org: 'ΤΓΦ',
  founded: 'July 27, 2007',
  hrsService: 300,
  foundedYear: 2007,
  address: 'Brgy. Labasan, Bongabong, Oriental Mindoro',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mindoro+State+University+Bongabong+Campus',
};

export const contact = {
  name: 'Gener Mercene',
  role: 'Information and Communication',
  img: '/images/officers/userIcon.webp' as string | null,
  email: 'minsu.triskelions@protonmail.com',
  phone: '09XX XXX XXXX',
  facebook: 'https://facebook.com/minsu.triskelion',
  hours: 'Monday to Friday',
};

export const heroImages = [
  '/images/hero/hero-1.webp',
  '/images/hero/hero-2.webp',
  '/images/hero/hero-3.webp',
  '/images/hero/hero-4.webp',
  '/images/hero/hero-5.webp',
  '/images/hero/hero-6.webp'

];

export const officers = [
  {
    position: 'Grand Triskelion',
    name: 'Robyn Kristoffer Fernandez',
    img: '/images/officers/gt.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Serves as the primary executive officer overseeing chapter affairs',
      'Presides over official executive meetings and general assemblies',
      'Represents the organization in school, community, and inter-chapter affairs',
      'Coordinates with committee leads on chapter projects and initiatives'
    ]
  },
  {
    position: 'Deputy Grand Triskelion',
    name: 'Ashly Fortu',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Assists the executive leadership in daily operations',
      'Performs presidential duties during the primary officer\'s absence',
      'Monitors progress on ongoing chapter programs and projects'
    ]
  },
  {
    position: 'Master Wielder of the Whip',
    name: 'Jorenz Selda',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Maintains order and decorum during official gatherings',
      'Promotes adherence to organization protocols and guidelines',
      'Ensures safety and structure across chapter events'
    ]
  },
  {
    position: 'Master Keeper of the Scroll',
    name: 'John Carlo Quintana',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Records and archives minutes of official meetings',
      'Maintains chapter records and administrative files',
      'Handles official chapter communications and notices'
    ]
  },
  {
    position: 'Master Keeper of the Chest',
    name: 'Reymart Quinto',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Manages chapter funds and financial accounts',
      'Tracks budget allocations, income, and operational expenses',
      'Provides regular financial summaries to the executive leadership'
    ]
  },
  /* Replace for future use
  {
    position: 'Chairman of Master Triskelion',
    name: 'Bro. XXX',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Provides general governance oversight for council operations',
      'Ensures organizational policies and guidelines are maintained',
      'Acts as a liaison to advisory and external bodies'
    ]
  },
  
  {
    position: 'Speaker of Master Triskelion',
    name: 'Bro. XXX',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Acts as the official spokesperson for public announcements',
      'Prepares external communications and media releases',
      'Assists leadership with public relations matters'
    ]
  },
  {
    position: 'Interior Affairs',
    name: 'Bro. XXX',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Coordinates internal administrative functions',
      'Oversees venue logistics and organization assets',
      'Facilitates internal communications among members'
    ]
  },
  {
    position: 'Education and Orientation',
    name: 'Bro. XXX',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Facilitates educational and onboarding programs for new members',
      'Promotes understanding of organizational principles and history',
      'Organizes skill-building workshops and member development'
    ]
  },
  {
    position: 'Membership and Verification',
    name: 'Bro. XXX',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Oversees membership application and intake processes',
      'Maintains up-to-date member registries',
      'Verifies member status and credentials when needed'
    ]
  },
  {
    position: 'Information and Communication',
    name: 'Bro. XXX',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Manages official social media channels and digital media',
      'Distributes organizational updates and digital content',
      'Supports general outreach and communication efforts'
    ]
  },
  {
    position: 'Alumni Affairs',
    name: 'Bro. XXX',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Serves as the liaison to alumni members and networks',
      'Maintains alumni contacts and relations',
      'Coordinates joint networking and alumni events'
    ]
  },
  {
    position: 'Special Projects',
    name: 'Bro. XXX',
    img: '/images/officers/replace.webp' as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Plans and manages special events and major activities',
      'Coordinates community service and outreach programs',
      'Leads fundraising and special promotional initiatives'
    ]
  }
    */

];

export interface Project {
  title: string;
  category: 'Academic' | 'Environmental' | 'Health' | 'Alumni' | 'Development' | 'Logistics' | 'Fraternal' | 'Civic' | 'Humanitarian' | 'Advocacy';
  date: string;
  place: string;
  img: string | null;
  text: string;
}

export const projects: Project[] = [
  {
    title: 'Indigenous Community Relief Assistance',
    category: 'Logistics',
    date: 'November 2026',
    place: 'Brgy. Lisap, Bongabong, Or. Mindoro',
    img: '/images/project/out1.webp',
    text: 'Assisted in the logistical preparation and loading of essential goods for distribution to the indigenous community of Brgy. Lisap, ensuring timely delivery and efficient allocation of relief resources.'
  },
  {
    title: 'Leadership Development',
    category: 'Fraternal',
    date: 'October 2026',
    place: 'Brgy. Labasan, Bongabong, Or. Mindoro',
    img: '/images/project/socio.webp',
    text: 'Conducted a 2-day Socio-Emotional Spiritual Fellowship focused on holistic well-being, empowering members to build internal strength, empathy, and purpose-driven leadership for community and fraternal service.'
  },
  {
    title: 'Fraternity Founding Anniversary',
    category: 'Fraternal',
    date: 'October 2026',
    place: 'Brgy. Labasan, Bongabong, Or. Mindoro',
    img: '/images/project/nationalAnn.webp',
    text: 'Commemorating the 58th founding anniversary of the organization, honoring its historic roots established on October 4, 1968, at UP Diliman, and celebrating a legacy of enduring brotherhood and community impact.'
  },
  {
    title: 'Free Meal Distribution Drive',
    category: 'Civic',
    date: 'September 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/camp1.webp',
    text: 'Partnered with the MinSU University Student Government (USG) to prepare and distribute free hot meals to students of the MinSU Bongabong Campus in support of student welfare.'
  },
  {
    title: 'Municipal Council Anniversary',
    category: 'Fraternal',
    date: 'August 2026',
    place: 'Brgy. Labasan, Bongabong, Or. Mindoro',
    img: '/images/project/counc.webp',
    text: 'Celebrating the council\'s rich history, upholding a commitment to brotherhood and community involvement, and commemorating years of impactful service.'
  },
  {
    title: 'Student Food Pack Distribution Drive',
    category: 'Humanitarian',
    date: 'August 2026',
    place: 'Brgy. Labasan, Bongabong, Or. Mindoro',
    img: '/images/project/augAct.webp',
    text: 'Collaborated with the University Student Government (USG) to distribute food packs directly to students residing in nearby boarding houses, reinforcing a culture of mutual care and community support.'
  },
  {
    title: '19th Founding Anniversary Freshmen Outreach',
    category: 'Civic',
    date: 'July 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/julAct.webp',
    text: 'Kicked off the chapter\'s 19th founding anniversary by volunteering to prepare, cook, and serve complimentary meals for incoming freshmen during their First Day Orientation, welcoming new students to the MinSU community.'
  },
  {
    title: 'Founding Anniversary Fellowship',
    category: 'Fraternal',
    date: 'July 2026',
    place: 'Brgy. Labasan, Bongabong, Or. Mindoro',
    img: '/images/project/chapAnn.webp',
    text: 'Commemorated the chapter\'s founding anniversary by celebrating its rich history, strengthening alumni network bonds, and fostering lifelong fraternal camaraderie.'
  },
  {
    title: 'Project: Campus Revive Volunteer Initiative',
    category: 'Civic',
    date: 'July 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/julAct2.webp',
    text: 'Participated in Project: Campus Revive, focusing on practical service, campus beautification, and strengthening camaraderie while improving university spaces for the student community.'
  },
  {
    title: 'Project Hapag: Final Examinations Support (Day 2)',
    category: 'Civic',
    date: 'May 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/actMay.webp',
    text: 'Extended service during the 2nd Day of Project Hapag in coordination with the University Student Government (USG) and the Office of Student Support and Engagement (OSSE), assisting in the preparation and distribution of free meals for students taking their final examinations.'
  },
  {
    title: 'Project Hapag: Final Examinations Support (Day 1)',
    category: 'Civic',
    date: 'May 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/actMay2.webp',
    text: 'Assisted the University Student Government (USG) and Office of Student Support and Engagement (OSSE) in preparing and distributing free lugaw and pandesal for Project Hapag, providing comfort and encouragement to students during their final examinations.'
  },
  {
    title: 'Mural Painting Competition Preparations Support',
    category: 'Advocacy',
    date: 'April 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/actApr.webp',
    text: 'Partnered with the University Student Government (USG) to assist in setting up and preparing the venue for the campus Mural Painting Competition, supporting student creativity, artistic expression, and campus collaboration.'
  },
  {
    title: 'Project Hapag: Nutritious Meal Distribution Drive',
    category: 'Civic',
    date: 'April 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/actApr2.webp',
    text: 'Collaborated with the University Student Government (USG), MBC Admission Scholarship Office, and campus officials to prepare and distribute nutritious lugaw and fresh pandesal in support of the student community.'
  },
  {
    title: 'RAATI 2026 Refreshment Service Drive',
    category: 'Civic',
    date: 'April 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/actApr3.webp',
    text: 'Assisted in preparing, cooking, and distributing free lugaw to support student cadet participants during the Regional Annual Administrative and Tactical Inspection (RAATI) 2026, fostering comfort, strength, and campus unity.'
  },
  {
    title: 'Intramurals Free Refreshment Station (Day 2)',
    category: 'Civic',
    date: 'March 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/actMarch.webp',
    text: 'Partnered with the University Student Government (USG) to provide an eco-friendly free refreshment station during campus Intramurals, encouraging the use of reusable cups and supporting student athletes and attendees.'
  },
  {
    title: 'Intramurals Free Refreshment Station (Day 1)',
    category: 'Civic',
    date: 'March 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/actMarch2.webp',
    text: 'Partnered with the University Student Government (USG) to launch a free refreshment station for campus Intramurals, distributing over 500 liters of water and juice to student athletes, attendees, and spectators.'
  },
  {
    title: 'Library Area Mural Site Preparation',
    category: 'Advocacy',
    date: 'March 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/actMarch3.webp',
    text: 'Responded to the call for volunteers by the Office of the Auxiliary & Physical Facilities to assist in ground leveling and site preparation for the library area mural project, enhancing campus spaces for the MinSU community.'
  },
  {
    title: "Valentine's Day Flower Distribution Drive",
    category: 'Advocacy',
    date: 'February 2026',
    place: 'Mindoro State University - Bongabong Campus',
    img: '/images/project/actFeb.webp',
    text: 'Handed out free flowers to faculty, staff, and students across campus in celebration of Valentine\'s Day, promoting appreciation and positivity within the MinSU community.'
  }
];

export const values = [
  [
    'Fortis',
    'The strength of Mind, Body, and Spirit. We fortify our minds through continuous learning, discipline our bodies through health, and anchor our spirits through an unshakeable faith in God to overcome all challenges.'
  ],
  [
    'Voluntas',
    'Purposeful freewill guided by moral principle. Bound by our Tenets and Codes of Conduct, we freely dedicate our individual talents and capabilities toward the betterment and honor of our Fraternity and community.'
  ],
  [
    'Fraternitas',
    'Universal brotherhood rooted in the principle that "Man is Brother unto Man." True camaraderie begins at home with our families, strengthens among fellow Triskelions, and extends as active service to society.'
  ],
];

export const steps = [
  [
    'Message Us',
    'Reach out through our Get in Touch page or official channels with your name and contact details to start your journey.'
  ],
  [
    'Know the Chapter & Vision',
    'Learn about our rich history, core tenets (Fortis, Voluntas, Fraternitas), and the vision of Tau Gamma Phi and our MinSU Bongabong Chapter.'
  ],
  [
    'Application Form',
    'Complete and submit your official membership application form along with your preliminary student details.'
  ],
  [
    'Assessment & Screening',
    'Undergo initial interviews and evaluation with chapter officers to ensure alignment with our values, discipline, and standards.'
  ],
  [
    'Pre-Orientation',
    'Attend the pre-orientation briefing to understand your duties, expectations, and the core responsibilities of a Triskelion.'
  ],
  [
    'Requirements Fulfillment',
    'Aspirants must be able to fulfill all chapter requirements needed.'],
];

export const requirements = [
  'Must be at least 18 years old upon application.',
  'Must be currently enrolled as a 1st Year, 2nd Year, or 3rd Year student with an official Certificate of Enrollment (COE) or Certificate of Registration (COR).',
  'Must be in good academic standing with passing marks and no back subjects.',
  'Must possess good moral character, demonstrating integrity, respect, and discipline both on and off campus.',
  'Must have no present or previous criminal record, pending legal cases, or institutional disciplinary convictions.',
  'Must not hold membership in any other fraternity or organization whose principles, tenets, or practices run contrary to Tau Gamma Phi.',
  'Must be fully willing to complete all prescribed orientation and membership processes of the Triskelion Grand Fraternity.'
];

export const benefits = [
  [
    'Lifelong Professional Network',
    'Connect with an active alumni and career network of professionals, leaders, and brods who mentor and support you in school, career placement, and life after graduation.'
  ],
  [
    'Executive Leadership Experience',
    'Gain hands-on skills in project management, team organization, public speaking, and crisis response by spearheading university initiatives and community projects.'
  ],
  [
    'Tangible Community Service',
    'Drive real social change in Oriental Mindoro through high-impact humanitarian outreach, environmental stewardship, and youth empowerment initiatives.'
  ],
];

export const faqs = [
  [
    'Who is eligible to join?',
    'Applicants must be at least 18 years old and fully meet all chapter membership criteria and academic requirements.'
  ],
  [
    'When is the next recruitment?',
    'Recruitment schedules are carefully aligned with the academic calendar and campus events to ensure students can prioritize their studies. Please message us directly for the latest schedule.'
  ],
  [
    'Is there a membership fee?',
    'No, joining the chapter is completely free of charge.'
  ],
  [
    'Can I visit before applying?',
    'Yes, prospective members are welcome to connect with us to learn more and ensure our organization aligns with your values and goals.'
  ],
];