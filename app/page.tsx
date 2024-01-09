"use client"
import Sidebar from './_components/sidebar'
import Paymentpage from './_components/paymentpage'
import { useSidebar } from '@/store/use-sidebar'
import { useMediaQuery } from 'usehooks-ts'
import { useEffect } from 'react'

export default function Home() {
  const { collapsed, onCollapse, onExpand } = useSidebar((state) => state)
  const matches = useMediaQuery('(max-width: 1024px)')
  useEffect(() => {
    if (matches) {
      onCollapse()
    } else {
      onExpand()
    }
  }, [matches, onCollapse, onExpand])
  return (
    <div className="bg-slate-100 h-screen">
      <Sidebar />
      <Paymentpage />
    </div>
  )
}
