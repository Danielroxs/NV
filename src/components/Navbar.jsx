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

const MotionBox = motion(Box);

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const controls = useAnimation();

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
      bg={scrolling ? "gray.800" : "transparent"}
      color="white"
      p={4}
      position="fixed"
      width="100%"
      zIndex="1000"
      transition="background-color 0.3s ease"
    >
      <Flex align="center" justify="space-between">
        <Heading size="lg">Mi Página</Heading>
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
