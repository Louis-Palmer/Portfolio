import { Link } from '$lib/components/ui/pagination';
import { href } from '$lib/utils';
import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'Programming-Intern',
		company: 'Perchang Games',
		description: 'During my internship with Perchang, I gained invaluable experience working in a professional game development environment. While adhering to an NDA, I contributed by creating new mechanics for their game Perchang and developing tools and libraries to streamline their programming workflow, including gizmos, object hierarchy search tools, and reusable functions. This internship taught me professional standards, source control,  team meetings and effective communication across multiple disciplines. This internship gave me a solid foundation for the software development process in a professional environment.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2023, 3,1), to: new Date(2023, 3,15) },
		skills: getSkills('CSharp', "unity"),
		name: 'Gameplay Mechanics and Tools Engineering',
		color: 'orange',
		links: [{to: "https://perchang.com/index.html", label: "Visit Site", newTab:true}],
		logo: Assets.PerchangIcon,
		shortDescription: 'Created mechanics for a game, tools and libraries for development',
		screenshots:[
			{
				label: "Perchang title",
				src: "https://purenintendo.com/wp-content/uploads/2019/08/Perchang-title.png"
			},
			{
				label: "Perchang gameplay ",
				src: "https://i.ytimg.com/vi/Zf93LzCCKAc/maxresdefault.jpg"
			},
			{
				label: "Warhammer Quest: Silver Tower ",
				src: "https://perchang.com/uploads/7/9/3/4/79347386/yeartwopromo_orig.jpg"
			},
			{
				label: "Warhammer Quest 2: End of times ",
				src: "https://play-lh.googleusercontent.com/y15PbgjJYrsZKYM9mt3eJINziPsWMGOsZUX4epmYVDi6CygQQDqSd-HcrLSiJW9azQ=w526-h296-rw"
			},
		]
	},
	{
		slug: 'Attensys-Data-Analysis',
		company: 'Attensys.io',
		description: 'I collaborated with Attensys.io to research optimal locations for releasing their new hospital bed technology. I identified medical industry hotspots using public and private datasets and created heatmaps displaying hospital bed quantities across countries. I compiled the findings into a static website, later converted them into a PDF, and shared them with the leads at Attensys.io. This project honed my data analysis, visualisation, and professional reporting skills.',
		contract: ContractType.Freelance,
		type: 'Data Analysis',
		location: 'Remote',
		period: { from: new Date(2022, 11,), to: new Date(2023, 2) },
		skills: getSkills('py',"html","css"),
		name: 'Attensys.io Data Analysis',
		color: 'grey',
		links: [
			{ to: 'https://github.com/Louis-Palmer/Uni-Comis-Comp170-Data-Analysis', label: 'Github' },
			{ to: "https://attensys.io/", label: "Attensys.io"}
		],
		logo: Assets.Attensys,
		shortDescription: 'I compiled data to identify hotspots for Attensys.io to release their new technology.',
		screenshots:[
			{
				label: "Hospital Bed Per Person Heatmap",
				src: "https://raw.githubusercontent.com/Louis-Palmer/Uni-Comis-Comp170-Data-Analysis/refs/heads/main/Images/2.Heatmaps/Heatmap%20Total%20Beds%20Global%20Red.png"
			},
			{
				label: "World Health Care Index for Innovation",
				src: "https://raw.githubusercontent.com/Louis-Palmer/Uni-Comis-Comp170-Data-Analysis/refs/heads/main/Images/3.Others/World%20Index%20of%20Healthcare%20Innovation.png"
			},
			{
				label: "Report",
				src: "https://raw.githubusercontent.com/Louis-Palmer/Uni-Comis-Comp170-Data-Analysis/refs/heads/main/Comp170_Screenshot_One.png"
			},
		]
	},

	// {
	// 	slug: 'software-freelance',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date() },
	// 	skills: getSkills('svelte', 'ts', 'sass', 'css', 'html', 'js'),
	// 	name: 'Freelancer',
	// 	color: 'blue',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// },
	// {
	// 	slug: 'software-freelance-junior',
	// 	company: 'Self-employed',
	// 	description: 'Creating awesome applications for customers.',
	// 	contract: ContractType.Freelance,
	// 	type: 'Software Development',
	// 	location: 'Home',
	// 	period: { from: new Date(2022, 0, 1), to: new Date() },
	// 	skills: getSkills('css', 'html', 'js'),
	// 	name: 'Junior Freelancer',
	// 	color: 'green',
	// 	links: [],
	// 	logo: Assets.Unknown,
	// 	shortDescription: 'Creating awesome applications for customers.'
	// }
];

const ExperienceData = { title, items };

export default ExperienceData;
