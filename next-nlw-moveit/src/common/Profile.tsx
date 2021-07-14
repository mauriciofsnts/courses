import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/common/Profile.module.css";

export default function Profile() {
	const { level } = useContext(ChallengesContext);

	return (
		<div className={styles.profileContainer}>
			<img src="https://github.com/mauriciofsnts.png" alt="Mauricio Ferraz" />

			<div>
				<strong>Mauricio Ferraz</strong>

				<p>
					<img src="icons/level.svg" alt="level" /> Level {level}
				</p>
			</div>
		</div>
	);
}
