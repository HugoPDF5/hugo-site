import { Box, Flex, SimpleGrid, Text, Image } from '@chakra-ui/react'
import { Sidebar } from '../Sidebar'

export const About = () => {
    return (
        <Flex bg='#000'>
            <Sidebar />
            <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start' m='auto 0'>
                <Box padding={["6", "8"]} borderRadius='8' pb='4' bg='#101213' h='30vh' ml='4'>
                    <Text fontWeight='extrabold' fontSize='2xl' mb='4' color='#0befda' align='center' fontFamily='Open Sans, sans-serif'>
                        Sobre
                    </Text>

                    <Text fontWeight='bold' fontSize='4xs' mb='4' color='white' align='justify' fontFamily='Open Sans, sans-serif'>
                        Desde o primeiro contato com um computador aos 8 anos de idade já sabia que aquela máquina iria transformar minha vida, mas não ao ponto de saber que iria ser provavelmente minha profissão pro resto dela. Tanto meu ensino médio, quanto a minha graduação são voltadas para a área de TI e ao decorrer da graduação,
                        descobri algo que me brilhou os olhos: programação web. Estou atualmente focado em estudar ReactJS e Typescript.
                    </Text>
                </Box>

                <Box padding={["6", "8"]} borderRadius='8' pb='4' bg='#101213' h='30vh' ml='4' mr='4'>
                    <Text fontWeight='extrabold' fontSize='2xl' mb='4' color='#0befda' align='center' fontFamily='Open Sans, sans-serif'>
                        Habilidades
                    </Text>

                    <Flex gap='8' mt='6' wrap='wrap' justifyContent='space-evenly' >
                        <Box display='flex' gap='2' alignItems='center'>
                            <Image src='chakra-ui-icon.png' boxSize='40px' />
                            <Text fontWeight='black' fontSize='4xs' color='white' fontFamily='Open Sans, sans-serif'> Chakra UI </Text>
                        </Box>
                        <Box display='flex' gap='2' alignItems='center'>
                            <Image src='react-icon.png' boxSize='40px' />
                            <Text fontWeight='black' fontSize='4xs' color='white' fontFamily='Open Sans, sans-serif'> React </Text>
                        </Box>
                        <Box display='flex' gap='2' alignItems='center'>
                            <Image src='typescript-icon.png' boxSize='40px' />
                            <Text fontWeight='black' fontSize='4xs' color='white' fontFamily='Open Sans, sans-serif'> Typescript </Text>
                        </Box>
                        <Box display='flex' gap='2' alignItems='center'>
                            <Image src='vite-logo.png' boxSize='40px' />
                            <Text fontWeight='black' fontSize='4xs' color='white' fontFamily='Open Sans, sans-serif'> Vite </Text>
                        </Box>
                        <Box display='flex' gap='2' alignItems='center'>
                            <Image src='git-icon.png' boxSize='40px' />
                            <Text fontWeight='black' fontSize='4xs' color='white' fontFamily='Open Sans, sans-serif'> Git </Text>
                        </Box>
                        <Box display='flex' gap='2' alignItems='center'>
                            <Image src='javascript-icon.png' boxSize='40px' />
                            <Text fontWeight='black' fontSize='4xs' color='white' fontFamily='Open Sans, sans-serif'> Javascript </Text>
                        </Box>
                        <Box display='flex' gap='2' alignItems='center'>
                            <Image src='bootstrap-icon.png' boxSize='40px' />
                            <Text fontWeight='black' fontSize='4xs' color='white' fontFamily='Open Sans, sans-serif'> Bootstrap </Text>
                        </Box>
                        <Box display='flex' gap='2' alignItems='center'>
                            <Image src='scrum-icon.png' boxSize='40px' />
                            <Text fontWeight='black' fontSize='4xs' color='white' fontFamily='Open Sans, sans-serif'> Scrum </Text>
                        </Box>
                    </Flex>

                </Box>
            </SimpleGrid>
        </Flex>
    )
}