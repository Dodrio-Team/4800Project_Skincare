import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ProductPage from './ProductsPage';

/*
function FrontPage() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div class = "FrontPage">  
        <h1>Flawless You</h1>
        <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter product name"
            />
            <Link to={`/skincare-products?search=${searchQuery}`}>
                <button>Search</button>
            </Link>
    </div>
    
  )
}

export default FrontPage
*/

const pages = ['Products', 'Pricing'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
      window.location.href = 'https://forms.gle/C7r7nG2r81o6C2gz7'; // Replace with the actual blog link
    } else if (page === 'product') {
      navigate('/products'); // Redirect to the ProductsPage
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

      // redirect to the ProductsPage with the search results
      navigate('/products', {state: {searchResults: response.data} });

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
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Flawless
            </Typography>

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
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'black',
                textDecoration: 'none',
              }}
            >
              Flawless You
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
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
              <button className="search-button" onClick={handleSearch}>
                Search
              </button>
            </Box>

                
            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
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
      <h2>Welcome to Flawless! Explore the different budget-friendly products for your skintype</h2>
      <div className="button-container">
        {/* <Link>
          <button className="custom-button">Visit our Products</button>
        </Link> */}
      <Link to="/products"> {ProductPage}
        <button className="custom-button">Visit our Products</button>
      </Link>

      </div>
    </Box>
    <button className="search-button" onClick={openGoogleForm}>
        FeedBack Form
    </button>
    </div>  
  );
}
export default FrontPage;