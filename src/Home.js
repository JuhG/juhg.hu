import React from 'react';

const Home = ({ text }) => {
	return (
		<div className="Home">

		  <h1>{text.home.header}</h1>

			{text.home.texts.map(t => <p key={t} className="App-text">{t}</p>)}
			
			<p className="App-text">
			  <a href="mailto:me@juhg.hu">
			    {text.home.link}
			  </a>
			</p>

		</div>
	);
}

export default Home;