import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Table from '@/app/components/molecules/Table/Table'
describe('Molecules - Table', () => {
  test('Rendered Table Unable', () => {
    const columns = ['id', 'monto']
    const data = [
      {
        id: 1,
        monto: 1000,
      },
      {
        id: 2,
        monto: 1000,
      },
    ]
    render(
      <Table
        headers={columns}
        rows={data}
        page={1}
        pageCount={1}
        displayParams={['monto']}
      />
    )

    const heading = screen.getByTestId('table')
    expect(heading).toBeInTheDocument()
  })
})
