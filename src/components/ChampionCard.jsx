import style from './ChampionCard.module.css';

//dont need champ name and data right? can i make champload connect with cardimg and show the pic that iterates?
function ChampionCard({ champName, champData, champLoad }) {
	console.log(champData);
	// By the time I'm here in this function,
	// I am operating on only one champion!
	return (
		<>
			<div className={style.card} />
			<div className={style.cardImg} />
			<div className={style.container} />
		</>
	);
}

// function test({ message, messageTwo }) {
// 	console.log(message, messageTwo);
// }

// test({ nessage: 'hi', messageTwo: 'bye' });

export default ChampionCard;
