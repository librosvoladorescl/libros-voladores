#!/bin/bash
cd "$(dirname "$0")" || exit

git add .
git commit -m "Deploy automático: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

echo "✅ Cambios enviados a GitHub. Vercel hará el despliegue automático 🚀"
