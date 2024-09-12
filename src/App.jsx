import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import LobbyEntry from './components/Lobby/LobbyEntry';
import LobbyNotFound from './components/Lobby/LobbyNotFound/LobbyNotFound';

function App() {
	return (
		<>
			<MantineProvider defaultColorScheme='dark'>
				<BrowserRouter>
					<Routes>
						<Route path="/join/:lobbyId" element={<LobbyEntry />}></Route>
						<Route path="/" element={<Home />}></Route>
						<Route path="/lobby-not-found" element={<LobbyNotFound />}></Route>
					</Routes>
				</BrowserRouter>
			</MantineProvider>
		</>
	)
}

export default App
