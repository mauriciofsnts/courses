import { ReactNode } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import styles from "../styles/pages/Home.module.css";

import CountdownProvider from "../contexts/CountdownContext";
import ChallengesProvider from "../contexts/ChallengesContext";

import CompletedChallenger from "../common/CompletedChallenger";
import ExperienceBar from "../common/ExperienceBar";
import Countdown from "../common/Countdown";
import Profile from "../common/Profile";
import ChallengeBox from "../common/ChallengeBox";

interface HomeProps {
	children: ReactNode;
	level: number;
	currentExperience: number;
	challengeCompleted: number;
}

export default function Home(props: HomeProps) {
	return (
		<ChallengesProvider
			level={props.level}
			currentExperience={props.currentExperience}
			challengeCompleted={props.challengeCompleted}
		>
			<div className={styles.container}>
				<Head>
					<title>Inicio | move.it</title>
				</Head>

				<ExperienceBar />

				<CountdownProvider>
					<section>
						<div>
							<Profile />
							<CompletedChallenger />
							<Countdown />
						</div>
						<div>
							<ChallengeBox />
						</div>
					</section>
				</CountdownProvider>
			</div>
		</ChallengesProvider>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { level, currentExperience, challengeCompleted } = ctx.req.cookies;

	return {
		props: {
			level: Number(level),
			currentExperience: Number(currentExperience),
			challengeCompleted: Number(challengeCompleted),
		},
	};
};
