import { Routes, Route } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import Navigation from './components/Navigation'
import './assets/scss/App.scss'

// Page import
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NowPlayingPage from './pages/NowPlayingPage'
import PopularPage from './pages/PopularPage'
import TopRatedPage from './pages/TopRatedPage'
import SingleMoviePage from './pages/SingleMoviePage'
import ActorPage from './pages/ActorPage'
import GenresPage from './pages/GenresPage'
import MovieByGenre from './pages/MoviesByGenre'


function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/now_playing" element={<NowPlayingPage />} />
				<Route path="/popular" element={<PopularPage />} />
				<Route path="/top_rated" element={<TopRatedPage />} />
				<Route path="/movie/:id" element={<SingleMoviePage />} />
				<Route path="/actor/:id" element={<ActorPage />} />
				<Route path="/genres/:id" element={<MovieByGenre />} />
				<Route path="/genres/" element={<GenresPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<ReactQueryDevtools/>
		</div>
	)
}

export default App
