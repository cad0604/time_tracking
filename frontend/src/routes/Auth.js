import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const routesMap = {
  "/acceso": lazy(() => import("pages/auth/Login")),
  "/registro": lazy(() => import("pages/auth/Register")),
};

export default function AuthRoutes() {
  return (
    <Routes>
      <Route index element={<Navigate to="/autenticación/acceso" />} />
      {Object.entries(routesMap).map(([path, Component]) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
