import { createContext, ReactElement, useContext, useEffect, useState } from "react";
import { api } from "services/api";

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

interface IssueContextProps {
  issues: Issue[];
  searchIssues: (q: string) => void;
}

const IssueContext = createContext({} as IssueContextProps);

function IssueProvider({ children }: { children: ReactElement }) {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    fetchAllIssues();
  }, []);

  async function fetchAllIssues() {
    const { data } = await api.get("/repos/facebook/react/issues", {
      params: {
        per_page: 10,
        sort: "created",
      },
    });

    setIssues(data);
  }

  async function searchIssues(q: string) {
    if (q.length <= 0) {
      return fetchAllIssues();
    }

    const { data } = await api.get("/search/issues", {
      params: {
        q: `${q} repo:facebook/react type:issue`,
        per_page: 10,
        sort: "created",
      },
    });

    setIssues(data.items);
  }

  return <IssueContext.Provider value={{ issues, searchIssues }}>{children}</IssueContext.Provider>;
}

function useIssues() {
  return useContext(IssueContext);
}

export { useIssues, IssueProvider };
