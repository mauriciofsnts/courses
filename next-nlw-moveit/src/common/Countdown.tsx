import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/common/Countdown.module.css";

export default function Countdown() {
	const { minutes, seconds, resetCountdown, startCountdown, isActive, hasFinished } = useContext(
		CountdownContext
	);

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
	const [secondsLeft, secondsRight] = String(seconds).padStart(2, "0").split("");

	return (
		<div>
			<div className={styles.countdownContainer}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondsLeft}</span>
					<span>{secondsRight}</span>
				</div>
			</div>

			{hasFinished ? (
				<button className={styles.countdownButton} disabled>
					Ciclo encerrado
				</button>
			) : (
				<>
					{isActive ? (
						<button
							type="button"
							onClick={resetCountdown}
							className={`${styles.countdownButton} ${styles.countdownButtonIsActive}`}
						>
							Abandonar ciclo
						</button>
					) : (
						<button type="button" onClick={startCountdown} className={styles.countdownButton}>
							Iniciar um ciclo
						</button>
					)}
				</>
			)}
		</div>
	);
}
