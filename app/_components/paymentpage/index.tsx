'use client'
import { useSidebar } from '@/store/use-sidebar'
import PaymentHeader from './header'
import PaymentOverview from './overview'
import PaymentTable from './transactiontable'
import Paymentpagination from './pagination'

const Paymentpage = () => {
  const { collapsed } = useSidebar((state) => state)
  return (
    <div
      className={` text-black  ml-[240px] bg-slate-100 ${
        collapsed ? 'ml-[80px]' : 'ml-[240px]'
      }`}
    >
      <PaymentHeader/>
      <PaymentOverview/>
      <PaymentTable/>
      <Paymentpagination/>
    </div>
  )
}

export default Paymentpage
