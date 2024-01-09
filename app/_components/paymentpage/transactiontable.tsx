import { ArrowDownUp, Download } from 'lucide-react'
import React from 'react'

const tableData = [
  {
    orderId: '281209',
    orderDate: '7 July, 2023',
    orderAmount: '₹1278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '281209',
    orderDate: '7 July, 2023',
    orderAmount: '₹1278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '281209',
    orderDate: '7 July, 2023',
    orderAmount: '₹1278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '281209',
    orderDate: '7 July, 2023',
    orderAmount: '₹1278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '281209',
    orderDate: '7 July, 2023',
    orderAmount: '₹1278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '281209',
    orderDate: '7 July, 2023',
    orderAmount: '₹1278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '281209',
    orderDate: '7 July, 2023',
    orderAmount: '₹1278.23',
    transactionFees: '₹22',
  },
  {
    orderId: '281209',
    orderDate: '7 July, 2023',
    orderAmount: '₹1278.23',
    transactionFees: '₹22',
  },
]

const PaymentTable = () => {
  return (
    <>
      <div className="p-5 md:text-2xl text-xl font-semibold">
        Transactions | This Month
      </div>

      <div className="overflow-x-auto p-2">
        <div className="min-w-full align-middle inline-block shadow overflow-hidden border-b bg-white border-gray-200">
          <div className="bg-white flex flex-row justify-between p-5">
            <div>
              <input
                type="text"
                placeholder="Search my order ID.. "
                className="p-2 border-gray-400 border rounded-md"
              />
            </div>
            <div className="flex flex-row gap-2">
              <div className='flex flex-row border p-2'>Sort <ArrowDownUp className='p-0.5 text-gray-600'/></div> <div className='flex flex-row border p-2'><Download className='p-0.5 text-gray-600'/></div>
            </div>
          </div>
          <div className='bg-white p-5'>
          <table className="min-w-full   ">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-left text-xs font-medium text-gray-500 tracking-wider">
                  Order date
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-right text-xs  font-medium text-gray-500 tracking-wider">
                  Order amount
                </th>
                <th className="px-6 py-3 border-b border-gray-200 text-right text-xs pr-10 font-medium text-gray-500 tracking-wider">
                  Transaction fees
                </th>
              </tr>
            </thead>
            <tbody className="bg-white ">
              {tableData.map(
                ({ orderId, orderDate, orderAmount, transactionFees }) => (
                  <tr key={orderId}>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-blue-600 font-medium">
                      #{orderId}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      {orderDate}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 text-right ">
                      {orderAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 pr-10 text-gray-500 text-right  ">
                      {transactionFees}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentTable
