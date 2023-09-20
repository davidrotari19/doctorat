"use client"
import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'

const data = [
    {
        label: 'Hunedoara',
        value: 'Hunedoara',
        description: 'Hunedoara area',
    },
    {
        label: 'Petrosani',
        value: 'Petrosani',
        description: 'Petrosani area',
    },
    {
        label: 'Lupeni',
        value: 'Lupeni',
        description: 'Lupeni area',
    },
    {
        label: 'Vulcan',
        value: 'Vulcan',
        description: 'Vulcan area',
    },
]

const Page = () => {
    return (
        <main className='bg-neutral-950 flex flex-col items-center  min-h-screen'>
            <div className='flex items-center justify-center mt-10 w-[60%]'>
                <Select
                    label='Select your city'
                    className='w-[100%]'
                >
                    {data.map((item) => (
                        <SelectItem
                            key={item.value}
                            value={item.value}
                        >
                            {item.label}
                        </SelectItem>
                    ))}
                </Select>
            </div>

        </main>
    )
}

export default Page