import Chart from '@/components/Chart'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">

      
      <div className='flex items-center justify-center mt-8'>
        <h2 className='text-4xl font-bold text-white mb-6'>
          Studiu cercetare (titlu)
        </h2>
      </div>
      <Chart />
      <Slider />
      <Footer />
    </main>
  )
}
