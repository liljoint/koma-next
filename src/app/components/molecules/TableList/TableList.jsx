import OrderTable from '@/app/components/molecules/OrderTable/OrderTable'

const TableList = ({ tables, tableAction }) => {
  return (
    <article>
      <div className="m-auto grid grid-cols-4 gap-2 md:grid-cols-6">
        {tables?.map((table, index) => (
          <OrderTable {...table} key={index} onClick={tableAction(table)} />
        ))}
      </div>
    </article>
  )
}
export default TableList
