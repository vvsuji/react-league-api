import style from './Modal.module.css';

function Modal({ champName, openModal, closeModal, open }) {
	if (!open) {
		return null;
	}
	return (
		<>
			<div className={style.modalContainer} id="moda" onClick={closeModal}>
				<div id={style.modal}>
					<div className={style.modalGuts}>
						<img
							src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`}
							id={style.splash}
							alt=""
						/>
						<h3 id={style.champName}> </h3>
						<p id={style.title}></p>
						<p id={style.type}></p>
						<p id={style.blurb}></p>
						{/* <p id={tags}></p>
						<p id={partype}></p> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default Modal;
