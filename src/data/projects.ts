import type { Project } from '@/types/project';

export const projects: Project[] = [
	{
		id: 'traffic-analysis-real-time',
		title: 'Traffic Analysis and Vehicle Counting System In Real-Time',
		slug: 'traffic-analysis',
		shortDescription:
			'Real-time computer vision system for vehicle detection, counting, toll management, and traffic analytics.',
		description:
			'A real-time traffic analysis platform that detects, tracks, and counts vehicles while supporting toll management, monthly discounts, and live congestion insights.',
		category: 'Computer Vision',
		technologies: ['Python', 'YOLO11m', 'DeepSORT', 'OpenCV'],
		features: [
			'Real-time vehicle detection',
			'Vehicle classification',
			'Vehicle tracking',
			'Vehicle counting',
			'Speed estimation',
			'Traffic density analysis',
			'Congestion analysis',
			'Toll management',
			'Monthly vehicle discounts',
			'Real-time analytics',
		],
		architecture: [
			'YOLO11m Detector',
			'DeepSORT Tracker',
			'Line Crossing Detector',
			'Vehicle Counter',
			'Toll Manager',
			'Background Write Worker',
			'CSV Database',
		],
		problem:
			'Manual traffic counting and toll workflows make it hard to track vehicle flow, congestion, and discount eligibility in real time.',
		solution:
			'Use a computer vision pipeline that detects vehicles, tracks them across frames, and records analytics into a structured dataset for operational use.',
		developmentProcess: [
			'Prepared a YOLO11m-based detection pipeline for live vehicle recognition.',
			'Combined DeepSORT tracking with line-crossing logic to count and classify vehicles across frames.',
			'Added toll management and discount handling logic on top of the real-time analytics flow.',
			'Wrote structured output into a CSV-backed datastore for reporting and review.',
		],
		challenges: [
			'Maintaining detection stability in live traffic scenes',
			'Tracking vehicles across frame transitions',
			'Balancing accuracy with real-time performance',
		],
		results: [
			'Real-time vehicle analytics dashboard',
			'Automated counting and toll tracking workflow',
			'Structured data output for reporting and review',
		],
		futureImprovements: [
			'Database-backed persistence instead of CSV storage',
			'Historical analytics and route-level insights',
			'Alerting for congestion and abnormal traffic patterns',
		],
		images: [
			{
				src: '/images/projects/traffic analyzing and vahecle counting sysytem in real time.png',
				alt: 'Traffic Analysis and Vehicle Counting In Real-Time dashboard screenshot',
			},
		],
		status: 'Completed',
		featured: true,
		date: '2026',
		githubUrl:
			'https://github.com/hasibullah22361/Traffic_Analyzing_And_Aehicle_Counting_System_In_Real-Time.git',
	},
	{
		id: 'launchlens-ai',
		title: 'LaunchLens AI',
		slug: 'launchlens-ai',
		shortDescription:
			'An AI-powered product launch analytics platform for analyzing market trends, competitor insights, and positioning strategy.',
		description:
			'LaunchLens AI is an intelligent analytics platform designed to evaluate market positioning, extract competitor key signals, and provide actionable launch recommendations for technology products.',
		category: 'AI',
		technologies: ['Python', 'FastAPI', 'Next.js', 'OpenAI API', 'TailwindCSS'],
		features: [
			'Market sentiment & trend analysis',
			'Competitor positioning breakdown',
			'Automated launch brief generation',
			'AI insight summarization',
			'Interactive analytics dashboard',
		],
		architecture: [
			'Next.js Frontend Shell',
			'FastAPI Microservice Backend',
			'LLM Processing Engine',
			'Vector Store & Cache',
		],
		problem:
			'Startup founders and product teams spend dozens of hours manually analyzing market trends, competitor launches, and audience feedback.',
		solution:
			'Automate competitive research and positioning analysis with an LLM-driven intelligence engine that aggregates key metrics into clear dashboard reports.',
		developmentProcess: [
			'Architected a modular Next.js dashboard UI for structured analytics display.',
			'Built a FastAPI microservice layer to communicate with language model endpoints and data pipelines.',
			'Designed prompt templates for consistent extraction of launch signals and market trends.',
			'Integrated real-time response streaming and cache mechanisms for fast dashboard loading.',
		],
		challenges: [
			'Structuring unstructured web feedback into clean analytics categories',
			'Optimizing API token usage while maintaining summary quality',
			'Delivering low-latency dashboard visualization',
		],
		results: [
			'Streamlined launch research workflow from hours to minutes',
			'Structured competitive breakdown dashboard with visual scorecards',
			'Exportable AI summary briefs for team review',
		],
		futureImprovements: [
			'Multi-agent competitive tracking bots',
			'Historical trend comparison charts',
			'Automated social media launch draft generator',
		],
		images: [
			{
				src: '/images/projects/LaunchLens AI.png',
				alt: 'LaunchLens AI platform interface screenshot',
			},
		],
		status: 'Completed',
		featured: true,
		date: '2026',
		liveUrl: 'https://launchlenai.netlify.app',
		githubUrl: 'https://github.com/hasibullah22361/launchlens-ai.git',
	},
	{
		id: 'expense-vault',
		title: 'ExpenseVault',
		slug: 'expensevault',
		shortDescription:
			'Cross-platform Flutter personal finance tracker with offline-first local storage, visual budget insights, and cloud sync.',
		description:
			'ExpenseVault is a sleek mobile expense management solution built with Flutter. It provides offline data persistence, categorization, budget tracking, and visual analytics to help users manage personal finances.',
		category: 'Mobile',
		technologies: ['Flutter', 'Dart', 'Riverpod', 'Hive', 'Firebase'],
		features: [
			'Real-time expense and income tracking',
			'Custom category management with color coding',
			'Offline-first architecture using Hive database',
			'Interactive monthly budget visual charts',
			'Firebase cloud backup & multi-device sync',
		],
		architecture: [
			'Flutter UI Layer with Material 3',
			'Riverpod State Management System',
			'Hive Local NoSQL Storage',
			'Firebase Auth & Firestore Sync',
		],
		problem:
			'Many expense tracking apps require a constant internet connection, suffer from cluttered interfaces, or lack reliable offline data safety.',
		solution:
			'Build a responsive Flutter mobile application with Hive for instantaneous local persistence and Riverpod for reactive state management across app screens.',
		developmentProcess: [
			'Designed a clean, dark-mode Material UI with custom financial graphs and budget progress bars.',
			'Implemented Hive local storage to guarantee 100% offline functionality without latency.',
			'Used Riverpod state management for clean separation of business logic and UI components.',
			'Connected Firebase Authentication and Firestore synchronization for cloud backups.',
		],
		challenges: [
			'Ensuring instantaneous local UI updates before background cloud sync completes',
			'Maintaining smooth chart animations on lower-end mobile devices',
			'Designing clean transaction filtering by category, date range, and account',
		],
		results: [
			'High-performance cross-platform Android and iOS application',
			'Zero-latency offline tracking with reliable local data safety',
			'Intuitive visual breakdowns of spending trends and budget limits',
		],
		futureImprovements: [
			'Automated SMS / notification receipt parsing',
			'Recurring subscription payment reminders',
			'CSV and PDF monthly financial report exports',
		],
		images: [
			{
				src: '/images/projects/Expense vault.jpg',
				alt: 'ExpenseVault mobile application interface preview',
			},
		],
		status: 'Completed',
		featured: true,
		date: '2026',
		githubUrl: 'https://github.com/hasibullah22361/ExpenseVault.git',
	},
];
