import Header from '@/app/components/atomics/Header/Header'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

describe('Atomics - Header', () => {
  test('Rendered header', () => {
    render(<Header Menu={() => <></>} />)

    const heading = screen.getByText('koma')

    expect(heading).toBeInTheDocument()
  })
})
