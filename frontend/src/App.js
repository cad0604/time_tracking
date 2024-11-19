import React, { Suspense, lazy, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loader from "components/ui/loader/Loader";
import { useMobileViewport } from "utils/responsive";
import { AntConfigMobileProps, AntConfigProps } from "config/AntConfig";
import { ConfigProvider } from "antd";

const CustomerRoutes = lazy(() => import("routes/Customer"));
const AdminRoutes = lazy(() => import("routes/Admin"));
const AuthRoutes = lazy(() => import("routes/Auth"));

function App() {
  const isMobileView = useMobileViewport();
  const ConfigProps = useMemo(() => {
    if (isMobileView) return AntConfigMobileProps;
    else return AntConfigProps;
  }, [isMobileView]);

  return (
    <ConfigProvider {...ConfigProps}>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/autenticación/*" element={<AuthRoutes />} />
            <Route path="/administración/*" element={<AdminRoutes />} />
            <Route path="/*" element={<CustomerRoutes />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
