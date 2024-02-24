import '@testing-library/jest-dom'

import Autocomplete from '@/app/components/molecules/Autocomplete/Autocomplete'
import { render, screen } from '@testing-library/react'

describe('Molecules - Autocomplete', () => {
  test('Rendered Autocomplete', () => {
    render(<Autocomplete data-testid="box1" placeholder="Autocomplete" />)

    const heading = screen.getByText('Autocomplete')

    expect(heading).toBeInTheDocument()
  })
})
