import { Flex, Input, Text } from "@chakra-ui/react";
import { useIssues } from "contexts/IssuesContext";
import { useDebouncedCallback } from "use-debounce";

function SearchForm() {
  const { searchIssues } = useIssues();
  const search = useDebouncedCallback((q) => searchIssues(q), 500);

  function handleOnChange(q: string) {
    search(q);
  }

  return (
    <Flex flexDirection="column" marginTop="4.5rem">
      <Flex justifyContent="space-between">
        <Text textStyle="titleS">Publications</Text>
        <Text textStyle="textS">6 publications</Text>
      </Flex>
      <Input
        marginTop="0.75rem"
        backgroundColor="black.500"
        borderColor="gray.600"
        placeholder="Search content"
        onChange={(q) => handleOnChange(q.target.value)}
      />
    </Flex>
  );
}

export { SearchForm };
