#!/bin/bash
# 🚀 Comandos Rápidos para Deploy

# 1. Instalar dependências (se necessário)
npm install

# 2. Configurar Git com seu repositório
# Substitua pela URL do seu repositório GitHub
git remote add origin https://github.com/SEU_USUARIO/gazzone.git
git branch -M main

# 3. Fazer push para GitHub (Vercel fará deploy automaticamente)
git push -u origin main

# 4. Configurar variáveis de ambiente no Vercel:
# - Acesse: https://vercel.com/dashboard
# - Projeto: gazzone
# - Settings > Environment Variables
# - Adicione:
#   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
#   CLERK_SECRET_KEY=sk_test_...
#   ECWID_STORE_ID=seu_store_id
#   ECWID_ACCESS_TOKEN=seu_token

# 5. Testar localmente (opcional)
npm run dev
# Acesse: http://localhost:3000

# 6. Build para produção
npm run build

# 7. Preview da build
npm run preview

# 📊 Links úteis:
# - Vercel Dashboard: https://vercel.com/dashboard
# - Clerk Console: https://dashboard.clerk.com
# - Ecwid Dashboard: https://www.ecwid.com/
# - Seu site: https://gazzone.vercel.app
# - Admin: https://gazzone.vercel.app/admin/dashboard
