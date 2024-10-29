import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const routesMap = {
  "/informe": lazy(() => import("pages/overview/Admin")),
  "/tabla": lazy(() => import("pages/crm/Customer")),
};

export default function AdminRoutes() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated || !user.isAdmin) {
    return <Navigate to="/autenticación/acceso" />;
  }

  return (
    <Routes>
      <Route index element={<Navigate to="/administración/informe" />} />
      {Object.entries(routesMap).map(([path, Component]) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
