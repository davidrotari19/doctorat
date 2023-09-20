import Chart from '@/components/Chart'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-24">      
      <div className=' items-center justify-center mt-8 mb-6 text-center backdrop-blur-lg p-4 rounded-2xl ring-2 ring-gray-400 ring-opacity-10 w-[90dvw] flex flex-col bg-[#18181b]/80'>
        <p className='text-gray-300 text-sm leading-7'>
          Studiu cercetare
        </p>
        <h2 className='text-4xl font-bold text-white  '>
          Titlu
        </h2>
      </div>
      <Chart />
      <Slider />
      <Footer />
    </main>
  )
}
