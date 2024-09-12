import { Box, Button, Group, TextInput, Text } from "@mantine/core"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

function JoinLobby() {
	const lobbyIdRef = useRef(null)
	const [error, setError] = useState(false)

	const navigate = useNavigate()

	const joinLobby = () => {
		const lobbyId = lobbyIdRef.current.value

		// Must have lobby name
		if (lobbyIdRef.current.value.trim() === "") {
			setError(true) 
			return
		}

		navigate("join/" + lobbyId)
	}

	return (
		<Box p={20} style={{ borderRadius: "10px", border: "1px solid #424242", }}>
			<Text>Join Lobby</Text>
			<Group p="10 0 5 0" wrap="nowrap">
				{error ? 
					<TextInput ref={lobbyIdRef} placeholder="Lobby Id" style={{ flexGrow: 1 }} error="Enter lobby id"></TextInput> :
					<TextInput ref={lobbyIdRef} placeholder="Lobby Id" style={{ flexGrow: 1 }}></TextInput>
				}

				<Button size="xs" radius="xl" onClick={joinLobby}>JOIN</Button>
			</Group>
		</Box>
	)
}

export default JoinLobby
