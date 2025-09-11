import NavBar from "../components/main/NavBar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
