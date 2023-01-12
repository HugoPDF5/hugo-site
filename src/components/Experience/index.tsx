import { Button, Image, Card, CardBody, Flex, Heading, Text, Link, Divider, UnorderedList, ListItem, Collapse, VStack, Icon } from '@chakra-ui/react'
import { Sidebar } from '../Sidebar'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'
import { useState } from 'react'

export const Experience = () => {
    const [showLeadInfo, setShowLeadInfo] = useState(false)
    const handleToggleLead = () => setShowLeadInfo(!showLeadInfo)

    const [showEmpreenday, setShowEmpreenday] = useState(false)
    const handleEmpreenday = () => setShowEmpreenday(!showEmpreenday)

    const [showInitiation, setShowInitiation] = useState(false)
    const handleInitiation = () => setShowInitiation(!showInitiation)

    return (
        <Flex bg='#000'>
            <Sidebar />
            <Flex flex='1' ml={['36','48','60','96']} justify='space-between' align='center' m='auto' minHeight='100vh' direction={['column', 'column', 'column', 'row']}>
                <Card
                    maxW='sm'
                    variant='outline'
                    h='100%'
                    mx='16'
                    my='16'
                    padding='4'
                >
                    <VStack spacing='4'>
                        <Image
                            boxSize={["40px","60px","80px",'100px']}
                            src='lead-icon.png'
                            alt='Dell Lead logo'
                            borderRadius='lg'
                        />
                        <CardBody color='white'>
                            <Heading textAlign='center' size={["sm","sm","md",'md']} mb='2'>Dell Lead - Dev. Front-End</Heading>
                            <Heading textAlign='center' size={["sm","sm","md",'md']} mb='2'>Maio/2022 - Janeiro/2023</Heading>
                            <Button w='100%' onClick={handleToggleLead} bg='transparent' _hover='transparent' _active='transparent'>
                                <Icon boxSize='8' as={showLeadInfo ? IoIosArrowDropup : IoIosArrowDropdown}> </Icon>
                            </Button>
                            <Collapse in={showLeadInfo} animateOpacity>
                                <Text fontWeight='bold' fontSize={["xs", "2xs", "md", "lg"]} mb='4' mt='4' fontFamily='Open Sans, sans-serif'>
                                    Atuação como bolsista em projeto de escopo internacional
                                    utilizando como principais tecnologias: React e Typescript.
                                </Text>
                                <Divider />
                                <Heading size={["sm","sm","md",'md']} textAlign='center' mb='4' mt='4'>Principais atividades: </Heading>
                                <UnorderedList>
                                    <ListItem>Utilização de tecnologias como: ReactJS v.16+ com Typescript;</ListItem>
                                    <ListItem>Implementações de features, correção de bugs, integrações com endpoints, refatoração;</ListItem>
                                    <ListItem>Vivência com Scrum como metodologia ágil;</ListItem>
                                    <ListItem>Conhecimento inicial sobre CI/CD;</ListItem>
                                    <ListItem>Testes unitários com JEST/Testing-Library</ListItem>
                                </UnorderedList>
                                <Link href='https://leadfortaleza.com.br/' isExternal>
                                    <Button variant='solid' colorScheme='cyan' w='100%' mt='4' size={["sm", "sm", "md", "lg"]}  >
                                        Acessar página
                                    </Button>
                                </Link>
                            </Collapse>
                        </CardBody>
                    </VStack>
                </Card>

                <Card
                    maxW='sm'
                    variant='outline'
                    h='100%'
                    mx='16'
                    my='16'
                    padding='4'
                >
                    <VStack spacing='4'>
                        <Image
                            boxSize={["40px","60px","80px",'100px']}
                            src='ufc-logo.png'
                            alt='Dell Lead logo'
                            borderRadius='lg'
                        />
                        <CardBody color='white'>
                            <Heading textAlign='center' size={["sm","sm","md",'md']} mb='2'>UFC - Quixadá - Empreenday</Heading>
                            <Heading textAlign='center' size={["sm","sm","md",'md']} mb='2'>Outubro/2019</Heading>
                            <Button w='100%' onClick={handleEmpreenday} bg='transparent' _hover='transparent' _active='transparent'>
                                <Icon boxSize='8' as={showEmpreenday ? IoIosArrowDropup : IoIosArrowDropdown}> </Icon>
                            </Button>
                            <Collapse in={showEmpreenday} animateOpacity>
                                <Text fontWeight='bold' fontSize={["xs", "2xs", "md", "lg"]} mb='4' mt='4' fontFamily='Open Sans, sans-serif'>
                                    2º Lugar Pitch Empreenday IV
                                </Text>
                                <Divider />
                                <Heading size={["sm","sm","md",'md']} textAlign='center' mb='4' mt='4'>Principais atividades: </Heading>
                                <Text>
                                    Projeto surgiu a partir da disciplina de Empreendedorismo, no qual uma equipe de
                                    5 pessoas deveria desenvolver uma ideia para criação de uma pequena startup.
                                    O projeto também conseguiu vaga no programa Empreende UFC que é destinado
                                    a capacitar startups pequenas e escalar os projetos.
                                </Text>
                                <Link href='https://www.quixada.ufc.br/evento/empreenday/' isExternal>
                                    <Button variant='solid' colorScheme='cyan' w='100%' mt='4'  >
                                        Acessar página
                                    </Button>
                                </Link>
                            </Collapse>
                        </CardBody>
                    </VStack>
                </Card>

                <Card
                    maxW='sm'
                    variant='outline'
                    h='100%'
                    mx='16'
                    my='16'
                    padding='4'
                >
                    <VStack spacing='4'>
                        <Image
                            boxSize={["40px","60px","80px",'100px']}
                            src='ufc-logo.png'
                            alt='Dell Lead logo'
                            borderRadius='lg'
                        />
                        <CardBody color='white'>
                            <Heading textAlign='center' size={["sm","sm","md",'md']} mb='2'>UFC - Quixadá - Bolsista</Heading>
                            <Heading textAlign='center' size={["sm","sm","md",'md']} mb='2'>Junho/2019 - Abril/2021</Heading>
                            <Button w='100%' onClick={handleInitiation} bg='transparent' _hover='transparent' _active='transparent'>
                                <Icon boxSize='8' as={showInitiation ? IoIosArrowDropup : IoIosArrowDropdown}> </Icon>
                            </Button>
                            <Collapse in={showInitiation} animateOpacity>
                                <Text fontWeight='bold' fontSize={["xs", "2xs", "md", "lg"]} mb='4' mt='4' fontFamily='Open Sans, sans-serif'>
                                    Bolsista de Iniciação Acadêmica
                                </Text>
                                <Divider />
                                <Heading size={["sm","sm","md",'md']} textAlign='center' mb='4' mt='4'>Principais atividades: </Heading>
                                <Text>
                                    Atuação em 2 projetos. O primeiro, atuei auxiliando a gestão do Restaurante
                                    Universitário com a análise dos dados obtidos em forma de votação pelos
                                    estudantes e professores que usavam do serviço. No segundo, atuei no projeto
                                    Smart Campus com foco em IOT, pesquisando e descobrindo mais sobre a área.
                                </Text>
                                <Link href='https://www.quixada.ufc.br/evento/empreenday/' isExternal>
                                    <Button variant='solid' colorScheme='cyan' w='100%' mt='4'  >
                                        Acessar página
                                    </Button>
                                </Link>
                            </Collapse>
                        </CardBody>
                    </VStack>
                </Card>
            </Flex>
        </Flex>
    )
}