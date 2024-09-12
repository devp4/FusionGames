import { Box, Group, TextInput, Stack, Text, Title } from "@mantine/core"
import { Door, Wifi } from "tabler-icons-react"

function InfoBox() {
	const updateUsername = (event) => {
		const userName = event.target.value
		localStorage.setItem("username", userName)
	}

	return (
		<Box h="100%" p={20} style={{ borderRadius: "10px", border: "1px solid #424242", }}>
			<Box ta={"center"}>
				<Title p="5 0 20 0" c={"#fff"}>FUSION GAMES</Title>
			</Box>
			<Text pb="10">Username</Text>
			<TextInput
				placeholder="Username" 
				defaultValue={localStorage.getItem("username")} 
				maxLength={20}
				onChange={updateUsername}>
			</TextInput>

			<Stack pt="30" gap={"sm"}>
				<Group gap={"sm"}>
					<Wifi color="#3ba55c" />
					<Text>1234 In Game</Text>
				</Group>
				<Group gap={"sm"}>
					<Door color="orange" />
					<Text>1234 Lobbies</Text>
				</Group>
			</Stack>

			<Text pt={"40"} style={{textDecoration: "underline"}}>Frequently Asked Questions</Text>
		</Box>
	)
}

export default InfoBox
