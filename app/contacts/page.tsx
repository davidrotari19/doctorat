"use client"
import React from 'react'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { Input, Textarea } from '@nextui-org/react'
const Page = () => {
    return (
        <main className='w-full flex flex-col items-center justify-center'>
            <div className='w-[90dvw] flex flex-col items-center justify-center mt-8 bg-[#18181b]/90 p-6 rounded-3xl'>
                <h1 className='text-4xl font-bold text-white mb-6'>
                    Contacte
                </h1>
                <div className='flex items-start gap-4 w-full'>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-3 '>
                            <MdEmail className='text-gray-400 text-sm' />
                            <span className='text-gray-400 text-sm'>
                                E-mail
                            </span>
                            <a href='mailto:info@mail.com' className='text-gray-300 text-sm'>
                                mail@example.com
                            </a>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaPhoneAlt className='text-gray-400 text-sm' />
                            <span className='text-gray-400 text-sm'>
                                Telefon
                            </span>
                            <a href='mailto:info@mail.com' className='text-gray-300 text-sm'>
                                0740 123 456
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-[6    0%] min-w-[300px] flex-1'>
                        <Input
                            label='Nume'
                            placeholder='Nume'
                            width='100%'
                            size='lg'
                        />
                        <Input
                            label='Email'
                            placeholder='Email'
                            width='100%'
                            size='lg'
                        />
                        <Textarea
                            label='Mesaj'
                            placeholder='Mesaj'
                            width='100%'
                            size='lg'

                        />
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Page