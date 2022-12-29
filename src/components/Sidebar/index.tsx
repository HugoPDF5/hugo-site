import { Flex, Box, Text, VStack, Image } from '@chakra-ui/react'
import { BsFillPersonFill, BsFillHouseFill, BsListStars, BsFillChatFill } from 'react-icons/bs'
import { NavLink } from './NavLink';

export const Sidebar = () => {
    return (
        <Box
            as='aside'
            w='96'
            h='100vh'
            bgColor='#161a1b'
        >
            <Box w='100%' mt='8' align='center'>
                <Image src='react-icon.png' />
                <Text fontFamily='Open Sans' fontWeight='semibold' mt='4' fontSize={'4xl'} color='#0befda'> Bem vindo ao meu portfólio </Text>
            </Box>

            <VStack spacing='12' align='stretch' mt='16'>
                <NavLink href='/' icon={BsFillHouseFill}> Home </NavLink>
                <NavLink href='/about' icon={BsFillPersonFill}> Sobre </NavLink>
                <NavLink href='/home4' icon={BsListStars}> Experiência </NavLink>
                <NavLink href='/home5' icon={BsFillChatFill}> Contato </NavLink>
            </VStack>
        </Box>
    )
}