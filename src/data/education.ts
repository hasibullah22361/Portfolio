import type { Education } from '@/types/education';

export const education: Education[] = [
	{
		degree: 'BS Computer Science',
		institution: 'Hazara University, Mansehra',
		field: 'Computer Science',
		startDate: 'Sep 2022',
		endDate: 'Jul 2026',
		status: 'Completed',
		description:
			'Focused on Artificial Intelligence, Data Science, Software Development, and Computer Vision.',
		coursework: [
			'Artificial Intelligence',
			'Data Science',
			'Computer Vision',
			'Software Engineering',
			'Database Systems',
			'Computer Networks',
		],
		achievements: [],
		institutionUrl: undefined,
	},
	{
		degree: "Master's / MPhil",
		institution: 'Future institution',
		field: 'Future study path',
		startDate: 'Planned',
		endDate: 'Planned',
		status: 'Planned',
		description:
			'Structural placeholder for a future Master’s or MPhil program. This entry is not a factual claim about enrollment or admission.',
		coursework: ['To be added later.'],
		achievements: ['To be added later.'],
	},
	{
		degree: 'PhD',
		institution: 'Future institution',
		field: 'Future research path',
		startDate: 'Planned',
		endDate: 'Planned',
		status: 'Planned',
		description:
			'Structural placeholder for a future PhD program. This entry only preserves the UI shape for later verified updates.',
		coursework: ['To be added later.'],
		achievements: ['To be added later.'],
	},
];
