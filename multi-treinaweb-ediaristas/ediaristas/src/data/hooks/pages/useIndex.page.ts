import { ApiService } from "./../../services/ApiService";
import { ValidationService } from "./../../services/ValidationService";
import { UserShortInterface } from "../../@types/UserInterface";
import { useState, useMemo } from "react";

export default function useIndex() {
	const [cep, setCep] = useState("");
	const [erro, setErro] = useState("");
	const [buscaFeita, setBuscaFeita] = useState(false);
	const [carregando, setCarregando] = useState(false);
	const [diaristas, setDiaristas] = useState([] as UserShortInterface[]);
	const [diaristasRestantes, setdiaristasRestantes] = useState(0);

	const cepValido = useMemo(() => {
		return ValidationService.cep(cep);
	}, [cep]);

	async function buscarProfissionais(cep: string) {
		setBuscaFeita(false);
		setErro("");
		setCarregando(true);

		try {
			const { data } = await ApiService.get<{
				diaristas: UserShortInterface[];
				quantidade_diaristas: number;
			}>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, "")}`);

			setDiaristas(data.diaristas);
			setdiaristasRestantes(data.quantidade_diaristas);
			setBuscaFeita(true);
			setCarregando(false);
		} catch (error) {
			setErro("CEP não encontrado");
			setCarregando(false);
		}
	}

	return {
		cep,
		setCep,
		cepValido,
		buscarProfissionais,
		erro,
		diaristas,
		buscaFeita,
		carregando,
		diaristasRestantes,
	};
}
