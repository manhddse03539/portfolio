import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  chakra,
  Text,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Layout from "../components/layouts/article";
import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container maxW="75ch" mt={5} paddingBottom={10}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("#F8F8F8", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hello, I&apos;m a developer in Viet Nam!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Manh Sama
          </Heading>
          <p>( Developer / Brse )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/manh_sama.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>
      <Box delay={0.1}>
        <Heading as="h3" size="md" variant="section-title" marginBottom={5}>
          Self-introduce
        </Heading>
        <Text>
          The IT industry is an industry that is constantly changing. I am
          always ambitious, want to grow, and strive to achieve my goals even in
          difficult situations. I have worked as a programmer for 3 years at the
          development site. In fact, it can support development languages such
          as Rails, HTML/CSS, and Reactjs. Not only the present, but also the
          future goal is to become a good BRSE, so I would like to improve the
          technology further. I have a little experience with external design
          documents and internal design documents at the customer's site, so I
          would like to improve my knowledge of system processes.
        </Text>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Box>
      <Box delay={0.2}>
        <Heading as="h3" size="md" variant="section-title">
          Bio
        </Heading>
        <Box display="flex" gap="1rem" marginTop="1rem">
          <Text fontWeight="bold">1994</Text>
          Born in Thai Binh, Viet Nam.
        </Box>
        <Box display="flex" gap="1rem" marginTop="1rem">
          <Text fontWeight="bold">2017/09</Text>
          Graduated from FPT University
        </Box>
        <Box display="flex" gap="1rem" marginTop="1rem">
          <Text fontWeight="bold">2018/01 - 2019/06</Text>
          Worked at Hblab company
        </Box>
        <Box display="flex" gap="1rem" marginTop="1rem">
          <Text fontWeight="bold">2019/07 - 2020/11</Text>
          Learned japanese language academy
        </Box>
        <Box display="flex" gap="1rem" marginTop="1rem">
          <Text fontWeight="bold">2020 to present</Text>
          Working at Bunbu software company
        </Box>
      </Box>
    </Container>
  </Layout>
);

export default Home;
