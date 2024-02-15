import { ThemeProvider } from '@/mt'
import '@/app/globals.css'
import App from './components/organisms/App/App'

export const metadata = {
  title: 'KOMA APP',
  description: 'An update from koma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <App>{children}</App>
        </ThemeProvider>
      </body>
    </html>
  )
}
