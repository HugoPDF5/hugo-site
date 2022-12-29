import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react"
import { Sidebar } from "../Sidebar"
import { NavLink } from "react-router-dom";

export const Home = () => {
    return (
        <Flex>
            <Sidebar />
            <Flex bgColor='#000' h='100vh' flex='1' gap='2' align='center' justify='space-evenly'>
                <VStack spacing='8' mr='6' align='flex-start'>
                    <Box display='flex' gap='2' fontFamily='Open Sans, sans-serif' fontSize={"3xl"} fontWeight='bold'>
                        <Text color='white' >Olá, meu nome é </Text>
                        <Text color='#0befda'> Hugo</Text>
                    </Box>
                    <Box fontFamily='Open Sans, sans-serif' fontSize={"3xl"} fontWeight='bold'>
                        <Text color='#0befda'>Desenvolvedor Front-End</Text>
                    </Box>
                    <Box fontFamily='Open Sans, sans-serif' fontSize={"2xl"}>
                        <Text color='white'>Sou um desenvolvedor de software com experiência em React e Typescript.</Text>
                    </Box>
                    <NavLink to='/about'>
                        <Button fontFamily='Poppins, sans-serif' variant="solid" colorScheme='orange'> Mais sobre mim </Button>
                    </NavLink>
                </VStack>
                <Image borderRadius='full' src='profile.jpeg' boxSize='300px' objectFit='cover' alt='Foto de Hugo Patrício' />
            </Flex>
        </Flex>
    )
}
