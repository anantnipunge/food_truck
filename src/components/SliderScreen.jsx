import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Center, IconButton, Box } from '@chakra-ui/react';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import ArticlesScreen from './Articles';


const SliderScreen = () => {
    return (
        <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={5.5}
            totalSlides={3}
        >
            <Slider>
                <Slide index={0}><ArticlesScreen /></Slide>
                <Slide index={1}><ArticlesScreen /></Slide>
                <Slide index={2}><ArticlesScreen /></Slide>
            </Slider>
            <Center>
                <Box px={2}>
                    <ButtonBack>
                        <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='gray'
                            aria-label='Done'
                            fontSize='20px'
                            icon={<ChevronLeftIcon />}
                        />
                    </ButtonBack>
                </Box>
                <Box px={2}>
                    <ButtonNext>
                        <IconButton
                            isRound={true}
                            variant='solid'
                            colorScheme='gray'
                            aria-label='Done'
                            fontSize='20px'
                            icon={<ChevronRightIcon />}
                        />
                    </ButtonNext>
                </Box>
            </Center>
        </CarouselProvider>
    );
}


export default SliderScreen