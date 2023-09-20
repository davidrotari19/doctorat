import Chart from '@/components/Chart'
import Header from '@/components/Header'
import TableStats from '@/components/Table'
import React from 'react'

const Page = () => {
  return (
    <main className='bg-neutral-950 flex flex-col items-center  min-h-screen'>
      <div className='flex items-center justify-center mt-10'>
        <Chart />
      </div>
      <TableStats />
    </main>
  )
}

export default Page