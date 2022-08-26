import { Box, SimpleGrid } from "@chakra-ui/react";

interface IssuesListLoadingProps {}

function IssuesListLoading() {
  return (
    <SimpleGrid
      gap="2rem"
      columns={[1, 1, 2]}
      marginTop="4rem"
      marginBottom="14.625rem"
    ></SimpleGrid>
  );
}

export { IssuesListLoading };
