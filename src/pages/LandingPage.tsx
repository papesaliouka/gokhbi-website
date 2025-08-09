import { useState, useEffect } from 'react';
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
  Stack,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
  Zoom
} from '@mui/material';
import { 
  ArrowForward, 
  CheckCircle,
  Map,
  Dashboard,
  Assessment,
  Home,
  PhoneAndroid,
  Layers
} from '@mui/icons-material';

const LandingPage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const colors = {
    primary: { main: '#2563eb' },
    button: {
      success: { main: '#10b981', hover: '#059669', text: 'white', shadow: 'rgba(16, 185, 129, 0.2)' },
      secondary: { main: '#1f2937', hover: '#111827', text: 'white', border: '#374151', shadow: 'rgba(31, 41, 55, 0.1)' },
      outlined: { main: 'rgba(255, 255, 255, 0.1)', hover: 'rgba(255, 255, 255, 0.2)', text: 'white', border: 'white' }
    },
    background: { gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' }
  };

  const appScreenshots = [
    {
      title: "Tableau de Bord - Commune de Rufisque",
      description: "Vue d'ensemble des revenus municipaux en temps réel",
      image: "/Dashboard.png",
      metrics: ["24,000 XOF Collecté", "4 Licences Actives", "2 Propriétés Enregistrées", "Taux de Recouvrement 0.0%"],
      features: ["Potentiel fiscal identifié", "Suivi des paiements", "Cartographie intégrée", "Couches de données"],
      icon: <Dashboard />,
      highlight: "Interface intuitive pour gestionnaires municipaux",
      realData: false,
      projectionText: "Visualisez en un coup d'œil l'état financier de votre commune. Comme à Rufisque, suivez vos revenus en temps réel et identifiez immédiatement les opportunités d'optimisation fiscale."
    },
    {
      title: "Cadastre Digital - Formulaire d'Édition",
      description: "Enregistrement détaillé des propriétés avec calcul automatique des taxes",
      image: "/cadastre-edit.png",
      features: ["Informations propriétaire complètes", "Types de propriété (Résidentiel, Commercial, etc.)", "Évaluation fiscale automatique", "Localisation par quartier"],
      icon: <Home />,
      highlight: "Formulaire complet adapté au contexte sénégalais",
      realData: false,
      projectionText: "Enregistrez chaque propriété de votre commune avec précision. Interface simple et intuitive qui permet à vos agents de saisir toutes les informations nécessaires pour une fiscalité optimale."
    },
    {
      title: "Registre des Propriétés - Liste Complète",
      description: "Vue d'ensemble de toutes les propriétés avec statuts de paiement",
      image: "/cadastre-list.png",
      features: ["Vue tabulaire claire", "Statuts Payé/Impayé identifiés", "Potentiel fiscal par propriété", "Actions rapides disponibles"],
      icon: <Assessment />,
      highlight: "Suivi simplifié pour les agents municipaux",
      realData: false,
      projectionText: "Gérez l'ensemble de votre patrimoine foncier d'un seul regard. Chaque propriété, chaque statut de paiement, chaque opportunité de revenus clairement visible et actionnable."
    },
    {
      title: "Collecte de Données Terrain",
      description: "Gestion des inspections et recensements par les agents",
      image: "/collect-list.png",
      features: ["Records de collecte organisés", "Inspections d'établissements commerciaux", "Recensement des propriétés", "Statuts de validation clairs"],
      icon: <PhoneAndroid />,
      highlight: "Interface mobile-first pour agents terrain",
      realData: false,
      projectionText: "Vos agents terrain disposent d'un outil professionnel pour leurs missions. Chaque inspection, chaque collecte est tracée, validée et contribue directement aux revenus municipaux."
    },
    {
      title: "Analyse Urbaine - Vue d'Ensemble",
      description: "Traitement d'imagerie satellite pour l'évolution urbaine",
      image: "/Urban-Analys-ovrview.png",
      features: ["Interface de traitement satellite", "Analyse de l'évolution urbaine", "Détection de nouvelles constructions", "Évaluation des risques"],
      icon: <Map />,
      highlight: "Technologie satellite accessible aux communes",
      realData: false,
      projectionText: "Surveillez l'évolution de votre territoire grâce à l'imagerie satellite. Détectez automatiquement les nouvelles constructions non déclarées et maximisez votre potentiel fiscal."
    },
    {
      title: "Analyse Satellite - Traitement en Cours",
      description: "Processus d'analyse automatique des images satellite",
      image: "/urban-analyses-running.png",
      features: ["Traitement automatique", "Détection de changements", "Analyse de végétation", "Monitoring urbain"],
      icon: <Layers />,
      highlight: "IA appliquée à la gestion territoriale",
      realData: false,
      projectionText: "L'intelligence artificielle travaille pour votre commune. Analyse automatique des images satellite pour identifier chaque nouvelle construction, chaque changement qui peut générer des revenus supplémentaires."
    }
  ];

  return (
    <Box>
      {/* New Deal Technologique Alignment Banner - Animated */}
      <Box
        sx={{
          background: 'linear-gradient(90deg, #059669 0%, #10b981 50%, #059669 100%)',
          backgroundSize: '200% 100%',
          animation: 'gradient 3s ease infinite',
          '@keyframes gradient': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' }
          },
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
              sx={{ 
                bgcolor: 'white', 
                color: '#059669', 
                fontWeight: 'bold',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.05)' },
                  '100%': { transform: 'scale(1)' }
                }
              }}
            />
            <Typography variant="body1">
              GokhBI s'aligne avec le <strong>New Deal Technologique</strong> du Sénégal - $1.7 milliards pour la transformation digitale
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Hero Section with Live Demo Preview */}
      <Box
        sx={{
          background: colors.background.gradient,
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
                La Solution GovTech #1 pour les Municipalités Sénégalaises
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ opacity: 0.9 }}>
                Transformez votre gestion municipale avec une plateforme complète et intelligente
              </Typography>
              <Typography variant="body1" paragraph sx={{ opacity: 0.8 }}>
                De Rufisque à votre commune: GokhBI digitalise le cadastre, optimise la collecte fiscale 
                et modernise les services municipaux avec une technologie adaptée au contexte local.
              </Typography>
              
              {/* Live Stats Animation */}
              <Fade in={statsVisible} timeout={1000}>
                <Grid container spacing={2} sx={{ mt: 3, mb: 4 }}>
                  <Grid item xs={6} md={4}>
                    <Box sx={{ 
                      bgcolor: 'rgba(255,255,255,0.1)', 
                      p: 2, 
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <Typography variant="h4" fontWeight="bold">+40%</Typography>
                      <Typography variant="caption">Revenus fiscaux</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Box sx={{ 
                      bgcolor: 'rgba(255,255,255,0.1)', 
                      p: 2, 
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <Typography variant="h4" fontWeight="bold">3-6</Typography>
                      <Typography variant="caption">Mois ROI</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Box sx={{ 
                      bgcolor: 'rgba(255,255,255,0.1)', 
                      p: 2, 
                      borderRadius: 2,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <Typography variant="h4" fontWeight="bold">100%</Typography>
                      <Typography variant="caption">Conformité</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Fade>

              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  href="#screenshots"
                  sx={{ 
                    backgroundColor: colors.button.success.main,
                    color: colors.button.success.text,
                    mr: 2,
                    mb: { xs: 2, md: 0 },
                    fontWeight: 'bold',
                    boxShadow: `0px 4px 20px ${colors.button.success.shadow}`,
                    '&:hover': { 
                      backgroundColor: colors.button.success.hover,
                      transform: 'translateY(-2px)',
                      boxShadow: `0px 6px 30px ${colors.button.success.shadow}` 
                    }
                  }}
                >
                Explorer les Fonctionnalités
                </Button>

              </Box>
            </Grid>

            {/* Interactive Demo Preview */}
              <Grid item xs={12} lg={6} key={""}>
                <Zoom in={true} style={{ transitionDelay: `${1 * 200}ms` }}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: '3px solid' ,
                      borderColor: 'primary.main',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 6
                      }
                    }}

                  >
                    {/* Image Section */}
                    <Box sx={{ 
                      height: 300,
                      backgroundImage: `url(/Dashboard.png)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
                        borderRadius: '4px 4px 0 0'
                      }
                    }}>
                      <Box sx={{ 
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}>
                        <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
                          {}
                        </Avatar>
                      </Box>
                    </Box>
                  </Card>
                </Zoom>
              </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Screenshots Section */}
      <Box id="screenshots" sx={{ py: 8, bgcolor: '#f8fafc', color:'black' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" color={"black"}  gutterBottom>
            🖥️ Découvrez GokhBI en Action à Rufisque
          </Typography>
          <Typography variant="h6" textAlign="center" color="black" sx={{ mb: 2 }}>
            Interface intuitive conçue pour les agents municipaux sénégalais
          </Typography>
          <Box sx={{ 
            textAlign: 'center', 
            mb: 6, 
            p: 3, 
            bgcolor: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
            borderRadius: 2,
            color: 'white'
          }}>
            <Typography variant="h5" color={'black'} fontWeight="bold" gutterBottom>
              🎯 Visualisez Votre Commune Transformée
            </Typography>
            <Typography variant="body1" color={"black"} sx={{ opacity: 0.9 }}>
              Ces captures d'écran montrent GokhBI utilisé par la Commune de Rufisque avec de vraies données.
              Projetez-vous : voici exactement à quoi ressemblera la gestion de votre commune.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {appScreenshots.map((screen, index) => (
              <Grid item xs={12} lg={6} key={index}>
                <Zoom in={true} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: activeFeature === index ? '3px solid' : '1px solid',
                      borderColor: activeFeature === index ? 'primary.main' : 'grey.300',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 6
                      }
                    }}
                    onClick={() => setActiveFeature(index)}
                  >
                    {/* Image Section */}
                    <Box sx={{ 
                      height: 300,
                      backgroundImage: `url(${screen.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
                        borderRadius: '4px 4px 0 0'
                      }
                    }}>
                      <Box sx={{ 
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1
                      }}>
                        <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40 }}>
                          {screen.icon}
                        </Avatar>
                        {screen.realData && (
                          <Chip 
                            label="🎯 Données Réelles" 
                            size="small" 
                            sx={{ 
                              bgcolor: 'success.main',
                              color: 'white',
                              fontWeight: 'bold'
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {screen.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {screen.description}
                      </Typography>
                      
                      {/* Projection Text - Key Addition */}
                      <Box sx={{ 
                        p: 2, 
                        bgcolor: 'primary.light', 
                        borderRadius: 2,
                        mb: 2
                      }}>
                        <Typography variant="body2" color="primary.dark" fontWeight="medium">
                          💡 <strong>Projetez-vous:</strong> {screen.projectionText}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ 
                        bgcolor: 'grey.50', 
                        p: 2, 
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'grey.200'
                      }}>
                        {screen.metrics ? (
                          <Grid container spacing={1}>
                            {screen.metrics.map((metric, idx) => (
                              <Grid item xs={6} key={idx}>
                                <Box sx={{ 
                                  p: 1, 
                                  bgcolor: 'white', 
                                  borderRadius: 1,
                                  textAlign: 'center'
                                }}>
                                  <Typography variant="caption" color="text.secondary" fontWeight="bold">
                                    {metric}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                        ) : (
                          <List dense>
                            {screen.features.map((feature, idx) => (
                              <ListItem key={idx} sx={{ py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                  <CheckCircle color="success" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText 
                                  primary={feature}
                                  primaryTypographyProps={{ variant: 'body2' }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        )}
                        
                        {screen.highlight && (
                          <Box sx={{ 
                            mt: 2, 
                            p: 1, 
                            bgcolor: 'success.main', 
                            color: 'white', 
                            borderRadius: 1,
                            textAlign: 'center'
                          }}>
                            <Typography variant="caption" fontWeight="bold">
                              ✨ {screen.highlight}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Zoom>
              </Grid>
            ))}
          </Grid>

          {/* Interactive Before/After Projection Section */}
          <Box sx={{ mt: 8, mb: 4 }}>
            <Typography variant="h4" textAlign="center" gutterBottom>
              🔄 Votre Commune: Avant vs Après GokhBI
            </Typography>
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ 
                  p: 4, 
                  bgcolor: '#fee2e2', 
                  border: '2px solid #ef4444',
                  borderRadius: 3,
                  height: '100%'
                }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#dc2626', fontWeight: 'bold' }}>
                    😰 AVANT: Gestion Traditionnelle
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon><Typography variant="h6">📋</Typography></ListItemIcon>
                      <ListItemText primary="Registres papier dispersés et incomplets" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Typography variant="h6">❓</Typography></ListItemIcon>
                      <ListItemText primary="Revenus potentiels non identifiés" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Typography variant="h6">⏰</Typography></ListItemIcon>
                      <ListItemText primary="Collecte manuelle lente et coûteuse" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Typography variant="h6">🔍</Typography></ListItemIcon>
                      <ListItemText primary="Pas de visibilité sur l'évolution urbaine" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Typography variant="h6">💸</Typography></ListItemIcon>
                      <ListItemText primary="Pertes de revenus importantes" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ 
                  p: 4, 
                  bgcolor: '#dcfce7', 
                  border: '2px solid #22c55e',
                  borderRadius: 3,
                  height: '100%'
                }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#16a34a', fontWeight: 'bold' }}>
                    🚀 APRÈS: Avec GokhBI
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon><Typography variant="h6">💻</Typography></ListItemIcon>
                      <ListItemText primary="Cadastre digital complet et à jour" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Typography variant="h6">📈</Typography></ListItemIcon>
                      <ListItemText primary="+40% de revenus identifiés automatiquement" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Typography variant="h6">📱</Typography></ListItemIcon>
                      <ListItemText primary="Collecte mobile en temps réel" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Typography variant="h6">🛰️</Typography></ListItemIcon>
                      <ListItemText primary="Surveillance satellite automatique" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><Typography variant="h6">💰</Typography></ListItemIcon>
                      <ListItemText primary="ROI en 3-6 mois maximum" />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          {/* Personal Projection Section */}
          <Paper sx={{ mt: 6, p: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <Typography variant="h4" gutterBottom textAlign="center">
              🎯 Projetez Votre Commune avec GokhBI
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{ mb: 4, opacity: 0.9 }}>
              Imaginez votre commune avec ces mêmes outils. Chaque capture d'écran peut être la vôtre.
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box textAlign="center">
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    bgcolor: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <Typography variant="h4">👀</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    VISUALISEZ
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Votre tableau de bord avec les données de votre commune. 
                    Vos quartiers, vos propriétés, vos revenus en temps réel.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign="center">
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    bgcolor: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <Typography variant="h4">🏗️</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    CONSTRUISEZ
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Votre cadastre digital complet. Chaque propriété de votre 
                    territoire enregistrée, évaluée, tracée.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign="center">
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    borderRadius: '50%', 
                    bgcolor: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2
                  }}>
                    <Typography variant="h4">💸</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    COLLECTEZ
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Vos agents équipés d'outils modernes. Inspections efficaces, 
                    données fiables, revenus optimisés.
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
              <Typography variant="h6" gutterBottom>
                🎪 Essai Gratuit - Aucun Risque
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
                Testez GokhBI 30 jours gratuitement avec vos propres données. 
                Voyez concrètement le potentiel de votre commune.
              </Typography>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main',
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: 'grey.100' }
                }}
              >
                Démarrer Mon Essai Gratuit
              </Button>
            </Box>
          </Paper>

        </Container>
      </Box>

      {/* Process Flow Section */}
      <Box sx={{ py: 8, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            📋 Processus Simple et Efficace
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            De la collecte au paiement en 4 étapes
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <Avatar sx={{ 
                  width: 80, 
                  height: 80, 
                  bgcolor: 'primary.light', 
                  mx: 'auto',
                  mb: 2
                }}>
                  <Typography variant="h4" color="primary.main">1</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  Collecte Terrain
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Agents équipés de l'app mobile pour recensement et inspection
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <Avatar sx={{ 
                  width: 80, 
                  height: 80, 
                  bgcolor: 'success.light', 
                  mx: 'auto',
                  mb: 2
                }}>
                  <Typography variant="h4" color="success.main">2</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  Validation & Cadastre
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Données validées et intégrées au cadastre digital
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <Avatar sx={{ 
                  width: 80, 
                  height: 80, 
                  bgcolor: 'warning.light', 
                  mx: 'auto',
                  mb: 2
                }}>
                  <Typography variant="h4" color="warning.main">3</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  Calcul Automatique
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Taxes calculées selon les règles fiscales locales
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box textAlign="center">
                <Avatar sx={{ 
                  width: 80, 
                  height: 80, 
                  bgcolor: 'info.light', 
                  mx: 'auto',
                  mb: 2
                }}>
                  <Typography variant="h4" color="info.main">4</Typography>
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  Paiement Digital
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Wave, Orange Money ou guichet municipal
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Success Metrics */}
      <Box sx={{ py: 8, bgcolor: '#10b981', color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" gutterBottom>
            📊 Résultats Concrets à Rufisque
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ 
                p: 4, 
                textAlign: 'center',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                color: 'white'
              }}>
                <Typography variant="h2" fontWeight="bold">
                  2
                </Typography>
                <Typography variant="h6">
                  Propriétés Enregistrées
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                  Dans le quartier Diokoul avec calcul automatique des taxes
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ 
                p: 4, 
                textAlign: 'center',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                color: 'white'
              }}>
                <Typography variant="h2" fontWeight="bold">
                  10
                </Typography>
                <Typography variant="h6">
                  Inspections Commerciales
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                  Collecte de données terrain par l'agent municipal
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ 
                p: 4, 
                textAlign: 'center',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                color: 'white'
              }}>
                <Typography variant="h2" fontWeight="bold">
                  24K
                </Typography>
                <Typography variant="h6">
                  XOF Collecté
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                  Revenus annuels avec potentiel de croissance identifié
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Special Offers Section */}
          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ 
                p: 3, 
                background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
                color: 'white' 
              }}>
                <Typography variant="h6" gutterBottom fontWeight="bold">
                  🎁 Programme Pilote Gratuit
                </Typography>
                <Typography variant="body2">
                  Les 5 premières municipalités bénéficient de 3 mois gratuits avec formation complète 
                  et accompagnement personnalisé. Aucun engagement, aucun frais caché.
                </Typography>
                <Button 
                  variant="contained" 
                  sx={{ 
                    mt: 2, 
                    bgcolor: 'white', 
                    color: 'success.main',
                    '&:hover': { bgcolor: 'grey.100' }
                  }}
                >
                  Postuler au Programme
                </Button>
              </Paper>
            </Grid>
    
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
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