import { Box, Flex, Heading } from '@chakra-ui/react'
import { Sidebar } from '../Sidebar'
import { MdOutlineLocalPhone, MdOutlineLocalPostOffice } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import ContactBox from './ContactBox'
import ContactBoxWithLink from './ContactBoxWithLink'


export const Contact = () => {
    return (
        <Flex bg='#000' overflow='hidden' h="100vh">
            <Flex w='100%'>
                <Sidebar />
                <Flex flex='1' direction='column' ml={['36', '48', '60', '96']}>
                    <Box>
                        <Heading mt={["16", "20", "24", '36']} textAlign='center' fontFamily='Open Sans' fontWeight='bold' fontSize={["sm", "xl", "2xl", "4xl"]} color='#0BEFFF'>Entre em contato comigo:</Heading>
                    </Box>
                    <Flex flex='1' >
                        <Flex color='white' gap='16' w='100%' mt={["4", "6", "8", '12']} align='center' justify='space-evenly' direction={['column', 'column', 'row', 'row']}>
                            <ContactBox icon={MdOutlineLocalPhone} header={'Telefone'} value={'(88) 99339-5916'} />
                            <ContactBox icon={MdOutlineLocalPostOffice} header={'Email'} value={'hugopatricio51'} />
                            <ContactBoxWithLink icon={AiFillGithub} header={'GitHub'} link={'https://github.com/HugoPDF5'} value={'HugoPDF5'} />
                            <ContactBoxWithLink icon={AiFillLinkedin} header={'Linkedin'} link={'https://www.linkedin.com/in/hugopdf'} value={'Hugo Patrício'} />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}