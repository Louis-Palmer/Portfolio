import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Computing for Games BSc(Hons)',
		description: '',
		location: 'United Kingdom',
		logo: Assets.FalmouthIcon,
		name: '',
		organization: 'Falmouth University',
		period: { from: new Date(2022, 8), to: new Date(2025, 4) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C#', 'C++', 'Python', 'R', 'html', 'css', 'JavaScript',"Source Control","Data Anlysis"]
	},
	{
		degree: 'Games Design - Level 3',
		description: '',
		location: 'United Kingdom',
		logo: Assets.NWSLC,
		name: '',
		organization: 'North Warwickshire and South Leicestershire College',
		period: { from: new Date(2020, 0), to: new Date(2022,0)},
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: [/*'Unity', 'Unreal', "Game Design"*/]
	}
];

const EducationData = { title, items };

export default EducationData;
