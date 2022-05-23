import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      align="center"
      opacity={0.4}
      fontSize="sm"
      position="absolute"
      bottom={0}
      w="100%"
    >
      &copy; {new Date().getFullYear()} Manh Sama. Dead is like the wind.
    </Box>
  );
};

export default Footer;
