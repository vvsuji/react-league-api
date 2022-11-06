import { useEffect, useState } from 'react';
import ChampionCard from './components/ChampionCard';
import style from './App.module.css';
import Modal from './components/Modal';

const url = `http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion.json`;

function App() {
	const [champions, setChampions] = useState({});
	const [selectedChamp, setSelectedChamp] = useState({});
	const [openModal, setOpenModal] = useState(false);

	async function fetchChampions() {
		try {
			const response = await (await fetch(url)).json();
			setChampions(response.data);
		} catch (err) {
			console.log('err', err);
		}
	}

	function handleOpenModal(champName) {
		setSelectedChamp(champions[champName]);
		setOpenModal(true);
	}

	function handleCloseModal() {
		setOpenModal(false);
	}

	useEffect(() => {
		fetchChampions();
	}, []);
	// console.log(selectedChamp);
	// Now that we have our data in the champions state
	const championsArray = Object.entries(champions);
	return (
		<div className='App'>
			<header>
				<h1>Suji's Epic League of L*gends Viewer (for nerds only)</h1>
			</header>
			{openModal && (
				<Modal champName={selectedChamp} closeModal={handleCloseModal} />
			)}
			<div className={style.container}>
				{championsArray.map(([champName]) => (
					<ChampionCard
						key={selectedChamp}
						selectedChamp={champName}
						onClick={() => setOpenModal(true)}
						onOpenModal={handleOpenModal}
					/>
				))}
			</div>
		</div>
	);
}

// ChampionCard({ champName: 'Aatrox', champData: {} });
export default App;
