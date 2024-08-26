import React from 'react'

const page = () => {
  return (
    <div>
        <h2 className="text-3xl font-bold mb-5 text-black/70">Dashboard</h2>
        <ul className="flex items-center gap-10">
            <li className="h-[200px] w-[250px] ring-4 ring-zinc-100 rounded-md">
                <h3 className='text-lg text-black/60 bg-zinc-100 py-4 font-semibold rounded-md pl-3'>
                    Collected
                </h3>
                    <p className='text-base text-black font-semibold flex items-center pt-12 justify-center'>$1,189.15</p>
            </li>
            <li className="h-[200px] w-[250px] ring-4 ring-zinc-100 rounded-md">
                <h3 className='text-lg text-black/60 bg-zinc-100 py-4 font-semibold rounded-md pl-3'>
                    Pending
                </h3>
                    <p className='text-base text-black font-semibold flex items-center pt-12 justify-center'>$1,125.32</p>
            </li>
            <li className="h-[200px] w-[250px] ring-4 ring-zinc-100 rounded-md">
                <h3 className='text-lg text-black/60 bg-zinc-100 py-4 font-semibold rounded-md pl-3'>
                    Total Invoices
                </h3>
                    <p className='text-base text-black font-semibold flex items-center pt-12 justify-center'>15</p>
            </li>
            <li className="h-[200px] w-[250px] ring-4 ring-zinc-100 rounded-md">
                <h3 className='text-lg text-black/60 bg-zinc-100 py-4 font-semibold rounded-md pl-3'>
                    Total Customers
                </h3>
                    <p className='text-base text-black font-semibold flex items-center pt-12 justify-center'>8</p>
            </li>
        </ul>
    </div>
  )
}

export default page