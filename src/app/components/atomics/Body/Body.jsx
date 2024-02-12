const Body = ({ children }) => {
  return (
    <div className="m-auto -my-12 flex w-[80%] flex-col rounded-xl bg-black p-5 shadow-inner shadow-gray-600 min-h-[calc(80vh-5rem)]">
      {children}
    </div>
  );
};
export default Body;
