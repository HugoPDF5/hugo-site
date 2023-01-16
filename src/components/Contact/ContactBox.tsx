import { Flex, Icon, Text } from '@chakra-ui/react'

interface ContactBoxProps {
    icon: any
    header: string
    value: string
}
const ContactBox = ({header, icon, value}: ContactBoxProps) => {
    return (
        <Flex direction='column' align='center' gap='4'>
            <Icon as={icon} boxSize={['6', '8', '12', '16']} color='#0BEFFF' />
            <Text fontFamily='Poppins, sans-serif' fontWeight='bold'>{header}</Text>
            <Text fontFamily='Poppins, sans-serif' fontWeight='semibold'>{value}</Text>
        </Flex>
    )
}

export default ContactBox