import { assets } from '$app/paths';
import { Label } from 'bits-ui';
import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'Mathematics-Module',
		color: 'orange',
		description:
			'I completed four math-intensive worksheets, each focusing on a different aspect of problem-solving involving math and programming. The third worksheet was my favourite, as it involved developing graphics rendering from scratch. I successfully went on my own and re-invented Normal Shading, which was one of my proudest moments in the whole course. This project was a very gratifying experience. The first worksheet had me use Bezier curves to make a car follow a track, while the second required applying Suvat equations to calculate the angle and power needed to fire a bullet from a tank to hit a target. The fourth worksheet focused on security, where I identified, classified, and fixed bugs and security risks in a provided game. This collection of tasks greatly enhanced my understanding of math in programming and its practical applications.',
		shortDescription:
			'Maths-intensive worksheets where I re-invented Normal Shading.',
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
		slug: 'Attensys-Data-Analysis',
		color: 'grey',
		description:
			'I collaborated with Attensys.io to research optimal locations for releasing their new hospital bed technology. I identified medical industry hotspots using public and private datasets and created heatmaps displaying hospital bed quantities across countries. I compiled the findings into a static website, later converted them into a PDF, and shared them with the leads at Attensys.io. This project honed my data analysis, visualisation, and professional reporting skills.',
		shortDescription:
			'I compiled data to identify hotspots for Attensys.io to release their new technology.',
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
	{
		slug: 'Agriculture-Robotics',
		color: 'yellow',
		description:
			'I participated in a hackathon-like event where 22 students, including myself, were tasked with programming a robot capable of identifying and picking daffodils. The project was divided into three teams: Machine Vision, Arms Control, and Navigation. Cornwall’s daffodil industry generates over £20 million annually, and George Eustice, the former Secretary of State for Environment, Food, and Rural Affairs, highlighted the project’s potential impact, even if unfinished. I joined with the Navigation team, using Python to help the robot drive efficiently, ensuring it stopped and started correctly without damaging any flowers.',
		shortDescription:
			'Devloped the navigation program to help create "Daffy" the daffodil picking robot.',
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
	{
		slug: 'Split-Polarity',
		color: '#5e95e3',
		description:
			'As a team, I created a game inspired by a toy called the Perplexus, which featured two game modes: two-player versus mode and single-player mode. The game involves strategy and luck by adding power-ups. The game supports controllers, mouse, and keyboards. This project was a significant milestone in my first year, as it was published on Steam by a student-led publishing company that fully funded the release to be their introduction game. The game won the "Best 1st Year Game" award at the end of the year. This project gave me insight into teamwork, game design, polishing, and publishing.',
		shortDescription:
			'Developed an award-winning first-year game.',
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
		slug: 'Machine-Learning',
		color: 'grey',
		description:
			"I created reinforcement learning agents in Unity to explore ideal strategies for the Iterated Prisoner's Dilemma. This project involved designing the environment, configuring a rewards system, setting up the AI agents, Training the AI, and experimenting with the AI agents playing against themselves and the Tit-for-Tat Strategy. This project challenged my problem-solving and logical thinking skills but was very valuable. I documented and analysed the results to increase my understanding of AI and potential errors.",
		shortDescription:
			"Implemented Reinforced Machine Learning Agents to solve Iterated Prisoner's Dilemma.",
		links: [
			{ to: 'https://github.com/Louis-Palmer/Uni-Comp213-MachineLearning', label: 'Github' },
		],
		logo: Assets.MLIPD,
		name: 'Artificial Intelligence and Machine Learning in the Iterated Prisoners Dilemma',
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
		slug: 'Wayfarers-Guild',
		color: '#88f1c4',
		description:
			'Wayfarfes Guild is a networked cooperative game in which two players control a ship being chased by eldritch monsters. This project involves challenging mechanics like networking, moving platforms, and pathfinding algorithms. I focused on implementing the moving platforms and networking aspects, which proved difficult but rewarding. Despite the challenges, significant progress has been made, further enhancing my networking and gameplay mechanics skills.',
		shortDescription:
			'Two-player networked game involving challenging programming mechanics.',
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
		slug: 'Fluid-Simulation',
		color: '#0808f1',
		description:
			'For my dissertation and graphics module, I focused on particle-based fluid simulation. I developed a simplified fluid simulation in the graphics module, which required significant self-directed learning. My dissertation expands on this by implementing Smoothed Particle Hydrodynamics (SPH) to simulate buoyancy and analyse its accuracy with varying particle resolutions. I conducted a statistical analysis using two-way ANOVA and Tukey testing, using tools like G-power and R for data analysis. This project has improved my knowledge of Code quality assurance and optimisation.',
		shortDescription:
			'Created a particle-based fluid simulation across two modules focusing on optimisation, quality assurance, profiling, and debugging.',
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
	// {
	// 	slug: 'Slot_Machine',
	// 	color: 'red',
	// 	description:
	// 		'This project was created with the primary goal of learning JavaScript and understanding its integration with HTML. It features a basic Slot Machine setup where users can place bets (not real money). While the current visualisation and functionality are minimal, I plan to develop this project further to better understand JavaScript and continuously improve its design and interactivity.',
	// 	shortDescription:
	// 		'Learning fundamentals of JavaScript through the development of a simple Slot Machine.',
	// 	links: [
	// 		{ to: 'https://github.com/Louis-Palmer/Slot-Website', label: 'Github' },
	// 	],
	// 	logo: Assets.SlotMachine,
	// 	name: 'Simple Slot Machine',
	// 	period: {
	// 		from: new Date(2025,0,17)
	// 	},
	// 	skills: getSkills("js","html","css"),
	// 	type: 'Web Application',
	// 	screenshots:[
	// 		{
	// 			label: "Prototype Version One",
	// 			src: "https://raw.githubusercontent.com/Louis-Palmer/Slot-Website/refs/heads/main/Images/Slot_Machine_Basic.png"
	// 		}
	// 	]
	// },



	
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
