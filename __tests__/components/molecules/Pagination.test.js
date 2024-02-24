import '@testing-library/jest-dom'

import Pagination from '@/app/components/molecules/Pagination/Pagination'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Molecules - Pagination', () => {
  test('Rendered Pagination Unable', () => {
    render(<Pagination page={1} pageCount={1} />)

    const heading = screen.getAllByRole('button')
    const left = heading[0]
    const right = heading[1]
    expect(left).toHaveProperty('disabled')
    expect(right).toHaveProperty('disabled')

    expect(left.disabled).toBe(true)
    expect(right.disabled).toBe(true)
  })
  test('Rendered Pagination Many pages', () => {
    render(<Pagination page={1} pageCount={2} />)

    const heading = screen.getAllByRole('button')
    const left = heading[0]
    const right = heading[1]
    expect(left.disabled).toBe(true)
    expect(right.disabled).toBe(false)

    fireEvent.click(right)

    expect(left.disabled).toBe(false)
    expect(right.disabled).toBe(true)
    fireEvent.click(left)

    expect(left.disabled).toBe(true)
    expect(right.disabled).toBe(false)
  })
})
