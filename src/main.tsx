import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './pages/LandingPage'

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<LandingPage />
	</StrictMode>,
)
