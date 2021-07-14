import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";

import {
	StyleSheet,
	Alert,
	Text,
	TouchableOpacity,
	Image,
	ScrollView,
	View,
	Platform,
} from "react-native";
import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { Button } from "../common/Button";
import { SvgFromUri } from "react-native-svg";
import WaterDrop from "../assets/waterdrop.png";

import { getBottomSpace } from "react-native-iphone-x-helper";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { format, isBefore } from "date-fns";
import { PlantProps, savePlant } from "../libs/storage";

interface Params {
	plant: PlantProps;
}

export function Plantsave() {
	const route = useRoute();
	const { plant } = route.params as Params;
	const navigation = useNavigation();

	const [selectedDateTime, setselectedDateTime] = useState(new Date());
	const [showDatePicker, setshowDatePicker] = useState(Platform.OS === "ios");

	const handleChangeTime = (event: Event, dateTime: Date | undefined) => {
		if (Platform.OS === "android") {
			setshowDatePicker((old) => !old);
		}

		if (dateTime && isBefore(dateTime, new Date())) {
			setselectedDateTime(new Date());
			return Alert.alert("Escolha uma hora no futuro! ⏰");
		}

		if (dateTime) setselectedDateTime(dateTime);
	};

	const handleOpenDatetimePiceForAndroid = () => {
		setshowDatePicker((old) => !old);
	};

	const handleSave = async () => {
		try {
			await savePlant({
				...plant,
				dateTimeNotification: selectedDateTime,
			});

			navigation.navigate("Confirmation", {
				title: "Tudo certo",
				subtitle:
					"Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.",
				buttonTitle: "Muito Obrigado :D",
				icon: "hug",
				nextScreen: "MyPlants",
			});
		} catch (error) {
			Alert.alert("Não foi possível salvar. 😰");
		}
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
			<View style={styles.container}>
				<View style={styles.plantInfo}>
					<SvgFromUri uri={plant.photo} height={150} width={150} />

					<Text style={styles.plantName}>{plant.name} </Text>

					<Text style={styles.plantAbout}>{plant.about}</Text>
				</View>

				<View style={styles.controller}>
					<View style={styles.tipContainer}>
						<Image source={WaterDrop} style={styles.tipImage} />

						<Text style={styles.tipText}>{plant.water_tips}</Text>
					</View>

					<Text style={styles.alertLabel}>Escolha o melhor horário para ser lembrado:</Text>

					{showDatePicker && (
						<DateTimePicker
							value={selectedDateTime}
							mode="time"
							display="spinner"
							onChange={handleChangeTime}
						/>
					)}

					{Platform.OS === "android" && (
						<TouchableOpacity
							onPress={handleOpenDatetimePiceForAndroid}
							style={styles.dateTimePickerTextButton}
						>
							<Text style={styles.dateTimePickerText}>{`Mudar ${format(
								selectedDateTime,
								"HH:mm"
							)} `}</Text>
						</TouchableOpacity>
					)}

					<Button title="Cadastrar planta" onPress={handleSave} />
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		backgroundColor: colors.shape,
	},

	plantInfo: {
		flex: 1,
		paddingHorizontal: 30,
		paddingVertical: 50,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.shape,
	},

	plantName: {
		fontFamily: fonts.heading,
		fontSize: 24,
		color: colors.heading,
		marginTop: 15,
	},

	plantAbout: {
		textAlign: "center",
		fontFamily: fonts.text,
		color: colors.heading,
		fontSize: 17,
		marginTop: 10,
	},

	controller: {
		backgroundColor: colors.white,
		paddingHorizontal: 20,
		paddingTop: 20,
		paddingBottom: getBottomSpace() || 20,
	},

	tipContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: colors.blue_light,
		padding: 20,
		borderRadius: 20,
		position: "relative",
		bottom: 60,
	},

	tipImage: {
		width: 56,
		height: 56,
	},

	tipText: {
		flex: 1,
		marginLeft: 20,
		fontFamily: fonts.text,
		color: colors.blue,
		fontSize: 17,
		textAlign: "justify",
	},

	alertLabel: {
		textAlign: "center",
		fontFamily: fonts.complement,
		color: colors.heading,
		fontSize: 12,
		marginBottom: 5,
	},

	dateTimePickerTextButton: {
		width: "100%",
		alignItems: "center",
		paddingVertical: 40,
	},

	dateTimePickerText: {
		color: colors.heading,
		fontSize: 24,
		fontFamily: fonts.text,
	},
});
