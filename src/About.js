import React from 'react';

const About = ({ text }) => {
	return (
		<div>

			<h1>{text.about.header}</h1>

			{text.about.texts.map(t => <p className={t.size}>{t.text}</p>)}

		</div>
	);
}

export default About;