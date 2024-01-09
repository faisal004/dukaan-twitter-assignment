import { ArrowDownIcon, ChevronDown, HelpCircle, Volume2 } from 'lucide-react'

const PaymentHeader = () => {
  return (
    <div className="flex flex-row justify-between p-4 border-b-2 bg-white">
      <div className="md:flex hidden flex-row  w-52 justify-between p-2 ">
        <div>Payment</div>{' '}
        <div className="text-slate-500 flex text-sm flex-row items-center gap-1 ">
          <HelpCircle className="h-4 w-4 " />
          <div className="">How it works</div>
        </div>
      </div>
      <div className='w-80 '><input className='bg-gray-100 p-2 rounded-md w-full ' placeholder='Search features ,tutorials, etc. '/></div>
      <div className='flex p-2 gap-1 '><Volume2 className='bg-gray-300 rounded-full p-0.5'/>
      <ChevronDown className='bg-gray-300 rounded-full p-0.5'/>
      </div>
    </div>
  )
}

export default PaymentHeader
