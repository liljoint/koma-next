import { ThemeProvider } from '@/mt'
import '@/app/globals.css'
import Container from './components/organisms/Container/Container'
import { Context } from './persistance/Context'

export const metadata = {
  title: 'KOMA APP',
  description: 'An update from koma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Context>
          <ThemeProvider>
            <Container>{children}</Container>
          </ThemeProvider>
        </Context>
      </body>
    </html>
  )
}
