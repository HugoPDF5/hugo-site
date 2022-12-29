import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from '../Sidebar'

export const About = () => {
    return (
        <Flex bg='#000'>
            <Sidebar />
            <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start' m='auto 0'>
                <Box padding={["6", "8"]} borderRadius='8' pb='4' bg='#101213' h='30vh' ml='4'>
                    <Text fontWeight='extrabold' fontSize='lg' mb='4' color='#0befda' align='center' fontFamily='Open Sans, sans-serif'>
                        Sobre
                    </Text>
                </Box>

                <Box padding={["6", "8"]} borderRadius='8' pb='4' bg='#101213' h='30vh' ml='4' mr='4'>
                    <Text fontWeight='extrabold' fontSize='lg' mb='4' color='#0befda' align='center' fontFamily='Open Sans, sans-serif'>
                        Habilidades
                    </Text>
                </Box>
            </SimpleGrid>
        </Flex>
    )
}