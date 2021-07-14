import { createContext, ReactNode, useContext, useState } from "react";

type Episode = {
	title: string;
	members: string;
	thumbnail: string;
	duration: number;
	url: string;
};

type PlayerContextData = {
	episodeList: Episode[];
	currentEpisodeIndex: number;
	isPlaying: boolean;
	play: (episode: Episode) => void;
	togglePlay: () => void;
	setPlayingState: (state: boolean) => void;
	playList: (list: Episode[], index: number) => void;
	playPrevious: () => void;
	playNext: () => void;
	toggleLoop: () => void;
	isLooping: boolean;
	hasNext: boolean;
	hasPrevious: boolean;
	isShuffling: boolean;
	toggleShuffle: () => void;
	clearPlayerState: () => void;
};

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
	children: ReactNode;
};

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
	const [episodeList, setepisodeList] = useState([]);
	const [currentEpisodeIndex, setcurrentEpisodeIndex] = useState(0);
	const [isPlaying, setisPlaying] = useState(false);
	const [isLooping, setisLooping] = useState(false);
	const [isShuffling, setisShuffling] = useState(false);

	function play(episode: Episode) {
		setepisodeList([episode]);
		setcurrentEpisodeIndex(0);
		setisPlaying(true);
	}

	function playList(list: Episode[], index: number) {
		setepisodeList(list);
		setcurrentEpisodeIndex(index);
		setisPlaying(true);
	}

	function togglePlay() {
		setisPlaying(!isPlaying);
	}

	function toggleLoop() {
		setisLooping(!isLooping);
	}

	function toggleShuffle() {
		setisShuffling(!isShuffling);
	}

	function setPlayingState(state: boolean) {
		setisPlaying(state);
	}

	function clearPlayerState() {
		setepisodeList([]);
		setcurrentEpisodeIndex(0);
	}

	const hasPrevious = currentEpisodeIndex > 0;
	const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;

	function playNext() {
		if (isShuffling) {
			const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);

			setcurrentEpisodeIndex(nextRandomEpisodeIndex);
		} else if (hasNext) {
			setcurrentEpisodeIndex(currentEpisodeIndex + 1);
		}
	}

	function playPrevious() {
		if (hasPrevious) {
			setcurrentEpisodeIndex(currentEpisodeIndex - 1);
		}
	}

	return (
		<PlayerContext.Provider
			value={{
				episodeList,
				currentEpisodeIndex,
				play,
				isPlaying,
				togglePlay,
				setPlayingState,
				playList,
				playNext,
				playPrevious,
				hasPrevious,
				hasNext,
				toggleLoop,
				isLooping,
				toggleShuffle,
				isShuffling,
				clearPlayerState,
			}}
		>
			{children}
		</PlayerContext.Provider>
	);
}

export const usePlayer = () => {
	return useContext(PlayerContext);
};
