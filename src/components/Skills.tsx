import { Box, Container, Typography, Grid, Paper, LinearProgress, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Angular.js', level: 80, category: 'Frontend' },
    { name: 'Material-UI', level: 85, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express', level: 80, category: 'Backend' },
    { name: 'Dotnet Core', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Backend' },
    { name: 'SQL', level: 75, category: 'Backend' },
    { name: 'REST APIs', level: 90, category: 'Backend' },
    
    // Tools & Others
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'Tools' },
    { name: 'Azure', level: 65, category: 'Tools' },
    { name: 'CI/CD', level: 70, category: 'Tools' },
    { name: 'Agile', level: 85, category: 'Tools' },
    { name: 'Testing', level: 80, category: 'Tools' },
  ];

  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
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
            Skills & Expertise
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}
          >
            Technologies and tools I work with to bring ideas to life
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {categories.map((category, catIndex) => (
            <Grid item xs={12} md={4} key={category}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                sx={{
                  p: 4,
                  height: '100%',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Chip
                    label={category}
                    color="primary"
                    sx={{ fontWeight: 600 }}
                  />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Box>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              mb: 1,
                            }}
                          >
                            <Typography variant="body2" fontWeight={500}>
                              {skill.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              {skill.level}%
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 6,
                              borderRadius: 3,
                              backgroundColor: 'action.hover',
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 3,
                                background:
                                  'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                              },
                            }}
                          />
                        </Box>
                      </motion.div>
                    ))}
                </Box>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
