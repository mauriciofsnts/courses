import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Alert } from "react-native";
import { Header } from "../common/Header";
import WaterDrop from "../assets/waterdrop.png";
import colors from "../styles/colors";
import { FlatList } from "react-native-gesture-handler";
import { PlantProps, loadPlant, removePlant } from "../libs/storage";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import fonts from "../styles/fonts";
import { PlantCardSecondary } from "../common/PlantCardSecondary";
import { Load } from "../common/Load";

export function MyPlants() {
	const [myPlants, setmyPlants] = useState<PlantProps[]>([]);
	const [loading, setloading] = useState(true);
	const [nextWaterd, setnextWaterd] = useState<string>();

	function handleRemove(plant: PlantProps) {
		Alert.alert("Remover", `Deseja remover a ${plant.name} ?`, [
			{ text: "Não 🙏", style: "cancel" },
			{
				text: "Sim 😥",
				onPress: async () => {
					try {
						await removePlant(plant.id);

						setmyPlants((old) => old.filter((item) => item.id !== plant.id));
					} catch (error) {
						Alert.alert("Não foi possível remover! 😵");
					}
				},
			},
		]);
	}

	useEffect(() => {
		async function loadStorageData() {
			const plantsStoraged = await loadPlant();

			const nextTime = formatDistance(
				new Date(plantsStoraged[0].dateTimeNotification).getTime(),
				new Date().getTime(),
				{ locale: pt }
			);

			setnextWaterd(`Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`);

			setmyPlants(plantsStoraged);
			setloading(false);
		}

		loadStorageData();
	}, []);

	if (loading) return <Load />;

	return (
		<View style={styles.container}>
			<Header />

			<View style={styles.spotlight}>
				<Image source={WaterDrop} style={styles.spotlightImage} />

				<Text style={styles.spotlightText}>{nextWaterd}</Text>
			</View>

			<View style={styles.plants}>
				<Text style={styles.plantsTitle}>Próximas regadas</Text>

				<FlatList
					data={myPlants}
					keyExtractor={(item) => String(item.id)}
					renderItem={({ item }) => (
						<PlantCardSecondary handleRemove={() => handleRemove(item)} data={item} />
					)}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ flex: 1 }}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 30,
		paddingTop: 50,
		backgroundColor: colors.background,
	},

	spotlight: {
		backgroundColor: colors.blue_light,
		paddingHorizontal: 20,
		borderRadius: 20,
		height: 110,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	spotlightImage: {
		width: 60,
		height: 60,
	},

	spotlightText: {
		flex: 1,
		color: colors.blue,
		paddingHorizontal: 20,
	},

	plants: {
		flex: 1,
		width: "100%",
	},

	plantsTitle: {
		fontSize: 24,
		fontFamily: fonts.heading,
		color: colors.heading,
		marginVertical: 20,
	},
});
