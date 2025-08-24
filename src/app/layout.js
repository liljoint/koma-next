import { ThemeProvider } from '@/mt'
import '@/globals.css'
import Container from './components/organisms/Container/Container'
import { Context } from './persistance/Context'
import { SWRProvider } from './swr/SwrProvider'

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
            <SWRProvider>
              <Container>{children}</Container>
            </SWRProvider>
          </ThemeProvider>
        </Context>
      </body>
    </html>
  )
}
