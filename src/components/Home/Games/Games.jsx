import { Group, ScrollArea } from "@mantine/core"
import Game from "./Game"

function Games() {
	return (
		<ScrollArea>
			<Group wrap="nowrap">
				<Game name="guessit" />
				<Game name="typebattles" />
			</Group>
		</ScrollArea>
	)
}

export default Games
