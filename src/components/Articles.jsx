import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import NewArticlePage from './NewArticle'

const ArticlesScreen = () => {
  return (
    <Box m='10vh'>
      <Heading py={10} color='#0E2368' fontWeight='bold' >Latest Articles</Heading>
      <NewArticlePage />
    </Box>
  )
}

export default ArticlesScreen