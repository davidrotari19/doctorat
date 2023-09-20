"use client"
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Slider = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({
        delay: 5000,
        stopOnInteraction: true,
    })])
    return (
        <div className="embla mt-8 mb-20 w-[90dvw] rounded-3xl" ref={emblaRef}>
            <div className="embla__container h-[200px]">
                <div className="embla__slide">
                    <img
                    className='w-full  object-cover opacity-60'
                        src="/1.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />

                </div>
                <div className="embla__slide">
                <img
                    className='w-full  object-cover  opacity-60'
                        src="/3.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="embla__slide">
                <img
                    className='w-full object-cover  opacity-60'
                        src="/2.jpg"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </div>
    )
}

export default Slider