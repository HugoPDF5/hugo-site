import { Box, Flex, Heading, HStack, Icon, Link, Text } from '@chakra-ui/react'
import { Sidebar } from '../Sidebar'
import { MdOutlineLocalPhone, MdOutlineLocalPostOffice } from 'react-icons/md'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


export const Contact = () => {
    return (
        <Flex bg='#000' overflow='hidden'>
            <Flex w='100%'>
                <Sidebar />
                <Flex flex='1' direction='column'>
                    <Box h='20%' w='100%'>
                        <Heading mt='36' textAlign='center' fontFamily='Open Sans' fontWeight='bold' fontSize={'4xl'} color='#0befda'>Entre em contato comigo:</Heading>
                    </Box>
                    <Flex flex='1'>
                        <HStack color='white' spacing='16' w='100%' align='center' justify='space-evenly'>
                            <Flex direction='column' align='center' gap='4' >
                                <Icon as={MdOutlineLocalPhone} boxSize='16' color='#0befda' />
                                <Text fontFamily='Poppins, sans-serif' fontWeight='bold'>Telefone</Text>
                                <Text fontFamily='Poppins, sans-serif' fontWeight='semibold'>(88) 99339-5916</Text>
                            </Flex>
                            <Flex direction='column' align='center' gap='4' >
                                <Icon as={MdOutlineLocalPostOffice} boxSize='16' color='#0befda' />
                                <Text fontFamily='Poppins, sans-serif' fontWeight='bold'>Email</Text>
                                <Text fontFamily='Poppins, sans-serif' fontWeight='semibold'>hugopatricio51@gmail.com</Text>
                            </Flex>
                            <Flex direction='column' align='center' gap='4' >
                                <Icon as={AiFillGithub} boxSize='16' color='#0befda' />
                                <Text fontFamily='Poppins, sans-serif' fontWeight='bold'>GitHub</Text>
                                <Link href='https://github.com/HugoPDF5' isExternal >
                                    <Text fontFamily='Poppins, sans-serif' fontWeight='semibold'>HugoPDF5 <ExternalLinkIcon mx='2px'/></Text>
                                </Link>
                            </Flex>
                            <Flex direction='column' align='center' gap='4' >
                                <Icon as={AiFillLinkedin} boxSize='16' color='#0befda' />
                                <Text fontFamily='Poppins, sans-serif' fontWeight='bold'>Linkedin</Text>
                                <Link href='https://github.com/HugoPDF5' isExternal >
                                <Text fontFamily='Poppins, sans-serif' fontWeight='semibold'>Hugo Patrício <ExternalLinkIcon mx='2px'/></Text>
                                </Link>
                            </Flex>
                        </HStack>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}