import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  TextField,
  Paper,
  Alert,
  Snackbar
} from '@mui/material';
import { Send } from '@mui/icons-material';
import Layout from '../components/Layout';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Contactez-Nous
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Nous sommes là pour vous accompagner
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 6 }}>
            <Typography variant="h4" gutterBottom>
              Envoyez-nous un message
            </Typography>
            <Typography color="text.secondary" paragraph>
              Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                required
                fullWidth
                name="name"
                label="Nom complet"
                value={formData.name}
                onChange={handleInputChange}
                sx={{ mb: 3 }}
              />
              
              <TextField
                required
                fullWidth
                name="email"
                label="Adresse email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={{ mb: 3 }}
              />
              
              <TextField
                required
                fullWidth
                multiline
                rows={5}
                name="message"
                label="Votre message"
                value={formData.message}
                onChange={handleInputChange}
                sx={{ mb: 3 }}
              />
              
              <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<Send />}
                sx={{ minWidth: 200 }}
              >
                Envoyer le message
              </Button>
            </Box>

            <Box sx={{ mt: 6, pt: 4, borderTop: 1, borderColor: 'divider' }}>
              <Typography variant="h6" gutterBottom>
                Autres moyens de nous contacter
              </Typography>
              <Typography>
                Email: contact@gokhbi.com
              </Typography>
              <Typography>
                Adresse: Dakar, Sénégal
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Votre message a été envoyé avec succès ! Nous vous recontacterons bientôt.
        </Alert>
      </Snackbar>
    </Layout>
  );
};

export default ContactPage;
