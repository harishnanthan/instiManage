import Sidebar from "../Sidebar";
import './Layout.scss';

export default function Layout({ children }) {
  return (
    <div className="app_container">
      <Sidebar />
      <div className="app_main">{children}</div>
    </div>
  );
}
