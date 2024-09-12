import { Grid, SimpleGrid, Title } from '@mantine/core'
import '@mantine/core/styles.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import LobbyInfo from './LobbyInfo'
import Players from './Players/Players'


function Lobby() {
	const navigate = useNavigate()

	const [userInfo, setuserInfo] = useState({})
	const [players, setPlayers] = useState({})

	const { lobbyId } = useParams()

	const socketURL = "ws://localhost:3000/"
	const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(socketURL);

	useEffect(() => {
		if (lastJsonMessage) {
			if (lastJsonMessage.type === "roomnotfound") {
				navigate("/lobby-not-found")
			}

			if (lastJsonMessage.type === "userInfo") {
				const { type, ...data } = lastJsonMessage
				sessionStorage.setItem("userInfo", userInfo)
				setuserInfo(data)
			}

			if (lastJsonMessage.type === "players") {
				const { players } = lastJsonMessage
				setPlayers(players)
			}
		}
	}, [lastJsonMessage])

	useEffect(() => {
		if (readyState === ReadyState.OPEN) {

			// Get username
			let userName = localStorage.getItem("username")

			// User joins a room
			sendJsonMessage({
				type: "join",
				userName: userName,
				lobbyId: lobbyId
			})
		}
	}, [readyState])

	return (
		<Grid p={50} gutter={"xl"}>
			<Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 12, lg: 3, xl: 3 }}>
				<LobbyInfo admin={userInfo.admin}/>
			</Grid.Col>
			<Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 12, lg: 9, xl: 9 }}>
				<Players players={players}/>
			</Grid.Col>
		</Grid>
	)
}

export default Lobby
