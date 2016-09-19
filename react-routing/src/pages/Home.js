import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<div>
				<img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAcWAAAAJGQ4YjRkMTU4LWMzNTAtNGNhMC04NDAwLTBlNzM0NzljZmRiMg.jpg" className="img-circle" height="60" />
				<h4>NodeJS and UI Developer</h4>
		    <h1>GUSTAVO SALGADO</h1>
		    <h4>Summary</h4>
				<p className="intro">I like to write clean code and follow the comunity code standards in order to achieve build stable and professionals websites and mobile applications and get the best understanding for me and for anyone to have or want to join my development team.</p>
				<p className="intro">I'm aware that developers always we are learning, tomorrow could be released a new super useful tool for my next project, so I'm watching and learning for what is the new, which one is more popular and what is the best of them and of course how and when to use it.</p>
				<p className="intro">I like to use and contribute to open sources tools because I consider that open source is the way for many smart minds to build solid modules and reusable componets, packages and pieces of software.</p>
        <div className="mt">
          <a target="_blank" href="https://www.linkedin.com/in/gustavoenriquesalgadotoledo" className="btn btn-lg btn-dark">See more about me</a>
        </div>
      </div>
    );
	}
}
export default Home;