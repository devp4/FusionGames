import { Box, Button, Group, Select, Stack, Text, TextInput } from "@mantine/core"
import Games from "../Games/Games"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateLobby() {
	const games = ["Guess It", "Type Battles"]

	const gameNameRef = useRef(null)
	const lobbyTypeRef = useRef(null)
	const lobbyNameRef = useRef(null)

	const [error, setError] = useState(false)

	const navigate = useNavigate()

	const createLobby = async () => {
		if (!gameNameRef.current) return
		if (!lobbyTypeRef.current) return
		if (!lobbyNameRef.current) return

		// Must have lobby name
		if (lobbyNameRef.current.value.trim() === "") {
			setError(true) 
			return
		}

		// Create room on server
		const data = await fetch("http://localhost:3000/createLobby", {
			method: "POST",
			body: JSON.stringify({
				lobbyName: lobbyNameRef.current.value,
				lobbyType: lobbyTypeRef.current.value,
				gameName: gameNameRef.current.value
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})

		const { lobbyId } = await data.json()
		
		if (lobbyId) {
			navigate("join/" + lobbyId)
		}
	}

	return (
		<Box p={20} style={{ borderRadius: "10px", border: "1px solid #424242", }}>
			<Text pb="20">Create Lobby</Text>
			<Stack>
				<Games />

				<Select 
					ref={gameNameRef}
					label="Game" 
					placeholder="Game" 
					data={games}
					defaultValue="Guess It"
				/>
				
				<Select
				ref={lobbyTypeRef}
					label="Lobby Type" 
					placeholder="Lobby Type" 
					data={["Public", "Private"]}
					defaultValue="Public"
				/>
				<Group p="10 0 10 0" wrap="nowrap">
					{error ? 
						<TextInput ref={lobbyNameRef} placeholder="Lobby Name" style={{flexGrow: 1}} error="Enter lobby name"></TextInput> :
						<TextInput ref={lobbyNameRef} placeholder="Lobby Name" style={{flexGrow: 1}}></TextInput>
					}
					<Button onClick={createLobby} size="xs" radius="xl">CREATE</Button>
				</Group>
			</Stack>
		</Box>
	)
}

export default CreateLobby
