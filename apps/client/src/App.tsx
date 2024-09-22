import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NraLoader } from "@repo/ui/nra/loader";
import "./App.css";

const Login = lazy(() => import("@/pages/auth/login/index"));
function App() {
  return (
    <Suspense fallback={<NraLoader />}>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
