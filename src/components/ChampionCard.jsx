import style from './ChampionCard.module.css';

//dont need champ name and data right? can i make champload connect with cardimg and show the pic that iterates?
function ChampionCard({ champName, openModal }) {
	// By the time I'm here in this function,
	// I am operating on only one champion!
	function onClick() {
		openModal(champName);
	}
	return (
		<article className={style.card} onClick={onClick}>
			<img
				src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champName}_0.jpg`}
				className={style.cardImg}
			/>
		</article>
	);
}

// function test({ message, messageTwo }) {
// 	console.log(message, messageTwo);
// }

// test({ nessage: 'hi', messageTwo: 'bye' });

export default ChampionCard;
