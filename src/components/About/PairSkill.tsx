import { Box, Text, Image } from '@chakra-ui/react'

interface PairSkillProps {
    image: string
    name: string
}

const PairSkill = ({ image, name }: PairSkillProps) => {
    return (
        <Box display='flex' gap='2' alignItems='center'>
            <Image src={image} boxSize={["15px", "20px", "30px", '40px']} />
            <Text fontWeight='black' fontSize={["xs", "2xs", "md", "xl"]} color='white' fontFamily='Open Sans, sans-serif'> {name} </Text>
        </Box>
    )
}

export default PairSkill