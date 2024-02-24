import Footer from '@/app/components/atomics/Footer/Footer'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

describe('Atomics - Footer', () => {
  test('Rendered header', () => {
    render(<Footer />)

    const heading = screen.getByText('lilJoint@dventures All Right Reserved')

    expect(heading).toBeInTheDocument()
  })
})
