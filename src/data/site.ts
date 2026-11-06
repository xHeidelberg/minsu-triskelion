// All editable content lives here. Set `img` to a path like '/images/officers/grand-triskelion.jpg'
// (files go in /public/images/...). Leave null to show a placeholder.
export const nav: [string, string][] = [
  ['Home', '/'], ['About Us', '/about'], ['Leadership', '/leadership'],
  ['Projects', '/projects'], ['Recruitment', '/recruitment'], ['Get in touch', '/contact'],
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
  img: null as string | null,
  email: 'minsu.triskelions@protonmail.com',
  phone: '09XX XXX XXXX',
  facebook: 'https://facebook.com/minsu.triskelion',
  hours: 'Monday to Friday',
};

export const heroImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg',
  '/images/hero/hero-5.jpg',
  '/images/hero/hero-6.jpg'

];

export const officers = [
  {
    position: 'Grand Triskelion',
    name: 'Robyn Kristoffer Fernandez',
    img: '/images/officers/gt.png' as string | null,
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
    img: null as string | null,
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
    img: null as string | null,
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
    img: null as string | null,
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
    img: null as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Manages chapter funds and financial accounts',
      'Tracks budget allocations, income, and operational expenses',
      'Provides regular financial summaries to the executive leadership'
    ]
  },
  {
    position: 'Chairman of Master Triskelion',
    name: 'Bro. XXX',
    img: null as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Provides general governance oversight for council operations',
      'Ensures organizational policies and guidelines are maintained',
      'Acts as a liaison to advisory and external bodies'
    ]
  },
  // MASTER TRISKELION
  {
    position: 'Speaker of Master Triskelion',
    name: 'Bro. XXX',
    img: null as string | null,
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
    img: null as string | null,
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
    img: null as string | null,
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
    img: null as string | null,
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
    img: null as string | null,
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
    img: null as string | null,
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
    img: null as string | null,
    term: 'Term: Academic Year 2026-2027',
    duties: [
      'Plans and manages special events and major activities',
      'Coordinates community service and outreach programs',
      'Leads fundraising and special promotional initiatives'
    ]
  }

];

export const projects = [
  {
    title: 'Community outreach', category: 'Community service', date: 'Month Year', place: 'Bongabong, Or. Mindoro', img: null as string | null,
    text: 'Replace with a short summary of the activity, who it helped, and how many brods took part.'
  },
  {
    title: 'Tree planting', category: 'Community service', date: 'Month Year', place: 'Bongabong, Or. Mindoro', img: null as string | null,
    text: 'Replace with a short summary of the activity, who it helped, and how many brods took part.'
  },
  {
    title: 'Blood donation drive', category: 'Community service', date: 'Month Year', place: 'MinSU Bongabong', img: null as string | null,
    text: 'Replace with a short summary of the activity, who it helped, and how many brods took part.'
  },
  {
    title: 'Leadership seminar', category: 'Education', date: 'Month Year', place: 'MinSU Bongabong', img: null as string | null,
    text: 'Replace with a short summary of the topic, the speakers, and who attended.'
  },
  {
    title: 'Anniversary celebration', category: 'Brotherhood', date: 'July 27', place: 'Brgy. Labasan', img: null as string | null,
    text: 'Replace with a short summary of how the chapter celebrates its founding every year.'
  },
  {
    title: 'Sports fest', category: 'Brotherhood', date: 'Month Year', place: 'MinSU Bongabong', img: null as string | null,
    text: 'Replace with a short summary of the games and who took part.'
  },

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