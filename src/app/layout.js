import { ThemeProvider } from '@/mt'
import './globals.css'

export const metadata = {
  title: 'KOMA APP',
  description: 'An update from koma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
