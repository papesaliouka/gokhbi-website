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
      {/* Pilot Program Call-to-Action */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
          color: 'white',
          py: 6,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
            🎁 Participez Gratuitement à Notre Phase Pilote
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.9, mb: 4 }}>
            Actuellement en phase pilote avec plusieurs communes intéressées. 
            Rejoignez-nous pour co-construire les premiers cas d'usage adaptés à vos besoins spécifiques.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/contact"
            sx={{ 
              backgroundColor: colors.button.success.main,
              color: colors.button.success.text,
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              boxShadow: `0px 2px 4px ${colors.button.success.shadow}`,
              '&:hover': { 
                backgroundColor: colors.button.success.hover,
                transform: 'translateY(-2px)',
                boxShadow: `0px 6px 20px ${colors.button.success.shadow}`
              }
            }}
          >
            🚀 Rejoindre le Programme Pilote
          </Button>
        </Container>
      </Box>

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
                backgroundColor: colors.button.secondary.main,
                color: colors.button.secondary.text,
                mr: 2,
                mb: { xs: 2, md: 0 },
                border: `2px solid ${colors.button.secondary.border}`,
                fontWeight: 'bold',
                boxShadow: `0px 2px 4px ${colors.button.secondary.shadow}`,
                '&:hover': { 
                  backgroundColor: colors.button.secondary.hover,
                  borderColor: colors.primary.main,
                  transform: 'translateY(-2px)',
                  boxShadow: `0px 4px 12px ${colors.button.secondary.shadow}` 
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
                color: colors.button.outlined.text,
                borderColor: colors.button.outlined.border,
                borderWidth: '2px',
                mr: 2,
                mb: { xs: 2, md: 0 },
                fontWeight: 'bold',
                backgroundColor: colors.button.outlined.main,
                '&:hover': { 
                  backgroundColor: colors.button.outlined.hover,
                  borderColor: colors.button.outlined.border,
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
                backgroundColor: colors.button.success.main,
                color: colors.button.success.text,
                border: '2px solid transparent',
                fontWeight: 'bold',
                boxShadow: `0px 2px 4px ${colors.button.success.shadow}`,
                '&:hover': { 
                  backgroundColor: colors.button.success.hover,
                  transform: 'translateY(-2px)',
                  boxShadow: `0px 4px 12px ${colors.button.success.shadow}`
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

      {/* Visual Workflow Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom fontWeight="bold">
            🔄 Comment ça Marche ? (Workflow Simple)
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6, opacity: 0.9 }}>
            Un processus en 4 étapes pour transformer votre gestion territoriale
          </Typography>

          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            {/* Step 1 */}
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    bgcolor: 'white', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    fontSize: '2rem'
                  }}
                >
                  📱
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  1. Collecte Terrain
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Agent collecte données avec app mobile (mode hors-ligne)
                </Typography>
              </Box>
            </Grid>

            {/* Arrow 1 */}
            <Grid item xs={12} md={1}>
              <Box sx={{ textAlign: 'center', fontSize: '2rem' }}>
                →
              </Box>
            </Grid>

            {/* Step 2 */}
            <Grid item xs={12} md={2}>
              <Box sx={{ textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    bgcolor: 'white', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    fontSize: '2rem'
                  }}
                >
                  ☁️
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  2. Synchro Auto
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Données uploadées au serveur sécurisé
                </Typography>
              </Box>
            </Grid>

            {/* Arrow 2 */}
            <Grid item xs={12} md={1}>
              <Box sx={{ textAlign: 'center', fontSize: '2rem' }}>
                →
              </Box>
            </Grid>

            {/* Step 3 */}
            <Grid item xs={12} md={2}>
              <Box sx={{ textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    bgcolor: 'white', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    fontSize: '2rem'
                  }}
                >
                  📊
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  3. Supervision
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Gestionnaire visualise sur dashboard web
                </Typography>
              </Box>
            </Grid>

            {/* Arrow 3 */}
            <Grid item xs={12} md={1}>
              <Box sx={{ textAlign: 'center', fontSize: '2rem' }}>
                →
              </Box>
            </Grid>

            {/* Step 4 */}
            <Grid item xs={12} md={2}>
              <Box sx={{ textAlign: 'center' }}>
                <Box 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    bgcolor: 'white', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    fontSize: '2rem'
                  }}
                >
                  📄
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  4. Rapports
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Génération automatique de rapports
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ 
            mt: 4, 
            p: 3, 
            bgcolor: 'rgba(255,255,255,0.1)', 
            borderRadius: 2,
            textAlign: 'center'
          }}>
            <Typography variant="h6">
              🚀 <strong>Le tout en temps réel</strong> avec géolocalisation et photos !
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
            📊 Objectifs de Performance Visés
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 4, color: 'text.secondary' }}>
            Basé sur notre analyse des problèmes actuels et les retours terrain
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={3}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Typography variant="h3" color="primary.main" fontWeight="bold">
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
                <Typography variant="h3" color="primary.main" fontWeight="bold">
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
                <Typography variant="h3" color="primary.main" fontWeight="bold">
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
                <Typography variant="h3" color="primary.main" fontWeight="bold">
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

      {/* Founder Message Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              💬 Mot du Fondateur
            </Typography>
          </Box>
          <Paper 
            sx={{ 
              p: 4, 
              bgcolor: 'rgba(255,255,255,0.1)', 
              border: '1px solid rgba(255,255,255,0.2)',
              textAlign: 'center'
            }}
          >
            <Typography variant="h6" paragraph sx={{ fontStyle: 'italic', mb: 3 }}>
              "Je suis passionné par l'impact local de la technologie. GokhBI est né de l'observation 
              de problèmes concrets dans nos communes : des cahiers perdus, des citoyens frustrés, 
              des agents submergés par la paperasse."
            </Typography>
            <Typography variant="body1" paragraph>
              Aujourd'hui, je veux construire cette solution avec vous, pas pour vous. 
              Chaque commune a ses spécificités, chaque ONG ses priorités. 
              C'est pourquoi nous proposons une phase pilote gratuite pour co-construire 
              la solution qui répond vraiment à vos besoins.
            </Typography>
            <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Pape Saliou Ka
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Fondateur & Développeur Principal, GokhBI
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                📍 Dakar, Sénégal
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ py: 8, bgcolor: '#fef3c7' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom color="#d97706">
            💰 Tarification Adaptée au Sénégal
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 4, color: '#92400e' }}>
            Scénarios types pour vous aider à vous projeter
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    🏘️ Communes Rurales
                  </Typography>
                  <Typography variant="h4" color="#d97706" fontWeight="bold" sx={{ my: 2 }}>
                    250K FCFA/mois
                  </Typography>
                  <Box sx={{ bgcolor: '#fef3c7', p: 2, borderRadius: 1, mb: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#92400e' }}>
                      Exemple : Commune 30K habitants, 3 agents
                    </Typography>
                  </Box>
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
                    800K FCFA/mois
                  </Typography>
                  <Box sx={{ bgcolor: '#fef3c7', p: 2, borderRadius: 1, mb: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#92400e' }}>
                      Exemple : Commune 100K habitants, 15 agents
                    </Typography>
                  </Box>
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
                    100K FCFA/mois
                  </Typography>
                  <Box sx={{ bgcolor: '#fef3c7', p: 2, borderRadius: 1, mb: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#92400e' }}>
                      Exemple : ONG projet local, 5 enquêteurs
                    </Typography>
                  </Box>
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
              color="primary"
              size="large"
              onClick={() => window.location.href = 'https://app.gokhbi.com/login'}
              sx={{ 
                mr: 2,
                fontWeight: 'bold'
              }}
            >
              Commencer Maintenant
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/contact"
              sx={{ 
                color: colors.button.outlined.text,
                borderColor: colors.button.outlined.border,
                backgroundColor: colors.button.outlined.main,
                fontWeight: 'bold',
                '&:hover': { 
                  backgroundColor: colors.button.outlined.hover,
                  borderColor: colors.button.outlined.border
                }
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
