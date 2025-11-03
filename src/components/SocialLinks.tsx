import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import {
  GitHub,
  LinkedIn,
  Email,
  Twitter,
} from '@mui/icons-material';

interface SocialLinksProps {
  variant?: 'hero' | 'footer';
}

const SocialLinks: React.FC<SocialLinksProps> = ({ variant = 'hero' }) => {
  const socialLinks = [
    { icon: <GitHub />, label: 'GitHub', url: 'https://github.com/Charan-hs' },
    { icon: <LinkedIn />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/charan-gowda' },
    { icon: <Twitter />, label: 'X (Twitter)', url: 'https://x.com/charangowda11' },
    { icon: <Email />, label: 'Email', url: 'mailto:charanengg08@gmail.com' },
  ];

  const isHero = variant === 'hero';

  return (
    <Box sx={{ display: 'flex', gap: 2, mt: isHero ? 4 : 0 }}>
      {socialLinks.map((social) => (
        <Box
          key={social.label}
          component={motion.a}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          sx={{
            textDecoration: 'none',
            width: isHero ? 50 : 40,
            height: isHero ? 50 : 40,
            borderRadius: '50%',
            backgroundColor: isHero ? 'rgba(255,255,255,0.2)' : 'rgba(128,128,128,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isHero ? 'white' : 'text.secondary',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s',
            '&:hover': {
              backgroundColor: isHero ? 'white' : 'primary.main',
              color: isHero ? 'primary.main' : 'white',
            },
          }}
        >
          {social.icon}
        </Box>
      ))}
    </Box>
  );
};

export default SocialLinks;
