import { Box, Button, Group, Text, TextInput } from "@mantine/core"
import { useRef, useState } from "react"
import Lobby from "./Lobby"
import DefaultPlayerCard from "./Players/DefaultPlayerCard"
import Players from "./Players/Players"

function LobbyEntry() {
	// Generate a random number between 1 and 9999
	const randomNumber = Math.floor(Math.random() * 9999) + 1;

	// Entry point checks if user has selected a username
	// This is primarly if a user joins from a link and not the site
	const validate = () => {
		if (!localStorage.getItem("username")) return false
		return true
	}

	const updateUsername = (event) => {
		const userName = event.target.value
		localStorage.setItem("username", userName)
	}

	const joinLobby = () => {
		const userName = userNameRef.current.value
		localStorage.setItem("username", userName)

		setShouldContinue(true)
	}
	
	const [shouldContinue, setShouldContinue] = useState(validate())
	const userNameRef = useRef(null)

	return (
		<>
			{shouldContinue ? 
				<Lobby /> :
				<Box m="30vh auto" w="90%" h="100%" p={20} style={{ borderRadius: "10px", border: "1px solid #424242" }}>
					<Text pb="10">Set Username</Text>
					<Group p="10 0 10 0" wrap="nowrap">
						<TextInput
							ref={userNameRef}
							placeholder="Username"
							defaultValue={"Anonymous" + randomNumber}
							maxLength={20}
							onChange={updateUsername}
							style={{flexGrow: 1}}>
						</TextInput>
						
						<Button onClick={joinLobby} size="xs" radius="xl">JOIN</Button>
					</Group>
				</Box>
			}
		</>
	)
}

export default LobbyEntry
