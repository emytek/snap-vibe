import SigninForm from './_auth/forms/SigninForm';
import './globals.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './root/RootLayout';
import SignupForm from './_auth/forms/SignupForm';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <>
       <main className="flex h-screen">
        <Routes>
          {/* publc routes */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SigninForm />} />
            <Route path="/sign-up" element={<SignupForm />} />
          </Route>

          {/* private routes */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>

        <Toaster />
      </main>
    </>
  )
}

export default App
