import style from './Modal.module.css';
import { useEffect } from 'react';

function Modal({ selectedChamp, handleCloseModal }) {
	console.log(selectedChamp);
	useEffect(() => {
		fetch(`http://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/champion/${selectedChamp.name}.json
    `);
	});
	return (
		<div className={style.modalContainer} onClick={handleCloseModal}>
			<div id={style.modal}>
				<div className={style.modalGuts}>
					<img
						src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${selectedChamp.name}_0.jpg`}
						id={style.splash}
						alt=''
					/>
					<h3 id={style.champName}>{selectedChamp.name}</h3>
					<p id={style.title}>{selectedChamp.title}</p>
					<p id={style.type}>{selectedChamp.type}</p>
					<p id={style.blurb}>{selectedChamp.blurb}</p>
					{/* <p id={tags}></p>
						<p id={partype}></p> */}
				</div>
			</div>
		</div>
	);
}

export default Modal;
