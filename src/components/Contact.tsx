import  { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { Send, Email, LocationOn } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import SnackBar from './SnackBar';

const MotionPaper = motion(Paper);

type SnackBarType = {
  open: boolean;
  message: string;
  severity?: "success" | "info" | "warning" | "error";
} 

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState<SnackBarType>({ open: false, message: '', severity: "success" } );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => { 
    setOpenSnackbar({ open: false, message: '', severity: "success" });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? ""
      );
      setOpenSnackbar({ open: true, severity: "success", message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setOpenSnackbar({ open: true, severity: "error", message: 'Failed to send message. Please try again.' });
    }
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 30 }} />,
      title: 'Email',
      value: 'charanengg08@gmail.com',
      link: 'mailto:charanengg08@gmail.com',
    },
    {
      icon: <LocationOn sx={{ fontSize: 30 }} />,
      title: 'Location',
      value: 'Bengaluru, India',
      link: '#',
    },
  ];

  return (
    <Box
      id="contact"
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
            Get In Touch
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 700, mx: 'auto', fontSize: '1.1rem' }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  component="a"
                  href={info.link}
                  sx={{ textDecoration: 'none' }}
                >
                  <MotionPaper
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                    }}
                  >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 1,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom fontWeight={600}>
                    {info.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.value}
                  </Typography>
                </MotionPaper>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <MotionPaper
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              sx={{ p: 4 }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      endIcon={<Send />}
                      fullWidth
                      sx={{
                        py: 1.5,
                        fontSize: '1.1rem',
                        background:
                          'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        '&:hover': {
                          background:
                            'linear-gradient(135deg, #5568d3 0%, #63408b 100%)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>

  { openSnackbar.open && <SnackBar openSnackbar={openSnackbar.open} setOpenSnackbar={handleReset} message={openSnackbar.message} severity={openSnackbar?.severity ?? "success"} />}
    </Box>
  );
};

export default Contact;
