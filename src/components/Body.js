import React from 'react';

function Body() {
	return (
		<>
			<header>
				<h1>Suji's Epic League of L*gends Viewer (for nerds only)</h1>
			</header>
			<div className="modal-container">
				<div id="modal">
					<div className="modal-guts">
						<img id="champ-splash" />
						<h3 id="champ-name"></h3>
						<p id="champ-title"></p>
						<p id="champ-type"></p>
						<p id="champ-desc"></p>
					</div>
				</div>
			</div>
			<main>
				<article className="card">
					<article className="cardContent" />
				</article>
			</main>
			<div className="pics">
				<div className="container">
					<div className="champ_splash"></div>
				</div>
			</div>
		</>
	);
}

export default Body;
