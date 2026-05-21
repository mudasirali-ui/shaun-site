/**
 * Centralised data store for the entire site.
 * Keeping content separate from components makes the project
 * easy to maintain, localise and eventually CMS-drive.
 */

export const NAV_LINKS = [
  { label: 'About Shaun', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Training & Consulting', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

export const HERO = {
  eyebrow: 'Industrial Relations | Training | Consulting',
  headline: 'Clear Workplace Advice &',
  headlineAccent: 'People Centred Approach',
  description:
    '“I help organisations navigate complex workplace matters with confidence. From enterprise bargaining and compliance advice to workplace training and engagement, I provide strategic thinking and practical advice to workplace decision makers.”',
  pills: [
    'Fair Work Act advice',
    'WHS / OHS guidance',
    'Enterprise agreements',
    'Training facilitation',
    'Case management',
  ],
  card: {
    initials: 'ST',
    miniLabel: 'Current focus',
    title: 'Industrial Relations Advisor',
    text: 'Supporting organisations and teams with practical advice, confident case handling and credible communication in sensitive or high-stakes matters.',
    stats: [
      { value: '20', label: 'clients managed in advisory practice' },
      { value: '1000', label: 'union members supported' },
      { value: '20+', label: 'IR matters managed at once' },
      { value: '55+', label: 'volunteers and teams coordinated' },
    ],
  },
};

export const ABOUT = {
  tag: 'About Shaun',
  heading: 'Strategic Creative Problem Solving for Business',
  description:
    "Shaun's experience spans industrial relations advisory work, union organising, policy and research capability, operations leadership and facilitation. Shaun combines technical expertise with people skills to deliver consistent outcomes that matter.",
  cards: [
    {
      title: 'What sets me apart',
      body: 'I bring a unique ability to work across compliance, workplace investigations, legal support, enterprise bargaining, member advocacy, volunteer coordination and strategic planning. This breadth allows me to translate complex workplace issues into practical, trusted advice that organisations can act on immediately.',
    },
    {
      title: 'Core strengths',
      listItems: [
        'Commercial judgement anchored in compliance and risk awareness',
        'Confident stakeholder communication across varied audiences',
        'Strong facilitation style for training, coaching and workshops',
        'Ability to balance policy detail with practical implementation',
      ],
    },
  ],
};

export const SKILLS = [
  {
    title: 'Industrial relations & compliance',
    body: 'Expert advice across Fair Work Act matters, WHS / OHS obligations, discrimination related issues, investigations and workplace risk.',
    icon: 'shield',
  },
  {
    title: 'Case management & problem solving',
    body: 'Skilled at managing multiple active matters simultaneously while coordinating with legal and paralegal support teams.',
    icon: 'briefcase',
  },
  {
    title: 'Enterprise bargaining & negotiation',
    body: 'Proven experience supporting enterprise agreement negotiations and driving favourable outcomes for all stakeholders.',
    icon: 'handshake',
  },
  {
    title: 'Training & facilitation',
    body: 'Designed and delivered delegate training, group facilitation and practical capability building for diverse audiences.',
    icon: 'presentation',
  },
  {
    title: 'Research & analytical thinking',
    body: 'Deep strength in policy, industry and wellbeing research, strategic analysis and evidence based recommendations.',
    icon: 'search',
  },
  {
    title: 'Project & stakeholder management',
    body: 'Comfortable working across clients, members, volunteers, suppliers, delegates, communities and leadership stakeholders.',
    icon: 'users',
  },
];

export const HIGHLIGHTS = [
  {
    title: '20-client advisory portfolio',
    body: 'Strategic compliance advice delivered across multiple active client relationships simultaneously.',
  },
  {
    title: '1,000 union members supported',
    body: 'Managed complex matters while delivering advocacy and issue resolution support at scale.',
  },
  {
    title: 'Training and leadership delivery',
    body: 'Coordinated teams and volunteers while designing and facilitating impactful learning sessions.',
  },
];

export const EXPERIENCE = [
  {
    period: 'Mar 2022 to Present',
    role: 'Industrial Relations Advisor',
    company: 'Higgins and Maven',
    location: 'Melbourne / Hybrid Online',
    points: [
      'Manage a portfolio of 20 clients and provide strategic compliance advice.',
      'Advise on Fair Work Act 2009, WHS/OHS legislation and disability discrimination matters.',
      'Support investigations and case management with legal and paralegal teams.',
    ],
  },

  {
    period: 'Sep 2018 to Jul 2019',
    role: 'Organiser',
    company: 'National Union of Workers',
    location: 'Adelaide',
    points: [
      'Negotiated poultry enterprise agreements.',
      'Exceeded recruitment expectations through sector growth.',
      'Facilitated regular delegate training for union delegates.',
    ],
  },
  {
    period: 'Earlier roles',
    role: 'Student Liaison Officer, Operations Manager, Electoral Officer, Industrial Research Officer',
    company: '',
    location: 'Melbourne',
    points: [
      'Conducted research, supported campaigns and summarised policy, legal and political issues.',
      'Managed supplier, distribution and team operations.',
      'Coordinated volunteers and helped shape policy recommendations adopted later.',
    ],
  },
];

export const SERVICES = [
  {
    icon: '🎓',
    title: 'Industrial Relations Training',
    body: 'Custom sessions for delegates, leaders and teams on rights, obligations and practical workplace capability.',
  },
  {
    icon: '⚖️',
    title: 'Industrial Relations Case Management',
    body: 'Practical workplace advice, issue triage, risk-aware support and process guidance tailored to your organisation.',
  },
];

export const PRICING = [
  { label: 'Half day', price: '$500' },
  { label: 'Full day', price: '$800' },
  { label: 'Weekly rate', price: '$3,000' },
];

export const TESTIMONIALS = [
  {
    quote: 'Shaun provided exceptional guidance through a complex enterprise bargaining process. His advice was practical, strategic and delivered with confidence.',
    author: 'Operations Director',
    company: 'Manufacturing Sector',
  },
  {
    quote: 'The training sessions Shaun delivered for our delegate team were outstanding. He has a rare ability to make complex IR concepts accessible and actionable.',
    author: 'HR Manager',
    company: 'Retail Industry',
  },
  {
    quote: 'Working with Shaun transformed how we approach workplace compliance. He brings calm authority to high-pressure situations and always delivers results.',
    author: 'General Manager',
    company: 'Professional Services',
  },
];

export const CONTACT = {
  heading: "Let's talk about your workplace, team or training needs",
  description:
    'Based in Melbourne and available for hybrid or online consulting, advisory and training work. I respond within 24 hours.',
  email: 'shaun@taliana.com.au',
  phone: '0481 776 855',
  location: 'Melbourne or Online',
};

