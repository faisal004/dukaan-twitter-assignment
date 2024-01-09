import { useSidebar } from '@/store/use-sidebar';
import { ArrowBigLeft, ArrowRight, ChevronDown, Columns, Divide } from 'lucide-react'
import Image from 'next/image'

const NavHeading = () => {
    const { collapsed } = useSidebar((state) => state);
  return (
    <>
    {collapsed && (
        <div className="justify-center flex bg-white w-16 h-10 rounded-md">
        <Image src="/logo.svg" alt="pictue" height="10" width="20" />
      </div>
    )}
   {!collapsed &&(<div className="flex flex-row justify-between p-4">
   <div className="justify-center flex bg-white w-10 h-10 rounded-md">
     <Image src="/logo.svg" alt="pictue" height="10" width="20" />
   </div>
   <div>
     <div className='text-white'>Nishyam</div>{' '}
     <div className="text-sm text-slate-400 underline">Visit store</div>
   </div>
   <div className='pt-2 text-white'>
     <ChevronDown />
   </div>
 </div>)}
    </>
  )
}

export default NavHeading
