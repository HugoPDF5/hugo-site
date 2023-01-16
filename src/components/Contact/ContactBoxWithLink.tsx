import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Flex, Icon, Link, Text } from '@chakra-ui/react'

interface ContactBoxWithLinkProps {
    icon: any
    header: string
    link: string
    value: string
}

const ContactBoxWithLink = ({ header, icon, value, link }: ContactBoxWithLinkProps) => {
    return (
        <Flex direction='column' align='center' gap='4'>
            <Icon as={icon} boxSize={['6', '8', '12', '16']} color='#0BEFFF' />
            <Text fontFamily='Poppins, sans-serif' fontWeight='bold'>{header}</Text>
            <Link href={link} isExternal _hover={{ textDecoration: 'none' }} >
                <Text fontFamily='Poppins, sans-serif' fontWeight='semibold'>{value} <ExternalLinkIcon mx='2px' /></Text>
            </Link>
        </Flex>
    )
}

export default ContactBoxWithLink