import { SignIn } from '@clerk/nextjs'
import { Center, Flex, Space } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

const LoginComp = () => {
  return (
    <>
    <Space h={30}/>
    <Center>
        <Flex align='center' justify='center'>
            <SignIn />
            <Image style={{borderRadius:20}}  src='https://png.pngtree.com/png-clipart/20200226/original/pngtree-volunteers-clean-up-garbage-in-the-forest-young-people-collect-garbage-png-image_5315130.jpg' width={900} height={900} />
        </Flex>
    </Center>
    <Space h={30}/>
    </>
  )
}

export default LoginComp