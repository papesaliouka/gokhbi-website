#!/bin/bash

# Script pour générer la brochure GokhBI optimisée en PDF
# Basé sur les retours reçus pour améliorer l'impact et la crédibilité

echo "🚀 Génération de la brochure GokhBI optimisée..."

# Vérifier si le fichier HTML existe
if [ ! -f "create-optimized-brochure.html" ]; then
    echo "❌ Erreur: Le fichier create-optimized-brochure.html n'existe pas"
    exit 1
fi

# Méthode 1: Utiliser wkhtmltopdf (recommandé)
if command -v wkhtmltopdf &> /dev/null; then
    echo "📄 Utilisation de wkhtmltopdf..."
    wkhtmltopdf \
        --page-size A4 \
        --orientation Portrait \
        --margin-top 10mm \
        --margin-bottom 10mm \
        --margin-left 10mm \
        --margin-right 10mm \
        --enable-local-file-access \
        --print-media-type \
        create-optimized-brochure.html \
        "public/GokhBI-Brochure-Optimisee.pdf"
    
    if [ $? -eq 0 ]; then
        echo "✅ Brochure optimisée générée avec succès: public/GokhBI-Brochure-Optimisee.pdf"
        exit 0
    fi
fi

# Méthode 2: Utiliser Chrome/Chromium en headless
if command -v google-chrome &> /dev/null; then
    CHROME_CMD="google-chrome"
elif command -v chromium &> /dev/null; then
    CHROME_CMD="chromium"
elif command -v chromium-browser &> /dev/null; then
    CHROME_CMD="chromium-browser"
else
    CHROME_CMD=""
fi

if [ ! -z "$CHROME_CMD" ]; then
    echo "🌐 Utilisation de Chrome/Chromium..."
    $CHROME_CMD \
        --headless \
        --disable-gpu \
        --print-to-pdf="public/GokhBI-Brochure-Optimisee.pdf" \
        --print-to-pdf-no-header \
        --no-margins \
        "file://$(pwd)/create-optimized-brochure.html"
    
    if [ $? -eq 0 ]; then
        echo "✅ Brochure optimisée générée avec succès: public/GokhBI-Brochure-Optimisee.pdf"
        exit 0
    fi
fi

# Méthode 3: Instructions pour l'utilisateur
echo "⚠️  Aucun outil de conversion PDF automatique trouvé."
echo ""
echo "📋 Options disponibles:"
echo "1. Installer wkhtmltopdf: brew install wkhtmltopdf (sur macOS)"
echo "2. Ouvrir create-optimized-brochure.html dans votre navigateur"
echo "3. Utiliser Cmd+P (macOS) ou Ctrl+P (Windows/Linux)"
echo "4. Choisir 'Enregistrer au format PDF'"
echo "5. Sauvegarder comme: GokhBI-Brochure-Optimisee.pdf dans le dossier public/"
echo ""
echo "🎯 La brochure HTML est prête à être visualisée dans votre navigateur!"

# Ouvrir le fichier HTML dans le navigateur par défaut
if command -v open &> /dev/null; then
    open "create-optimized-brochure.html"
elif command -v xdg-open &> /dev/null; then
    xdg-open "create-optimized-brochure.html"
fi
