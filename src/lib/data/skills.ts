import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [

	
	defineSkill({
		slug: 'py',
		color: 'blue',
		description:
			'6+ Years - Python was my first programming language; I now primarily use it for small daily tasks and quality-of-life improvements, such as creating a Discord bot or collecting live web data. Additionally, I use Python for data analysis to clean, generate, manipulate, and visualise data efficiently.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'CSharp',
		color: 'purple',
		description:
			"5+ Years - C# has been my go-to language for developing games and projects using the Unity Engine. It's the language I have the most experience with and spent the most time learning. ",
		logo: Assets.Csharp,
		name: 'C#',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'C++',
		color: 'blue',
		description:
			"2+ Years - I was introduced to C++ while working with Unreal Engine, and it has since become my primary programming language. I'm currently using it in my dissertation to develop a particle-based fluid simulation. While pointers and memory management were initially challenging, I've grown comfortable with them and learned how to use pointers efficiently.",
		logo: Assets.Cpp,
		name: 'C++',
		category: 'pro-lang'
	}),
	
	defineSkill({
		slug: 'R',
		color: 'blue',
		description:
			'6+ Months - R is a language I learned while working on my dissertation, specifically for data analysis and visualisation. I found it to be intuitive and powerful, particularly for conducting statistical tests like ANOVA and Tukey, making it my go-to language for data-driven projects.',
		logo: Assets.R,
		name: 'R',
		category: 'pro-lang'
	}),
	// defineSkill({
	// 	slug: 'js',
	// 	color: 'yellow',
	// 	description:
	// 		'1+ Month - I learned HTML and CSS basics at university but not JavaScript, so I created a slot machine project to learn the fundamentals of JavaScript. This involved using simple variables to manage betting amounts, lines and the ability to reset funds when running out. I am refining the Slot Machine project and plan to expand my JavaScript portfolio with more projects once this one is completed and fully polished.',
	// 	logo: Assets.JavaScript,
	// 	name: 'Javascript',
	// 	category: 'pro-lang'
	// }),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description:
		"2+ Years - I first used CSS alongside HTML when I began programming to create my website. Since then, I've used this language in projects like presenting a data analysis report for Attensys.io. I found CSS to be a very satisfying language, allowing you to see instant visual changes without much knowledge of the language.",
		logo: Assets.CSS,
		name: 'CSS',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description:
		"2+ Years - I first used CSS alongside HTML when I began programming to create my website. Since then, I've used this language in projects like presenting a data analysis report for Attensys.io. I found HTML to be confusing to me at first, but eventually, I understood its purpose as a core part of a website.",
		logo: Assets.HTML,
		name: 'HTML',
		category: 'markup-style'
	}),
	defineSkill({
		slug: 'opengl',
		color: 'blue',
		description:
		'6+ Months - I used the OpenGL API to render and simulate a particle-based fluid simulation. Learning the graphics pipeline was challenging, as I had to solve 3D puzzles of patterns and shapes, which only made me enjoy it more. I enjoyed working with OpenGL so much that I plan to expand my knowledge by learning Vulkan and DirectX.',
		logo: Assets.OpenGl,
		name: 'OpenGL',
		category: 'library'
	}),
	defineSkill({
		slug: 'unity',
		color: 'grey',
		description:
		"6+ Years - The Unity game engine was my first introduction to game development. Learning its syntax, such as the instantiate function, became a core memory from my early programming journey. Since then, I've used Unity to develop multiple games and projects, both individually and as part of a team.",
		logo: Assets.Unity,
		name: 'Unity',
		category: 'framework'
	}),
	defineSkill({
		slug: 'unreal',
		color: 'grey',
		description:
		"5+ Years - As the industry standard for game development, Unreal Engine was a tool I was eager to learn. I've found it to be both intuitive and incredibly powerful. I've enjoyed using Unreal for various projects, including creating an AI boss fight for one of my modules.",
		logo: Assets.Unreal,
		name: 'Unreal',
		category: 'framework'
	}),
	// defineSkill({
	// 	slug: 'ts',
	// 	color: 'blue',
	// 	description:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
	// 	logo: Assets.TypeScript,
	// 	name: 'Typescript',
	// 	category: 'pro-lang'
	// }),
	// defineSkill({
		// 	slug: 'sass',
		// 	color: 'pink',
	// 	description:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
	// 	logo: Assets.Sass,
	// 	name: 'Sass',
	// 	category: 'markup-style'
	// }),
	// defineSkill({
	// 	slug: 'reactjs',
	// 	color: 'cyan',
	// 	description:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
	// 	logo: Assets.ReactJs,
	// 	name: 'React Js',
	// 	category: 'library'
	// }),
	// defineSkill({
	// 	slug: 'svelte',
	// 	color: 'orange',
	// 	description: svelteMd,
	// 	logo: Assets.Svelte,
	// 	name: 'Svelte',
	// 	category: 'library'
	// })
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
