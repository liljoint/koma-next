import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import PrintButton from '@/app/components/molecules/PrintButton/PrintButton'
import posPrinter from '../../../src/actions/posPrinter'
jest.mock('../../../src/actions/posPrinter')
describe('Molecules - PrintButton', () => {
  beforeEach(() => {
    posPrinter.mockImplementation(() => {
      console.log('AAAAAAAAAAAAAAAAAAAAAAA')
      return
    })
  })
  test('Rendered PrintButton Unable', async () => {
    render(<PrintButton content="contenido" />)

    const heading = screen.getByTestId('print-form')
    fireEvent.submit(heading)
    expect(posPrinter).toHaveBeenCalledTimes(1)
  })
})
