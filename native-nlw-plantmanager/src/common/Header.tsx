import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import colors from "../styles/colors";

import userImg from "../assets/user.png";
import fonts from "../styles/fonts";

import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
	const [username, setusername] = useState<string>();

	useEffect(() => {
		async function loadStorageUserName() {
			const user = await AsyncStorage.getItem("@plantmanager:user");
			setusername(user || "");
		}

		loadStorageUserName();
	}, [setusername]);

	return (
		<View style={style.container}>
			<View>
				<Text style={style.greeting}>Olá,</Text>
				<Text style={style.username}>{username}</Text>
			</View>

			<Image source={userImg} style={style.image} />
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: getStatusBarHeight(),
		paddingVertical: 20,
	},

	image: {
		width: 70,
		height: 70,
		borderRadius: 40,
	},

	greeting: {
		fontSize: 32,
		color: colors.heading,
		fontFamily: fonts.text,
	},

	username: {
		fontSize: 32,
		fontFamily: fonts.heading,
		color: colors.heading,
		lineHeight: 40,
	},
});
