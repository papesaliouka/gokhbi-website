import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Layout from '../components/Layout';

const TermsOfService: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Paper sx={{ p: 6 }}>
            <Typography variant="h3" gutterBottom>
              Conditions d'Utilisation
            </Typography>
            <Typography color="text.secondary" paragraph>
              Dernière mise à jour : Juillet 2025
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Acceptation des Conditions
            </Typography>
            <Typography paragraph>
              En utilisant GokhBI, vous acceptez ces conditions d'utilisation. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Description du Service
            </Typography>
            <Typography paragraph>
              GokhBI est une plateforme SIG destinée aux municipalités sénégalaises 
              pour la gestion urbaine et la participation citoyenne.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Responsabilités de l'Utilisateur
            </Typography>
            <Typography paragraph>
              Vous vous engagez à utiliser GokhBI de manière appropriée et 
              conforme aux lois en vigueur au Sénégal.
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
              Contact
            </Typography>
            <Typography>
              Pour toute question concernant ces conditions d'utilisation, 
              contactez-nous à : contact@gokhbi.com
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Layout>
  );
};

export default TermsOfService;
