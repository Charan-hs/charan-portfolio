import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Download,
} from '@mui/icons-material';
import SocialLinks from './SocialLinks';

const MotionBox = motion(Box);
const MotionBoxSocial = motion(Box);
const MotionTypography = motion(Typography);

const Hero: React.FC = () => {
  const theme = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = '<dev/>';

  useEffect(() => {
    let timeoutId;
    
    if (isTyping) {
      // Typing animation
      if (displayText.length < fullText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 200); // Speed of typing
      } else {
        // Pause before erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause duration
      }
    } else {
      // Erasing animation
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 150); // Speed of erasing
      } else {
        // Pause before typing again
        timeoutId = setTimeout(() => {
          setIsTyping(true);
        }, 500); // Pause before restart
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.mode === 'dark'
          ? 'linear-gradient(135deg, #0a1929 0%, #132f4c 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <MotionBox
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <MotionTypography
                variant="h5"
                color="white"
                gutterBottom
                variants={itemVariants}
                sx={{ opacity: 0.9 }}
              >
                Hi, I'm
              </MotionTypography>

              <MotionTypography
                variant="h1"
                color="white"
                gutterBottom
                variants={itemVariants}
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                }}
              >
                Charan H S
              </MotionTypography>

              <MotionTypography
                variant="h4"
                color="white"
                gutterBottom
                variants={itemVariants}
                sx={{
                  opacity: 0.9,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                }}
              >
                Software Engineer
              </MotionTypography>

              <MotionTypography
                variant="body1"
                color="white"
                paragraph
                variants={itemVariants}
                sx={{
                  opacity: 0.8,
                  maxWidth: 600,
                  fontSize: '1.1rem',
                  mt: 2,
                }}
              >
                Passionate about building exceptional digital experiences.
                Specialized in full-stack development, creating innovative
                solutions that make a difference.
              </MotionTypography>

              <MotionBox
                variants={itemVariants}
                sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s',
                  }}
                  onClick={() => {
                    const element = document.querySelector('#projects');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Download />}
                  component="a"
                  href="/Charan_H_S_Resume.pdf"
                  download="Charan_H_S_Resume.pdf"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  Download CV
                </Button>
              </MotionBox>

              <MotionBoxSocial
                variants={itemVariants}
                sx={{ display: 'flex', gap: 2, mt: 2 }}
              >
                <SocialLinks variant="hero" />
              </MotionBoxSocial>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={5}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 350,
                  height: 350,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid rgba(255,255,255,0.3)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Typing animation */}
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography 
                    variant="h1" 
                    color="white" 
                    fontWeight={700}
                    sx={{ 
                      fontSize: '4rem',
                      fontFamily: 'monospace',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {displayText}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        borderRight: '3px solid white',
                        paddingRight: '2px',
                        marginLeft: '2px',
                      }}
                    />
                  </Typography>
                </Box>
                  
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      position: 'absolute',
                      left: `${15 + i * 15}%`,
                      top: `${20 + (i % 3) * 20}%`,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        opacity: 0.5,
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll indicator */}
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          sx={{
            width: 30,
            height: 50,
            border: 2,
            borderColor: 'white',
            borderRadius: 15,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: 'white',
            },
          }}
        />
      </MotionBox>
    </Box>
  );
};

export default Hero;
