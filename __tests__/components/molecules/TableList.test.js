import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import TableList from '@/app/components/molecules/TableList/TableList'
describe('Molecules - TableList', () => {
  test('Rendered TableList Unable', () => {
    const data = [
      {
        id: 1,
        name: 'Mesa 1',
        available: true,
      },
      {
        id: 2,
        name: 'Mesa 2',
        available: false,
      },
    ]
    const action = jest.fn()
    render(<TableList tables={data} tableAction={action} />)

    const firstTable = screen.getByText('Mesa 1')
    expect(firstTable).toHaveClass('bg-green-500')
    expect(firstTable).toBeInTheDocument()
    const secondTable = screen.getByText('Mesa 2')
    expect(secondTable).toHaveClass('bg-red-500')
    expect(secondTable).toBeInTheDocument()
  })
})
