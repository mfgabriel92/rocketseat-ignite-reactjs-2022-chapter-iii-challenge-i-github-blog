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
  loading: boolean;
  searchIssues: (q: string) => void;
}

const IssueContext = createContext({} as IssueContextProps);

function IssueProvider({ children }: { children: ReactElement }) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchAllIssues();
  }, []);

  async function fetchAllIssues() {
    setLoading(true);
    const { data } = await api.get("/repos/facebook/react/issues", {
      params: {
        per_page: 10,
        sort: "created",
      },
    });

    setIssues(data);
    setLoading(false);
  }

  async function searchIssues(q: string) {
    if (q.length <= 0) {
      return fetchAllIssues();
    }

    setLoading(true);
    const { data } = await api.get("/search/issues", {
      params: {
        q: `${q} repo:facebook/react type:issue`,
        per_page: 10,
        sort: "created",
      },
    });

    setIssues(data.items);
    setLoading(false);
  }

  return (
    <IssueContext.Provider value={{ issues, loading, searchIssues }}>
      {children}
    </IssueContext.Provider>
  );
}

function useIssues() {
  return useContext(IssueContext);
}

export { useIssues, IssueProvider };
