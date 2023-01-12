import { Box, Text, VStack, Image } from '@chakra-ui/react'
import { BsFillPersonFill, BsFillHouseFill, BsListStars, BsFillChatFill } from 'react-icons/bs'
import { NavLink } from './NavLink';

export const Sidebar = () => {
    return (
        <Box
            as='aside'
            w={['36','48','60','96']}
            bgColor='#161a1b'
            position='fixed'
            height='100%' 
        >
            <Box mt='8' align='center' >
                <Image src='react-icon.png' />
                <Text fontFamily='Open Sans, sans-serif' fontWeight='semibold' mt='4' fontSize={["1xl", "2xl", "2xl", "4xl"]} color='#0BEFFF'> Bem vindo ao meu portfólio </Text>
            </Box>

            <VStack fontFamily='Open Sans, sans-serif' spacing='12' align='stretch' mt='16'>
                <NavLink href='/' icon={BsFillHouseFill}> Home </NavLink>
                <NavLink href='/about' icon={BsFillPersonFill}> Sobre </NavLink>
                <NavLink href='/experiences' icon={BsListStars}> Experiência </NavLink>
                <NavLink href='/contact' icon={BsFillChatFill}> Contato </NavLink>
            </VStack>
        </Box>
    )
}