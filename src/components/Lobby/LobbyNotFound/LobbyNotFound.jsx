import { Box, Button, Title } from "@mantine/core"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function LobbyNotFound() {
	const navigate = useNavigate()

	return (
		<Box ta="center" m="30vh auto" w="90%" h="100%" p={20} style={{ borderRadius: "10px", border: "1px solid #424242" }}>
			<Title pb="30">Lobby Not Found</Title>
		<Button radius="xl" onClick={() => navigate("/")}>HOME</Button>
	</Box>
	)
}

export default LobbyNotFound
