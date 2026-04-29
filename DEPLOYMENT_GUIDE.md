# 🚀 Guia de Deployment - Gazzone no Vercel

## ✅ O que foi configurado

### 1. **Autenticação com Clerk**
- ✅ Middleware de autenticação criado
- ✅ Páginas de Sign-in e Sign-up integradas
- ✅ Painel de Admin protegido

### 2. **Integração com Ecwid**
- ✅ Serviço de API completo
- ✅ Endpoints para produtos e pedidos
- ✅ Dashboard de administração

### 3. **Estrutura do Projeto**
- ✅ Next.js com App Router
- ✅ Tailwind CSS para estilos
- ✅ TypeScript para type safety

## 🔑 Como Configurar Variáveis de Ambiente

### Passo 1: Obter Chaves do Clerk
1. Acesse https://dashboard.clerk.com
2. Crie um novo projeto ou use um existente
3. Vá para **Settings > API Keys**
4. Copie:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (começa com `pk_`)
   - `CLERK_SECRET_KEY` (começa com `sk_`)

### Passo 2: Obter Chaves do Ecwid
1. Acesse https://www.ecwid.com/
2. Vá para **Settings > API > Access Tokens**
3. Crie um novo token ou use um existente
4. Copie:
   - `ECWID_STORE_ID` (seu ID da loja)
   - `ECWID_ACCESS_TOKEN` (seu token de acesso)

### Passo 3: Configurar no Vercel
1. Acesse https://vercel.com
2. Selecione o projeto **gazzone**
3. Vá para **Settings > Environment Variables**
4. Adicione as seguintes variáveis:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
ECWID_STORE_ID=123456
ECWID_ACCESS_TOKEN=your_token_here
GEMINI_API_KEY=your_key_here (opcional)
APP_URL=https://gazzone.vercel.app
```

5. Clique em **Save**
6. O deploy será acionado automaticamente

## 📱 URLs Principais

- **Loja**: https://gazzone.vercel.app
- **Login**: https://gazzone.vercel.app/sign-in
- **Cadastro**: https://gazzone.vercel.app/sign-up
- **Admin Dashboard**: https://gazzone.vercel.app/admin/dashboard

## 🛒 Funcionalidades Disponíveis

### Para Clientes
- ✅ Browse de produtos
- ✅ Carrinho de compras (localStorage)
- ✅ Autenticação com Clerk
- ✅ Busca de produtos

### Para Administradores
- ✅ Painel de controle
- ✅ Visualizar pedidos do Ecwid
- ✅ Gerenciar inventário (via API)

## 🔗 API Endpoints

### Públicos
- `GET /api/products/ecwid` - Listar produtos do Ecwid
  - Query params: `limit`, `offset`, `search`, `category`

### Protegidos (requerem autenticação)
- `GET /api/admin/orders` - Listar pedidos
  - Query params: `limit`, `offset`

## 🚀 Como Fazer Deploy Local

```bash
# Instalar dependências
npm install

# Configurar .env.local com suas chaves
cp .env.example .env.local
# Edite .env.local com suas chaves

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## ⚠️ Notas Importantes

1. **Variáveis com `NEXT_PUBLIC_` são públicas** - não incluem informações sensíveis
2. **`.env.local` não é commitado** - configure no Vercel diretamente
3. **Clerk configura URLs de redirecionamento** - certifique-se de que correspondem ao seu domínio
4. **API do Ecwid requer token válido** - sem token, os endpoints de produtos/pedidos não funcionarão

## 🆘 Troubleshooting

### Erro: "Unauthorized" na rota `/admin/dashboard`
- Verifique se está logado via Clerk
- Vá para `/sign-in` primeiro

### Produtos não carregam
- Verifique as variáveis do Ecwid no Vercel
- Teste a API em `/api/products/ecwid`

### Erros de autenticação
- Confirme as chaves do Clerk estão corretas
- Verifique as URLs de redirecionamento no Clerk Dashboard

## 📝 Próximos Passos

1. Configure as variáveis de ambiente no Vercel
2. Teste o login com Clerk
3. Verifique se os produtos estão carregando do Ecwid
4. Personalizar branding e conteúdo conforme necessário

---

**Status do Deploy**: ✅ Pronto para Vercel  
**Última atualização**: 2024  
**Framework**: Next.js 15 + React 19  
