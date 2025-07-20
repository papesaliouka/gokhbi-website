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
  Analytics, 
  Language,
  Phone,
  Email,
  PhoneAndroid
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
            🎯 GokhBI
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ opacity: 0.9 }}>
            Plateforme de Gestion Territoriale Intelligente pour le Sénégal
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.8, maxWidth: '800px', mx: 'auto' }}>
            Transformez vos cahiers en système numérique moderne. Une plateforme tout-en-un 
            qui permet aux communes, ONGs et organisations sénégalaises de moderniser 
            la gestion de leurs services territoriaux.
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
                mb: { xs: 2, md: 0 },
                border: '2px solid white',
                fontWeight: 'bold',
                '&:hover': { 
                  bgcolor: 'primary.main',
                  color: 'white',
                  border: '2px solid white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.25)' 
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
                borderWidth: '2px',
                mr: 2,
                mb: { xs: 2, md: 0 },
                fontWeight: 'bold',
                '&:hover': { 
                  bgcolor: 'white',
                  color: 'primary.main',
                  borderColor: 'white',
                  borderWidth: '2px',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Demander une Démo
            </Button>
            <Button
              variant="contained"
              size="large"
              href="/GokhBI-Brochure-Produit-Senegal.pdf"
              download="GokhBI-Brochure-Produit-Senegal.pdf"
              sx={{ 
                bgcolor: 'success.main', 
                color: 'white',
                border: '2px solid transparent',
                fontWeight: 'bold',
                '&:hover': { 
                  bgcolor: 'success.dark',
                  transform: 'translateY(-2px)',
                  boxShadow: '0px 4px 12px rgba(0,0,0,0.25)'
                }
              }}
            >
              📄 Télécharger la Brochure
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Problems Section */}
      <Box sx={{ py: 8, bgcolor: '#fff5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom color="error.main">
            ❌ Les Problèmes que Vous Rencontrez Aujourd'hui
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" color="error.main" sx={{ mr: 1 }}>✋</Typography>
                <Typography><strong>Plaintes citoyens perdues</strong> dans des cahiers</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" color="error.main" sx={{ mr: 1 }}>⏱️</Typography>
                <Typography><strong>Semaines d'attente</strong> pour traiter une demande</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" color="error.main" sx={{ mr: 1 }}>📋</Typography>
                <Typography><strong>Collecte manuelle</strong> sans validation terrain</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" color="error.main" sx={{ mr: 1 }}>🌐</Typography>
                <Typography><strong>Dépendance Internet</strong> pour tout saisir</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" color="error.main" sx={{ mr: 1 }}>🗺️</Typography>
                <Typography><strong>Aucune géolocalisation</strong> des données</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" color="error.main" sx={{ mr: 1 }}>💸</Typography>
                <Typography><strong>Pas de données fiables</strong> pour bailleurs</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" color="error.main" sx={{ mr: 1 }}>📱</Typography>
                <Typography><strong>Pas d'outils terrain</strong> pour agents</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Solutions Section */}
      <Box sx={{ py: 8, bgcolor: '#f0fdf4' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom color="success.main">
            ✅ Votre Nouvelle Réalité avec GokhBI
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'rgba(37, 99, 235, 0.05)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom color="primary.main">
                    📱 Agents Terrain (App Mobile)
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>Collecte données hors-ligne</li>
                    <li>Enquêtes et formulaires</li>
                    <li>Photos géolocalisées</li>
                    <li>Synchro automatique</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', bgcolor: 'rgba(5, 150, 105, 0.05)' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom color="success.main">
                    💻 Gestionnaires (Interface Web)
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>Supervision temps réel</li>
                    <li>Tableaux de bord</li>
                    <li>Rapports automatiques</li>
                    <li>Analytics avancées</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ 
            mt: 4, 
            p: 3, 
            bgcolor: 'rgba(37, 99, 235, 0.1)', 
            borderRadius: 2,
            textAlign: 'center'
          }}>
            <Typography variant="h6" color="primary.main">
              🔄 <strong>Workflow Complet :</strong> Collecte mobile → Synchronisation → Supervision web → Rapports
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            🎪 Modules Disponibles
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
            Une solution complète pensée pour les municipalités sénégalaises
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>📍</Typography>
                  <Typography variant="h5" gutterBottom>
                    Gestion Plaintes
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>Réception auto mobile</li>
                    <li>Suivi temps réel</li>
                    <li>Géolocalisation</li>
                    <li>Photos/documents</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>📊</Typography>
                  <Typography variant="h5" gutterBottom>
                    Collecte Données
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>Enquêtes mobiles</li>
                    <li>Formulaires offline</li>
                    <li>Synchronisation auto</li>
                    <li>Validation terrain</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>🏗️</Typography>
                  <Typography variant="h5" gutterBottom>
                    Infrastructures
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>Cartographie web</li>
                    <li>Inventaire mobile</li>
                    <li>Maintenance</li>
                    <li>État patrimoine</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>📋</Typography>
                  <Typography variant="h5" gutterBottom>
                    Autorisations
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>Permis construire</li>
                    <li>Licences</li>
                    <li>Suivi dossiers</li>
                    <li>Workflow web</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <PhoneAndroid sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    App Mobile
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>Collecte hors-ligne</li>
                    <li>Géolocalisation GPS</li>
                    <li>Photos/Signatures</li>
                    <li>Synchro 3G/4G/WiFi</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Analytics sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    Interface Web
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>Tableaux de bord</li>
                    <li>Rapports avancés</li>
                    <li>Gestion utilisateurs</li>
                    <li>Analytics temps réel</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Results Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            📊 Résultats Concrets
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={3}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h3" color="success.main" fontWeight="bold">
                  -60%
                </Typography>
                <Typography variant="h6">Temps traitement</Typography>
                <Typography variant="body2" color="text.secondary">
                  (3 semaines → 3 jours)
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h3" color="success.main" fontWeight="bold">
                  +200%
                </Typography>
                <Typography variant="h6">Satisfaction citoyens</Typography>
                <Typography variant="body2" color="text.secondary">
                  Suivi transparent
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h3" color="success.main" fontWeight="bold">
                  -50%
                </Typography>
                <Typography variant="h6">Papier/Impression</Typography>
                <Typography variant="body2" color="text.secondary">
                  Dématérialisation
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h3" color="success.main" fontWeight="bold">
                  +300%
                </Typography>
                <Typography variant="h6">Données fiables</Typography>
                <Typography variant="body2" color="text.secondary">
                  Pour financements
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ py: 8, bgcolor: '#fef3c7' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom color="#d97706">
            💰 Tarification Adaptée au Sénégal
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    🏘️ Communes Rurales
                  </Typography>
                  <Typography variant="h4" color="#d97706" fontWeight="bold" sx={{ my: 2 }}>
                    150K - 500K FCFA/mois
                  </Typography>
                  <Box component="ul" sx={{ textAlign: 'left' }}>
                    <li>App mobile + Web</li>
                    <li>Jusqu'à 10 agents terrain</li>
                    <li>Modules de base</li>
                    <li>Support WhatsApp</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    🏙️ Communes Urbaines
                  </Typography>
                  <Typography variant="h4" color="#d97706" fontWeight="bold" sx={{ my: 2 }}>
                    500K - 2M FCFA/mois
                  </Typography>
                  <Box component="ul" sx={{ textAlign: 'left' }}>
                    <li>App + Web illimités</li>
                    <li>Agents terrain illimités</li>
                    <li>Tous modules + formation</li>
                    <li>Support prioritaire</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    🌍 ONGs/Projets
                  </Typography>
                  <Typography variant="h4" color="#d97706" fontWeight="bold" sx={{ my: 2 }}>
                    50K - 200K FCFA/mois
                  </Typography>
                  <Box component="ul" sx={{ textAlign: 'left' }}>
                    <li>App mobile incluse</li>
                    <li>Jusqu'à 5 enquêteurs</li>
                    <li>Collecte données focus</li>
                    <li>Support communautaire</li>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ 
            mt: 4, 
            p: 3, 
            bgcolor: 'white', 
            borderRadius: 2,
            textAlign: 'center',
            border: '2px solid #d97706'
          }}>
            <Typography variant="h6" color="#d97706">
              🎁 <strong>OFFRE SPÉCIALE LANCEMENT :</strong> App mobile + Interface web - 6 mois gratuits pour les 3 premières communes pilotes
            </Typography>
          </Box>
          
          <Box sx={{ 
            mt: 3, 
            p: 3, 
            bgcolor: 'primary.main', 
            borderRadius: 2,
            textAlign: 'center'
          }}>
            <Typography variant="h6" color="white" gutterBottom>
              📄 Documentation Complète Disponible
            </Typography>
            <Typography variant="body2" color="white" sx={{ mb: 2, opacity: 0.9 }}>
              Téléchargez notre brochure détaillée avec tous les modules, tarifs et cas d'usage
            </Typography>
            <Button
              variant="contained"
              href="/GokhBI-Brochure-Produit-Senegal.pdf"
              download="GokhBI-Brochure-Produit-Senegal.pdf"
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                '&:hover': { 
                  bgcolor: 'grey.100'
                }
              }}
            >
              📄 Télécharger la Brochure PDF
            </Button>
          </Box>
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
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <img 
                    src="/icon.svg" 
                    alt="GokhBI" 
                    style={{ width: '64px', height: '64px' }}
                  />
                </Box>
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
