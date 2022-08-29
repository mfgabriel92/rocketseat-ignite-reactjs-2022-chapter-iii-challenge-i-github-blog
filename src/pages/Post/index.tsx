import { Flex } from "@chakra-ui/react";
import { useIssues } from "contexts/IssuesContext";
import { useEffect } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { PostInformation } from "./PostInformation";

function Post() {
  const { issueId } = useParams();
  const { loading, fetchIssue, issue } = useIssues();

  useEffect(() => {
    fetchIssue(Number(issueId));
  }, [fetchIssue, issueId]);

  console.log(issue);

  return (
    <Flex flex="1" flexDirection="column" paddingX="1rem">
      <PostInformation />
      <Markdown>{issue?.body || ""}</Markdown>
    </Flex>
  );
}

export { Post };
