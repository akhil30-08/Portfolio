import React from "react";

function article_1() {
	return {
		date: "10 Dec 2023",
		title: "Coding and Health",
		description:
			"Embark on a journey where coding prowess meets the essence of well-being. Dive into the intricate world of programming, but don't forget to resurface for a breath of fresh air. From combating sedentary pitfalls to safeguarding your vision and nurturing mental resilience, discover the harmonious balance between code and health. Elevate your coding game while prioritizing the health of your body and mind – because in this dynamic dance of algorithms, your greatest asset is you.",

		content:
			"In the intricate tapestry of modern living, the relationship between coding and health is a nuanced dance that unfolds behind computer screens and keyboards. The very act of coding, though intellectually stimulating, often leads to extended periods of sedentary behavior, creating a potential breeding ground for health issues such as obesity, cardiovascular problems, and musculoskeletal disorders. However, within this digital landscape lies a paradox – the same technology that demands long hours of focused coding also offers solutions to counteract its physical toll.As developers immerse themselves in the intricate web of algorithms and syntax, it becomes imperative to weave health-conscious practices into their daily routines. Regular physical activity, whether through dedicated workout sessions or simple breaks for stretching and movement, is pivotal in combating the adverse effects of prolonged sitting. Creating an ergonomic workspace, complete with an adjustable chair and tools designed for comfort, helps mitigate the risk of repetitive strain injuries and discomfort associated with extended coding sessions.The mental toll of coding, characterized by intense concentration and problem-solving, also necessitates a proactive approach to mental well-being. Stress management techniques, mindfulness practices, and setting realistic goals contribute to a healthier mental state, enabling coders to navigate challenges with resilience and clarity.Furthermore, the coding community is increasingly recognizing the importance of fostering a holistic approach to health. Online forums and communities discuss strategies for maintaining a healthy work-life balance, sharing tips on everything from sleep hygiene to nutrition. By acknowledging and addressing the interconnectedness of coding and health, developers can not only enhance their personal well-being but also cultivate a more sustainable and resilient professional journey.In essence, the synergy between coding and health is a dynamic one, with each influencing and shaping the other. As the digital landscape evolves, embracing this relationship is not just a matter of personal vitality but a strategic investment in the longevity and productivity of a thriving coding community.",
		keywords: ["Coding", "Health"],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "1 Jan 2024",
		title: "How Sports Changed my Life.",
		description:
			"Sports transformed my life in ways I never imagined. Beyond the physical benefits, engaging in sports instilled discipline, resilience, and teamwork. The lessons learned on the field not only sculpted my character but also became guiding principles that extend far beyond the boundaries of any playing field, shaping me into a more focused, determined, and collaborative individual.",
		style: ``,
		content:
			"In the intricate tapestry of life, it's fascinating to explore the unexpected ways in which our passions and idols can shape us as individuals. For me, the world of football, and in particular, the transcendent talent of Lionel Messi, has been a guiding light, instilling invaluable lessons that extend far beyond the boundaries of the pitch. Football, much like life, is a game of ups and downs, victories and defeats. Witnessing Messi's journey, marked by adversity and triumph, has taught me the importance of resilience. His ability to rise above setbacks, injuries, and formidable opponents has been a source of inspiration, encouraging me to face life's challenges with a determined spirit and an unwavering resolve. Football is a collective effort, a symphony of individual skills coming together to create a harmonious whole. Messi's seamless integration into various teams, whether it be FC Barcelona or the Argentine national team, emphasizes the significance of teamwork. Understanding that success often hinges on collaboration has translated into my personal and professional life, fostering a mindset that values collective achievement over individual glory. Messi's humility, both on and off the pitch, serves as a powerful reminder that true greatness is accompanied by grace. Whether celebrating a goal or facing a defeat, his demeanor reflects sportsmanship and respect. This lesson in humility has been instrumental in shaping my own approach towards success and failure, teaching me to remain grounded during moments of triumph and to find strength in moments of defeat. Messi's tireless work ethic is a testament to his dedication to the craft of football. Observing his commitment to continuous improvement has motivated me to adopt a similar mindset in my personal and professional endeavors. Striving for excellence and embracing a growth mindset, I've learned, are pivotal to achieving long-term success and fulfillment. Football is an art form, and Messi is its masterful artist, constantly redefining what is possible on the pitch. His creativity and innovative approach to the game serve as a reminder to embrace these qualities in various aspects of life. Whether solving problems or approaching tasks with a fresh perspective, I've found that a touch of creativity can elevate both the process and the outcome. In conclusion, the impact of football, and the mesmerizing brilliance of Lionel Messi, transcends the boundaries of sports. The lessons learned on the pitch have woven themselves into the fabric of my being, influencing my character, resilience, and approach to life's challenges. Beyond the spectacle of goals and victories, football, and Messi, have played a profound role in shaping me into a better human, imparting timeless wisdom that extends far beyond the green expanse of the soccer field.",
		keywords: ["Football"],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
