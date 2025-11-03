import { Box, Container, Typography, IconButton, Grid, Link } from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  FavoriteOutlined,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <GitHub />, label: 'GitHub', url: 'https://github.com/Charan-hs' },
    { icon: <LinkedIn />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/charan-gowda' },
    { icon: <Twitter />, label: 'Twitter', url: 'https://x.com/charangowda11' },
    { icon: <Email />, label: 'Email', url: 'mailto:charanengg08@gmail.com' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.default',
        borderTop: 1,
        borderColor: 'divider',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight={700}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {'<Portfolio />'}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Building digital experiences that make a difference. Let's create something amazing together.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  color="text.secondary"
                  underline="hover"
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    transition: 'color 0.3s',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Get In Touch
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Have a project in mind? Let's discuss how we can work together.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: charanengg08@gmail.com
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: 1,
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Portfolio. Made with{' '}
            <FavoriteOutlined sx={{ fontSize: 14, color: 'error.main', verticalAlign: 'middle' }} />{' '}
            by Charan H S
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Built with React, TypeScript, and Material-UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
