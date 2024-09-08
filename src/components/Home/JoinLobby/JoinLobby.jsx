import { Box, Button, Group, TextInput, Text } from "@mantine/core"

function JoinLobby() {
	return (
		<Box p={20} style={{ borderRadius: "10px", border: "1px solid #424242", }}>
			<Text>Join Lobby</Text>
			<Group p="10 0 5 0" wrap="nowrap">
				<TextInput placeholder="Lobby Id" style={{ flexGrow: 1 }}></TextInput>
				<Button size="xs" radius="xl">JOIN</Button>
			</Group>
		</Box>
	)
}

export default JoinLobby
