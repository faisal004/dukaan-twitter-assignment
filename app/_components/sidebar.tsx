'use client'
import { useSidebar } from '@/store/use-sidebar'
import NavHeading from './navheading'
import Navitems from './navitems'
import Wallet from './sidebarwallet'

const Sidebar = () => {
  const { collapsed } = useSidebar((state) => state)
  return (
    <div
      className={`bg-[#0a1223] h-full fixed left-0 p-2 ${
        collapsed ? 'w-20' : 'w-60'
      }`}
    >
      <NavHeading />
      <Navitems />
      <Wallet />
    </div>
  )
}

export default Sidebar
