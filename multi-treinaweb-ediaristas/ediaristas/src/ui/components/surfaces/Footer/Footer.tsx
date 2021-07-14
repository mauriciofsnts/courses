import React from "react";
import { Typography, Box } from "@material-ui/core";
import { FooterStyled, FooterContainer, FooterTitle, AppList } from "./Footer.style";

const Footer = () => {
	return (
		<FooterStyled>
			<FooterContainer>
				<Box sx={{ maxWidth: 400 }}>
					<FooterTitle>Quem somos</FooterTitle>

					<Typography variant="body2" sx={{ mt: 2 }}>
						E-Diaristas te ajuda a encontrar um profissional perfeito para realizar a limpeza da sua casa. Garantimos a
						melhor profissional com total segurança e praticidade! São milhares de clientes satisfeitos por todo o país.
					</Typography>
				</Box>

				<Box>
					<FooterTitle>Baixe nossos aplicativos</FooterTitle>

					<AppList>
						<li>
							<a href="/" target="_blank" rel="noopener noreferrer">
								<img src="/img/logos/app-store.png" alt="App store" />
							</a>
						</li>

						<li>
							<a href="/" target="_blank" rel="noopener noreferrer">
								<img src="/img/logos/google-play.png" alt="Google play" />
							</a>
						</li>
					</AppList>
				</Box>
			</FooterContainer>
		</FooterStyled>
	);
};

export default Footer;
