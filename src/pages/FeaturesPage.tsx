import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Layout from '../components/Layout';

const FeaturesPage: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Fonctionnalités GokhBI
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Une plateforme complète pour la gestion urbaine moderne
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Paper sx={{ p: 6, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              � Application Mobile Hors Ligne
            </Typography>
            <Typography paragraph>
              Collectez des données sur le terrain même sans connexion internet. 
              Notre application mobile permet aux agents municipaux de continuer leur travail 
              de collecte de données dans les zones avec une connectivité limitée. 
              Synchronisation automatique dès que la connexion est rétablie.
            </Typography>
            <Typography paragraph>
              <strong>Fonctionnalités clés :</strong>
            </Typography>
            <Typography component="ul" sx={{ pl: 2 }}>
              <li>Collecte de données hors ligne complète</li>
              <li>Géolocalisation GPS intégrée</li>
              <li>Prise de photos et capture de signatures</li>
              <li>Synchronisation automatique bidirectionnelle</li>
              <li>Interface optimisée pour le terrain</li>
            </Typography>
          </Paper>

          <Paper sx={{ p: 6, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              �🗺️ Cartographie Interactive
            </Typography>
            <Typography paragraph>
              Système SIG complet pour visualiser et gérer l'ensemble de votre territoire.
              Cartes haute résolution, couches de données superposables, outils de mesure et d'analyse.
            </Typography>
          </Paper>

          <Paper sx={{ p: 6, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              📋 Formulaires Dynamiques
            </Typography>
            <Typography paragraph>
              Créez et gérez des formulaires personnalisés pour tous vos besoins de collecte de données.
              Constructeur drag-and-drop, types de champs variés, logique conditionnelle.
            </Typography>
          </Paper>

          <Paper sx={{ p: 6, mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              📊 Analyses et Rapports
            </Typography>
            <Typography paragraph>
              Outils d'analyse avancés pour transformer vos données en insights.
              Graphiques interactifs, rapports automatisés, analyses prédictives.
            </Typography>
          </Paper>

          <Paper sx={{ p: 6 }}>
            <Typography variant="h4" gutterBottom>
              🔒 Sécurité Avancée
            </Typography>
            <Typography paragraph>
              Protection de niveau entreprise pour vos données sensibles.
              Chiffrement bout-en-bout, sauvegarde automatique, conformité GDPR.
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Layout>
  );
};

export default FeaturesPage;
