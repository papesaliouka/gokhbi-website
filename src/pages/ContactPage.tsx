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
    // Create mailto link with form data
    const subject = encodeURIComponent('Contact depuis le site GokhBI');
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:contact@gokhbi.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            📞 Contactez-Nous Dès Aujourd'hui
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Demandez votre démonstration gratuite !
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
              <Typography variant="h6" gutterBottom color="primary.main">
                🏢 GokhBI Sénégal
              </Typography>
              <Typography paragraph>
                📍 <strong>Adresse :</strong> Rufisque, Sénégal
              </Typography>
              <Typography paragraph>
                📞 <strong>Téléphone :</strong> +221 77 206 10 56
              </Typography>
              <Typography paragraph>
                📱 <strong>WhatsApp :</strong> +221 77 206 10 56
              </Typography>
              <Typography paragraph>
                📧 <strong>Email :</strong> contact@gokhbi.com
              </Typography>
              <Typography paragraph>
                🌐 <strong>Site web :</strong> www.gokhbi.com
              </Typography>
              
              <Box sx={{ mt: 4, p: 3, bgcolor: 'primary.light', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom color="white">
                  👤 Pape Saliou Ka - Directeur Commercial
                </Typography>
                <Typography color="white">
                  🎓 Ingénieur formé au Sénégal
                </Typography>
                <Typography color="white">
                  💼 Expert solutions municipales
                </Typography>
                <Typography color="white">
                  📱 WhatsApp direct : +221 77 206 10 56
                </Typography>
              </Box>
              
              <Box sx={{ mt: 3, p: 2, bgcolor: 'success.light', borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h6" color="white" fontWeight="bold">
                  📞 Appelez maintenant pour votre démonstration gratuite !
                </Typography>
              </Box>
              
              <Box sx={{ mt: 3, p: 2, bgcolor: 'info.light', borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h6" color="white" fontWeight="bold" gutterBottom>
                  📄 Documentation Complète
                </Typography>
                <Typography variant="body2" color="white" sx={{ mb: 2, opacity: 0.9 }}>
                  Téléchargez notre brochure avec tous les détails techniques et tarifs
                </Typography>
                <Button
                  variant="contained"
                  href="/GokhBI-Brochure-Produit-Senegal.pdf"
                  download="GokhBI-Brochure-Produit-Senegal.pdf"
                  sx={{ 
                    bgcolor: 'white', 
                    color: 'info.main',
                    '&:hover': { 
                      bgcolor: 'grey.100'
                    }
                  }}
                >
                  📄 Télécharger la Brochure
                </Button>
              </Box>
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
