import { UserButton, UserProfile, currentUser } from '@clerk/nextjs';
import { Box, Button, Container, Flex, Group, Paper, Text } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import LoginButton from './LoginButton';
import NavComp from './NavComp';
import Image from 'next/image';

const Header = async () => {
    const user = await currentUser();
  return (
    <header>
        <Paper shadow='sm'>
    <Container size='xl' >
      <Flex justify='space-between' h={60} align='center'>
            <Link href={'/'}>
            <Image src='https://wowindia.blog/wp-content/uploads/2023/03/wow-5.png' width={50} height={50} alt='' />
          </Link>
          <Box>
              <nav>
                <NavComp/>
              </nav>
          </Box>
        <Box>
            {user && (<UserButton afterSignOutUrl='/'/>)}
            {!user && (<LoginButton/>)}
        </Box>
      </Flex>
    </Container>
    </Paper>
    </header>
  )
}

export default Header