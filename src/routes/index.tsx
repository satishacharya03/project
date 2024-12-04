import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { AdminLayout } from '../components/admin/AdminLayout';
import { AdminRoute } from '../components/admin/AdminRoute';

// Public Pages
import { HomePage } from '../pages/HomePage';
import { PackagesPage } from '../pages/PackagesPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { AccountPage } from '../pages/AccountPage';
import { BillingPage } from '../pages/BillingPage';
import { CheckoutPage } from '../pages/CheckoutPage';

// Admin Pages
import { DashboardPage } from '../pages/admin/DashboardPage';
import { PackagesPage as AdminPackagesPage } from '../pages/admin/PackagesPage';
import { UsersPage } from '../pages/admin/UsersPage';
import { OrdersPage } from '../pages/admin/OrdersPage';
import { OffersPage } from '../pages/admin/OffersPage';
import {PageDetailsPage } from '../pages/admin/Pagedetails';

export function AppRoutes() {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
        <Route index element={<DashboardPage />} />
        <Route path="packages" element={<AdminPackagesPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="pagedetails" element={<PageDetailsPage />} />
      </Route>
    
      {/* Public Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="packages" element={<PackagesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="billing" element={<BillingPage />} />
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}