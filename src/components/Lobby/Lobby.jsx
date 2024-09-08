import { Button, Text, Title } from '@mantine/core'
import '@mantine/core/styles.css'
import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'


function Lobby() {
	const [userId, setuserId] = useState<string>("")

	const { roomId } = useParams()

	const socketURL = "ws://localhost:3000/"
	const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(socketURL);

	useEffect(() => {
		if (lastJsonMessage) console.log(lastJsonMessage)
	}, [lastJsonMessage])

	useEffect(() => {
		if (readyState === ReadyState.OPEN) {
			// User joins a room
			sendJsonMessage({
				type: "join",
				userId: userId,
				roomId: roomId
			})
		}
	}, [readyState])

	return (
		<>
			<div>
				<Title>You Joined Room as {userId}</Title>
			</div>
		</>
	)
}

export default Lobby
