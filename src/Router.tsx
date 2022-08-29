import { DefaultLayout } from "@layouts/DefaultLayout";
import { Home } from "@pages/Home";
import { Post } from "@pages/Post";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issues/:issueId" element={<Post />} />
      </Route>
    </Routes>
  );
}

export { Router };
