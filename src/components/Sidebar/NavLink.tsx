import { Flex, Icon, Text, Link, Divider } from "@chakra-ui/react";
import { ElementType } from "react";
import { NavLink as RouterLink } from "react-router-dom";

interface NavLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ href, icon, children }: NavLinkProps) {
    return (
        <Link as={RouterLink} _hover={{ fontSize: 18 }} to={href}>
            <Flex justify='center' align='center'>
                <Icon as={icon} fontSize='20' color='white' />
                <Text ml='4' fontWeight='medium' color='white'>{children}</Text>
            </Flex>
            <Divider w='75%' m='.75rem auto' />
        </Link>
    )
}