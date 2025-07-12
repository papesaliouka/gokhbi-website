import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Layout from '../components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            À Propos de GokhBI
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Notre mission : Moderniser la gestion urbaine au Sénégal
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Paper sx={{ p: 6 }}>
            <Typography variant="h4" gutterBottom>
              Notre Mission
            </Typography>
            <Typography paragraph>
              GokhBI a été créé avec une vision claire : fournir aux municipalités 
              sénégalaises les outils technologiques modernes nécessaires pour 
              une gestion urbaine efficace et une participation citoyenne active.
            </Typography>
            <Typography paragraph>
              Nous croyons que la technologie peut transformer la façon dont 
              les villes sénégalaises interagissent avec leurs citoyens, 
              gèrent leurs ressources, et planifient leur développement futur.
            </Typography>
            
            <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
              Notre Vision
            </Typography>
            <Typography paragraph>
              Être la plateforme de référence pour la digitalisation des services 
              municipaux au Sénégal, en alliant innovation technologique et 
              compréhension profonde du contexte local.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Layout>
  );
};

export default AboutPage;
