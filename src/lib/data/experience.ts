import { Link } from '$lib/components/ui/pagination';
import { href } from '$lib/utils';
import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'Programming Intern',
		company: 'Perchang Games',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2023, 3), to: new Date(2023, 3) },
		skills: getSkills('CSharp', "unity"),
		name: 'Programming Internship',
		color: 'orange',
		links: [{to: "https://perchang.com/index.html", label: "Visit Site", newTab:true}],
		logo: Assets.PerchangIcon,
		shortDescription: 'Creating awesome tools for developers.',
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
