import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Link
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout Component for GokhBI Public Website
 * Provides navigation and footer for all public pages
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Fonctionnalités', path: '/features' },
    { label: 'À Propos', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  const renderMobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <Box sx={{ width: 250, pt: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2, pb: 1 }}>
          <IconButton onClick={() => setMobileMenuOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navigationItems.map((item) => (
            <ListItem
              key={item.path}
              button
              onClick={() => handleNavigation(item.path)}
              sx={{
                backgroundColor: isActivePage(item.path) ? 'primary.light' : 'transparent',
                color: isActivePage(item.path) ? 'white' : 'inherit'
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
          <Divider sx={{ my: 1 }} />
          <ListItem button onClick={() => window.location.href = 'https://app.gokhbi.com/login'}>
            <ListItemText primary="Connexion" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navigation Header */}
      <AppBar position="static" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar sx={{ px: { xs: 0, md: 0 } }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 0 }}>
              <Button
                onClick={() => navigate('/')}
                sx={{ 
                  color: 'white', 
                  textTransform: 'none',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                <img 
                  src="/icon.svg" 
                  alt="GokhBI" 
                  style={{ width: '64px', height: '64px' }}
                />
                GokhBI
              </Button>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
                {navigationItems.map((item) => (
                  <Button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    sx={{
                      color: 'white',
                      mx: 1,
                      backgroundColor: isActivePage(item.path) ? 'rgba(255,255,255,0.1)' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="outlined"
                  onClick={() => window.location.href = 'https://app.gokhbi.com/login'}
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    ml: 2,
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderColor: 'white'
                    }
                  }}
                >
                  Connexion
                </Button>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <Box sx={{ ml: 'auto' }}>
                <IconButton
                  color="inherit"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu */}
      {isMobile && renderMobileMenu()}

      {/* Main Content */}
      <Box sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {/* Company Info */}
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <img 
                  src="/icon.svg" 
                  alt="GokhBI" 
                  style={{ width: '24px', height: '24px' }}
                />
                <Typography variant="h6">
                  GokhBI
                </Typography>
              </Box>
              <Typography variant="body2" color="grey.400" paragraph>
                Moderniser la gestion urbaine au Sénégal avec des solutions technologiques adaptées.
              </Typography>
            </Box>

            {/* Quick Links */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Liens Rapides
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="/features" color="grey.400" underline="hover">
                  Fonctionnalités
                </Link>
                <Link href="/about" color="grey.400" underline="hover">
                  À Propos
                </Link>
                <Link href="/contact" color="grey.400" underline="hover">
                  Contact
                </Link>
                <Link href="https://app.gokhbi.com/login" color="grey.400" underline="hover">
                  Connexion
                </Link>
              </Box>
            </Box>

            {/* Legal */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Légal
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="/privacy" color="grey.400" underline="hover">
                  Politique de Confidentialité
                </Link>
                <Link href="/terms" color="grey.400" underline="hover">
                  Conditions d'Utilisation
                </Link>
              </Box>
            </Box>

            {/* Contact */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2" color="grey.400">
                Email: contact@gokhbi.com
              </Typography>
              <Typography variant="body2" color="grey.400">
                Dakar, Sénégal
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4, borderColor: 'grey.700' }} />
          
          <Typography variant="body2" color="grey.400" textAlign="center">
            © 2025 GokhBI. Tous droits réservés.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
