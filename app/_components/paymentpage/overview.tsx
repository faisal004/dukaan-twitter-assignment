const PaymentOverview = () => {
  return (
    <div className="p-2 bg">
      <div className="flex flex-row justify-between p-2  text-center items-center">
        <div className="text-xl font-semibold">Overview</div>{' '}
        <div>
          <select name="pets" id="pet-select" className="border p-2">
            <option value="">Last Month</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 w-full p-2">
        <div className="bg-white p-5 rounded-lg ">
          <div className="text-gray-800 pb-4">Online orders</div>
          <div className="text-3xl font-semibold">231</div>
        </div>
        <div className="bg-white p-5 rounded-lg ">
          <div className="text-gray-800 pb-4">Amount received</div>
          <div className="text-3xl font-semibold">₹23,92,312.19</div>
        </div>
      </div>
    </div>
  )
}

export default PaymentOverview
