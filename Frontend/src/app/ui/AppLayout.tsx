import { Outlet, Link } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="min-h-screen">
      <header className="border-b">
        <nav className="mx-auto max-w-6xl flex gap-6 p-4">
          <Link to="/" className="font-semibold">Dashboard</Link>
          <Link to="/patients">Patients</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl p-4">
        <Outlet />
      </main>
    </div>
  )
}