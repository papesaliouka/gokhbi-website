import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Layout from '../components/Layout';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 6 }}>
            <Typography variant="h3" gutterBottom>
              Politique de Confidentialité
            </Typography>
            <Typography color="text.secondary" paragraph>
              Dernière mise à jour : Juillet 2025
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Collecte des Données
            </Typography>
            <Typography paragraph>
              GokhBI collecte uniquement les données nécessaires au fonctionnement 
              de ses services. Nous nous engageons à protéger votre vie privée.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Utilisation des Données
            </Typography>
            <Typography paragraph>
              Vos données sont utilisées exclusivement pour fournir nos services 
              et améliorer votre expérience utilisateur.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Protection des Données
            </Typography>
            <Typography paragraph>
              Nous utilisons des technologies de chiffrement avancées pour 
              protéger vos données personnelles et professionnelles.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Contact
            </Typography>
            <Typography>
              Pour toute question concernant cette politique de confidentialité, 
              contactez-nous à : papesaliouka@gmail.com
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Layout>
  );
};

export default PrivacyPolicy;
