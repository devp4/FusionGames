import { Card, Text, Title } from "@mantine/core"
import { Keyboard, QuestionMark } from "tabler-icons-react"

function Game({ name }) {

	const games = {
		"guessit": {
			title: "Guess It",
			prompt: "Answer the prompt!",
			icon: <QuestionMark style={{margin: "0 auto"}} size={"70px"}/>
		},

		"typebattles": {
			title: "Type Battles",
			prompt: "See who can type faster!",
			icon: <Keyboard style={{margin: "0 auto"}} size={"70px"}/>
		}
	}

	const game = games[name]

  if (!game) {
    return <div>Game not found</div>;
	}

	return (
    <Card ta="center" w="200px" maw="200px" shadow="sm" padding="sm" radius="md" withBorder>
      {game.icon}
      <Title style={{fontSize: "20px", paddingBottom: "5px"}}>{game.title}</Title>
      <Text>{game.prompt}</Text>
    </Card>
	)
}

export default Game
