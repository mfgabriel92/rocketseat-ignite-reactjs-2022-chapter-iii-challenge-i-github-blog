import { Flex } from "@chakra-ui/react";
import { IssuesList } from "./IssuesList";
import { ProfileInformation } from "./ProfileInformation";
import { SearchForm } from "./SearchForm";

function Home() {
  return (
    <Flex flex="1" flexDirection="column" paddingX="1rem">
      <ProfileInformation />
      <SearchForm />
      <IssuesList />
    </Flex>
  );
}

export { Home };
