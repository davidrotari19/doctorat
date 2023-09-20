import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full text-center flex-col gap-2 md:flex-row p-4 flex items-center justify-between bg-neutral-900/90 backdrop-blur-md fixed bottom-0 z-20'>
            <p className='text-sm text-gray-200'>
                Coordonator <a className='text-blue-300 no-underline' href='/'>Prof. unv. dr. ing. RADU Sorin Mihai</a>.
            </p>
            <p className='text-sm text-gray-200'>
                Proiect realizat de <a className='text-blue-300 no-underline' href='/'>Iucal Ilie</a>.
            </p>
        </footer>
    )
}

export default Footer