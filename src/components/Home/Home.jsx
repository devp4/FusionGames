import '@mantine/core/styles.css'
import { AppShell, Stack } from '@mantine/core';
import Lobbies from './LobbyList/Lobbies';
import MainMenu from './MainMenu/MainMenu';


function Home() {
  return (
    <AppShell>
      <AppShell.Main 
				maw={{
					base: "85vw",
					xs: "85vw",
					sm: "70vw",
					md: "60vw",
					lg: "60vw",
					xl: "60vw"
				}} 
				m={"0 auto"} 
				pb="10vh"
				pt="5vh"
			>

				<Stack>
					<MainMenu />
					<Lobbies />
				</Stack>

			</AppShell.Main>
    </AppShell>
  )
}

export default Home
