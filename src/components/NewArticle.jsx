import React from 'react'
import { Text, Button, Image, Card, CardBody, Flex, Stack, CardFooter, Heading, Box, ButtonGroup } from '@chakra-ui/react'
import tomatoImage from '../assets/tomato.png'
import CardData from '../Data'


const NewArticlePage = () => {
    return (
        <Flex flexDir='row' flexWrap='wrap-reverse' >
            {CardData.map((data) =>
                <Box px={5}>
                    <Card maxW={380} border='1px' borderColor='gray' borderRadius="10px" p={5}>
                        <CardBody>
                            <Image
                                src={data.image}
                                alt={data.title}
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{data.title}</Heading>
                                <Text>
                                    {data.desc}
                                </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <ButtonGroup variant='outline' spacing='6'>
                                <Button borderColor='gray'>Read More</Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
            )}
        </Flex>
    )
}


export default NewArticlePage