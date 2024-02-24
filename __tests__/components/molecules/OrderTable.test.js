import '@testing-library/jest-dom'

import OrderTable from '@/app/components/molecules/OrderTable/OrderTable'
import { render, screen } from '@testing-library/react'

describe('Molecules - OrderTable', () => {
  test('Rendered OrderTable Unable', () => {
    render(<OrderTable available={false} name="Mesa 1" />)

    const heading = screen.getByText('Mesa 1')
    expect(heading).toHaveClass('bg-red-500')
    expect(heading).toBeInTheDocument()
  })
  test('Rendered OrderTable Enabled', () => {
    render(<OrderTable available={true} name="Mesa 1" />)

    const heading = screen.getByText('Mesa 1')
    expect(heading).toHaveClass('bg-green-500')
    expect(heading).toBeInTheDocument()
  })
})
