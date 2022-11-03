import style from './Modal.module.css';

function Modal({ champName, championsArray, closeModal }) {
	return (
		<div className={style.modalContainer} id="moda" onClick={closeModal}>
			<div id={style.modal}>
				<div className={style.modalGuts}>
					<img
						src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName.name}_0.jpg`}
						id={style.splash}
						alt=""
					/>
					<h3 id={style.champName}>{champName.name}</h3>
					<p id={style.title}>{}</p>
					<p id={style.type}></p>
					<p id={style.blurb}></p>
					{/* <p id={tags}></p>
						<p id={partype}></p> */}
				</div>
			</div>
		</div>
	);
}

export default Modal;
