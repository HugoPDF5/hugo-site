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
        <Flex bg='#000' overflowX='hidden'>
            <Sidebar />
            <Flex flex='1' ml={['36','48','60','96']} justify='space-between' align={["end","end","center",'center']} m={["", 'auto']} minHeight='100vh' direction={['column', 'column', 'column', 'row']}>
                <Card
                    maxW='sm'
                    variant='outline'
                    h='100%'
                    mx={["4","8","12",'16']}
                    my={["4","8","12",'16']}
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
                            <Heading textAlign='center' size={["xs","xs","md",'md']} mb='2'>Dell Lead - Dev. Front-End</Heading>
                            <Heading textAlign='center' size={["xs","xs","md",'md']} mb='2'>Maio/2022 - Janeiro/2023</Heading>
                            <Button w='100%' onClick={handleToggleLead} bg='transparent' _hover='transparent' _active='transparent'>
                                <Icon boxSize='8' as={showLeadInfo ? IoIosArrowDropup : IoIosArrowDropdown}> </Icon>
                            </Button>
                            <Collapse in={showLeadInfo} animateOpacity>
                                <Text fontWeight='bold' fontSize={["xs", "2xs", "md", "lg"]} mb='4' mt='4' fontFamily='Open Sans, sans-serif'>
                                    Atua????o como bolsista em projeto de escopo internacional
                                    utilizando como principais tecnologias: React e Typescript.
                                </Text>
                                <Divider />
                                <Heading size={["sm","sm","md",'md']} textAlign='center' mb='4' mt='4'>Principais atividades: </Heading>
                                <UnorderedList>
                                    <ListItem>Utiliza????o de tecnologias como: ReactJS v.16+ com Typescript;</ListItem>
                                    <ListItem>Implementa????es de features, corre????o de bugs, integra????es com endpoints, refatora????o;</ListItem>
                                    <ListItem>Viv??ncia com Scrum como metodologia ??gil;</ListItem>
                                    <ListItem>Conhecimento inicial sobre CI/CD;</ListItem>
                                    <ListItem>Testes unit??rios com JEST/Testing-Library</ListItem>
                                </UnorderedList>
                                <Link href='https://leadfortaleza.com.br/' isExternal>
                                    <Button variant='solid' colorScheme='cyan' w='100%' mt='4' size={["sm", "sm", "md", "lg"]}  >
                                        Acessar p??gina
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
                    mx={["4","8","12",'16']}
                    my={["4","8","12",'16']}
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
                            <Heading textAlign='center' size={["sm","sm","md",'md']} mb='2'>UFC - Quixad?? - Empreenday</Heading>
                            <Heading textAlign='center' size={["sm","sm","md",'md']} mb='2'>Outubro/2019</Heading>
                            <Button w='100%' onClick={handleEmpreenday} bg='transparent' _hover='transparent' _active='transparent'>
                                <Icon boxSize='8' as={showEmpreenday ? IoIosArrowDropup : IoIosArrowDropdown}> </Icon>
                            </Button>
                            <Collapse in={showEmpreenday} animateOpacity>
                                <Text fontWeight='bold' fontSize={["xs", "2xs", "md", "lg"]} mb='4' mt='4' fontFamily='Open Sans, sans-serif'>
                                    2?? Lugar Pitch Empreenday IV
                                </Text>
                                <Divider />
                                <Heading size={["sm","sm","md",'md']} textAlign='center' mb='4' mt='4'>Principais atividades: </Heading>
                                <Text>
                                    Projeto surgiu a partir da disciplina de Empreendedorismo, no qual uma equipe de
                                    5 pessoas deveria desenvolver uma ideia para cria????o de uma pequena startup.
                                    O projeto tamb??m conseguiu vaga no programa Empreende UFC que ?? destinado
                                    a capacitar startups pequenas e escalar os projetos.
                                </Text>
                                <Link href='https://www.quixada.ufc.br/evento/empreenday/' isExternal>
                                    <Button variant='solid' colorScheme='cyan' w='100%' mt='4'  >
                                        Acessar p??gina
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
                    mx={["4","4","12",'16']}
                    my={["4","4","12",'16']}
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
                            <Heading textAlign='center' size={["sm","sm","md",'md']} mb='2'>UFC - Quixad?? - Bolsista</Heading>
                            <Heading textAlign='center' size={["sm","sm","md",'md']} mb='2'>Junho/2019 - Abril/2021</Heading>
                            <Button w='100%' onClick={handleInitiation} bg='transparent' _hover='transparent' _active='transparent'>
                                <Icon boxSize='8' as={showInitiation ? IoIosArrowDropup : IoIosArrowDropdown}> </Icon>
                            </Button>
                            <Collapse in={showInitiation} animateOpacity>
                                <Text fontWeight='bold' fontSize={["xs", "2xs", "md", "lg"]} mb='4' mt='4' fontFamily='Open Sans, sans-serif'>
                                    Bolsista de Inicia????o Acad??mica
                                </Text>
                                <Divider />
                                <Heading size={["sm","sm","md",'md']} textAlign='center' mb='4' mt='4'>Principais atividades: </Heading>
                                <Text>
                                    Atua????o em 2 projetos. O primeiro, atuei auxiliando a gest??o do Restaurante
                                    Universit??rio com a an??lise dos dados obtidos em forma de vota????o pelos
                                    estudantes e professores que usavam do servi??o. No segundo, atuei no projeto
                                    Smart Campus com foco em IOT, pesquisando e descobrindo mais sobre a ??rea.
                                </Text>
                                <Link href='https://www.quixada.ufc.br/evento/empreenday/' isExternal>
                                    <Button variant='solid' colorScheme='cyan' w='100%' mt='4'  >
                                        Acessar p??gina
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