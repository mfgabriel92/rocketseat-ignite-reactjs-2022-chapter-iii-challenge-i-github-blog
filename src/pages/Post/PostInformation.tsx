import { Box, Flex, Text } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faExternalLink,
  faCalendarCheck,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PostInformation() {
  return (
    <Flex
      flexDirection="column"
      backgroundColor="gray.800"
      borderRadius="10px"
      paddingX={["0.75rem", "1.5rem", "2.5rem"]}
      paddingY={["1rem", "1.5rem", "2rem"]}
      boxShadow="0 2px 28px rgba(0, 0, 0, 0.2)"
      marginTop="-5.25rem"
    >
      <Flex flex="1" justifyContent="space-between" alignItems="center">
        <Text textStyle="link">
          <FontAwesomeIcon icon={faArrowLeft} />
          BACK
        </Text>
        <Text textStyle="link">
          CHECK ON GITHUB
          <FontAwesomeIcon icon={faExternalLink} />
        </Text>
      </Flex>
      <Box marginTop="1.25rem">
        <Text textStyle="titleL" marginTop="0.5rem">
          JavaScript data types and data structures
        </Text>
      </Box>
      <Flex marginTop="0.5rem" gap="1.5rem" color="gray.300">
        <Flex gap="0.5rem" alignItems="center" color="gray.500">
          <Text>
            <FontAwesomeIcon icon={faGithub} />
          </Text>
          <Text>username</Text>
        </Flex>
        <Flex gap="0.5rem" alignItems="center" color="gray.500">
          <Text>
            <FontAwesomeIcon icon={faCalendarCheck} />
          </Text>
          <Text>1 day ago</Text>
        </Flex>
        <Flex gap="0.5rem" alignItems="center" color="gray.500">
          <Text>
            <FontAwesomeIcon icon={faComment} />
          </Text>
          <Text>3 Comments</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export { PostInformation };
