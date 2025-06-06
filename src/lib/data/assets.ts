import { base } from '$app/paths';

const url = (file: string) => `${base}/logos/${file}`;

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { light: url(lightFilename), dark: url(darkFilename) };
};

const Assets = {
	AWS: asset('aws.svg'),
	Bootstrap: asset('bootstrap.svg'),
	C: asset('c.svg'),
	Cpp: asset('cpp.svg'),
	Celery: asset('celery.svg'),
	Django: asset('django.svg'),
	FastApi: asset('fastapi'),
	Flask: asset('flask.svg'),
	Go: asset('go.svg'),
	Kafka: asset('kafka.svg'),
	Neo4j: asset('neo4j.svg'),
	Nginx: asset('nginx.svg'),
	Numpy: asset('numpy.svg'),
	Pandas: asset('pandas.svg'),
	RabbitMQ: asset('rabbitmq.svg'),
	Rust: asset('rust.svg', 'rust-dark.png'),
	Scrapy: asset('scrapy.png'),
	Selenium: asset('selenium.svg'),
	Docker: asset('docker.svg'),
	Kubernetes: asset('kubernetes.svg'),
	Csharp: asset('csharp.svg'),
	Xamarin: asset('xamarin.svg'),
	TypeScript: asset('ts.png'),
	VueJs: asset('vue.png'),
	ReactJs: asset('react.svg'),
	Dart: asset('dart.png'),
	Kotlin: asset('kotlin.png'),
	Python: asset('python.png'),
	NodeJs: asset('node.png'),
	Deno: asset('deno.svg'),
	Svelte: asset('svelte.svg'),
	ExpressJs: asset('express.png'),
	JavaScript: asset('js.png'),
	Fastify: asset('fastify.svg', 'fastify-dark.png'),
	NestJs: asset('nest.svg'),
	Quasar: asset('quasar.svg'),
	SolidJs: asset('solid.svg'),
	Electron: asset('electron.png'),
	Flutter: asset('flutter.svg'),
	Java: asset('java.png'),
	AdonisJs: asset('adonis.png'),
	Android: asset('android.png'),
	Angular: asset('angular.png'),
	PostgreSQL: asset('postgres.png'),
	Firebase: asset('firebase.png'),
	Sass: asset('sass.png'),
	Unknown: asset('no-img.svg'),
	MongoDB: asset('mongodb.svg'),
	Redis: asset('redis.svg'),
	Tailwind: asset('tailwind.svg'),
	HTML: asset('html.svg'),
	Premiere: asset('premiere.svg'),
	Photoshop: asset('photoshop.svg'),
	CSS: asset('css.svg'),
	AfterEffects: asset('after-effects.svg'),
	Illustrator: asset('illustrator.svg'),
	Nuxt: asset('nuxt.png'),
	Vite: asset('vite.png'),
	Vitest: asset('vitest.svg'),
	Jest: asset('jest.png'),
	Unocss: asset('unocss.svg'),
	Ruvy: asset('ruvy.svg'),
	Postcss: asset('postcss.svg'),


	//Custom Assets
	//Skills
	R: asset("RLogoIcon.png"),
	OpenGl: asset("OpenglLogoIcon.png"),
	
	//logos
	PerchangIcon: asset("PerchangLogoIcon.png"),
	FalmouthIcon: asset("FalmouthLogoIcon.png"),
	SplitPolarity: asset("SplitPolarityLogo.png"),
	NWSLC: asset("NWSLC.png"),
	Wayfarers: asset("Wayfarers Guild.png"),
	WayfarersBanner: asset("WayfarersBanner.png"),
	Attensys: asset("attensysIoLogoIcon.jpg"),
	Unity: asset("UnityLogo.png"),
	Unreal: asset("UnrealLogo.png"),
	Daffy: asset("Daffy.png"),
	SlotMachine: asset("SlotMachineIcon.png"),

	//Images
	FluidSim: asset("FluidSimScreenshot.png"),
	MLIPD: asset("MachineLearningIcon.png"),
	WS3: asset("WS3Screenshot.png"),

};

export default Assets;
