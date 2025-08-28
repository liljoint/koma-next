import '@testing-library/jest-dom'

import OrderTable from '@/app/components/molecules/OrderTable/OrderTable'
import { render, screen } from '@testing-library/react'

describe('Molecules - OrderTable', () => {
  test('Rendered OrderTable Unable', () => {
    render(<OrderTable tableAvailable={false} tableName="Mesa 1" />)

    const heading = screen.getByText('Mesa 1')
    expect(heading).toHaveClass('bg-red-500')
    expect(heading).toBeInTheDocument()
  })
  test('Rendered OrderTable Enabled', () => {
    render(<OrderTable tableAvailable={true} tableName="Mesa 1" />)

    const heading = screen.getByText('Mesa 1')
    expect(heading).toHaveClass('bg-green-500')
    expect(heading).toBeInTheDocument()
  })
})
