const Paymentpagination = () => {
  return (
    <div className="flex justify-center items-center mt-8 p-10">
      <nav className="flex">
        <a
          href="#"
          className="px-4 py-2 mx-1 font-semibold text-gray-700 bg-white hover:text-white hover:bg-blue-500 border rounded-md"
        >
          &laquo; Previous
        </a>
        <a
          href="#"
          className="px-4 py-2 mx-1 font-semibold  text-gray-700 bg-gray-200 border rounded-md"
        >
          1
        </a>
        <a
          href="#"
          className="px-4 py-2 mx-1 font-semibold text-gray-700 hover:text-white hover:bg-blue-500 border rounded-md"
        >
          2
        </a>
        <a
          href="#"
          className="px-4 py-2 mx-1 font-semibold text-gray-700 hover:text-white hover:bg-blue-500 border rounded-md"
        >
          3
        </a>

        <a
          href="#"
          className="px-4 py-2 mx-1 font-semibold text-gray-700 bg-white hover:text-white hover:bg-blue-500 border rounded-md"
        >
          Next &raquo;
        </a>
      </nav>
    </div>
  )
}

export default Paymentpagination
