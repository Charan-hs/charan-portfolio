import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';
import greenHub from  '../assets/greenhub.png'
import backend from  '../assets/backend.png'
import pamImage from '../assets/PAM.png'

const MotionCard = motion(Card);

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'GreenHub Interiors',
      description:
        'A full-featured Interiors platform with portfolio catalog, client management, and project showcases.',
      image: greenHub,
      tags: ['React', 'Material-UI'],
      github: 'https://github.com/PerformanceHackers/GreenHub',
      demo: 'https://green-hub-avfyhs4du-charan-hs.vercel.app/',
    },
     {
      title: 'School Management System',
      description:
        'Comprehensive school management system with student enrollment,School enrollment, attendance tracking, and grade management.',
      image: backend,
      tags: ['React', 'Material-UI', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Charan-hs/Backend',
      demo: 'https://backend-charan.herokuapp.com/',
    },
    {
      title: 'Personal Asset Management',
      description:
        'Modern asset management system to track personal belongings, warranties, and maintenance schedules.',
      image: pamImage,
      tags: ['React.js', 'Material-UI', 'Node.js', 'Vercel','MongoDB'],
      github: 'https://github.com/Charan-hs/pam',
      demo: 'https://royal-bridge.vercel.app/home',
    },
    // {
    //   title: 'TinDog',
    //   description:
    //     'A dog adoption website built with HTML, CSS, and Vanilla JS.',
    //   image: tinDog,
    //   tags: ['HTML', 'CSS', 'Vanilla JS'],
    //   github: 'https://github.com/Charan-hs/TinDog',
    //   demo: 'https://charan-hs.github.io/TinDog/',
    // }
  ];

  return (
    <Box
      id="projects"
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
            Featured Projects
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}
          >
            Here are some of my recent projects that showcase my skills and experience
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      gap: 2,
                      pb: 2,
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  >
                    {project.github && (
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<GitHub />}
                        href={project.github}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<Launch />}
                        href={project.demo}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Demo
                      </Button>
                    )}
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
