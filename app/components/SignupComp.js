'use client'
import { SignUp } from '@clerk/nextjs'
import { Box, Center, Flex, Space, Stack } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

const SignupComp = () => {
  return (
    <>
    <Space h={30}/>
    <Center>
        <Flex align='center' justify='center'>
          <SignUp />
          <Image style={{borderRadius:20}} src='https://png.pngtree.com/png-clipart/20200226/original/pngtree-volunteers-clean-up-garbage-in-the-forest-young-people-collect-garbage-png-image_5315130.jpg' width={900} height={900} alt=''/>
        </Flex>
    </Center>
    <Space h={30}/>
    </>
  )
}

export default SignupComp