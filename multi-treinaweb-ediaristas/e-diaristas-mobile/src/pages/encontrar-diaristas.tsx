import React, { useState } from "react";
import { View, Text } from "react-native";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import TextInput from "ui/components/inputs/TextInput/TextInput";
import { TextInputMask } from "react-native-masked-text";

const EncontrarDiaristas: React.FC = () => {
	const [cep, setCep] = useState("");

	return (
		<View>
			<PageTitle
				title="Conheça os profissionais"
				subtitle="Preencha seu endereço e veja todos os profissionais da sua localidade"
			/>

			<TextInputMask
				type="custom"
				options={{
					mask: "99.999-999",
				}}
				value={cep}
				onChangeText={setCep}
				customTextInput={TextInput}
				customTextInputProps={{
					label: "Digite seu CEP",
				}}
			/>
		</View>
	);
};

export default EncontrarDiaristas;
