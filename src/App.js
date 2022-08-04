import './App.css';
import { Route, Routes } from "react-router-dom";
import theme from './themes/themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Detail from './pages/Detail';
import NewRecipes from './pages/New';
import Article from './pages/Article';
import Search from './pages/Search';

function App() {
  return (    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <NavigationBar />
          <Routes>
              <Route path='/' 
                element={
                  <ProtectedRoute loginOnly={false}>
                    <Home />
                  </ProtectedRoute>
              } />
              <Route path='login' element={
                <ProtectedRoute loginOnly={false}>
                  <Login />
                </ProtectedRoute>
              } />
              <Route path='new' element={
                <ProtectedRoute loginOnly={false}>
                  <NewRecipes />
                </ProtectedRoute>
              } />
              <Route path='article' element={
                <ProtectedRoute loginOnly={false}>
                  <Article />
                </ProtectedRoute>
              } />
              <Route path='detail/:id' element={
                <ProtectedRoute>
                 <Detail />
                </ProtectedRoute>
              } />
              <Route path='search/:key' element={<Search />} />
              <Route path='register' element={
                <ProtectedRoute loginOnly={false}>
                  <Register />
                </ProtectedRoute>
              } />
          </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
