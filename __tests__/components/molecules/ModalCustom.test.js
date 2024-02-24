import '@testing-library/jest-dom'

import ModalCustom, {
  ModalBody,
  ModalHeader,
} from '@/app/components/molecules/ModalCustom/ModalCustom'
import { render, screen } from '@testing-library/react'

describe('Molecules - ModalCustom', () => {
  test('Rendered ModalCustom', () => {
    render(
      <ModalCustom isOpen={true}>
        <ModalHeader>Cabecera de la prueba</ModalHeader>
        <ModalBody>Text of modal</ModalBody>
      </ModalCustom>
    )

    const heading = screen.getByText('Text of modal')

    expect(heading).toBeInTheDocument()
  })
  test('Rendered ModalCustom without header', () => {
    render(
      <ModalCustom isOpen={true}>
        <ModalHeader />
        <ModalBody>Text of modal</ModalBody>
      </ModalCustom>
    )

    const heading = screen.getByText('Text of modal')

    expect(heading).toBeInTheDocument()
  })
})
