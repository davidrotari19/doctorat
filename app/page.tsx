import Chart from '@/components/Chart'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">

      
      <div className='flex items-center justify-center mt-8'>
        <h2 className='text-4xl font-bold text-white mb-6 text-center backdrop-blur-lg p-4 rounded-2xl ring-2 ring-white ring-opacity-10 w-[90dvw] '>
          Studiu cercetare (titlu)
        </h2>
      </div>
      <Chart />
      <Slider />
      <Footer />
    </main>
  )
}
