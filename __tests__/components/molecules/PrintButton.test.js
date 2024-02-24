import PrintButton from '@/app/components/molecules/PrintButton/PrintButton'
import { fireEvent, render, screen } from '@testing-library/react'
import posPrinter from '../../../src/actions/posPrinter'
jest.mock('../../../src/actions/posPrinter')
describe('Molecules - PrintButton', () => {
  test('Rendered PrintButton Unable', () => {
    posPrinter.mockImplementationOnce(() => {
      return
    })
    render(<PrintButton content="contenido" />)

    const heading = screen.getByTestId('print-form')
    fireEvent.submit(heading)
    expect(posPrinter).toHaveBeenCalledTimes(1)
  })
})
