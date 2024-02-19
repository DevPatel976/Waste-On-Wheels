import { Box, Button, Center, Container, Fieldset, Flex, NumberInput, Paper, SimpleGrid, Space, Stack, Text, TextInput, Textarea, Title } from '@mantine/core'
import { Roboto } from 'next/font/google'
import React from 'react'
import { FiHelpCircle } from "react-icons/fi";
import { MdContactSupport } from "react-icons/md";

const roboto = Roboto({
  subsets:['latin'],
  weight:'300'
})

const Contact = () => {
  return (
    <Container py={"5rem"}>
    <Space h={50}/>
    <SimpleGrid  spacing="xl">
      <Stack>
        <Text className={roboto.className}>HERE TO HELP</Text>
        <Title className={roboto.className}>Contact us</Title>
        <Text className={roboto.className}>Tell us a bit about yourself, and we&apos;ll tell you a lot more about us.</Text> {/* <-- Corrected line */}
        <Flex gap='md'>
          <Paper shadow='sm' withBorder p='xl'>
            <Stack>
            <FiHelpCircle size="40px"/>
            <Title className={roboto.className} order={4}>Support</Title>
            <Text className={roboto.className} >Need Help? Find the answers to frequently asked questions here</Text>
            </Stack>
          </Paper>
          <Paper shadow='sm' withBorder p='xl'>
            <Stack>
            <MdContactSupport size={"40px"}/>
            <Title className={roboto.className} order={4}>Support</Title>
            <Text className={roboto.className}>Need Help? Find the answers to frequently asked questions here</Text>
            </Stack>
          </Paper>
        </Flex>
      </Stack>
      <Box>
        <Stack gap="md" py="xl">
          <Flex gap={30} direction='column' justify='space-between' >
            <TextInput className={roboto.className}  placeholder="Name" required/>
            <TextInput className={roboto.className}  placeholder="Email" required />
            <NumberInput className={roboto.className}  placeholder="Phone" required />
            <Button>Contact Us</Button>
          </Flex>
        </Stack>
      </Box>
    </SimpleGrid>
    <Space h={50}/>
  </Container>
  )
}

export default Contact