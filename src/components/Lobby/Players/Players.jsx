import { Box, Button, ScrollArea, SimpleGrid, Title } from "@mantine/core"
import DefaultPlayerCard from "./DefaultPlayerCard"
import { useNavigate } from "react-router-dom"

function Players({ players }) {
	const navigate = useNavigate()
	return (
		<Box ta="center" style={{ borderRadius: "10px", border: "1px solid #424242" }}>
			<Title pt="2%" pb="2%">PLAYERS</Title>
			<Button mb="5%" size="xs" radius="xl" onClick={() => navigate("/")}>LEAVE</Button>
			<ScrollArea p="8%" pt="2%" h="2%">
				<SimpleGrid
					cols={{
						base: 1,
						xs: 1,
						sm: 1,
						md: 2,
						lg: 2,
						xl: 2
					}} 
				>
					{Object.keys(players).map((player) => <DefaultPlayerCard key={player} player={players[player]} />)}
			</SimpleGrid>
			</ScrollArea>
		</Box>
	)
}

export default Players
