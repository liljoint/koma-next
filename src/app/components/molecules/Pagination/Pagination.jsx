import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import Button from '@/app/components/atomics/Button/Button'
import { useState } from 'react'
import { Typography } from '@material-tailwind/react'

const Pagination = ({ page = 1, pageCount }) => {
  const [active, setActive] = useState(page)

  const next = () => {
    if (active === 5) return

    setActive(active + 1)
  }

  const prev = () => {
    if (active === 1) return

    setActive(active - 1)
  }
  console.log(page, pageCount)
  return (
    <div className="mx-auto flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Anterior
      </Button>
      <Typography color="gray" className="font-normal">
        Página <strong className="text-gray-900">{page}</strong> de{' '}
        <strong className="text-gray-900">{pageCount}</strong>
      </Typography>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === pageCount}
      >
        siguiente
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  )
}
export default Pagination
