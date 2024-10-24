import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const routesMap = {
  "/rastro": lazy(() => import("pages/overview/Customer")),
};

export default function CustomerRoutes() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated || user.role === "Admin") {
    return <Navigate to="/autenticación/acceso" />;
  }

  return (
    <Routes>
      <Route index element={<Navigate to="/rastro" />} />
      {Object.entries(routesMap).map(([path, Component]) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
