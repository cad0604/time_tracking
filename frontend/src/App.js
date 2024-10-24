import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loader from "components/ui/loader/Loader";

const CustomerRoutes = lazy(() => import("routes/Customer"));
const AdminRoutes = lazy(() => import("routes/Admin"));
const AuthRoutes = lazy(() => import("routes/Auth"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/autenticación/*" element={<AuthRoutes />} />
          <Route path="/administración/*" element={<AdminRoutes />} />
          <Route path="/*" element={<CustomerRoutes />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
