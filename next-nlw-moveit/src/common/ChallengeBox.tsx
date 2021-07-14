import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/common/ChallengeBox.module.css";

export default function ChallengeBox() {
	const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
	const { resetCountdown } = useContext(CountdownContext);

	function handleChallengeSucceded() {
		completeChallenge();
		resetCountdown();
	}

	function handleChallengeFailed() {
		resetChallenge();
		resetCountdown();
	}

	return (
		<div className={styles.challengerBoxContainer}>
			{activeChallenge ? (
				<div className={styles.challengeActive}>
					<header>Ganhe {activeChallenge.amount} xp</header>

					<main>
						<img src={`icons/${activeChallenge.type}.svg`} />
						<strong>Novo desafio</strong>
						<p>{activeChallenge.description}</p>
					</main>

					<footer>
						<button
							type="button"
							onClick={handleChallengeFailed}
							className={styles.challengeFailedButton}
						>
							Falhei
						</button>
						<button
							type="button"
							onClick={handleChallengeSucceded}
							className={styles.challengeSucceededButton}
						>
							Completei
						</button>
					</footer>
				</div>
			) : (
				<div className={styles.challengeNotActive}>
					<strong>Finalize um ciclo para receber um desafio</strong>

					<p>
						<img src="icons/level-up.svg" alt="leve up" />
						Avance de level completando desafios.
					</p>
				</div>
			)}
		</div>
	);
}
