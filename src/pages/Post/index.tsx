import { Flex } from "@chakra-ui/react";
import { PostInformation } from "./PostInformation";

function Post() {
  return (
    <Flex flex="1" flexDirection="column" paddingX="1rem">
      <PostInformation />
    </Flex>
  );
}

export { Post };
