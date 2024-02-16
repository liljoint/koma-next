import OrderTable from '@/app/components/molecules/OrderTable/OrderTable'

const TableList = ({ tables, tableAction }) => {
  return (
    <article>
      <div className="m-auto">
        {tables?.map((table, index) => (
          <OrderTable {...table} key={index} onClick={tableAction(table)} />
        ))}
      </div>
    </article>
  )
}
export default TableList
