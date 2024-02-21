'use client'
import { Typography } from '@material-tailwind/react'
import Pagination from '@/app/components/molecules/Pagination/Pagination'

const Table = ({
  headers = [],
  rows = [],
  displayParams = [],
  page,
  pageCount,
  pageSize,
}) => {
  return (
    <div className="flex min-h-[40vh] w-full min-w-max flex-col content-between justify-between">
      <table className="table-auto text-left text-text">
        <thead>
          <tr>
            {headers?.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-bg p-4 text-text"
              >
                <Typography
                  variant="small"
                  className="font-normal leading-none text-text opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isLast = index === rows?.length - 1
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

            return (
              <tr key={`row-${index}`} className="even:bg-blue-gray-50/50">
                {displayParams.map((field) => (
                  <td className={classes} key={row[field]}>
                    <Typography
                      variant="small"
                      color="text-text"
                      className="font-normal"
                    >
                      {String(row[field])}
                    </Typography>
                  </td>
                ))}
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination page={page} pageCount={pageCount} pageSize={pageSize} />
    </div>
  )
}
export default Table
