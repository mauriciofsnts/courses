import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, ActivityIndicator } from "react-native";
import { EnviromentButton } from "../common/EnviromentButton";
import { Header } from "../common/Header";
import { Load } from "../common/Load";
import { PlantCardPrimary } from "../common/PlantCardPrimary";
import { PlantProps } from "../libs/storage";
import api from "../services/api";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnviromentProps {
	key: string;
	title: string;
}

export function PlantSelect() {
	const navigation = useNavigation();

	const [enviroments, setenviroments] = useState<EnviromentProps[]>([]);
	const [plants, setplants] = useState<PlantProps[]>([]);
	const [filteredPlants, setfilteredPlants] = useState<PlantProps[]>([]);
	const [enviromentsSelected, setenviromentsSelected] = useState("all");

	const [loading, setloading] = useState(true);
	const [page, setpage] = useState(1);
	const [loadingMore, setloadingMore] = useState(false);

	const handleEnviromentSelected = (enviroment: string) => {
		setenviromentsSelected(enviroment);

		if (enviroment === "all") return setfilteredPlants(plants);

		const filtered = plants.filter((plant) => plant.environments.includes(enviroment));

		setfilteredPlants(filtered);
	};

	const handlePlantSelect = (plant: PlantProps) => {
		navigation.navigate("PlantSave", { plant });
	};

	async function fetchPlants() {
		const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

		if (!data) return setloading(true);

		if (page > 1) {
			setplants((old) => [...old, ...data]);
			setfilteredPlants((old) => [...old, ...data]);
		} else {
			setplants(data);
			setfilteredPlants(data);
		}

		setloading(false);
		setloadingMore(false);
	}

	const handleFetchMore = (distance: number) => {
		if (distance < 1) return;

		setloadingMore(true);
		setpage((old) => old + 1);
		fetchPlants();
	};

	useEffect(() => {
		async function fetchEnviroment() {
			const { data } = await api.get("plants_environments?_sort=title&_order=asc");
			setenviroments([
				{
					key: "all",
					title: "Todos",
				},
				...data,
			]);
		}

		fetchEnviroment();
	}, [setenviroments]);

	useEffect(() => {
		fetchPlants();
	}, []);

	if (loading) return <Load />;

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Header />

				<Text style={styles.title}>Em qual ambiente</Text>

				<Text style={styles.subtitle}>você quer colocar sua planta?</Text>
			</View>

			<View>
				<FlatList
					data={enviroments}
					keyExtractor={(item) => String(item.key)}
					renderItem={({ item }) => (
						<EnviromentButton
							title={item.title}
							active={item.key === enviromentsSelected}
							onPress={() => handleEnviromentSelected(item.key)}
						/>
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.enviromentList}
				/>
			</View>

			<View style={styles.plants}>
				<FlatList
					data={filteredPlants}
					keyExtractor={(item) => String(item.id)}
					renderItem={({ item }) => (
						<PlantCardPrimary data={item} onPress={() => handlePlantSelect(item)} />
					)}
					showsVerticalScrollIndicator={false}
					numColumns={2}
					onEndReachedThreshold={0.1}
					onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
					ListFooterComponent={loadingMore ? <ActivityIndicator color={colors.green} /> : <View />}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},

	header: {
		paddingHorizontal: 30,
	},

	title: {
		fontSize: 17,
		color: colors.heading,
		fontFamily: fonts.heading,
		lineHeight: 20,
		marginTop: 15,
	},

	subtitle: {
		fontFamily: fonts.text,
		fontSize: 17,
		lineHeight: 20,
		color: colors.heading,
	},

	enviromentList: {
		height: 40,
		justifyContent: "center",
		paddingBottom: 5,
		marginLeft: 32,
		marginVertical: 32,
	},

	plants: {
		flex: 1,
		paddingHorizontal: 32,
		justifyContent: "center",
	},
});
