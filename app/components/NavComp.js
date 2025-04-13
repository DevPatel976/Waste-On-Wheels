'use client'
import { Roboto } from 'next/font/google';
import { Group, Text } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import BinStatus from '../bin-status/page';


const roboto = Roboto({
  subsets:['latin'],
  weight:'300'
})

const NavComp = () => {
    const path = usePathname();

  return (
    <>
        <Group>
            <Text className={roboto.className} fw={path === '/' ? 'bold' : ''} component={Link} href='/'>Home</Text>
            <Text className={roboto.className} fw={path === '/about' ? 'bold' : ''} component={Link} href="/about">About</Text>
            <Text className={roboto.className} fw={path === '/contact' ? 'bold' : ''} component={Link} href="/contact">Contact</Text>
            {/* <Text className={roboto.className} component={Link} href="/chatbot">Chatbot</Text> */}
            <Text className={roboto.className} fw={path === '/bin-status' ? 'bold' : ''} component={Link} href="/bin-status">Bin Status</Text>


        </Group>
    </>

  )
}

export default NavComp