import { Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useIssues } from "contexts/IssuesContext";
import { IssueItem } from "./IssueItem";

function IssuesList() {
  const { issues, loading } = useIssues();

  if (loading) {
    return (
      <Center marginTop="5rem">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (!issues.length && !loading) {
    return (
      <Center paddingY="12rem">
        <Text textStyle="titleS">No results</Text>
      </Center>
    );
  }

  return (
    <SimpleGrid gap="2rem" columns={[1, 1, 2]} marginTop="4rem" marginBottom="14.625rem">
      {issues?.map((issue) => (
        <IssueItem key={issue.id} {...issue} />
      ))}
    </SimpleGrid>
  );
}

export { IssuesList };
