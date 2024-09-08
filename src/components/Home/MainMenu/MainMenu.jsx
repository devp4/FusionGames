import { SimpleGrid, Stack } from "@mantine/core"
import CreateLobby from "../CreateLobby/CreateLobby"
import InfoBox from "../InfoBox/InfoBox"
import JoinLobby from "../JoinLobby/JoinLobby"

function MainMenu() {
	return (
		<SimpleGrid 
		cols={{
			base: 1,
			xs: 1,
			sm: 1,
			md: 1,
			lg: 2,
			xl: 2
		}}
		>
			<Stack>
				<InfoBox />
				<JoinLobby />
			</Stack>
			
			<CreateLobby />

		</SimpleGrid>
	)
}

export default MainMenu
