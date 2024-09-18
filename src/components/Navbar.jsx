import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  Button,
  Stack,
  useDisclosure,
  useBreakpointValue,
  IconButton,
  useTheme,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion, useAnimation } from "framer-motion";
import Logo from "../images/Logo.png";
import styled from "styled-components";

const MotionBox = motion(Box);

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const controls = useAnimation();
  const logoHeight = useBreakpointValue({ base: "40px", md: "50px" });

  const justifyContent = useBreakpointValue({
    base: "space-between",
    md: "space-around",
  });

  const MotionBox = motion(Box);

  const StyledLogo = styled.img`
    height: ${(props) => props.height};
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  `;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -20 });
    }
  }, [isOpen, controls]);

  return (
    <Box
      bg={scrolling ? "transparent" : "transparent"}
      color="white"
      p={3}
      position="fixed"
      width="100%"
      zIndex="1000"
      transition="background-color 0.3s ease"
    >
      <Flex align="center" justify={justifyContent} className="md:mt-4">
        <Box as="a" href="/" marginLeft="5px">
          <StyledLogo
            src={Logo}
            alt="Logo de mi negocio"
            style={{ height: logoHeight }}
          />
        </Box>
        {isDesktop ? (
          <Stack direction="row" spacing={4}>
            <Link href="#hero">Inicio</Link>
            <Link href="#about">Sobre Nosotros</Link>
            <Link href="#services">Servicios</Link>
            <Link href="#contact">Contacto</Link>
          </Stack>
        ) : (
          <>
            <IconButton
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={isOpen ? onClose : onOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              variant="outline"
              colorScheme="whiteAlpha"
              backgroundColor="gray.700"
              _hover={{ backgroundColor: "gray.600" }}
              borderRadius="md"
              p={3}
            />
            <MotionBox
              initial={{ opacity: 0, y: -20 }}
              animate={controls}
              position="absolute"
              top="100%"
              right="0"
              bg="gray.800"
              p={4}
              borderRadius="md"
              width="full"
            >
              <Stack spacing={4}>
                <Link href="#hero">Inicio</Link>
                <Link href="#about">Sobre Nosotros</Link>
                <Link href="#services">Servicios</Link>
                <Link href="#contact">Contacto</Link>
              </Stack>
            </MotionBox>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
