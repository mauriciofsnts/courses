import { useEffect, useRef, useState } from "react";
import { usePlayer } from "../../contexts/PlayerContext";
import styles from "./styles.module.scss";
import Image from "next/image";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";

export function Player() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [progress, setprogress] = useState(0);

	const {
		currentEpisodeIndex,
		episodeList,
		isPlaying,
		togglePlay,
		setPlayingState,
		playNext,
		playPrevious,
		hasPrevious,
		hasNext,
		isLooping,
		toggleLoop,
		isShuffling,
		toggleShuffle,
		clearPlayerState,
	} = usePlayer();

	const episode = episodeList[currentEpisodeIndex];

	function setupProgressListener() {
		audioRef.current.currentTime = 0;

		audioRef.current.addEventListener("timeupdate", () => {
			setprogress(Math.floor(audioRef.current.currentTime));
		});
	}

	function handleSeek(amout: number) {
		audioRef.current.currentTime = amout;
		setprogress(amout);
	}

	function handleEpisodeEnded() {
		if (hasNext) {
			playNext();
		} else {
			clearPlayerState();
		}
	}

	useEffect(() => {
		if (!audioRef.current) return;

		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [isPlaying]);

	return (
		<div className={styles.playerContainer}>
			<header>
				<img src="/playing.svg" alt="Tocando agora" />
				<strong>Tocando agora {episode?.title}</strong>
			</header>

			{episode ? (
				<div className={styles.currentEpisode}>
					<Image width={592} height={592} src={episode.thumbnail} objectFit="cover" />

					<strong>{episode.title}</strong>
					<span>{episode.members}</span>
				</div>
			) : (
				<div className={styles.emptyPlayer}>
					<strong>Selecione um podcast para ouvir</strong>
				</div>
			)}

			<footer className={!episode ? styles.empty : ""}>
				<div className={styles.progress}>
					<span>{convertDurationToTimeString(progress)}</span>
					<div className={styles.slider}>
						{episode ? (
							<Slider
								trackStyle={{ backgroundColor: "#04d631" }}
								railStyle={{ backgroundColor: "#9f75ff" }}
								handleStyle={{ borderColor: "#04d631", borderWidth: 4 }}
								max={episode.duration}
								value={progress}
								onChange={handleSeek}
							/>
						) : (
							<div className={styles.emptySlider} />
						)}
					</div>
					<span>{convertDurationToTimeString(episode?.duration ?? 0)}</span>
				</div>

				{episode && (
					<audio
						src={episode.url}
						autoPlay
						ref={audioRef}
						onEnded={handleEpisodeEnded}
						onPlay={() => setPlayingState(true)}
						onPause={() => setPlayingState(false)}
						onLoadedMetadata={setupProgressListener}
						loop={isLooping}
					/>
				)}

				<div className={styles.buttons}>
					<button
						type="button"
						disabled={!episode || episodeList.length === 1}
						onClick={toggleShuffle}
						className={isShuffling ? styles.isActive : ""}
					>
						<img src="/shuffle.svg" alt="Embaralhar" />
					</button>
					<button type="button" onClick={playPrevious} disabled={!episode || !hasPrevious}>
						<img src="/play-previous.svg" alt="Tocar anterior" />
					</button>
					<button type="button" className={styles.playButton} disabled={!episode} onClick={togglePlay}>
						{isPlaying ? <img src="/pause.svg" alt="Tocar" /> : <img src="/play.svg" alt="Tocar" />}
					</button>
					<button type="button" onClick={playNext} disabled={!episode || !hasNext}>
						<img src="/play-next.svg" alt="Tocar próxima" />
					</button>
					<button type="button" disabled={!episode} onClick={toggleLoop} className={isLooping ? styles.isActive : ""}>
						<img src="/repeat.svg" alt="Repetir" />
					</button>
				</div>
			</footer>
		</div>
	);
}
