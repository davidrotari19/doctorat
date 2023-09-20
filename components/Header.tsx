"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { ImStatsBars } from 'react-icons/im'
import { IoMdContacts } from 'react-icons/io'
import { IoIosInformationCircle } from 'react-icons/io'
import {RxHamburgerMenu} from 'react-icons/rx'

const Header = () => {
let [showBurger, setShowBurger] = useState(false)

  const showBurgerMenu = () => {
    console.log('showBurgerMenu')
    setShowBurger(!showBurger)
  }

  return (
    <>
    <header className='w-full flex z-50 justify-between px-2 md:px-8 items-center bg-[#18181b] backdrop-blur-md'>
      <Link className='p-1 flex items-center z-30' href={'/'} >
        <Image
          src='/logo.png'
          alt='Logo'
          width={70}
          height={70}
        />
        <div className='flex flex-col ml-2 text-left'>
          <h1 className='text-xl font-bold text-white '>
            Universitatea din Petrosani
          </h1>
          <span className='text-gray-400 text-sm'>
            Facultatea de Inginerie
          </span>
        </div>
      </Link>
      <div className='items-center gap-6  md:flex hidden'>
        <Button
          as={Link}
          href='/about'
          color='warning'
          variant='ghost'
          startContent={<IoIosInformationCircle />}
        >
          Despre
        </Button>
        <Button
          as={Link}
          href='/statistics'
          color='warning'
          variant='ghost'
          startContent={<ImStatsBars />}
        >
          Statistici
        </Button>
        <Button
          as={Link}
          href='/contacts'
          color='warning'
          variant='ghost'
          startContent={<IoMdContacts />}
        >
          Contacte
        </Button>
      </div>
      <Button
        isIconOnly
        color='warning'
        variant='ghost'
        aria-label='Mobile menu'
        className='md:hidden'
        onClick={showBurgerMenu}
        >
          <RxHamburgerMenu />
        </Button>

    </header>
    {showBurger ? (
      <div className='flex px-3 flex-col justify-center gap-4 pt-8 pb-4 items-center w-full h-full bg-[#18181b] backdrop-blur-md'>
        <Button
          as={Link}
          href='/about'
          color='warning'
          variant='ghost'
          className='w-full'
          startContent={<IoIosInformationCircle />}
        >
          Despre
        </Button>
        <Button
          as={Link}
          href='/statistics'
          color='warning'
          variant='ghost'
          className='w-full'
          startContent={<ImStatsBars />}
        >
          Statistici
        </Button>
        <Button
          as={Link}
          href='/contacts'
          color='warning'
          variant='ghost'
          className='w-full '
          startContent={<IoMdContacts />}
        >
          Contacte
        </Button>
      </div>
    ) : null}
    </>
  )
}

export default Header