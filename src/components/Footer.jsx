import React from 'react'
import { Box, Image, Flex, Center, Text, Stack, Heading, Button, VStack, HStack, Grid, GridItem } from '@chakra-ui/react'
import truck from '../assets/truck.png'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={18} color={'#0E2368'}>
            {children}
        </Text>
    )
}

const FooterPage = () => {
    return (
        <Box bgColor='#303E820A' mt={50} mb={50} maxH={'-webkit-max-content'}  p={10}>
            <Grid templateColumns='repeat(4, 1fr)' gap={6} marginInline={100} >
                <GridItem w='100%' h='10' alignItems={'center'} justifyContent={'center'}>
                    <Image mt={'3rem'} src={truck} height='10vh' />
                </GridItem>
                <GridItem w='100%' h='10' >
                    <Stack>
                        <ListHeader>Contact us</ListHeader>
                        <Box py='1' mr='100px'>
                            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                        </Box>
                    </Stack>
                </GridItem>
                <GridItem w='100%' h='10' >
                    <Stack align={'flex-start'}>
                        <ListHeader>More</ListHeader>
                        <Box href={'#'}>
                            About Us
                        </Box>
                        <Box href={'#'}>
                            Products
                        </Box>
                        <Box href={'#'}>
                            Careers
                        </Box>
                        <Box href={'#'}>
                            Contact Us
                        </Box>
                    </Stack>
                </GridItem>
                <GridItem>
                    <Stack>
                        <ListHeader>Social Links</ListHeader>
                        <Flex flexDir='column'>
                            <HStack>
                                <FaFacebook />
                                <FaInstagram />
                                <FaLinkedinIn />
                                <FaTwitter />
                            </HStack>
                        </Flex>
                        <Text mt={12} >© 2022 Food Truck Example</Text>
                    </Stack>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default FooterPage




