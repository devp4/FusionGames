import { Box, SimpleGrid, Title } from "@mantine/core"
import LobbyCard from "./LobbyCard"

function Lobbies() {
	return (
		<Box p={20} style={{ borderRadius: "10px", border: "1px solid #424242", }}>
			<Box ta="center">
				<Title c="white" style={{ padding: "1% 0% 2% 0%" }}>LOBBIES</Title>
			</Box>

			<SimpleGrid 
				cols={{
					base: 1,
					xs: 1,
					sm: 1,
					md: 1,
					lg: 2,
					xl: 3
				}} 
				spacing="xl" 
				verticalSpacing="xl"
			>
				
				<LobbyCard />

			</SimpleGrid>
		</Box>
	)
}

export default Lobbies
