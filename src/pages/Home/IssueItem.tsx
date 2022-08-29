import { Flex, Text } from "@chakra-ui/react";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";

interface IssueItemProps {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

function IssueItem({ number, title, body, created_at: createdAt }: IssueItemProps) {
  return (
    <Link to={`/issues/${number}`}>
      <Flex
        flexDirection="column"
        padding="2rem"
        backgroundColor="gray.700"
        borderWidth="1px"
        borderColor="transparent"
        borderRadius="10px"
        _hover={{
          borderColor: "blue.500",
          borderWidth: "1px",
        }}
      >
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-start"
          gap="0.25rem"
        >
          <Text textStyle="titleM">
            {title.length < 30 ? title : `${title.substring(0, 27)}...`}
          </Text>
          <Text textStyle="textS">
            {formatDistance(new Date(createdAt), new Date(), { addSuffix: true })}
          </Text>
        </Flex>
        <Text textStyle="textM" marginTop="1.25rem">
          {body.length < 150 ? body : `${body.substring(0, 147)}...`}
        </Text>
      </Flex>
    </Link>
  );
}

export { IssueItem };
