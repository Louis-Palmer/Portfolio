import { assets } from '$app/paths';
import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'split-polarity',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [
			{ to: 'https://store.steampowered.com/app/2655020/Split_Polarity_The_Science_Puzzle_Arcade_Game/', label: 'Steam' },
		],
		logo: Assets.SplitPolarity,
		name: 'Split Polarity',
		period: {
			from: new Date(2022,10), to: new Date(2023,11)
		},
		skills: getSkills("CSharp","unity"),
		type: 'Game',
		screenshots: [
			{
				label: "Split Polarity Versus Mode",
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2655020/ss_082a639891aab8b1b192eae0e3719c615064d119.600x338.jpg?t=1704801089",
			},
			{
				label: "Split Polarity Single Mode",
				src: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2655020/ss_ae2219fdf1d76bdbfc13d95f5e2d3f78b6f59850.600x338.jpg?t=1704801089"
			},
			{
				label: "Split Polarity Title Screen",
				src: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2655020/extras/Screenshot_5_small.png?t=1704801089"
			},
		]
	},
	{
		slug: 'FluidSim',
		color: '#0808f1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [
			{ to: 'https://github.com/Louis-Palmer/Fluid-Simulation-OpenGL', label: 'Github' },
		],
		logo: Assets.FluidSim,
		name: 'Fluid Particle Simulation',
		period: {
			from: new Date(2024,9)
		},
		skills: getSkills('C++', 'opengl',"R","py"),
		type: 'Graphics Simulation',
	},
	{
		slug: 'Attensys-Data-Analysis',
		color: 'grey',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [
			{ to: 'https://github.com/Louis-Palmer/Uni-Comis-Comp170-Data-Analysis', label: 'Github' },
			{ to: "https://attensys.io/", label: "Attensys.io"}
		],
		logo: Assets.Attensys,
		name: 'Attensys.io Data Analysis',
		period: {
			from: new Date(2022,11), to: new Date(2023,2)
		},
		skills: getSkills('py',"html","css"),
		type: 'Data Analysis Report',
	},
	{
		slug: 'Machine-Learning',
		color: 'grey',
		description:
			'Reinforced machine learning',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [
			{ to: 'https://github.com/Louis-Palmer/Uni-Comp213-MachineLearning', label: 'Github' },
		],
		logo: Assets.MLIPD,
		name: 'Machine Learning in the Iterated Prisoners Dilemma',
		period: {
			from: new Date(2023,10), to: new Date(2024,2)
		},
		skills: getSkills('CSharp',"py","unity"),
		type: 'Machine Learning',
		screenshots:[
			{
				label: "Data Experiment One",
				src: "https://media.githubusercontent.com/media/Louis-Palmer/Uni-Comp213-MachineLearning/main/WORD/Images/ExperimentOne.png"
			},
			{
				label: "Data Experiment Two",
				src: "https://media.githubusercontent.com/media/Louis-Palmer/Uni-Comp213-MachineLearning/main/WORD/Images/ExperimentTwo.png"
			},
			{
				label: "Data Experiment Three",
				src: "https://media.githubusercontent.com/media/Louis-Palmer/Uni-Comp213-MachineLearning/main/WORD/Images/ExperimentTwo.png"
			},
			// {
			// 	label: "Reward Distribution",
			// 	src: "https://media.githubusercontent.com/media/Louis-Palmer/Uni-Comp213-MachineLearning/main/WORD/Images/PrisonerDilemmaRewards.png"
			// },
			
		]
	},
	{
		slug: 'Wayfarers',
		color: '#88f1c4',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [
		
		],
		logo: Assets.Wayfarers,
		name: 'Wayfarers Guild',
		period: {
			from: new Date(2024,8)
		},
		skills: getSkills('CSharp',"unity"),
		type: 'Game',
	},
	{
		slug: 'mathematics-module',
		color: 'orange',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [
			{ to: 'https://github.com/Louis-Palmer/Uni-Comp201-Maths-Module', label: 'Github' },
		
		],
		logo: Assets.WS3,
		name: 'Computational Mathematics',
		period: {
			from: new Date(2023,8), to: new Date(2023,11)
		},
		skills: getSkills("C++"),
		type: 'Mathmatical Application',
		screenshots: [
			{
				label: "WS3 Image One",
				src: "https://raw.githubusercontent.com/Louis-Palmer/Uni-Comp201-Maths-Module/refs/heads/WS3/WS3_ImageOne.png"
			},
			{
				label: "WS3 Image Two",
				src: "https://raw.githubusercontent.com/Louis-Palmer/Uni-Comp201-Maths-Module/refs/heads/WS3/WS3_ImageTwo.png"
			},
			{
				label: "WS2 Image One",
				src: "https://raw.githubusercontent.com/Louis-Palmer/Uni-Comp201-Maths-Module/refs/heads/WS2/WS2_ImageOne.png"
			},
			{
				label: "WS2 Image Two",
				src: "https://raw.githubusercontent.com/Louis-Palmer/Uni-Comp201-Maths-Module/refs/heads/WS2/WS2_ImageTwo.png"
			},
			{
				label: "WS1 Image One",
				src: "https://raw.githubusercontent.com/Louis-Palmer/Uni-Comp201-Maths-Module/refs/heads/WS1/WS1_ImageOne.png"
			},
		]
	},
	{
		slug: 'Daffy',
		color: 'yellow',
		description:
			'fsd',
		shortDescription:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		links: [
			{ to: 'https://www.falmouth.ac.uk/launchpad/news/hackers-robots-and-real-world-solutions', label: 'Event Link' },
		
		],
		logo: Assets.Daffy,
		name: 'Agriculture Robotics',
		period: {
			from: new Date(2022,9), to: new Date(2022,9)
		},
		skills: getSkills("py"),
		type: 'Robotics',
		screenshots: [
			{
				label: "Hackathon Event Introductions and Importance",
				src: "https://www.falmouth.ac.uk/sites/default/files/styles/max_2600x2600/public/media/images/Hackathon_2022%C2%A9JennaHinton-9457.jpg?itok=LO_1aWwn"
			},
			{
				label: "Hackathon Event attendees",
				src: "https://www.falmouth.ac.uk/sites/default/files/styles/max_2600x2600/public/media/images/Hackathon_2022%C2%A9JennaHinton-0502.jpg?itok=lA2yx6Yw"
			},
			{
				label: "Robot Navigation Team",
				src: "https://www.falmouth.ac.uk/sites/default/files/styles/max_2600x2600/public/media/images/Hackathon_2022%C2%A9JennaHinton-0634.jpg?itok=jJHvKKcT"
			},
			{
				label: "Daffy the Robot",
				src: "https://www.falmouth.ac.uk/sites/default/files/styles/max_2600x2600/public/media/images/Hackathon_2022%C2%A9JennaHinton-0743.jpg?itok=LY1EX-Mg"
			},
			{
				label: "George Eustice - Former Secretary of State for Environment, Food and Rural Affairs",
				src: "https://www.falmouth.ac.uk/sites/default/files/styles/max_2600x2600/public/media/images/Hackathon_2022%C2%A9JennaHinton-9662.jpg?itok=0p58irbr"
			},
		]
	},
	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
