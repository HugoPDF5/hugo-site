import { Box, Flex, Heading, HStack, Icon, Link, Text } from '@chakra-ui/react'
import { Sidebar } from '../Sidebar'
import { MdOutlineLocalPhone, MdOutlineLocalPostOffice } from 'react-icons/md'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


export const Contact = () => {
    return (
        <Flex bg='#000' overflow='hidden' h="100vh">
            <Flex w='100%'>
                <Sidebar />
                <Flex flex='1' direction='column' ml={['36','48','60','96']}>
                    <Box>
                        <Heading mt={["16","20","24",'36']} textAlign='center' fontFamily='Open Sans' fontWeight='bold' fontSize={["sm", "xl", "2xl", "4xl"]} color='#0BEFFF'>Entre em contato comigo:</Heading>
                    </Box>
                    <Flex flex='1' >
                        <Flex color='white' gap='16' w='100%' mt={["4","6","8",'12']} align='center' justify='space-evenly' direction={['column', 'column' ,'row', 'row']}>
                            <Flex direction='column' align='center' gap='4'>
                                <Icon as={MdOutlineLocalPhone} boxSize={['6','8','12','16']} color='#0BEFFF' />
                                <Text fontFamily='Poppins, sans-serif' fontWeight='bold'>Telefone</Text>
                                <Text fontFamily='Poppins, sans-serif' fontWeight='semibold'>(88) 99339-5916</Text>
                            </Flex>
                            <Flex direction='column' align='center' gap='4' >
                                <Icon as={MdOutlineLocalPostOffice} boxSize={['6','8','12','16']} color='#0BEFFF' />
                                <Text fontFamily='Poppins, sans-serif' fontWeight='bold'>Email</Text>
                                <Text fontFamily='Poppins, sans-serif' fontWeight='semibold'>hugopatricio51@gmail.com</Text>
                            </Flex>
                            <Flex direction='column' align='center' gap='4' >
                                <Icon as={AiFillGithub} boxSize={['6','8','12','16']} color='#0BEFFF' />
                                <Text fontFamily='Poppins, sans-serif' fontWeight='bold'>GitHub</Text>
                                <Link href='https://github.com/HugoPDF5' isExternal _hover={{textDecoration: 'none'}} >
                                    <Text fontFamily='Poppins, sans-serif' fontWeight='semibold'>HugoPDF5 <ExternalLinkIcon mx='2px'/></Text>
                                </Link>
                            </Flex>
                            <Flex direction='column' align='center' gap='4' >
                                <Icon as={AiFillLinkedin} boxSize={['6','8','12','16']} color='#0BEFFF' />
                                <Text fontFamily='Poppins, sans-serif' fontWeight='bold'>Linkedin</Text>
                                <Link href='https://github.com/HugoPDF5' isExternal _hover={{textDecoration: 'none'}} >
                                <Text fontFamily='Poppins, sans-serif' fontWeight='semibold'>Hugo Patrício <ExternalLinkIcon mx='2px'/></Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}