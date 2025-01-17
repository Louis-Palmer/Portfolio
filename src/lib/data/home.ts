import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'I have always been drawn to problem-solving, attention to detail, and logical thinking. When I first found programming in school, I wrote it off and saw it as another chore or homework that had to be completed for class. I started Computer Science A level and made a simple Python calculator script, which completely changed my initial thoughts about programming. I discovered the potential of programming and how I can use programming to immerse myself in problem-solving and logical exploration. Since then, my passion and life goal has been to program new algorithms and methods. Beyond Programming, I love rock climbing, badminton, and spending time with friends; I also enjoy learning about life, reflecting on its complexities, and figuring out how to live it.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/Louis-Palmer', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/louis-palmer-447a1524b/', icon: 'i-carbon-logo-linkedin' },
		// { label: 'Twitter', href: 'https://twitter.com', icon: 'i-carbon-logo-twitter' },
		{ label: 'Email', href: 'mailto:contact@louispalmer.dev', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
