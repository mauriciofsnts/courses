import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { api } from "../services/api";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";
import styles from "./home.module.scss";
import { usePlayer } from "../contexts/PlayerContext";

type Episode = {
	id: string;
	title: string;
	thumbnail: string;
	members: string;
	duration: number;
	durationAsString: string;
	url: string;
	publishedAt: string;
};

type HomeProps = {
	allEpisodes: Episode[];
	latestEpisodes: Episode[];
};

export default function Home({ allEpisodes, latestEpisodes }: HomeProps) {
	const { playList } = usePlayer();

	const episodeList = [...latestEpisodes, ...allEpisodes];

	return (
		<div className={styles.homePage}>
			<Head>
				<title>Home | Podcastr</title>
			</Head>

			<section className={styles.latestEpisodes}>
				<h2>Últimos lançamentos</h2>

				<ul>
					{latestEpisodes.map((ep, index) => {
						return (
							<li key={ep.id}>
								<Image width={192} height={192} src={ep.thumbnail} alt={ep.title} objectFit="cover" />

								<div className={styles.episodeDetails}>
									<Link href={`/episodes/${ep.id}`}>
										<a>{ep.title}</a>
									</Link>

									<p>{ep.members}</p>

									<span>{ep.publishedAt}</span>
									<span>{ep.durationAsString}</span>
								</div>

								<button type="button" onClick={() => playList(episodeList, index)}>
									<img src="/play-green.svg" alt="Tocar episódio" />
								</button>
							</li>
						);
					})}
				</ul>
			</section>

			<section className={styles.allEpisodes}>
				<h2>Todos episódios</h2>

				<table cellSpacing={0}>
					<thead>
						<th></th>
						<th>Podcast</th>
						<th>Integrantes</th>
						<th>Data</th>
						<th>Duração</th>
						<th></th>
					</thead>

					<tbody>
						{allEpisodes.map((ep, index) => {
							return (
								<tr key={ep.id}>
									<td>
										<Image width={120} height={120} src={ep.thumbnail} alt={ep.title} objectFit="cover" />
									</td>
									<td>
										<Link href={`/episodes/${ep.id}`}>
											<a>{ep.title}</a>
										</Link>
									</td>
									<td>{ep.members}</td>
									<td style={{ width: 100 }}>{ep.publishedAt}</td>
									<td>{ep.durationAsString}</td>
									<td>
										<button type="button" onClick={() => playList(episodeList, index + latestEpisodes.length)}>
											<img src="/play-green.svg" alt="Tocar episódio" />
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get("episodes", {
		params: {
			_limit: 12,
			_sort: "published_at",
			_order: "desc",
		},
	});

	const episodes = data.map((episode) => {
		return {
			id: episode.id,
			title: episode.title,
			thumbnail: episode.thumbnail,
			members: episode.members,
			publishedAt: format(parseISO(episode.published_at), "d MMM yy", {
				locale: ptBR,
			}),
			duration: Number(episode.file.duration),
			durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
			url: episode.file.url,
		};
	});

	const latestEpisodes = episodes.slice(0, 2);
	const allEpisodes = episodes.slice(2, episodes.length);

	return {
		props: {
			allEpisodes,
			latestEpisodes,
		},
		revalidate: 60 * 60 * 8,
	};
};
