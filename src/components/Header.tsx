import  { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Switch,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useThemeContext } from '../context/ThemeContext';

const MotionAppBar = motion(AppBar);

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        backgroundColor: 'background.default',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton onClick={() => handleNavClick(item.href)}>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <MotionAppBar
        position="fixed"
        elevation={0}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          backgroundColor: mode === 'dark' ? 'rgba(19, 47, 76, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: 1,
          borderColor: 'divider',
          color: mode === 'dark' ? 'text.primary' : 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Typography
                variant="h6"
                component="div"
                fontWeight={700}
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  cursor: 'pointer',
                }}
                onClick={() => handleNavClick('#home')}
              >
                {'<Portfolio />'}
              </Typography>
            </motion.div>

            {!isMobile ? (
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Button
                      onClick={() => handleNavClick(item.href)}
                      sx={{
                        fontWeight: 500,
                        color: 'text.primary',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
                <Box
                  sx={{
                    ml: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    backgroundColor: 'action.hover',
                  }}
                >
                  <Brightness7 sx={{ fontSize: 20, color: mode === 'light' ? 'primary.main' : 'text.secondary' }} />
                  <Switch
                    checked={mode === 'dark'}
                    onChange={toggleTheme}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: 'primary.main',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: 'primary.main',
                      },
                    }}
                  />
                  <Brightness4 sx={{ fontSize: 20, color: mode === 'dark' ? 'primary.main' : 'text.secondary' }} />
                </Box>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 1,
                    py: 0.5,
                    borderRadius: 2,
                    backgroundColor: 'action.hover',
                  }}
                >
                  <Brightness7 sx={{ fontSize: 18, color: mode === 'light' ? 'primary.main' : 'text.secondary' }} />
                  <Switch
                    checked={mode === 'dark'}
                    onChange={toggleTheme}
                    size="small"
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': {
                        color: 'primary.main',
                      },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: 'primary.main',
                      },
                    }}
                  />
                  <Brightness4 sx={{ fontSize: 18, color: mode === 'dark' ? 'primary.main' : 'text.secondary' }} />
                </Box>
                <IconButton
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ color: 'text.primary' }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </MotionAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
