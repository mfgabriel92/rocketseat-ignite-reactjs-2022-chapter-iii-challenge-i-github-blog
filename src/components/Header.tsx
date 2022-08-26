import { Flex } from "@chakra-ui/react";
import { LeftEffect } from "./LeftEffect";
import { Logo } from "./Logo";
import { RightEffect } from "./RightEffect";

function Header() {
  return (
    <Flex
      flex="1"
      height="18.5rem"
      backgroundColor="gray.700"
      justifyContent="space-between"
      alignItems="center"
    >
      <LeftEffect />
      <Logo marginTop="-5rem" />
      <RightEffect />
    </Flex>
  );
}

export { Header };
