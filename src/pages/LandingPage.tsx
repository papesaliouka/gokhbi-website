import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  Paper,
  Chip,
  Stack
} from '@mui/material';
import { 
  ArrowForward, 
  TrendingUp,
  AccountBalance,
  CloudSync,
  Security
} from '@mui/icons-material';

const LandingPage = () => {
  const colors = {
    primary: { main: '#2563eb' },
    button: {
      success: { main: '#10b981', hover: '#059669', text: 'white', shadow: 'rgba(16, 185, 129, 0.2)' },
      secondary: { main: '#1f2937', hover: '#111827', text: 'white', border: '#374151', shadow: 'rgba(31, 41, 55, 0.1)' },
      outlined: { main: 'rgba(255, 255, 255, 0.1)', hover: 'rgba(255, 255, 255, 0.2)', text: 'white', border: 'white' }
    },
    background: { gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' }
  };

  return (
    <Box>
      {/* New Deal Technologique Alignment Banner */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
          color: 'white',
          py: 2,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Chip 
              label="NOUVEAU" 
              size="small" 
              sx={{ bgcolor: 'white', color: '#059669', fontWeight: 'bold' }}
            />
            <Typography variant="body1">
              GokhBI s'aligne avec le <strong>New Deal Technologique</strong> du Sénégal - $1.7 milliards pour la transformation digitale
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Updated Hero Section with Revenue Focus */}
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
            Plateforme d'Amélioration des Revenus Municipaux
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ opacity: 0.9 }}>
            Augmentez vos recettes fiscales tout en améliorant les services aux citoyens
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.8, maxWidth: '800px', mx: 'auto' }}>
            GokhBI transforme la gestion municipale en améliorant la collecte des taxes, 
            l'inventaire du patrimoine et la prestation de services - avec un ROI démontré 
            dès les premiers mois.
          </Typography>
          
          {/* Key Stats */}
          <Grid container spacing={2} sx={{ mt: 3, mb: 4, maxWidth: '800px', mx: 'auto' }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 2, borderRadius: 2 }}>
                <Typography variant="h4" fontWeight="bold">+40%</Typography>
                <Typography variant="body2">Augmentation recettes fiscales</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 2, borderRadius: 2 }}>
                <Typography variant="h4" fontWeight="bold">-60%</Typography>
                <Typography variant="body2">Temps de traitement</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 2, borderRadius: 2 }}>
                <Typography variant="h4" fontWeight="bold">100%</Typography>
                <Typography variant="body2">Conformité locale</Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              href="/demo"
              sx={{ 
                backgroundColor: colors.button.success.main,
                color: colors.button.success.text,
                mr: 2,
                mb: { xs: 2, md: 0 },
                fontWeight: 'bold',
                boxShadow: `0px 2px 4px ${colors.button.success.shadow}`,
                '&:hover': { 
                  backgroundColor: colors.button.success.hover,
                  transform: 'translateY(-2px)',
                  boxShadow: `0px 4px 12px ${colors.button.success.shadow}` 
                }
              }}
            >
              Demander une Démo ROI
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#pricing"
              sx={{ 
                color: colors.button.outlined.text,
                borderColor: colors.button.outlined.border,
                borderWidth: '2px',
                fontWeight: 'bold',
                backgroundColor: colors.button.outlined.main,
                '&:hover': { 
                  backgroundColor: colors.button.outlined.hover,
                  borderColor: colors.button.outlined.border,
                  transform: 'translateY(-2px)'
                }
              }}
            >
              Voir les Tarifs Adaptés
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Government Priority Alignment */}
      <Box sx={{ py: 6, bgcolor: '#f0f9ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" textAlign="center" gutterBottom color="primary.main">
            Aligné avec les Priorités Gouvernementales
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={3}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <AccountBalance sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6">Cadastre Digital</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Priorité nationale pour l'amélioration des recettes
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <TrendingUp sx={{ fontSize: 48, color: 'success.main', mb: 2 }} />
                  <Typography variant="h6">90% Services Digitaux</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Objectif 2034 du gouvernement
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <Security sx={{ fontSize: 48, color: 'error.main', mb: 2 }} />
                  <Typography variant="h6">50% Contenu Local</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Exigence ICT respectée
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  <CloudSync sx={{ fontSize: 48, color: 'info.main', mb: 2 }} />
                  <Typography variant="h6">Infrastructure Adaptée</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mobile-first & offline
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Revenue Enhancement Focus */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            💰 Comment GokhBI Améliore Vos Revenus
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  📊 Cadastre Digital
                </Typography>
                <Typography paragraph>
                  Inventaire complet du patrimoine municipal avec géolocalisation
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>Identification propriétés non-taxées</li>
                  <li>Mise à jour automatique</li>
                  <li>Calcul taxes optimisé</li>
                  <li>Réduction fraude fiscale</li>
                </Box>
                <Chip label="+35% recettes foncières" color="success" sx={{ mt: 2 }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  📱 Collecte Mobile
                </Typography>
                <Typography paragraph>
                  Agents terrain équipés pour collecte efficace
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>Recensement commercial</li>
                  <li>Vérification terrain</li>
                  <li>Photos géolocalisées</li>
                  <li>Synchro temps réel</li>
                </Box>
                <Chip label="+45% taxes commerciales" color="success" sx={{ mt: 2 }} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" gutterBottom color="primary.main">
                  💳 Paiement Digital
                </Typography>
                <Typography paragraph>
                  Facilitation des paiements citoyens
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <li>Intégration Wave/Orange Money</li>
                  <li>Rappels automatiques</li>
                  <li>Reçus digitaux</li>
                  <li>Suivi en temps réel</li>
                </Box>
                <Chip label="+25% taux recouvrement" color="success" sx={{ mt: 2 }} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Success Model Section */}
      <Box sx={{ py: 8, bgcolor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            📈 Modèle de Succès Prouvé en Afrique
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Pourquoi GokhBI Réussit
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      <Typography variant="h6" color="primary.main" sx={{ mr: 2 }}>✓</Typography>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Expertise Locale
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Développé au Sénégal, pour le Sénégal
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      <Typography variant="h6" color="primary.main" sx={{ mr: 2 }}>✓</Typography>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Support en Wolof & Français
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Formation et assistance dans votre langue
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      <Typography variant="h6" color="primary.main" sx={{ mr: 2 }}>✓</Typography>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Infrastructure Adaptée
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Fonctionne avec 3G/4G et mode offline
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography variant="h6" color="primary.main" sx={{ mr: 2 }}>✓</Typography>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          ROI Rapide
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Rentabilisé en 3-6 mois
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ bgcolor: 'primary.main', color: 'white' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Cas de Succès Régionaux
                  </Typography>
                  <Box sx={{ mt: 3 }}>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        🇬🇭 Ghana - Sambus Geospatial
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        90% du marché GIS municipal, +40% revenus fonciers
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        🇷🇼 Rwanda - Irembo
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        100+ services digitalisés, 7M+ transactions
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        🇿🇦 Afrique du Sud - GeoAfrika
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        IMPIS améliore collecte taxes depuis 2002
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Updated Pricing with Revenue Model */}
      <Box id="pricing" sx={{ py: 8, bgcolor: '#fef3c7' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom color="#d97706">
            💰 Modèle Tarifaire Hybride
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 4, color: '#92400e' }}>
            Abonnement de base + Commission sur amélioration des revenus
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', border: '2px solid #d97706' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    🏘️ Petites Communes
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    &lt; 10,000 habitants
                  </Typography>
                  <Typography variant="h4" color="#d97706" fontWeight="bold" sx={{ my: 2 }}>
                    50K FCFA/mois
                  </Typography>
                  <Typography variant="body2" color="success.main" fontWeight="bold" gutterBottom>
                    + 1% des revenus additionnels générés
                  </Typography>
                  <Box component="ul" sx={{ textAlign: 'left', mt: 3 }}>
                    <li>Modules de base</li>
                    <li>5 utilisateurs</li>
                    <li>Formation incluse</li>
                    <li>Support WhatsApp</li>
                  </Box>
                  <Chip label="ROI: 3-4 mois" color="success" sx={{ mt: 2 }} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', border: '3px solid #059669' }}>
                <CardContent sx={{ p: 4 }}>
                  <Chip label="PLUS POPULAIRE" color="success" sx={{ mb: 2 }} />
                  <Typography variant="h5" gutterBottom>
                    🏙️ Communes Moyennes
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    10,000 - 100,000 habitants
                  </Typography>
                  <Typography variant="h4" color="#059669" fontWeight="bold" sx={{ my: 2 }}>
                    150K FCFA/mois
                  </Typography>
                  <Typography variant="body2" color="success.main" fontWeight="bold" gutterBottom>
                    + 2% des transactions digitales
                  </Typography>
                  <Box component="ul" sx={{ textAlign: 'left', mt: 3 }}>
                    <li>Tous les modules</li>
                    <li>Utilisateurs illimités</li>
                    <li>Intégration paiement</li>
                    <li>Support prioritaire</li>
                    <li>Personnalisation</li>
                  </Box>
                  <Chip label="ROI: 2-3 mois" color="success" sx={{ mt: 2 }} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', textAlign: 'center', border: '2px solid #d97706' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    🌆 Grandes Villes
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    &gt; 100,000 habitants
                  </Typography>
                  <Typography variant="h4" color="#d97706" fontWeight="bold" sx={{ my: 2 }}>
                    Sur Mesure
                  </Typography>
                  <Typography variant="body2" color="success.main" fontWeight="bold" gutterBottom>
                    Modèle négocié selon besoins
                  </Typography>
                  <Box component="ul" sx={{ textAlign: 'left', mt: 3 }}>
                    <li>Solution entreprise</li>
                    <li>API & intégrations</li>
                    <li>Support dédié</li>
                    <li>SLA garanti</li>
                    <li>Développement custom</li>
                  </Box>
                  <Chip label="Contact commercial" color="primary" sx={{ mt: 2 }} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          
          {/* Special Offers */}
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, bgcolor: 'success.main', color: 'white' }}>
                <Typography variant="h6" gutterBottom>
                  🎁 Programme Pilote Gratuit
                </Typography>
                <Typography variant="body2">
                  3 mois gratuits pour les 5 premières municipalités.
                  Formation complète et accompagnement personnalisé inclus.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, bgcolor: 'primary.main', color: 'white' }}>
                <Typography variant="h6" gutterBottom>
                  🤝 Partenariats Bailleurs
                </Typography>
                <Typography variant="body2">
                  Tarifs spéciaux pour projets financés par organisations 
                  de développement (Banque Mondiale, AFD, etc.)
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Partnership Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            🤝 Écosystème de Partenaires
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom color="primary.main">
                  Technologie
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Microsoft Azure<br/>
                  Partenaires GIS<br/>
                  Intégrateurs locaux
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom color="primary.main">
                  Paiement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Wave<br/>
                  Orange Money<br/>
                  Free Money
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom color="primary.main">
                  Gouvernement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ADIE<br/>
                  Ministères<br/>
                  ARCOP
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <Typography variant="h6" gutterBottom color="primary.main">
                  Développement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Banque Mondiale<br/>
                  AFD<br/>
                  USAID
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom>
            Prêt à Augmenter Vos Revenus Municipaux ?
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
            Rejoignez le mouvement de digitalisation municipale au Sénégal
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              href="/demo"
              sx={{ 
                bgcolor: 'white',
                color: 'primary.main',
                mr: 2,
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'grey.100'
                }
              }}
            >
              Calculer Votre ROI
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/contact"
              sx={{ 
                color: 'white',
                borderColor: 'white',
                borderWidth: '2px',
                fontWeight: 'bold',
                '&:hover': { 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderColor: 'white'
                }
              }}
            >
              Parler à un Expert
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;