import { Box, Group, Text } from "@mantine/core"
import { UserCircle } from "tabler-icons-react"

function DefaultPlayerCard( { player } ) {
	return (
		<Box h="100%" p={10} style={{ borderRadius: "10px", border: "1px solid #424242" }}>
			<Group align="center" wrap="nowrap">
				<UserCircle size={40} style={{flexShrink: 0}}/>
				<Text truncate="end" style={{flexGrow: 1, textAlign: "left"}}>{player.name}</Text>
				<Text truncate="end" c={"orange"}>{player.admin ? "ADMIN" : null}</Text>
			</Group>
		</Box>
	)
}

export default DefaultPlayerCard
