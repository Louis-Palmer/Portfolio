import { Label } from 'bits-ui';
import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: ' BSc(Hons) Computing for Games',
		description: 'My journey at Falmouth University has been incredible, transforming my technical skills and personal growth into who I am today. From the beginning of my first year, I met knowledgeable lecturers and like-minded peers who showed the possibilities that programming could create. In my first year, I built a foundation in programming fundamentals, created Split Polarity—winner of the "Best 1st Year Game Award"—and participated in events like the Techstars Startup Weekend. The second year deepened my skills with C++, now my primary language, and a mathematics module that boosted my problem-solving abilities. I also worked with Attensys.io on data analysis. I am tackling advanced projects like fluid simulation and networking in my current year. My time at Falmouth has been invaluable, inspiring my passion for programming and excitement for the future.',
		location: 'United Kingdom',
		logo: Assets.FalmouthIcon,
		name: '',
		organization: 'Falmouth University',
		period: { from: new Date(2022, 8), to: new Date(2025, 4) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Principles of Computing', 'Data Fundamentals', 'Computational Mathematics', 'Artificial Intelligence & Machine Learning', 'Development Foundations', 'Digital Creativity', 'Advanced Game Programming',"Major Collaboration","Multidisciplinary Teamwork","Source Control","Data Anlysis"],
		screenshots: [
			{ 
				label: "Hackathon Event",
				src: "https://www.falmouth.ac.uk/sites/default/files/styles/max_2600x2600/public/media/images/Hackathon_2022%C2%A9JennaHinton-0502.jpg?itok=lA2yx6Yw"
			},
			{ 
				label: "Rock climbing",
				src: ""
			},
			{ 
				label: "Ocean",
				src: ""
			},
			{ 
				label: "Group Expo Day",
				src: ""
			},
		],
	},
	{
		degree: 'UAL Extended Diploma in Creative Media Production and Technology ',
		description: 'I completed Two years at college that introdcued me to softwar creation, game devlopment fundamentals, and pre-planning documentation. This got me setup for teamworking enviroments and set a strong foundation for my future in programming. It also allowed me to connect with industry professionals and learn directly from their expertise, inspiring my passion for programming.',
		location: 'United Kingdom',
		logo: Assets.NWSLC,
		name: '',
		organization: 'North Warwickshire and South Leicestershire College',
		period: { from: new Date(2020, 5), to: new Date(2022,5)},
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: [/*'Unity', 'Unreal', "Game Design"*/]
	}
];

const EducationData = { title, items };

export default EducationData;
