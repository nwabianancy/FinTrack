import { NavLink } from 'react-router-dom'

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/transactions', label: 'Transactions' },
  { to: '/budget', label: 'Budget' },
  { to: '/invoices', label: 'Invoices' },
  { to: '/tax', label: 'Tax' },
  { to: '/subscriptions', label: 'Subscriptions' },
  { to: '/instalments', label: 'Instalments' },
  { to: '/market', label: 'Market Intelligence' },
  { to: '/settings', label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6">
      <h1 className="text-2xl font-bold mb-8 text-green-400">Fintrack</h1>
      <nav className="flex flex-col gap-2">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-medium transition ${
                isActive ? 'bg-green-500 text-white' : 'hover:bg-gray-700'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}