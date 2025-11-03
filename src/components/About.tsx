import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Code,
  Speed,
  Devices,
  CloudDone,
} from '@mui/icons-material';

const MotionPaper = motion(Paper);

const About: React.FC = () => {
  const features = [
    {
      icon: <Code sx={{ fontSize: 40 }} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: 'Performance',
      description: 'Optimized applications for fast loading and smooth user experience',
    },
    {
      icon: <Devices sx={{ fontSize: 40 }} />,
      title: 'Responsive',
      description: 'Fully responsive designs that work on all devices and screen sizes',
    },
    {
      icon: <CloudDone sx={{ fontSize: 40 }} />,
      title: 'Modern Stack',
      description: 'Using latest technologies and frameworks for cutting-edge solutions',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.75rem' },
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}
          >
            I'm a passionate software engineer with expertise in building modern web applications.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 8px 30px rgba(0,0,0,0.12)',
                }}
                sx={{
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
                }}
              >
                <Box
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom fontWeight={600}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Paper
            sx={{
              mt: 6,
              p: { xs: 3, md: 5 },
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight={600}>
              My Journey
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              As a software engineer, I thrive on transforming ideas into reality through code. 
              My journey began with a curiosity for how things work, which evolved into a passion 
              for building digital solutions that solve real-world problems. From crafting responsive 
              user interfaces to architecting robust backend systems, I enjoy every aspect of the 
              development lifecycle.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I believe in continuous learning and staying ahead of the curve. Whether it's 
              experimenting with new frameworks, optimizing application performance, or collaborating 
              with cross-functional teams, I'm driven by the challenge of creating software that makes 
              a meaningful difference. Let's build something amazing together!
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
