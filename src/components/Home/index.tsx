import { Box, Button, Flex, Image, Link, Text, VStack } from "@chakra-ui/react"
import { Sidebar } from "../Sidebar"
import { NavLink } from "react-router-dom";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Home = () => {
    return (
        <Flex>
            <Sidebar />
            <Flex direction={['column','column', "row"]} h='100vh' ml={['36','48','60','96']} bgColor='#000' flex='1' gap='12' justify='space-between' align='center'>
                <Image mt={["20",'24', '4','2',]} ml={["0","0","4",'8']} borderRadius='full' src='profile.jpeg' boxSize={["100px", "150px","200px",'300px']} alt='Foto de Hugo Patrício' />
                <Flex direction='column' gap='8' ml='4' flex='1' align={['center','center', 'center','flex-start']} justify={["","","",'center']} >
                    <Box display='flex' gap='2' fontFamily='Open Sans, sans-serif' fontSize={["xs", "md", "lg", "2xl"]} fontWeight='bold'>
                        <Text display='flex' color='white' >Olá, meu nome é<Box mx={["1","1","2",'2']} color='#0BEFFF'>Hugo</Box> </Text>
                    </Box>
                    <Box fontFamily='Open Sans, sans-serif' fontSize={["xs", "md", "lg", "2xl"]} fontWeight='bold'>
                        <Text color='#0BEFFF'>Desenvolvedor Front-End</Text>
                    </Box>
                    <Box fontFamily='Open Sans, sans-serif' fontSize={["xs", "md", "lg", "2xl"]}>
                        <Text align='center' color='white'>Sou um desenvolvedor de software com experiência em React e Typescript.</Text>
                    </Box>
                    <Box display='flex' flexDirection={["column","row"]} gap={["8","4","2",'1']} alignItems='center'>
                        <NavLink to='/about'>
                            <Button size={["sm", "sm","md","lg" ]} mr='4' fontFamily='Poppins, sans-serif' variant="solid" colorScheme='linkedin' mx='4px'> Mais sobre mim </Button>
                        </NavLink>
                        <Link href='https://resume.io/r/KHmsKFbNF' isExternal _hover={{textDecoration: 'none'}}>
                            <Button size={["sm", "sm","md","lg" ]}  fontFamily='Poppins, sans-serif' variant="solid" colorScheme='linkedin'> Currículo <ExternalLinkIcon mx='4px' /> </Button>
                        </Link>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}
