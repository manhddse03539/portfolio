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
    <Container maxW="75ch" mt={5}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("#F8F8F8", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hello, I&apos;m a master Chef in Viet Nam!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Manh Sama
          </Heading>
          <p>( Chef / Developer / Artist )</p>
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
        <Heading as="h3" size="md" variant="section-title">
          Work
        </Heading>
        <Text>
          I have 5 years’ experience as the head chef at ABC Eatery. Prior to
          that I was a sous chef at Belle’s Bistro for 2 years, a position I
          landed immediately after graduating from The Culinary Institute of
          America. I specialize in elite and authentic American cuisine and
          spend some of my off time experimenting with flavors to create new,
          exciting and scrumptious dishes.
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
          <Text fontWeight="bold">2017</Text>
          Graduated from FPT University
        </Box>
        <Box display="flex" gap="1rem" marginTop="1rem">
          <Text fontWeight="bold">2017-2019</Text>
          Worked at Hblab company
        </Box>
        <Box display="flex" gap="1rem" marginTop="1rem">
          <Text fontWeight="bold">2019-2020</Text>
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
