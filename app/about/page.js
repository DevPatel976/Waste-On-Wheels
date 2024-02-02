import { Container, Flex, SimpleGrid, Space, Stack, Text, Title } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import Chart from '../components/Chart'
import aboutUsImg from './../../public/about_page_image-modified.png';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets:['latin'],
  weight:'300'
})


const About = () => {
  return (

    <Container>
  <Space h={30} />
  <SimpleGrid cols={2} spacing={80} component={Flex} align="center">
    <Image src={aboutUsImg} height={450} width={450} />
    <Stack>
      <Title className={roboto.className}>Mission</Title>
      <Text className={roboto.className}>we are committed to transforming waste management and promoting a sustainable future. Our innovative project focuses on efficient waste treatment and recycling, which facilitates the central role of individuals and communities in environmental protection.</Text>
    </Stack>
  </SimpleGrid>
  <Space h={30} /> 
  <SimpleGrid cols={2} spacing={80}>
    <Stack>
    <Title className={roboto.className}>Our Responsibility</Title>
    <Text className={roboto.className}>At the core of our initiative is the integration of cutting-edge technology. Equipped with state-of-the-art sensors, our smart bins are designed to revolutionize waste management. These smart sensors detect when the bin reaches capacity and trigger an automatic notification to our dedicated waste collectors. This seamless communication ensures fast and efficient waste collection, prevents waste overflow and promotes a cleaner environment.</Text>
    </Stack>
    <Chart/>
  </SimpleGrid>
  <Space h={100}/>
</Container>
    );
}

export default About