import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import { CartProvider } from './hooks/CartContext';

import Header from './components/Header';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import NotFoundPage from './Pages/NotFoundPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import Cart from './Pages/Cart';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import CheckOut from './Pages/CheckOut';
import WishlistPage from './Pages/WishlistPage';
import Footer from './components/Footer';
import AccountPage from './Pages/AccountPage';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className='flex flex-col min-h-screen'>
            <Header />

            <main className='flex-grow'>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/login' element={<Login />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/cart' element={<Cart />} />
                <Route
                  path='/product-details'
                  element={<ProductDetailsPage />}
                />
                <Route
                  path='/product-details/:id'
                  element={<ProductDetailsPage />}
                />
                <Route path='/checkout' element={<CheckOut />} />
                <Route path='/wishlist' element={<WishlistPage />} />
                <Route path='/my-account' element={<AccountPage />} />
                <Route path='*' element={<NotFoundPage />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
