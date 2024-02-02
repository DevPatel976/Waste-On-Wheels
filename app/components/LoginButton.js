"use client"
import { Button } from '@mantine/core'
import { useRouter } from 'next/navigation'
import React from 'react'

const LoginButton = () => {
    const router = useRouter();
  return (
    <Button  onClick={()=>router.push("sign-in")}>Log in</Button>
  )
}

export default LoginButton