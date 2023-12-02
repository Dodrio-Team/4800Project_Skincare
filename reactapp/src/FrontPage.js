import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import logo from './FlawlessLogo.png';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ProductPage from './ProductsPage';

const pages = ['Products', 'Feedback', 'Blog'];

function FrontPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (page === 'blog') {
      window.location.href = 'https://cs480-projects.github.io/teams-fall2023/DodrioTeam/index.html'; // Replace with the actual blog link
    } else if (page === 'products') {
      navigate('/products'); // Redirect to the ProductsPage
    } else if (page === 'feedback') {
      openGoogleForm();
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/search/?q=${searchQuery}`);
      setSearchResults(response.data);

      // Handle the search results from the response data
      console.log(response.data);

      // Check if there are no results
    const noResults = response.data.length === 0;

    // Redirect to the ProductsPage with the search results and noResults flag
    navigate('/products', {
      state: { searchResults: response.data, noResults },
    });
      
    } catch (error) {
      // Handle error cases
      console.error('Error fetching search results:', error);
    }
  };

  // feedback form link - to get users reviews
  const openGoogleForm = () => {
    const googleFormLink = 'https://forms.gle/C7r7nG2r81o6C2gz7'
    window.open(googleFormLink)
  }

  return (
    <div className="front-page-container">
      <AppBar position="static" sx={{ backgroundColor: 'blanchedalmond' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
          <img
              src={logo}
              alt="Flawless Logo"
              style={{
                marginRight: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
                height: '50px', // Set the height according to your design
              }}
            />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page.toLowerCase())}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page.toLowerCase())}
                  sx={{ my: 2, color: 'black', display: 'block', fontFamily: 'monospace', fontSize: 16 }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="search-input"
                style={{ fontFamily: 'monospace' }}
              />
              <button 
                className="search-button" onClick={handleSearch}>
                Search
              </button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    <Box sx = {{ 
    backgroundColor: 'rgba(255, 235, 205, 0.8)',
    marginTop: '40px', 
    marginBottom:'40px', 
    marginLeft: '200px', 
    marginRight: '200px', 
    padding: '150px',
    borderRadius: '12px',
    position: 'relative',
    }}>
      <h2>Welcome to Flawless! Explore the different skincare products for your skintype: Search on our Home Page!</h2>
      <div className="button-container">
      <Link to="/products"> {ProductPage}
        <button className="custom-button">Visit our Products</button>
      </Link>

      </div>
    </Box>
    </div>  
  );
}
export default FrontPage;