import style from './ChampionCard.module.css';

// dont need champ name and data right? can i make champload connect with cardimg and show the pic that iterates?
function ChampionCard({ selectedChamp, onOpenModal }) {
	// By the time I'm here in this function,
	// I am operating on only one champion!
	function handleClick() {
		onOpenModal(selectedChamp);
	}
	return (
		<article className={style.card} onClick={handleClick}>
			<img
				src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${selectedChamp}_0.jpg`}
				className={style.cardImg}
				alt=''
			/>
		</article>
	);
}

export default ChampionCard;
