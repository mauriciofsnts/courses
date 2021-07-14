import React, { useEffect } from "react";
import AppLoading from "expo-app-loading";
import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import Routes from "./src/routes";
import * as Notifications from "expo-notifications";
import { PlantProps } from "./src/libs/storage";

function App() {
	useEffect(() => {
		const subscription = Notifications.addNotificationReceivedListener(async (notification) => {
			const data = notification.request.content.data.plant as PlantProps;
			console.log(data);
		});

		// async function notifications() {
		// 	await Notifications.cancelAllScheduledNotificationsAsync();

		// 	const data = await Notifications.getAllScheduledNotificationsAsync();
		// 	console.log("####### NOTIFICAÇÕES AGENDADAS ####### ");
		// 	console.log(data);
		// }

		// notifications();

		return () => subscription.remove();
	}, []);

	const [fontsLoaded] = useFonts({
		Jost_400Regular,
		Jost_600SemiBold,
	});

	if (!fontsLoaded) return <AppLoading />;

	return <Routes />;
}

export default App;
