import React from 'react'
import { Container, Text, Button, Image, Flex, Spacer, Box } from '@chakra-ui/react'
import pizza from '../assets/pizza.png'
import truck from '../assets/truck.png'
import redVector from '../assets/redVector.png'

const ImageCard = ({ image, title }) => {
    return (
        <Box>
            <Flex>
                <Box
                    bgImg={image}
                    bgRepeat='no-repeat'
                    bgSize='80vh'
                    bgPos='10px 10px 10px 10px'
                    h='600px'
                >
                    <Image
                        src={redVector}
                        alt={title}
                        objectFit='cover'
                        height='600px'
                    />
                </Box>
            </Flex>
        </Box>
    );
};

const LandingPage = () => {
    return (
        <Flex flexWrap='wrap-reverse' >
            <Box mt='5vh' ml='5vw'>
                <Image src={truck} height='8vh' />
                <Box mt='12vh' >
                    <Text fontSize='50px' color='#0E2368' fontWeight='bold' >Discover The <br /> Best Food <br />and Drinks</Text>
                </Box>
                <Text py='20px' fontSize='xm' >Naturally made Healthcare Products for the <br /> better care & support of your body.</Text>
                <Button backgroundColor='#E23744' color='white' border='none' p={5} borderRadius='20px' variant='solid' >Explore Now!</Button>
            </Box>
            <Spacer />
            <ImageCard image={pizza} />
        </Flex>
    );
};

export default LandingPage