<div align="center">
  <h1>🏪 Gazzone - E-commerce com Clerk & Ecwid</h1>
  <p>Loja online moderna e integrada com autenticação Clerk e gerenciamento Ecwid</p>
</div>

---

## 📋 Sobre o Projeto

**Gazzone** é uma plataforma de e-commerce desenvolvida com Next.js, integrada com:
- 🔐 **Clerk** - Autenticação e gerenciamento de usuários
- 🛒 **Ecwid** - Gerenciamento de produtos e pedidos
- ⚡ **Vercel** - Hosting e deployment automático

## ✨ Funcionalidades

### Para Clientes
- ✅ Navegação de produtos
- ✅ Carrinho de compras (persistente)
- ✅ Autenticação com Clerk
- ✅ Busca de produtos
- ✅ Design responsivo

### Para Administradores
- ✅ Painel de controle
- ✅ Visualização de pedidos
- ✅ Gerenciamento de inventário
- ✅ APIs REST documentadas

## 🚀 Quick Start

### Pré-requisitos
- Node.js 20+
- npm ou yarn
- Contas em: Clerk, Ecwid, Vercel (GitHub)

### Instalação Local

```bash
# 1. Clonar projeto
git clone https://github.com/seu-usuario/gazzone.git
cd gazzone

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas chaves

# 4. Rodar em desenvolvimento
npm run dev
```

Acesse: http://localhost:3000

### Build para Produção

```bash
npm run build
npm run preview
```

## 🔑 Variáveis de Ambiente

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Ecwid
ECWID_STORE_ID=123456
ECWID_ACCESS_TOKEN=your_token

# Outras
GEMINI_API_KEY=your_key
APP_URL=https://gazzone.vercel.app
```

## 📱 Endpoints da API

### Públicos
- `GET /api/products/ecwid` - Listar produtos
- `GET /api/products/ecwid?search=termo` - Buscar produtos
- `GET /api/products/ecwid?category=123` - Filtrar por categoria

### Protegidos (requerem autenticação Clerk)
- `GET /api/admin/orders` - Listar pedidos
- `GET /api/admin/orders?limit=50&offset=0` - Paginação

## 🗂️ Estrutura do Projeto

```
gazzone/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Página inicial
│   ├── layout.tsx               # Layout raiz com Clerk
│   ├── sign-in/                 # Página de login
│   ├── sign-up/                 # Página de cadastro
│   ├── admin/dashboard/         # Painel admin protegido
│   └── api/                     # API routes
├── components/                  # Componentes React
├── lib/
│   ├── ecwid.ts                # Service de integração Ecwid
│   ├── products.ts             # Dados de produtos
│   └── utils.ts                # Utilitários
├── context/
│   └── CartContext.tsx         # Context do carrinho
├── middleware.ts               # Proteção de rotas
├── vercel.json                 # Config Vercel
└── .env.local                  # Variáveis de ambiente

```

## 🔐 Autenticação

O projeto usa **Clerk** para autenticação:

1. **Rotas públicas**: `/`, `/products/...`, `/search`
2. **Rotas protegidas**: `/admin/dashboard`
3. **Páginas de auth**: `/sign-in`, `/sign-up`

### Middleware de Proteção

```typescript
// middleware.ts configura quais rotas precisam autenticação
const isProtectedRoute = createRouteMatcher([
  '/admin(.*)',
  '/dashboard(.*)',
  '/checkout(.*)',
]);
```

## 🛍️ Integração Ecwid

O projeto integra com Ecwid via API REST:

```typescript
// lib/ecwid.ts fornece métodos como:
await ecwidService.getProducts(100, 0);
await ecwidService.searchProducts('termo', 100);
await ecwidService.getOrders(50, 0);
await ecwidService.updateProductInventory(productId, quantity);
```

## 📤 Deploy no Vercel

### 1. Push para GitHub
```bash
git remote add origin https://github.com/seu-usuario/gazzone.git
git push -u origin main
```

### 2. Conectar com Vercel
- Acesse https://vercel.com
- Clique em "New Project"
- Selecione seu repositório GitHub
- Vercel fará deploy automático

### 3. Configurar Variáveis
- Settings > Environment Variables
- Adicione todas as variáveis do `.env.example`
- Salve e aguarde novo deploy

## 🛠️ Desenvolvimento

```bash
# Rodar em dev
npm run dev

# Build
npm run build

# Lint
npm run lint

# Preview build
npm run preview

# Limpar dist
npm run clean
```

## 📚 Documentação Completa

- [Guia de Deployment](./DEPLOYMENT_GUIDE.md)
- [Instruções de Push](./PUSH_INSTRUCTIONS.md)
- [Sumário de Alterações](./SETUP_SUMMARY.md)
- [Clerk Docs](https://clerk.com/docs)
- [Ecwid API Docs](https://developer.ecwid.com/)
- [Next.js Docs](https://nextjs.org/docs)

## 🐛 Troubleshooting

### Erro: "Missing Clerk API key"
→ Verifique `.env.local` tem `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

### Produtos não carregam
→ Verifique `ECWID_STORE_ID` e `ECWID_ACCESS_TOKEN` no Vercel

### Erro de autenticação
→ Confirme URLs de redirecionamento no Clerk Dashboard

## 🤝 Contribuições

Para sugestões ou correções, crie uma issue ou pull request.

## 📄 Licença

Este projeto está sob licença MIT.

---

<div align="center">
  <p>
    <strong>Status:</strong> ✅ Pronto para Produção<br>
    <strong>Deploy:</strong> 🚀 Vercel<br>
    <strong>Última Atualização:</strong> 2024
  </p>
</div>
