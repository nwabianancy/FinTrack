import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Transactions from '../pages/Transactions'
import Budget from '../pages/Budget'
import Invoices from '../pages/Invoices'
import Tax from '../pages/Tax'
import Subscriptions from '../pages/Subscriptions'
import Instalments from '../pages/Instalments'
import MarketIntelligence from '../pages/MarketIntelligence'
import Settings from '../pages/Settings'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="budget" element={<Budget />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="tax" element={<Tax />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="instalments" element={<Instalments />} />
        <Route path="market" element={<MarketIntelligence />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}