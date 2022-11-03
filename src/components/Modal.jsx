import style from './Modal.module.css';

function Modal({ champName, closeModal }) {
	function onClick() {
		closeModal(champName);
	}
	return (
		<>
			<div className="modal-container" onClick={onClick}>
				<div className="modal">
					<div className="modal-guts">
						<img
							id={style.splash}
							src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`}
						/>
						<h3 id={style.champName}></h3>
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
