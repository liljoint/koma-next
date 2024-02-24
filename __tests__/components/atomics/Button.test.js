import '@testing-library/jest-dom'

import Button from '@/app/components/atomics/Button/Button'
import { render, screen } from '@testing-library/react'

describe('Atomics - Button', () => {
  test('Rendered input', () => {
    render(<Button name="test-button">test button</Button>)

    const heading = screen.getByRole('button')

    expect(heading).toBeInTheDocument()
  })
})
