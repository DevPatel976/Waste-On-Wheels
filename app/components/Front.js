'use client'
import { BackgroundImage, Box, Button, Card, Center, Container, Divider, Flex, Grid, Group, List, Paper, Space, Stack, Tabs, Text, Title } from '@mantine/core';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";


const roboto = Roboto({
    subsets:['latin'],
    weight:['300','700']
})
  


const Front = () => {
  const router = useRouter();
    function customScrollDownAnimationInfo() {
        const targetPosition = 350; // Set your target scroll position in pixels
        const duration = 1000; // Set the duration of the animation in milliseconds
        const framesPerSecond = 60;
        const increment = targetPosition / (duration / 1000 * framesPerSecond);
    
        function animateScroll(currentPosition, startTime) {
          const currentTime = new Date().getTime();
          const elapsed = currentTime - startTime;
          const newPosition = currentPosition + increment;
    
          window.scrollTo(0, newPosition);
    
          if (elapsed < duration) {
            requestAnimationFrame(() => animateScroll(newPosition, startTime));
          }
        }
    
        animateScroll(window.scrollY, new Date().getTime());
      }
      function customScrollDownAnimationService() {
        const targetPosition = 900; // Set your target scroll position in pixels
        const duration = 500; // Set the duration of the animation in milliseconds
        const framesPerSecond = 60;
        const increment = targetPosition / (duration / 1000 * framesPerSecond);
    
        function animateScroll(currentPosition, startTime) {
          const currentTime = new Date().getTime();
          const elapsed = currentTime - startTime;
          const newPosition = currentPosition + increment;
    
          window.scrollTo(0, newPosition);
    
          if (elapsed < duration) {
            requestAnimationFrame(() => animateScroll(newPosition, startTime));
          }
        }
    
        animateScroll(window.scrollY, new Date().getTime());
      }
    
    
      return (
        <Container className='container'>
          <Space h={100}/>
          <Card className='card_image' shadow='sm' radius='lg'>
            <Flex justify='space-evenly' align='center' h={400}>
              <Box>
                <Stack>
                <Box>
                    <Title className={roboto.className}>Dispose Responsibly,</Title>
                    <Title className={roboto.className}>Create Impact.</Title>
                </Box>
                <Box>
                  <Text className={roboto.className}> Taking the 4R's (Reduce,Reuse,Recycle,Recover)</Text>
                  <Text className={roboto.className}> to the next level</Text>
                </Box>
                  <Group gap={10}> 
                    <Button className={roboto.className} variant='outline' onClick={customScrollDownAnimationInfo}>Read More</Button>
                    <Button variant='filled' bg='green.7' onClick={customScrollDownAnimationService}>Explore our Services</Button>
                  </Group>
                </Stack>
                </Box>
                <Box>
                <Image style={{borderRadius:20}} width={400} height={300} src='https://media.istockphoto.com/id/1265555164/photo/portrait-of-black-woman-with-group-of-volunteers-cleaning-nature-together.jpg?s=612x612&w=0&k=20&c=tpZKrO2yMKc6aJtWZP78d8icx1niJ0BmNdgEW2ZCVoE=' radius='lg'/>
              </Box>
            </Flex>
          </Card>
          <Space h={50} />
          <Center>
            <Title className={roboto.className} order={3}>More than Just Waste disposal: <span style={{color:'green'}}>a revolution</span></Title>
          </Center>
          <Space h={50} />
          <Grid>
            <Grid.Col span={5}>
              <BackgroundImage radius='lg' style={{ backgroundSize: 'cover' }} src='https://media.istockphoto.com/id/1145183208/photo/young-volunteers-collecting-garbage-in-suumer-park.jpg?s=612x612&w=0&k=20&c=5vmn8N7X3X-1FW7leDg4N19UMjFFdHjVg_kLguEuENo=' h={400}>
                <Flex align='end' h={400} justify='center'>
                <Paper opacity={0.9} p={10} my={10} radius='lg'  w={350} h={180}>
                  <Title className={roboto.className} order={3}>In a healthy environment,</Title>
                    <Title className={roboto.className} order={3}>everything succeeds.</Title>
                    <Text className={roboto.className}>We are convinced that success begins and</Text>
                    <Text className={roboto.className}>ends in a healthy, clean environment that is</Text>
                    <Text className={roboto.className}>conductive to growth</Text>
                </Paper>
                </Flex>
              </BackgroundImage>
            </Grid.Col>
            <Grid.Col span={7}>
              <BackgroundImage radius='lg' style={{ backgroundSize:'cover'}} src='https://st2.depositphotos.com/1518767/6900/i/950/depositphotos_69003827-stock-photo-happy-family-collecting-rubbish.jpg' h={400}>
                <Flex align='end' h={400} justify='center'>
                  <Paper opacity={0.9} p={10} my={10} radius='lg' w={500} h={180}>
                    <Title className={roboto.className} order={3}>It all start here,</Title>
                    <Title className={roboto.className} order={3}>everything succeeds.</Title>
                    <Text className={roboto.className}>Agents trained in waste management are ready to serve you and</Text>
                    <Text className={roboto.className}>brighten up your area or society</Text>
                  </Paper>
                </Flex>
              </BackgroundImage>
            </Grid.Col>
          </Grid>
            <Space h={60}/>
          <Center>
            <Title className={roboto.className}>Service to meet your needs</Title>
          </Center>
          <Center>
            <Text className={roboto.className}>For all your needs, here's a range of services tailored to you</Text>
          </Center>
          <Space h={60}/>
          <Tabs defaultValue="society" variant='pills' radius='xl'>
            <Tabs.List justify='center'>
              <Tabs.Tab value='society'>
                <Title className={roboto.className} order={4}>For Society</Title>
              </Tabs.Tab>
              <Tabs.Tab value='complex'>
                <Title className={roboto.className} order={4}>For Complex</Title>
              </Tabs.Tab>
            </Tabs.List>
            <Space h={30}/>
            <Tabs.Panel value='society'>
              <Grid>
                <Grid.Col span={4}>
                  <Card
                    h={350}
                    shadow='sm'
                    radius='lg'
                    p='xl'
                  >
                    <Flex direction='column' gap='lg'>
                      <Flex justify='space-between'>
                        <Title className={roboto.className}>Monthly</Title>
                        <Text fw={600}>₹ 3,699</Text>
                      </Flex>
                      <Divider />
                        <List size='md' spacing={10} icon={<FaRegCircleCheck/>}> 
                        <List.Item>Access to Basic Features</List.Item>
                        <List.Item>Customer Support</List.Item>
                        <List.Item>Regular Updates</List.Item>
                        <List.Item>Usage Limit</List.Item>
                        </List>
                        <Button radius='xl' onClick={()=>router.push("https://buy.stripe.com/test_28oeYl7dc4vK4Mg8wy")}>Get Started</Button>
                    </Flex>
                  </Card>
                </Grid.Col>
                <Grid.Col span={4} >
                <Card
                    h={350}
                    shadow='sm'
                    radius='lg'
                    p='xl'
                  >
                    <Flex direction='column' gap='lg'>
                      <Flex justify='space-between'>
                        <Title className={roboto.className}>Quarterly</Title>
                        <Text fw={600}>₹ 9,899</Text>
                      </Flex>
                      <Divider />
                        <List size='md' spacing={10} icon={<FaRegCircleCheck/>}> 
                        <List.Item>All Monthly Plan Features</List.Item>
                        <List.Item>Enhanced Customer Support</List.Item>
                        <List.Item>Extended Usage Limits</List.Item>
                        <List.Item>Exclusive Features</List.Item>
                        </List>
                        <Button radius='xl' onClick={()=>router.push("https://buy.stripe.com/test_7sIbM90OO3rGemQ5kn")}>Get Started</Button>
                    </Flex>
                  </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                <Card
                    h={350}
                    shadow='sm'
                    radius='lg'
                    p='xl'
                  >
                    <Flex direction='column' gap='lg'>
                      <Flex justify='space-between'>
                        <Title className={roboto.className}>Yearly</Title>
                        <Text fw={600}>₹ 15,999</Text>
                      </Flex>
                      <Divider />
                        <List size='md' spacing={10} icon={<FaRegCircleCheck/>}> 
                        <List.Item>All Quarterly Plan Features</List.Item>
                        <List.Item>Premium Customer Support</List.Item>
                        <List.Item>Unlimited Usage</List.Item>
                        <List.Item>Customization Options</List.Item>
                        </List>
                        <Button radius='xl' onClick={()=>router.push("https://buy.stripe.com/test_5kAdUh7dcbYc4Mg28c")}>Get Started</Button>
                    </Flex>
                  </Card>
                </Grid.Col>
              </Grid>
            </Tabs.Panel>
            <Tabs.Panel value='complex'>
              <Grid>
                <Grid.Col span={4}>
                <Card
                    h={350}
                    shadow='sm'
                    radius='lg'
                    p='xl'
                  >
                    <Flex direction='column' gap='lg'>
                      <Flex justify='space-between'>
                        <Title className={roboto.className}>Monthly</Title>
                        <Text fw={600}>₹ 5,699</Text>
                      </Flex>
                      <Divider />
                        <List size='md' spacing={10} icon={<FaRegCircleCheck/>}> 
                        <List.Item className={roboto.className}>Regular Waste Collection</List.Item>
                        <List.Item className={roboto.className}>Basic Sorting</List.Item>
                        <List.Item className={roboto.className}>Customer Support</List.Item>
                        <List.Item className={roboto.className}>Usage Limit</List.Item>
                        </List>
                        <Button radius='xl' onClick={()=>router.push("https://buy.stripe.com/test_3cs5nL7dc0fuemQ3ch")}>Get Started</Button>
                    </Flex>
                  </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                <Card
                    h={350}
                    shadow='sm'
                    radius='lg'
                    p='xl'
                  >
                    <Flex direction='column' gap='lg'>
                      <Flex justify='space-between'>
                        <Title className={roboto.className}>Quarterly</Title>
                        <Text fw={600}>₹ 13,899</Text>
                      </Flex>
                      <Divider />
                        <List size='md' spacing={10} icon={<FaRegCircleCheck/>}> 
                        <List.Item>All Monthly Services</List.Item>
                        <List.Item>Extended Bin Maintenance</List.Item>
                        <List.Item>Exclusive Recycling Reports</List.Item>
                        <List.Item>Customization Options</List.Item>
                        </List>
                        <Button radius='xl' onClick={()=>router.push("https://buy.stripe.com/test_bIY3fD9lk4vK92w4gm")}>Get Started</Button>
                    </Flex>
                  </Card>
                </Grid.Col>
                <Grid.Col span={4}>
                <Card
                    h={350}
                    shadow='sm'
                    radius='lg'
                    p='xl'
                  >
                    <Flex direction='column' gap='lg'>
                      <Flex justify='space-between'>
                        <Title className={roboto.className}>Yearly</Title>
                        <Text fw={600}>₹ 20,999</Text>
                      </Flex>
                      <Divider />
                        <List size='md' spacing={10} icon={<FaRegCircleCheck/>}> 
                        <List.Item>Monthly and Quarterly</List.Item>
                        <List.Item>Premium Bin Features</List.Item>
                        <List.Item>Customized Sustainability </List.Item>
                        <List.Item>Educational Workshops</List.Item>
                        </List>
                        <Button radius='xl' onClick={()=>router.push("https://buy.stripe.com/test_fZe3fDcxw1jy6Uo3cj")}>Get Started</Button>
                    </Flex>
                  </Card>
                </Grid.Col>
              </Grid>
            </Tabs.Panel>
          </Tabs>
          <Space h={100}/>
        </Container>
      )
}

export default Front