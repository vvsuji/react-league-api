import { useEffect, useState, useMemo } from 'react';
import ChampionCard from './components/ChampionCard';
import style from './App.module.css';

const url = `https://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json`;

function App() {
	const [champions, setChampions] = useState({});

	const fetchChampions = async () => {
		try {
			const response = await (await fetch(url)).json();
			setChampions(response.data);
		} catch (err) {
			console.log('err', err);
		}
	};

	useEffect(() => {
		fetchChampions();
	}, []);

	// Now that we have our data in the champions state
	const championsArray = Object.entries(champions);
	return (
		<div className="App">
			<header>
				<h1>Suji's Epic League of L*gends Viewer (for nerds only)</h1>
			</header>
			{/* <Modal /> */}
			<div className="container">
				{championsArray.map(([champName, champData]) => (
					<ChampionCard
						key={champName}
						champName={champName}
						champData={champData}
					/>
				))}
			</div>
		</div>
	);
}

// ChampionCard({ champName: 'Aatrox', champData: {} });
export default App;
