import Body from '@/app/components/atomics/Body/Body'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

describe('Atomics - Body', () => {
  test('Rendered header', () => {
    render(<Body>test content</Body>)

    const heading = screen.getByText('test content')

    expect(heading).toBeInTheDocument()
  })
})
