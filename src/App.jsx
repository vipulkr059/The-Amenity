import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";

import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import Signup from "./pages/SignUp";

import AppLayout from "./ui/AppLayout";
import AdminProtectedRoutes from "./ui/AdminProtectedRoutes";
import UserProtectedRoutes from "./ui/UserProtectedRoutes";
import UserLayout from "./ui/UserLayout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";

import Spinner from "./ui/Spinner";

const Bookings = lazy(() => import("./pages/Bookings"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Cabins = lazy(() => import("./pages/Cabins"));
const Users = lazy(() => import("./pages/Users"));
const Settings = lazy(() => import("./pages/Settings"));
const Account = lazy(() => import("./pages/Account"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const Booking = lazy(() => import("./pages/Booking"));
const CheckIn = lazy(() => import("./pages/CheckIn"));
const Reservation = lazy(() => import("./pages/Reservation"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                element={
                  <UserProtectedRoutes>
                    <UserLayout />
                  </UserProtectedRoutes>
                }
              >
                <Route index element={<Navigate replace to="home" />} />
                <Route path="explore" element={<LandingPage />} />
                <Route path="booking/:id" element={<Reservation />} />
                <Route path="profile" element={<UserProfile />} />
              </Route>
              <Route
                element={
                  <AdminProtectedRoutes>
                    <AppLayout />
                  </AdminProtectedRoutes>
                }
              >
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="bookings/:bookingId" element={<Booking />} />
                <Route path="checkin/:bookingId" element={<CheckIn />} />
                <Route path="cabins" element={<Cabins />} />
                <Route path="users" element={<Users />} />
                <Route path="settings" element={<Settings />} />
                <Route path="account" element={<Account />} />
              </Route>
              <Route path="home" element={<HomePage />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster
          position="bottom-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}
