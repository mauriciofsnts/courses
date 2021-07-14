import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/common/CompletedChallenger.module.css";

export default function CompletedChallenger() {
	const { challengeCompleted } = useContext(ChallengesContext);

	return (
		<div className={styles.completedChallengesContainer}>
			<span>Desafios completos</span>
			<span>{challengeCompleted}</span>
		</div>
	);
}
