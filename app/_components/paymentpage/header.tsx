import { ArrowDownIcon, ChevronDown, HelpCircle, Volume2 } from 'lucide-react'
import Image from 'next/image'

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
      <div className='w-80 '><input className='bg-gray-100 p-2 rounded-md w-full ' placeholder=' Search features ,tutorials, etc. '/></div>
      <div className='flex  gap-1 '><Image src="/download.svg" alt="something" width="35" height="25"/>
      <Image src="/downloaddown.svg" alt="something" width="35" height="35" className='p-2 my-0.5 bg-gray-200 rounded-3xl'/>
      </div>
    </div>
  )
}

export default PaymentHeader
