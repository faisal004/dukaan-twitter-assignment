import { useSidebar } from '@/store/use-sidebar'
import { Wallet2 } from 'lucide-react'

const Wallet = () => {
  const { collapsed } = useSidebar((state) => state)
  return (
    <>
      {collapsed && (
        <div className="absolute bottom-1 p-1 flex flex-row bg-slate-700 w-12 text-white mx-3">
          <div className="p-2">
            <Wallet2 />
          </div>
        </div>
      )}
      {!collapsed && (
        <div className="absolute bottom-1 p-2 flex flex-row bg-slate-700 w-48 text-white mx-3">
          <div className="p-2">
            <Wallet2 />
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-slate-400">Available credits</div>
            <div>222.10</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Wallet
