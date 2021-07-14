import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationTheme } from "ui/themes/app-theme";

import Index from "pages/index";
import EncontrarDiaristas from "pages/encontrar-diaristas";

import Logo from "@assets/img/logos/e-diaristas-logo.png";
import { Image } from "react-native";

const Stack = createStackNavigator();

export type RootStackParamList = {
	Index: undefined;
	Diaristas: undefined;
};

const Router: React.FC = () => {
	return (
		<NavigationContainer theme={NavigationTheme}>
			<Stack.Navigator>
				<Stack.Screen
					name="Index"
					component={Index}
					options={{
						headerTitleAlign: "center",
						headerTitle: () => (
							<Image
								source={Logo}
								style={{
									width: 150,
									height: 50,
									resizeMode: "contain",
								}}
							/>
						),
					}}
				/>
			</Stack.Navigator>
			<Stack.Screen
				name="Diaristas"
				component={EncontrarDiaristas}
				options={{
					title: "Encontrar Diarista",
				}}
			/>
		</NavigationContainer>
	);
};

export default Router;
