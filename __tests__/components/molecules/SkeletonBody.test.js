import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import SkeletonBody from '@/app/components/molecules/SkeletonBody/SkeletonBody'
describe('Molecules - SkeletonBody', () => {
  test('Rendered SkeletonBody Unable', () => {
    render(<SkeletonBody />)

    const heading = screen.getByTestId('skeleton')
    expect(heading).toBeInTheDocument()
  })
})
