'use client'
import { Container, Flex, Stack, Text } from '@mantine/core';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const roboto = Roboto({
    subsets:['latin'],
    weight:'500'
  })
  
const Footer = () => {
    const path = usePathname();
    const router = useRouter();
    console.log(path);  
  return (
    <footer  className={path === "/sign-up"  ? "display_none" :""} style={{ backgroundColor:'white',padding:20}}>
    <Container>
      <Stack>
      <Flex justify="space-around">
        <Stack align='center'> 
          <Image src='https://wowindia.blog/wp-content/uploads/2023/03/wow-5.png' width={100} height={100} alt=''/>
          <Text c="gray" className={roboto.className}>Waste on Wheels</Text>
        </Stack>
        <Stack gap='sm'>
          <Text className={roboto.className} order={3}>Page</Text>
          <Text onClick={()=>router.push("https://buy.stripe.com/test_7sIbM90OO3rGemQ5kn")} style={{cursor:'pointer'}} className={`${roboto.className}`}  c='gray'>Home</Text>
            <Text style={{cursor:'pointer'}} className={`${roboto.className}`} c='gray'>Login</Text>
            <Text style={{cursor:'pointer'}} className={`${roboto.className}`}  c='gray'>About</Text>
        </Stack>
        <Stack gap='sm'>
          <Text className={roboto.className} order={3}>Founders</Text>
            <Text style={{cursor:'pointer'}} className={`${roboto.className}`}  c='gray'>Dev</Text>
            <Text style={{cursor:'pointer'}} className={`${roboto.className}`}  c='gray'>Kanika</Text>
            <Text style={{cursor:'pointer'}} className={`${roboto.className}`}  c='gray'>Prince</Text>
            <Text style={{cursor:'pointer'}} className={`${roboto.className}`}  c='gray'>Ayman</Text>
        </Stack>
        <Stack gap='sm'>
          <Text className={roboto.className} order={3}>Contact</Text>
            <Text style={{cursor:'pointer'}} className={roboto.className} c='gray'>Mumbai, Maharashtra</Text>
            <Text style={{cursor:'pointer'}} className={roboto.className} c='gray'>+91 8291360709</Text>
            <Text style={{cursor:'pointer'}} className={roboto.className} c='gray'>example@gmail.com</Text>
        </Stack>
      </Flex>
      <Flex justify='space-between' align='end'>
          <Text style={{cursor:'pointer'}} className={roboto.className} c='gray'>logo 2024 | All rights reserved</Text>
          <Text style={{cursor:'pointer'}} className={roboto.className} c='gray'>General terms and conditions of use</Text>
          <Text style={{cursor:'pointer'}} className={roboto.className} c='gray'>Terms and Conditions are reserved</Text>
      </Flex>
      </Stack>
    </Container>
  </footer>
  )
}

export default Footer