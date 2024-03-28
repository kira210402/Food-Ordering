import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>HOMEPAGE</Layout>} />
      <Route path="/user-profile" element={<span>USER PROFILE</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}