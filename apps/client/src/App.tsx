import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader } from "@/components";
import "./App.css";

const Login = lazy(() => import("@/pages/auth/login"));
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
