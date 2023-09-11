import React from 'react'
import aboutImage from '../assets/about.png'
import { Heading, Text, Button, Image, Stack, Spacer, Flex, Box } from '@chakra-ui/react'


const AboutPage = () => {
    return (
        <Box bgColor='#303E820A' mt={20}>
            <Flex flexDirection='row' flexWrap='wrap-reverse' m='0rem 5rem 0rem 10rem' maxW='100rem'>
                <Image src={aboutImage} fit='cover' height='300px' />
                <Spacer />
                <Stack maxW='50rem'>
                    <Box mt={10}>
                        <Heading>About us</Heading>
                        <Text py='2' maxWidth='-moz-max-content' >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos doloremque voluptas ullam libero. Quidem corporis nemo sapiente commodi accusamus atque corrupti optio quae. Vitae officiis voluptas est atque voluptate non animi ipsa accusantium facilis! Esse aperiam, nesciunt sint architecto, minima eum maiores porro aut molestias consequuntur eius laudantium. Optio, repellendus.
                        </Text>
                        <Button maxW='8rem' backgroundColor='#E23744' color='white' border='none' p={5} borderRadius='20px' variant='solid'>
                            About us
                        </Button>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    )
};
export default AboutPage