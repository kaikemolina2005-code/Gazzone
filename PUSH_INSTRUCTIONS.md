# 📤 Como Fazer Push para GitHub e Vercel

## Opção 1: Se você JÁ TEM um repositório no GitHub

Se o projeto já está configurado no GitHub, execute:

```bash
cd "c:\Users\Usuario\Desktop\gazzone site"
git remote add origin https://github.com/seu-usuario/gazzone.git
git branch -M main
git push -u origin main
```

## Opção 2: Se você QUER CRIAR um novo repositório

1. Acesse https://github.com/new
2. Crie um novo repositório chamado `gazzone`
3. Execute os comandos:

```bash
cd "c:\Users\Usuario\Desktop\gazzone site"
git remote add origin https://github.com/seu-usuario/gazzone.git
git branch -M main
git push -u origin main
```

## Opção 3: Conectar com Vercel (Recomendado)

Se o projeto já está no Vercel:

1. Acesse https://vercel.com/dashboard
2. Selecione o projeto **gazzone**
3. Vá para **Settings > Git Integration**
4. Desconecte o repositório atual (se houver)
5. Conecte o novo repositório GitHub

## ✅ Próximos Passos Após Push

1. Vercel detectará automaticamente mudanças
2. Um novo deploy será acionado
3. Monitore o deploy em https://vercel.com/dashboard

## 🔐 Configurar Variáveis de Ambiente no Vercel

1. No Vercel Dashboard, vá para **Settings > Environment Variables**
2. Adicione:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
ECWID_STORE_ID=sua_store_id
ECWID_ACCESS_TOKEN=seu_token
```

3. Clique em **Save**
4. Aguarde o novo deploy

## 📊 Status do Projeto

- ✅ Clerk integrado
- ✅ Ecwid integrado
- ✅ API endpoints criados
- ✅ Painel de Admin pronto
- ⏳ Aguardando push para GitHub

---

**Próximo comando a executar:**
```bash
git remote add origin https://github.com/seu-usuario/gazzone.git
git push -u origin main
```
