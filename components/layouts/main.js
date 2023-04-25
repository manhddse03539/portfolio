import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import Footer from "../footer";

const Main = ({ children, router }) => {
  return (
    <Box as="main" h="100vh" pb={8}>
      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14} minH="100vh" position="relative">
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
