import OrderTable from '../OrderTable/OrderTable'

const TableList = ({ tables, handleClick }) => {
  return (
    <article>
      <div className="m-auto">
        {tables?.map((table, index) => (
          <OrderTable {...table} key={index} onClick={handleClick} />
        ))}
      </div>
    </article>
  )
}
export default TableList
