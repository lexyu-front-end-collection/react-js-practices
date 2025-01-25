import bkg from "@/assets/checks.png";

function Hero() {
	return (
		<>
			<img
				src={bkg}
				alt=""
				className="absolute -z-10 -top-24 -left-24 rotate-45 max-h-[70vh] dark:opacity-10"
				draggable="false"
			/>
			<img
				src={bkg}
				alt=""
				className="absolute -z-10 -bottom-24 -right-24 rotate-[135deg] max-h-[70vh] dark:opacity-10"
				draggable="false"
			/>
			<div className="mx-auto max-w-2xl">
				<h1 className="text-4xl font-bold tracking-tight text-theme-900 sm:text-6xl [text-wrap:balance]">
					Class <span className="text-theme-600">Variance</span> Authority
				</h1>
				<p className="mt-6 text-lg leading-8 text-orange-500 [text-wrap:balance]">
					CVA is a powerful library that empowers developers with enhanced
					control over StyleSheet output, enabling seamless customization and
					simplifying UI development within CSS-in-JS/TS environments.
				</p>
			</div>
		</>
	);
}

export default Hero;