import { Box, Button, Flex, Image, Link, Text, VStack } from "@chakra-ui/react"
import { Sidebar } from "../Sidebar"
import { NavLink } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Home = () => {
    return (
        <Flex h='100vh' overflow='hidden'>
            <Sidebar />
            <Flex direction={['column','column','column', "row"]} bgColor='#000' flex='1' gap='2' align='center'>
                <Image mt={['4', '4','2',]} ml={["0","0","4",'8']} borderRadius='full' src='profile.jpeg' boxSize={["50px", "75px", "150px", '300px']} alt='Foto de Hugo Patrício' />
                <Flex direction='column' gap='8' ml='4' flex='1' align={['center','center', 'center','flex-start']} justify='center' >
                    <Box display='flex' gap='2' fontFamily='Open Sans, sans-serif' fontSize={["sm", "md", "lg", "2xl"]} fontWeight='bold'>
                        <Text display='flex' color='white' >Olá, meu nome é<Box mx='2' color='#0befda'>Hugo</Box> </Text>
                    </Box>
                    <Box fontFamily='Open Sans, sans-serif' fontSize={["sm", "md", "lg", "2xl"]} fontWeight='bold'>
                        <Text color='#0befda'>Desenvolvedor Front-End</Text>
                    </Box>
                    <Box fontFamily='Open Sans, sans-serif' fontSize={["sm", "md", "lg", "2xl"]}>
                        <Text color='white'>Sou um desenvolvedor de software com experiência em React e Typescript.</Text>
                    </Box>
                    <Box display='flex'>
                        <NavLink to='/about'>
                            <Button size={["sm", "sm","md","lg" ]} mr='4' fontFamily='Poppins, sans-serif' variant="solid" colorScheme='linkedin'> Mais sobre mim </Button>
                        </NavLink>
                        <Link href='https://resume.io/r/KHmsKFbNF' isExternal>
                            <Button size={["sm", "sm","md","lg" ]} mr='4' fontFamily='Poppins, sans-serif' variant="solid" colorScheme='linkedin'> Currículo <ExternalLinkIcon mx='4px' /> </Button>
                        </Link>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}
