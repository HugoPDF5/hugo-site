import { Box, Button, Flex, Image, Link, Text, VStack } from "@chakra-ui/react"
import { Sidebar } from "../Sidebar"
import { NavLink } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Home = () => {
    return (
        <Flex overflow='hidden'>
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
                    <Box>
                        <NavLink to='/about'>
                            <Button mr='4' fontFamily='Poppins, sans-serif' variant="solid" colorScheme='linkedin'> Mais sobre mim </Button>
                        </NavLink>
                        <Link href='https://resume.io/r/KHmsKFbNF' isExternal>
                            <Button fontFamily='Poppins, sans-serif' variant="solid" colorScheme='linkedin'> Currículo <ExternalLinkIcon mx='4px' /> </Button>
                        </Link>
                    </Box>
                </VStack>
                <Image borderRadius='full' src='profile.jpeg' boxSize='300px' objectFit='cover' alt='Foto de Hugo Patrício' />
            </Flex>
        </Flex>
    )
}
