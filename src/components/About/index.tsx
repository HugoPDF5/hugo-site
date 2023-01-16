import { Box, Flex, SimpleGrid, Text} from '@chakra-ui/react'
import { Sidebar } from '../Sidebar'
import PairSkill from './PairSkill'

export const About = () => {
    return (
        <Flex bg='#000' minHeight='100vh'>
            <Sidebar />
            <SimpleGrid ml={['36','48','60','96']} minHeight='100%' mt='2' flex='1' gap='4' minChildWidth='175px' alignItems='flex-start' m={["",'auto 0']}>
                <Box padding={["6", "8"]} borderRadius='8' pb='4' bg='#101213' h='100%'  mx='4'>
                    <Text fontWeight='extrabold' fontSize={["sm", "md", "lg", "2xl"]} mb='4' color='#0BEFFF' align='center' fontFamily='Open Sans, sans-serif'>
                        Sobre
                    </Text>

                    <Text fontWeight='bold' fontSize={["xs", "2xs", "md", "xl"]} mb='4' color='white' align='justify' fontFamily='Open Sans, sans-serif'>
                        Desde o primeiro contato com um computador aos 8 anos de idade já sabia que aquela máquina iria transformar minha vida, mas não ao ponto de saber que iria ser provavelmente minha profissão pro resto dela. Tanto meu ensino médio, quanto a minha graduação são voltadas para a área de TI e ao decorrer da graduação,
                        descobri algo que me brilhou os olhos: programação web. Estou atualmente focado em estudar ReactJS e Typescript.
                    </Text>
                </Box>

                <Box padding={["6", "8"]} borderRadius='8' pb='4' bg='#101213' h='100%' mx='4'>
                    <Text fontWeight='extrabold' fontSize={["sm", "md", "lg", "2xl"]} mb='12' color='#0BEFFF' align='center' fontFamily='Open Sans, sans-serif'>
                        Habilidades
                    </Text>

                    <Flex gap='16' mt='6' wrap='wrap' justifyContent='space-evenly'>
                        <PairSkill name='Chakra UI' image='react-icon.png' />
                        <PairSkill name='React' image='chakra-ui-icon.png' />
                        <PairSkill name='Typescript' image='typescript-icon.png' />
                        <PairSkill name='Vite' image='vite-logo.png' />
                        <PairSkill name='Git' image='git-icon.png' />
                        <PairSkill name='Javascript' image='javascript-icon.png' />
                        <PairSkill name='Bootstrap' image='bootstrap-icon.png' />
                        <PairSkill name='Scrum' image='scrum-icon.png' />
                    </Flex>

                </Box>
            </SimpleGrid>
        </Flex>
    )
}