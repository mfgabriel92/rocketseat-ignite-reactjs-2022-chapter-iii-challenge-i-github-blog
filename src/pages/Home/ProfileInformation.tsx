import { Avatar, Flex, Text } from "@chakra-ui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { api } from "services/api";

interface GithubUser {
  avatar_url: string;
  url: string;
  name?: string;
  login: string;
  bio?: string;
  company?: string;
  followers?: number;
}

function ProfileInformation() {
  const [user, setUser] = useState<GithubUser>({} as GithubUser);

  useEffect(() => {
    async function getUser() {
      const { data } = await api.get("/users/mfgabriel92");
      setUser(data);
    }

    getUser();
  }, []);

  const nameOrUsername = user.name ?? user.login;
  const bio = user.bio ?? <Text as="i">No bio</Text>;
  const company = user.company ?? <Text as="i">No company</Text>;

  return (
    <Flex
      backgroundColor="gray.800"
      borderRadius="10px"
      paddingX={["0.75rem", "1.5rem", "2.5rem"]}
      paddingY={["1rem", "1.5rem", "2rem"]}
      boxShadow="0 2px 28px rgba(0, 0, 0, 0.2)"
      marginTop="-5.25rem"
    >
      <Flex gap="2rem" flex="1">
        <Avatar
          name={nameOrUsername}
          src={user.avatar_url}
          borderRadius="8px"
          width={["7.25rem", "9.25rem"]}
          height={["7.25rem", "9.25rem"]}
          display={["none", "block"]}
        />
        <Flex flex="1" flexDirection="column">
          <Flex alignItems="center" justifyContent="space-between">
            <Text textStyle="titleL" marginTop="0.5rem">
              {nameOrUsername}
            </Text>
            <Text as="a" textStyle="link" href={user.url} target="_blank">
              GITHUB
            </Text>
          </Flex>
          <Text textStyle="textM" marginTop="0.5rem">
            {bio}
          </Text>
          <Flex marginTop="1.5rem" gap="1.5rem" color="gray.300">
            <Flex gap="0.5rem" alignItems="center" color="gray.500">
              <Text>
                <FontAwesomeIcon icon={faGithub} />
              </Text>
              <Text>{user.login}</Text>
            </Flex>
            <Flex gap="0.5rem" alignItems="center" color="gray.500">
              <Text>
                <FontAwesomeIcon icon={faBuilding} />
              </Text>
              <Text>{company}</Text>
            </Flex>
            <Flex gap="0.5rem" alignItems="center" color="gray.500">
              <Text>
                <FontAwesomeIcon icon={faUserGroup} />
              </Text>
              <Text>{user.followers} followers</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export { ProfileInformation };
