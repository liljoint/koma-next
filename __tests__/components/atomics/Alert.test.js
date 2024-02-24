import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Alert from '@/app/components/atomics/Alert/Alert'
describe('Atomics - Alert', () => {
  test('Rendered Alert', () => {
    render(<Alert>test message</Alert>)

    const heading = screen.getByText('test message')

    expect(heading).toBeInTheDocument()
  })
})
