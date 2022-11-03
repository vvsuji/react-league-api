import { useEffect, useState } from 'react';
import ChampionCard from './components/ChampionCard';
import style from './App.module.css';
import Modal from './components/Modal';

const url = `http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json`;

function App() {
	const [champions, setChampions] = useState({});
	const [selectedChamp, setSelectedChamp] = useState({});
	const [open, setOpen] = useState(false);
	// TODO: Create a state piece that holds the currently selected champion (the one you last clicked)
	// TODO: Create another state piece `isOpen` that holds a boolean

	async function fetchChampions() {
		try {
			const response = await (await fetch(url)).json();
			setChampions(response.data);
			console.log(response.data);
		} catch (err) {
			console.log('err', err);
		}
	}

	// TODO: We should pass in *which* champion was selected as a param to this function then use it to set the state piece. Hint: pass in the champion name and use that as a key to get the full data for the champion from `champions` state. ie: `setSelectedChamp(champions[champName])`
	function openModal(champName) {
		console.log(champName);
		setSelectedChamp(champions[champName]);
		setOpen(true);
		const hidden = document.getElementById('hidden');
		hidden.setAttribute('id', 'moda');
	}

	function closeModal() {
		const moda = document.getElementById('moda');
		moda.setAttribute('id', 'hidden');
	}
	// TODO: Write another function for closing the modal
	useEffect(() => {
		fetchChampions();
	}, []);
	// console.log(selectedChamp);
	// Now that we have our data in the champions state
	const championsArray = Object.entries(champions);
	return (
		<div className="App">
			<header>
				<h1>Suji's Epic League of L*gends Viewer (for nerds only)</h1>
			</header>
			{/* TODO: conditionally render the Modal depending on `isOpen` state */}
			<Modal champName={selectedChamp} closeModal={closeModal} />
			{/* TODO: Pass in the currently selected champ */}
			<div className={style.container}>
				{championsArray.map(([champName]) => (
					<ChampionCard
						key={champName}
						champName={champName}
						onClick={() => setOpen(true)}
						openModal={openModal}
					/>
				))}
			</div>
		</div>
	);
}

// ChampionCard({ champName: 'Aatrox', champData: {} });
export default App;
