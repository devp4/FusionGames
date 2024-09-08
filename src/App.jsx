import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Lobby from './components/Lobby/Lobby';

function App() {
	return (
		<>
			<MantineProvider defaultColorScheme='dark'>
				<BrowserRouter>
					<Routes>
						<Route path="/join/:roomId" element={<Lobby />}></Route>
						<Route path="/" element={<Home />}></Route>
					</Routes>
				</BrowserRouter>
			</MantineProvider>
		</>
	)
}

export default App
