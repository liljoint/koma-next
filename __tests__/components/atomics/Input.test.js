import '@testing-library/jest-dom'

import Input from '@/app/components/atomics/Input/Input'
import { render, screen } from '@testing-library/react'

describe('Atomics - Input', () => {
  test('Rendered input', () => {
    render(<Input name="box1" data-testid="box1" />)

    const heading = screen.getByTestId('box1')

    expect(heading).toBeInTheDocument()
  })
})
