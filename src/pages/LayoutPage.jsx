import ResponsiveAppBar from "../components/TopNavBar";
import { Outlet } from "react-router-dom";

export default function LayoutPage() {
  return (
    <div className="layout-container">
      <ResponsiveAppBar />
      <main className="main-content">
        <div className="layoutPage">
          <h3>Layout Page</h3>  

        </div>

        <Outlet />
      </main>
    </div>
  );
}
