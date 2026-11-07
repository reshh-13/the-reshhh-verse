export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  shortDescription: string;
  overview: string;
  problem: string;
  implementation: string;
  keyFeatures: string[];
  toolsAndTechnologies: string[];
  contribution: string;
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  accentColor: string;
  badgeBg: string;
  status: string;
}

export const projectsData: ProjectData[] = [
  {
    id: 'silent-voice',
    number: '01',
    title: 'SilentVoice',
    subtitle: 'ASL Sign Language Translator',
    category: 'COMPUTER VISION // ACCESSIBILITY',
    shortDescription: 'Real-time American Sign Language translator translating dynamic hand gestures into speech and text using computer vision & deep learning.',
    overview: 'SilentVoice is an accessibility engineering initiative designed to bridge the communication barrier between the Deaf community and the hearing world. Using standard webcams, the system extracts hand landmarks and skeletal pose data, passing sequential frames through deep learning models to translate continuous ASL gestures into visual captions and synthesized speech in real time.',
    problem: 'Over 70 million Deaf and hard-of-hearing individuals worldwide face persistent daily communication barriers in public services, education, and healthcare due to the severe scarcity and high cost of certified human sign language interpreters.',
    implementation: 'Engineered a real-time computer vision pipeline utilizing MediaPipe 21-point 3D hand tracking coupled with an optimized temporal deep learning classifier. The system extracts geometric vector trajectories across temporal windows and synthesizes instant text captions with low-latency speech output over WebSockets.',
    keyFeatures: [
      '21-point 3D hand landmark extraction and spatial vector tracking',
      'Continuous dynamic sign gesture classification with temporal windowing',
      'Instant text-to-speech synthesis and visual translation captions',
      'Low-latency client-server architecture built for low-spec hardware'
    ],
    toolsAndTechnologies: ['Python', 'OpenCV', 'MediaPipe', 'Deep Learning', 'TensorFlow', 'WebSockets', 'Next.js', 'TypeScript'],
    contribution: 'Architected the real-time landmark tracking pipeline, integrated deep learning inference with WebSocket streaming, and built the responsive camera HUD interface.',
    githubUrl: 'https://github.com/reshh-13',
    demoUrl: 'https://github.com/reshh-13',
    image: '/images/projects/silentvoice.svg',
    accentColor: '#20C9E8',
    badgeBg: 'bg-[#20C9E8]/20 text-[#20C9E8] border-[#20C9E8]/40',
    status: 'ACTIVE RESEARCH'
  },
  {
    id: 'restore-iq',
    number: '02',
    title: 'RestoreIQ',
    subtitle: 'AI Heritage Restoration Support',
    category: 'COMPUTER VISION // HERITAGE PRESERVATION',
    shortDescription: 'Intelligent heritage restoration decision-support platform analyzing artifact damage, predicting degradation, and proposing generative inpainting.',
    overview: 'RestoreIQ aids museum conservators, cultural heritage institutions, and archaeologists by generating digital twins of deteriorating physical artifacts. The platform evaluates surface cracks, erosion, and chromatic fading using generative visual models while cataloging physical preservation history in a curator ledger.',
    problem: 'Museum conservators lack standardized automated tools to quantify micro-fractures, structural degradation, and historical weathering on delicate archaeological artifacts, making physical restoration risky, subjective, and prone to irreversible damage.',
    implementation: 'Constructed an AI-powered diagnostic suite that combines multi-spectral crack segmentation with guided latent diffusion models for restorative inpainting proposals. Features automated condition scoring, degradation timelines, and a tamper-evident curator ledger documenting every conservation action.',
    keyFeatures: [
      'Multi-spectral surface damage segmentation and crack analysis',
      'Context-aware generative inpainting for missing archaeological fragments',
      'Preservation condition scoring and degradation timeline projection',
      'Curator annotation ledger with exportable museum conservation reports'
    ],
    toolsAndTechnologies: ['PyTorch', 'Computer Vision', 'Generative Inpainting', 'FastAPI', 'React', 'Tailwind CSS', 'Python'],
    contribution: 'Trained crack segmentation models, engineered automated degradation scoring algorithms, and designed the interactive digital restoration comparison canvas.',
    githubUrl: 'https://github.com/reshh-13',
    demoUrl: 'https://github.com/reshh-13',
    image: '/images/projects/restoreiq.svg',
    accentColor: '#F42B70',
    badgeBg: 'bg-[#F42B70]/20 text-[#F42B70] border-[#F42B70]/40',
    status: 'RESEARCH PROTOTYPE'
  },
  {
    id: 'annadatha-ai',
    number: '03',
    title: 'Annadatha AI',
    subtitle: 'AI & Agriculture',
    category: 'AGRI-TECH // COMPUTER VISION',
    shortDescription: 'Intelligent agricultural support system combining leaf disease detection, weather analytics, and sustainable harvest guidance.',
    overview: 'Annadatha AI empowers smallholder farmers with automated plant pathology right from their smartphones. By analyzing photos of afflicted leaves, the platform identifies bacterial, fungal, and pest diseases early, recommending organic and chemical countermeasures alongside microclimate weather forecasting.',
    problem: 'Smallholder farmers lose up to 40% of crop yields annually to preventable plant diseases due to delayed diagnosis, lack of localized agronomist guidance, and pesticide misuse, driving severe financial vulnerability.',
    implementation: 'Developed an edge-friendly convolutional neural network model trained on thousands of plant pathology specimens. The system diagnoses disease severity directly through mobile web browsers, generates vernacular recommendations prioritizing low-cost organic remedies, and integrates hyperlocal rain forecasts.',
    keyFeatures: [
      'Instant leaf disease identification with severity classification',
      'Multilingual treatment advisories prioritizing low-cost organic remedies',
      'Hyperlocal rainfall and soil moisture forecasting integrations',
      'Farmer query assistant designed with voice-friendly interfaces'
    ],
    toolsAndTechnologies: ['Python', 'Convolutional Neural Networks (CNN)', 'FastAPI', 'Mobile Web', 'Weather API', 'Leaflet', 'Tailwind CSS'],
    contribution: 'Engineered leaf pathology image preprocessing pipeline, trained CNN classification models, and developed the intuitive multilingual voice advisory interface.',
    githubUrl: 'https://github.com/reshh-13',
    demoUrl: 'https://github.com/reshh-13',
    image: '/images/projects/annadatha.svg',
    accentColor: '#FFD600',
    badgeBg: 'bg-[#FFD600]/20 text-[#FFD600] border-[#FFD600]/40',
    status: 'DEPLOYED TRIAL'
  },
  {
    id: 'hostel-grievance-hub',
    number: '04',
    title: 'Hostel Grievance Hub',
    subtitle: 'Full-stack Complaint Management',
    category: 'FULL-STACK // CAMPUS INFRASTRUCTURE',
    shortDescription: 'Comprehensive campus grievance management platform featuring role-based ticket lifecycles, warden escalation matrices, and resolution analytics.',
    overview: 'Built to replace inefficient manual complaint registers in university hostels. The platform empowers residents to log categorized maintenance grievances (electrical, plumbing, Wi-Fi, hygiene), upload photo proof, track real-time resolution stages, and allows wardens to monitor maintenance SLAs.',
    problem: 'Traditional paper hostel grievance registries lead to lost requests, zero accountability for repair technicians, prolonged unresolved outages, and student frustration without transparent resolution tracking.',
    implementation: 'Designed and deployed an end-to-end full stack web application featuring role-based access tiers (Student, Floor Warden, Chief Warden, Technician), a strict state-machine ticket pipeline (Reported → Assigned → In-Progress → Resolved), automated SLA countdown escalation timers, and facility incident metrics.',
    keyFeatures: [
      'Role-based access tiers for Students, Floor Wardens, and Maintenance Crews',
      'Automated SLA escalation timers for unaddressed urgent maintenance tickets',
      'Transparent status pipeline (Reported → Assigned → In-Progress → Resolved)',
      'Campus-wide facility analytics tracking recurring infrastructure failures'
    ],
    toolsAndTechnologies: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT Authentication'],
    contribution: 'Developed end-to-end full stack architecture, designed MongoDB schema for ticket state machines and escalation tiers, and created real-time warden dashboards.',
    githubUrl: 'https://github.com/reshh-13',
    demoUrl: 'https://github.com/reshh-13',
    image: '/images/projects/hostelhub.svg',
    accentColor: '#A47758',
    badgeBg: 'bg-[#A47758]/20 text-[#A47758] border-[#A47758]/40',
    status: 'CAMPUS PLATFORM'
  },
  {
    id: 'spot-connect',
    number: '05',
    title: 'SPOT CONNECT',
    subtitle: 'Campus Community Platform',
    category: 'MOBILE & WEB // EVENT NETWORKING',
    shortDescription: 'Real-time event coordination and peer-networking platform connecting attendees, speakers, schedules, and live interaction.',
    overview: 'SPOT CONNECT centralizes event agendas, interactive session Q&As, speaker profiles, and peer matchmaking into a single real-time platform. Attendees discover workshops, connect with peers sharing similar technical interests, and receive push updates for schedule changes.',
    problem: 'Large-scale collegiate symposiums and technical conferences suffer from fragmented communication, disengaged attendees, and lost networking opportunities between students, speakers, and industry mentors.',
    implementation: 'Built a responsive real-time event hub featuring interactive timetable management, live stage question upvoting, peer-to-peer interest matchmaking, and instant push notification broadcasts, ensuring maximum attendee engagement and seamless logistics.',
    keyFeatures: [
      'Interactive live schedule timeline with personalized session bookmarking',
      'Peer-to-peer interest matchmaking and attendee directory',
      'Real-time announcement broadcast & push alerts for schedule changes',
      'Live interactive Q&A upvoting during keynotes and panel discussions'
    ],
    toolsAndTechnologies: ['React', 'TypeScript', 'Node.js', 'Firebase', 'WebSockets', 'Tailwind CSS'],
    contribution: 'Designed responsive event directory and networking modules, implemented real-time schedule syncing, and built the interactive attendee interaction feed.',
    githubUrl: 'https://github.com/reshh-13',
    demoUrl: 'https://github.com/reshh-13',
    image: '/images/projects/spotconnect.svg',
    accentColor: '#6536D9',
    badgeBg: 'bg-[#6536D9]/20 text-[#6536D9] border-[#6536D9]/40',
    status: 'PRODUCTION SYSTEM'
  },
  {
    id: 'news-automation',
    number: '06',
    title: 'AI-Powered Multilingual News Automation System',
    subtitle: 'Automated Ingestion & Translation',
    category: 'GEN-AI // RPA & NLP PIPELINES',
    shortDescription: 'End-to-end intelligent news aggregation and dissemination platform combining RAG, NLP translation, and robotic process automation.',
    overview: 'The system automates the complete news lifecycle: RSS feeds and APIs are ingested, indexed via Retrieval-Augmented Generation (RAG) vector embeddings, summarized and translated into multiple regional languages using LLMs, and automatically formatted into curated email digests dispatched via UiPath RPA and SMTP automation.',
    problem: 'Consuming global tech news across languages requires tedious manual monitoring, multi-source verification, and language translation, causing critical information lag and human curation fatigue.',
    implementation: 'Engineered an autonomous intelligence pipeline combining RAG-based multi-source news indexing, LLM deduplication and summarization, neural regional translation across Indian languages, and scheduled robotic dispatch with UiPath and SMTP delivering curated morning digests to over 1,200 readers.',
    keyFeatures: [
      'Automated multi-source news scraping and vector indexing via RAG',
      'High-fidelity multilingual translation across regional languages',
      'LLM-driven executive summarization with sentiment and topic classification',
      'Scheduled robotic process automation (UiPath) & SMTP automated email digests'
    ],
    toolsAndTechnologies: ['Python', 'Retrieval-Augmented Generation (RAG)', 'UiPath RPA', 'Generative AI (LLMs)', 'NLP', 'SMTP Automation'],
    contribution: 'Engineered the RAG ingestion pipeline, integrated multilingual NLP translation models, and designed automated UiPath workflow routines for newsletter generation.',
    githubUrl: 'https://github.com/reshh-13',
    demoUrl: 'https://github.com/reshh-13',
    image: '/images/projects/newsautomation.svg',
    accentColor: '#20C9E8',
    badgeBg: 'bg-[#20C9E8]/20 text-[#20C9E8] border-[#20C9E8]/40',
    status: 'AUTOMATED PIPELINE'
  },
  {
    id: 'spotify-vinyl',
    number: '07',
    title: 'Spotify Vintage Vinyl Player',
    subtitle: 'Chrome Extension',
    category: 'BROWSER EXTENSION // CREATIVE UI',
    shortDescription: 'Interactive Chrome extension converting Spotify Web playback into a spinning 33/45 RPM turntable with analog needle tracking and scratch audio.',
    overview: 'A creative frontend and browser extension project built for audiophiles who appreciate physical media. The extension connects to the Spotify Web Player, dynamically generating spinning 33 RPM vinyl records styled with the currently playing album artwork, analog tonearm needle tracking, and synthesized crackle audio.',
    problem: 'Modern digital music streaming platforms offer vast libraries but lack the tactile warmth, visual personality, and physical nostalgia of analog turntables and vinyl records.',
    implementation: 'Built a Manifest V3 Chrome Extension utilizing DOM mutation observers to detect Spotify Web track changes. Dynamically generates spinning vinyl records with canvas-rendered grooves, extracts dominant color palettes from album covers, and generates realistic surface noise through the Web Audio API.',
    keyFeatures: [
      'Interactive 33/45 RPM turntable physics with dragging needle cueing',
      'Real-time extraction of dominant album palette for custom vinyl disc artwork',
      'Synthesized analog surface crackle & tactile scratch acoustic layer',
      'Sleek floating retro UI overlay that integrates with Spotify Web'
    ],
    toolsAndTechnologies: ['JavaScript', 'Chrome Extension API (Manifest V3)', 'Web Audio API', 'HTML5 Canvas', 'CSS 3D Transforms', 'Tailwind CSS'],
    contribution: 'Engineered Chrome Extension content script architecture, implemented Web Audio API synthesized analog crackle filters, and built responsive 3D spinning vinyl record animation.',
    githubUrl: 'https://github.com/reshh-13',
    demoUrl: 'https://github.com/reshh-13',
    image: '/images/projects/spotifyvinyl.svg',
    accentColor: '#1DB954',
    badgeBg: 'bg-[#1DB954]/20 text-[#1DB954] border-[#1DB954]/40',
    status: 'PUBLIC EXTENSION'
  },
  {
    id: 'shapeshift',
    number: '08',
    title: 'ShapeShift',
    subtitle: 'Unity Game',
    category: 'GAME DEVELOPMENT // UNITY 3D',
    shortDescription: 'Physics-based puzzle-platformer where players dynamically morph between geometric forms to navigate gravity-defying obstacle chambers.',
    overview: 'ShapeShift is a creative physics-driven puzzle platformer created with Unity and C#. Players control a morphing entity that can instantly switch between Sphere, Cube, and Triangular Prism forms—each with distinct mass, friction, and aerodynamic properties—to solve complex obstacle courses and momentum puzzles.',
    problem: 'Conventional puzzle-platformers often rely on static character abilities, missing the emergent physics gameplay that comes from real-time mass, inertia, and aerodynamic transformations.',
    implementation: 'Engineered player controller scripts in C# utilizing Unity\'s Rigidbody physics system. Designed dynamic shape-shifting mechanics that swap meshes, colliders, and physics materials at runtime, complete with particle transformation bursts, responsive camera tracking, and custom level hazard logic.',
    keyFeatures: [
      'Dynamic real-time geometric transformation (Sphere, Cube, Triangular Prism)',
      'Form-dependent physics simulation: Sphere (speed & rolling), Cube (heavy smash & pressure plates), Prism (aerodynamic ramp jumps)',
      'Obstacle course puzzles involving laser grids, gravity fields, and timed switches',
      'Smooth 60 FPS gameplay with responsive C# character physics controllers'
    ],
    toolsAndTechnologies: ['Unity Engine', 'C#', 'Unity Physics / Rigidbody', '2D/3D Mesh Systems', 'Shader Graph', 'Cinemachine'],
    contribution: 'Programmed core player transformation state machine, scripted C# physics interactions and puzzle obstacles, and designed level geometry and game mechanics.',
    githubUrl: 'https://github.com/reshh-13',
    demoUrl: 'https://github.com/reshh-13',
    image: '/images/projects/shapeshift.svg',
    accentColor: '#20C9E8',
    badgeBg: 'bg-[#20C9E8]/20 text-[#20C9E8] border-[#20C9E8]/40',
    status: 'PLAYABLE DEMO'
  }
];
