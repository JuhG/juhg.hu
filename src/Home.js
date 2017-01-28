import React from 'react';

const Home = ({ text }) => {
	return(
		<div>

			<div className="App-header">
			  <h1 className="App-title">{text.header}</h1>
			</div>

			{text.texts.map(t => <p key={t} className="App-text">{t}</p>)}
			
			<p className="App-text">
			  <a href="mailto:me@juhg.hu">
			    {text.link}
			  </a>
			</p>

		</div>
	);
}

export default Home;