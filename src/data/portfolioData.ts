import { Project, SkillCategory, Experience, Education, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'CLENT ARCHIN PARAS',
  preferredName: 'Clent Paras',
  title: 'React Native & Cross-Platform Mobile Engineer',
  tagline: 'Engineering 60FPS, fluid mobile experiences and scalable cloud backends across iOS & Android.',
  email: 'c.paras.147520.tc@umindanao.edu.ph',
  location: 'Davao City, Philippines',
  institution: 'University of Mindanao',
  availableForHire: true,
  statusMessage: 'Available for Mobile Apps & High-Performance Contracts',
  about: `I am Clent Archin Paras, a dedicated Software Engineer specializing in React Native, Expo, and modern full-stack architectures. With a strong computer studies foundation from the University of Mindanao, I bridge smooth native device capabilities (sensors, background tasks, haptics, camera, local SQLite) with robust cloud backends to deliver production-grade applications that users love.`,
  stats: [
    { label: 'Years Mobile Experience', value: '4+' },
    { label: 'Production Apps Delivered', value: '25+' },
    { label: 'Crash-Free Session Rate', value: '99.8%' },
    { label: 'GitHub Contributions', value: '1,400+' },
  ],
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:c.paras.147520.tc@umindanao.edu.ph',
  },
  quickStack: [
    'React Native',
    'Expo',
    'TypeScript',
    'Reanimated 3',
    'NativeWind',
    'Node.js',
    'Zustand',
    'Firebase/Supabase'
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'pulsefit-mobile',
    title: 'PulseFit Track',
    tagline: 'High-performance fitness tracker with offline-first SQLite sync and real-time Reanimated charts',
    description: 'A native iOS & Android health companion featuring continuous background step and GPS trajectory logging, heart-rate telemetry streaming via Bluetooth LE, and hardware-accelerated 60FPS gesture-driven metrics with React Native Skia.',
    category: 'Mobile',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1510519138197-06b8628cbf62?w=800&auto=format&fit=crop&q=80',
    mockupScreens: [
      'https://images.unsplash.com/photo-1510519138197-06b8628cbf62?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=80'
    ],
    technologies: ['React Native', 'Expo SDK 52', 'Reanimated 3', 'TypeScript', 'React Native Skia', 'SQLite', 'NativeWind'],
    metrics: [
      { label: 'Render Rate', value: '60 FPS' },
      { label: 'Active Users', value: '18.4K' },
      { label: 'Offline Sync Speed', value: '< 120ms' },
    ],
    architectureHighlights: [
      'Zero-jank UI thread animations via React Native Reanimated 3 worklets',
      'Local-first persistence using SQLite with optimistic cloud sync engine',
      'Custom iOS HealthKit and Android Health Connect bridges',
      'Dynamic battery-efficient GPS geofencing background tasks'
    ],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#simulator',
    codeSnippet: {
      filename: 'useBiometricTelemetry.ts',
      language: 'typescript',
      code: `import { useEffect, useState } from 'react';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';

export function useBiometricTelemetry() {
  const heartRate = useSharedValue(72);
  const [isRecording, setIsRecording] = useState(false);

  const startWorkoutSession = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsRecording(true);
    // Worklet animation for pulse telemetry
    heartRate.value = withSpring(142, { damping: 12, stiffness: 90 });
  };

  return { heartRate, isRecording, startWorkoutSession };
}`
    }
  },
  {
    id: 'omnishop-go',
    title: 'OmniShop Go',
    tagline: 'Modern M-Commerce mobile app with instant Stripe checkout & native gesture interactions',
    description: 'An enterprise-ready shopping application engineered with instant search, shared element transitions between catalog and product detail screens, Apple Pay / Google Pay integration, and automated order push notifications.',
    category: 'Mobile',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
    mockupScreens: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80'
    ],
    technologies: ['React Native', 'Stripe PaymentSheet', 'Zustand', 'NativeWind v4', 'FlashList', 'React Query'],
    metrics: [
      { label: 'Checkout Time', value: '1.8s' },
      { label: 'List Performance', value: '10K items @ 60FPS' },
      { label: 'Conversion Lift', value: '+34%' }
    ],
    architectureHighlights: [
      'Shopify & Custom REST API backend connector with optimistic caching',
      'FlashList virtualization for infinite product catalogs without memory spikes',
      'Interactive spring-based bottom-sheet checkout with Stripe Native SDK',
      'Frictionless one-tap biometric authentication'
    ],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#simulator',
    codeSnippet: {
      filename: 'CartSheet.tsx',
      language: 'tsx',
      code: `import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useCartStore } from '../store/cart';
import { presentPaymentSheet } from '@stripe/stripe-react-native';

export const CheckoutButton: React.FC = () => {
  const { total, clearCart } = useCartStore();

  const handleCheckout = async () => {
    const { error } = await presentPaymentSheet();
    if (!error) {
      clearCart();
    }
  };

  return (
    <TouchableOpacity 
      onPress={handleCheckout} 
      className="bg-cyan-500 py-4 rounded-2xl items-center shadow-lg active:scale-98"
    >
      <Text className="text-slate-950 font-bold text-base">
        Pay \${total.toFixed(2)} with 1-Tap
      </Text>
    </TouchableOpacity>
  );
};`
    }
  },
  {
    id: 'umindanao-connect',
    title: 'UMindanao Campus Connect',
    tagline: 'Student academic portal, schedule organizer & QR event attendance system',
    description: 'Designed for the University of Mindanao community to streamline student class schedules, real-time grade notifications, campus news bulletins, offline library access, and ultra-fast optical QR verification for campus entry and events.',
    category: 'Enterprise',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    mockupScreens: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80'
    ],
    technologies: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'Expo Camera / Barcode', 'Biometrics'],
    metrics: [
      { label: 'Student Users', value: '12,500+' },
      { label: 'Scan Verification', value: '45ms' },
      { label: 'Crash Rate', value: '0.01%' }
    ],
    architectureHighlights: [
      'High-speed encrypted offline QR badge generation with anti-screenshot watermarking',
      'Push notification dispatch engine powered by Expo EAS and Firebase Cloud Messaging',
      'Role-based access matrix for students, department faculty, and campus security',
      'Offline schedule synchronization with automatic cache invalidation'
    ],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#simulator'
  },
  {
    id: 'native-ui-motion-kit',
    title: 'NativeUI Motion Kit',
    tagline: 'Open-source 60FPS fluid physics & component library for React Native applications',
    description: 'A modular, highly accessible React Native and Expo component ecosystem featuring spring physics drawers, liquid swipe cards, dynamic segmented headers, and customizable haptic integrations.',
    category: 'Open Source',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    mockupScreens: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80'
    ],
    technologies: ['TypeScript', 'Reanimated 3', 'Gesture Handler', 'Rollup', 'NativeWind', 'Jest'],
    metrics: [
      { label: 'Weekly NPM DLs', value: '6.2K+' },
      { label: 'GitHub Stars', value: '420+' },
      { label: 'Bundle Size', value: '< 14kb' }
    ],
    architectureHighlights: [
      'Strict TypeScript declarations with auto-complete props and theme token overrides',
      'Native driver acceleration ensuring zero dropped frames even during heavy CPU load',
      'Full accessibility (A11y) labels and screen-reader focus traps',
      'Cross-platform parity across iOS, Android, and React Native Web'
    ],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#playground'
  },
  {
    id: 'devpulse-chat',
    title: 'DevPulse Messenger',
    tagline: 'End-to-end encrypted mobile chat with live voice notes & collaborative code sharing',
    description: 'A developer-first mobile communication app with syntax-highlighted code snippets, waveform audio visualizer, real-time message delivery receipts, and WebRTC peer voice calls.',
    category: 'Mobile',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    mockupScreens: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80'
    ],
    technologies: ['React Native', 'Supabase Realtime', 'WebRTC', 'Expo Audio', 'Zustand', 'Tailwind'],
    metrics: [
      { label: 'Latency', value: '< 40ms' },
      { label: 'Audio Quality', value: 'HD Opus' },
      { label: 'Encryption', value: 'AES-256 GCM' }
    ],
    architectureHighlights: [
      'Real-time WebSocket subscriptions with automatic reconnect backoff',
      'Native audio record and playback with dynamic decibel meter animations',
      'Image and attachment compression pipelines before cloud storage upload'
    ],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#simulator'
  },
  {
    id: 'foodiedash-maps',
    title: 'FoodieDash Dispatch',
    tagline: 'On-demand food delivery with real-time GPS driver tracking and live route updates',
    description: 'Comprehensive cross-platform delivery app pairing customers, restaurants, and riders with live polyline map navigation, estimated time of arrival calculations, and instant chat.',
    category: 'Full-Stack',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80',
    mockupScreens: [
      'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80'
    ],
    technologies: ['React Native Maps', 'Google Directions API', 'Node.js', 'Socket.io', 'PostGIS', 'Redux Toolkit'],
    metrics: [
      { label: 'Rider ETA Accuracy', value: '96.4%' },
      { label: 'Concurrent Orders', value: '5,000+' },
      { label: 'Map FPS', value: 'Solid 60' }
    ],
    architectureHighlights: [
      'Smooth vehicle marker interpolation along coordinates with bearing rotation',
      'Background geolocation tracking with battery optimization algorithms',
      'Integrated payment gateways with split payouts for merchant & courier'
    ],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#simulator'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Mobile & React Native',
    icon: 'Smartphone',
    skills: [
      { name: 'React Native', level: 98, experience: '4+ yrs', highlight: true, description: 'Deep architecture knowledge, New Architecture (TurboModules & Fabric), bridge optimization, performance profiling.' },
      { name: 'Expo & EAS', level: 95, experience: '3.5+ yrs', highlight: true, description: 'Config plugins, EAS Build/Submit pipelines, OTA updates, custom development clients, Expo Router.' },
      { name: 'TypeScript', level: 96, experience: '4+ yrs', highlight: true, description: 'Strict typing, generic components, type-safe navigation, immutable state patterns.' },
      { name: 'Reanimated 3 & Gesture Handler', level: 94, experience: '3+ yrs', highlight: true, description: 'UI-thread worklets, physics spring animations, shared transitions, pinch/pan gestures.' },
      { name: 'React Native Skia', level: 86, experience: '2 yrs', description: '2D canvas rendering, shader effects, custom graphs, path morphing, SVG pipelines.' },
      { name: 'Native iOS & Android Basics', level: 82, experience: '2.5 yrs', description: 'Xcode configurations, Android Gradle, CocoaPods, custom Swift & Kotlin native modules.' }
    ]
  },
  {
    title: 'State, Data & Networking',
    icon: 'Database',
    skills: [
      { name: 'Zustand & Redux Toolkit', level: 95, experience: '4 yrs', highlight: true, description: 'Normalized stores, persistent local caches, selectors, atomic state slices.' },
      { name: 'TanStack React Query', level: 94, experience: '3 yrs', highlight: true, description: 'Optimistic updates, background re-fetching, offline query persistence, pagination.' },
      { name: 'SQLite & WatermelonDB', level: 90, experience: '3 yrs', description: 'Local relational databases, high-speed multi-record synchronization, indexing.' },
      { name: 'REST & GraphQL APIs', level: 92, experience: '4 yrs', description: 'Apollo Client, Axios interceptors, JWT refresh token rotation, mock schemas.' },
      { name: 'WebSockets & WebRTC', level: 88, experience: '2.5 yrs', description: 'Real-time event transport, live voice/video streaming, socket connection recovery.' }
    ]
  },
  {
    title: 'Styling & Design Systems',
    icon: 'Palette',
    skills: [
      { name: 'Tailwind CSS / NativeWind', level: 98, experience: '3.5 yrs', highlight: true, description: 'Design tokens, dark/light theme switching, responsive utility layouts, custom plugins.' },
      { name: 'Figma to Code Translation', level: 92, experience: '4 yrs', description: 'Pixel-perfect UI replication, auto-layout mapping, design token extraction.' },
      { name: 'Component Architecture', level: 96, experience: '4 yrs', highlight: true, description: 'Compound components, design system tokens, headless accessible UI.' }
    ]
  },
  {
    title: 'Backend, Cloud & DevOps',
    icon: 'Cloud',
    skills: [
      { name: 'Node.js & Express', level: 90, experience: '3.5 yrs', description: 'REST API architectures, middleware authentication, stream processing, microservices.' },
      { name: 'Firebase & Supabase', level: 94, experience: '3.5 yrs', highlight: true, description: 'Firestore rules, Auth, Edge Functions, real-time database triggers, cloud storage.' },
      { name: 'PostgreSQL & MongoDB', level: 88, experience: '3 yrs', description: 'Relational modeling, indexing, Prisma ORM, Drizzle ORM, ACID transactions.' },
      { name: 'EAS & Fastlane CI/CD', level: 90, experience: '3 yrs', description: 'Automated test suites, App Store & Google Play automated release pipelines.' },
      { name: 'Git & Version Control', level: 95, experience: '4+ yrs', description: 'GitFlow, trunk-based development, semantic commits, PR reviews.' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior React Native Developer',
    company: 'ApexMobile Engineering Labs',
    location: 'Remote / Philippines',
    period: '2024 - Present',
    current: true,
    type: 'Full-time',
    description: [
      'Lead architecture and cross-platform mobile development for high-traffic consumer and fintech applications on iOS & Android.',
      'Reduced mobile app cold start times by 42% through React Native TurboModules migration and FlashList adoption.',
      'Implemented automated CI/CD deployment pipelines using Expo EAS and Fastlane, shipping weekly release builds seamlessly.'
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Reanimated 3', 'Zustand', 'NativeWind', 'EAS'],
    achievements: [
      'Maintained 99.9% crash-free sessions across 100K+ combined monthly active users.',
      'Mentored 6 junior and mid-level developers in React Native best practices and unit testing.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Full-Stack Mobile Engineer',
    company: 'ByteForge Digital Solutions',
    location: 'Davao City, Philippines',
    period: '2022 - 2024',
    current: false,
    type: 'Full-time',
    description: [
      'Developed and deployed 10+ custom mobile and web applications for enterprise clients across healthcare, retail, and education.',
      'Engineered offline-first data synchronization layers utilizing SQLite, TanStack Query, and WebSocket subscriptions.',
      'Integrated biometric authentication, in-app payments (Stripe/PayMongo), and custom camera scanning modules.'
    ],
    techStack: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'Firebase', 'Redux Toolkit'],
    achievements: [
      'Delivered client applications with an average App Store rating of 4.8 / 5.0.',
      'Engineered a reusable UI boilerplate that cut project kickoff turnaround by 35%.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Mobile Software Developer & Researcher',
    company: 'UMindanao Tech Innovation Hub',
    location: 'Davao City, Philippines',
    period: '2021 - 2022',
    current: false,
    type: 'Academic',
    description: [
      'Architected the mobile student engagement application and QR credential verification system for university events.',
      'Conducted mobile benchmark research on low-spec Android devices to ensure accessibility and smooth UI frame rates.'
    ],
    techStack: ['React Native', 'Expo', 'JavaScript', 'Node.js', 'PostgreSQL', 'Socket.io'],
    achievements: [
      'Deployed application to 12,000+ student body with zero downtime during peak university registration events.'
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    institution: 'University of Mindanao',
    degree: 'Bachelor of Science in Information Technology / Computer Studies',
    location: 'Davao City, Philippines',
    period: '2020 - 2024',
    highlights: [
      'Specialized in Mobile Computing, Distributed Software Engineering, and Database Architecture.',
      'President / Lead Member of the University Mobile Developers Student Chapter.',
      'Conducted Capstone Project on High-Speed Cross-Platform Campus Infrastructure.'
    ],
    gpaOrHonors: 'Academic Excellence & Innovation Award'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Engr. Marco Santos',
    role: 'Head of Mobile Engineering',
    company: 'ApexMobile Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'Clent is one of the sharpest React Native engineers I have had the pleasure to work with. His mastery of Reanimated, native bridges, and performance profiling transformed our mobile apps into silky smooth 60FPS experiences.',
    rating: 5,
    relation: 'Team Lead & Manager'
  },
  {
    id: 't-2',
    name: 'Sarah Jenkins',
    role: 'Product Director',
    company: 'OmniGlobal Commerce',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    content: 'Working with Clent on our m-commerce mobile release was effortless. He delivers pixel-perfect layouts, proactively solves edge cases with offline caching, and consistently meets tight launch deadlines.',
    rating: 5,
    relation: 'Product Lead on OmniShop'
  },
  {
    id: 't-3',
    name: 'Prof. David Villanueva',
    role: 'Faculty Dean & IT Department Head',
    company: 'University of Mindanao',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'Clent has always demonstrated exceptional initiative, technical prowess, and collaborative leadership during his time at University of Mindanao. His real-world application architectures set a high benchmark for fellow students.',
    rating: 5,
    relation: 'Academic Advisor'
  }
];
