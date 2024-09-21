import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "@repo/ui/components/loader";
import "./App.css";

const Login = lazy(() => import("@/pages/auth/login/index"));
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
