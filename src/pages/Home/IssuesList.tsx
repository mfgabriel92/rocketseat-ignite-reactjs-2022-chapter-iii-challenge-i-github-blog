import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import { useIssues } from "contexts/IssuesContext";
import { IssueItem } from "./IssueItem";
import { IssuesListLoading } from "./IssuesListLoading";

function IssuesList() {
  const { issues } = useIssues();

  if (!issues.length) {
    return (
      <Center paddingY="12rem">
        <Text textStyle="titleS">No results</Text>
      </Center>
    );
  }

  return (
    <SimpleGrid gap="2rem" columns={[1, 1, 2]} marginTop="4rem" marginBottom="14.625rem">
      <IssuesListLoading />
      {/* {issues?.map((issue) => (
        <IssueItem key={issue.id} {...issue} />
      ))} */}
    </SimpleGrid>
  );
}

export { IssuesList };
