import { Box, Button, Group, ScrollArea, Slider, Stack, Text } from "@mantine/core"
import { useState } from "react";

function LobbyInfo({ admin }) {
	const [chaningPoints, setchangingPoints] = useState(100);
  const [points, setPoints] = useState(100);

	const [chaningTimer, setchangingTimer] = useState(20);
  const [timer, setTimer] = useState(20);

	return (
		<Box p={10} style={{ borderRadius: "10px", border: "1px solid #424242" }}>
			<Stack p={10} gap={"xl"}>
				<Box>
					<Text m="3 0 10 0" style={{borderBottom: "0.5px solid #424242"}}>Room ID</Text>
					<Group>
						<Text>ABCD</Text>
						<Button size="xs" radius="xl">Copy URL</Button>
					</Group>
				</Box>

				<Box>
					<Group>
						<Text>Players: </Text>
						<Text>20/20</Text>
					</Group>
				</Box>

				<Box>
					<Stack>

					<Text style={{borderBottom: "0.5px solid #424242"}}>Guess It Settings</Text>
					<Text >Points: {chaningPoints}</Text>
					<Slider disabled={!admin} value={chaningPoints} min={50} max={500} onChange={setchangingPoints} onChangeEnd={setPoints} />

					<Text >Time Per Prompt: {chaningTimer} seconds</Text>
					<Slider disabled={!admin} value={chaningTimer} min={5} max={30} onChange={setchangingTimer} onChangeEnd={setTimer} />
					</Stack>
				</Box>
				<Button disabled={!admin} mt="10%" size="xs" radius="xl">START GAME</Button>
			</Stack>
		</Box>
	)
}

export default LobbyInfo
