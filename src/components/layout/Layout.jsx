import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

/**
 * Persistent layout shell.
 * Navbar and Footer stay mounted across all routes —
 * only the <Outlet /> swaps on navigation.
 */
export default function Layout() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
