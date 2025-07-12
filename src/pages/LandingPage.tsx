import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  Paper
} from '@mui/material';
import { 
  ArrowForward, 
  LocationOn, 
  People, 
  Analytics, 
  Security,
  Language,
  Phone,
  Email
} from '@mui/icons-material';
import Layout from '../components/Layout';
import { colors } from '../theme/colors';

/**
 * Landing Page Component for GokhBI Public Website
 */
const LandingPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Box
        sx={{
          background: colors.background.gradient,
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            GokhBI
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ opacity: 0.9 }}>
            Plateforme SIG pour les Villes Intelligentes du Sénégal
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.8, maxWidth: '800px', mx: 'auto' }}>
            Modernisez la gestion de votre municipalité avec des outils numériques 
            adaptés au contexte sénégalais. Collecte de données, cartographie interactive, 
            et tableau de bord intelligent.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => window.location.href = 'https://app.gokhbi.com'}
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                mr: 2,
                '&:hover': { 
                  bgcolor: 'grey.100',
                  transform: 'translateY(-2px)',
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.15)' 
                }
              }}
            >
              Accéder à l'Application
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/contact"
              sx={{ 
                color: 'white', 
                borderColor: 'white',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.1)',
                  borderColor: 'white',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Demander une Démo
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            Pourquoi Choisir GokhBI ?
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
            Une solution complète pensée pour les municipalités sénégalaises
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <LocationOn sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    Cartographie Interactive
                  </Typography>
                  <Typography color="text.secondary">
                    Visualisez et gérez votre territoire avec des cartes interactives. 
                    Collecte de données géolocalisées, analyse spatiale, et rapports visuels.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <People sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    Participation Citoyenne
                  </Typography>
                  <Typography color="text.secondary">
                    Engagez vos citoyens avec des formulaires personnalisables. 
                    Collecte de plaintes, sondages, et consultations publiques simplifiées.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Analytics sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    Analyses et Rapports
                  </Typography>
                  <Typography color="text.secondary">
                    Transformez vos données en insights avec des tableaux de bord 
                    intuitifs et des rapports automatisés pour une prise de décision éclairée.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Security sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    Sécurité et Fiabilité
                  </Typography>
                  <Typography color="text.secondary">
                    Vos données sont protégées avec un chiffrement de niveau bancaire. 
                    Sauvegardes automatiques et accès sécurisé pour votre tranquillité d'esprit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            Une Solution Adaptée au Sénégal
          </Typography>
          <Grid container spacing={6} alignItems="center" sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Language sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6">Support Multilingue</Typography>
                  <Typography color="text.secondary">
                    Interface en Français, Wolof, et Anglais
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Phone sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6">Support Local</Typography>
                  <Typography color="text.secondary">
                    Équipe de support basée au Sénégal
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Email sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h6">Formation Incluse</Typography>
                  <Typography color="text.secondary">
                    Formation complète de vos équipes
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper 
                sx={{ 
                  p: 4, 
                  background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                  textAlign: 'center'
                }}
              >
                <Typography variant="h2" color="primary.main" gutterBottom>
                  🇸🇳
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Conçu pour le Sénégal
                </Typography>
                <Typography color="text.secondary">
                  GokhBI comprend les spécificités du contexte sénégalais et 
                  s'adapte aux besoins uniques de chaque municipalité.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom>
            Prêt à Moderniser Votre Municipalité ?
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
            Rejoignez les municipalités qui font confiance à GokhBI
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => window.location.href = 'https://app.gokhbi.com/login'}
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                mr: 2,
                '&:hover': { bgcolor: 'grey.100' }
              }}
            >
              Commencer Maintenant
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/contact"
              sx={{ 
                color: 'white', 
                borderColor: 'white',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Nous Contacter
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default LandingPage;
