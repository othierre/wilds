# 🚀 Guia de Deploy - Wilds

Este guia cobre diferentes opções de deploy para o Wilds.

---

## 📋 Pré-requisitos

Antes de fazer deploy:

1. ✅ Projeto buildado com sucesso (`npm run build`)
2. ✅ Variáveis de ambiente configuradas
3. ✅ APIs testadas e funcionando
4. ✅ Domínio registrado (opcional)

---

## 🌐 Opções de Hospedagem

### 1. Vercel (Recomendado) ⭐

**Por que Vercel?**
- Deploy automático do GitHub
- HTTPS gratuito
- CDN global
- Suporte nativo para Vite/React
- Zero configuração

**Passo a Passo:**

```bash
# 1. Instalar CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Deploy de produção
vercel --prod
```

**Via GitHub:**
1. Push para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Importe seu repositório
5. Configure variáveis de ambiente
6. Deploy automático!

**Variáveis de Ambiente na Vercel:**
- Settings → Environment Variables
- Adicione todas as variáveis do `.env`
- Redeploy após adicionar

---

### 2. Netlify

**Passo a Passo:**

```bash
# 1. Instalar CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Inicializar
netlify init

# 4. Deploy
netlify deploy --prod
```

**Via Interface Web:**
1. Acesse [netlify.com](https://netlify.com)
2. "Add new site" → "Import from Git"
3. Conecte repositório
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

**Configuração Adicional:**

Crie `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

**Passo a Passo:**

1. **Instalar gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Adicionar scripts no package.json:**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Atualizar vite.config.js:**
```javascript
export default defineConfig({
  base: '/wildsai/', // Nome do repositório
  plugins: [react()],
})
```

4. **Deploy:**
```bash
npm run deploy
```

5. **Configurar no GitHub:**
- Settings → Pages
- Source: gh-pages branch
- Salvar

---

### 4. Railway

**Passo a Passo:**

1. Acesse [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub"
3. Selecione o repositório
4. Railway detecta Vite automaticamente
5. Configure variáveis de ambiente
6. Deploy!

**Configuração:**
- Build Command: `npm run build`
- Start Command: `npm run preview`

---

### 5. Render

**Passo a Passo:**

1. Acesse [render.com](https://render.com)
2. "New" → "Static Site"
3. Conecte repositório
4. Configurações:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Deploy

---

### 6. Firebase Hosting

**Passo a Passo:**

```bash
# 1. Instalar Firebase CLI
npm install -g firebase-tools

# 2. Login
firebase login

# 3. Inicializar
firebase init hosting

# Configurações:
# - Public directory: dist
# - Single-page app: Yes
# - Continuous deployment: Yes (opcional)

# 4. Build
npm run build

# 5. Deploy
firebase deploy --only hosting
```

---

## ⚙️ Configurações Importantes

### Variáveis de Ambiente

**Não commite o arquivo `.env`!**

Configure em cada plataforma:

```env
VITE_FIREBASE_API_KEY=xxxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxxx
VITE_FIREBASE_PROJECT_ID=xxxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxx
VITE_FIREBASE_APP_ID=xxxxx
VITE_OPENWEATHER_API_KEY=xxxxx
```

### Redirects para SPA

Para React Router funcionar, configure redirects:

**Vercel:** `vercel.json`
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Netlify:** `_redirects` em `/public`
```
/*  /index.html  200
```

**Apache:** `.htaccess`
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔒 Segurança

### Headers de Segurança

Adicione em `vercel.json` ou equivalente:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Checklist de Segurança

- [ ] Variáveis de ambiente configuradas
- [ ] API keys não expostas no código
- [ ] HTTPS ativo
- [ ] Domínio configurado com SSL
- [ ] Firestore rules configuradas (Firebase)
- [ ] CORS configurado no backend
- [ ] Rate limiting ativo

---

## 🎯 Domínio Customizado

### Vercel
1. Settings → Domains
2. Add Domain
3. Configure DNS:
   - CNAME: `cname.vercel-dns.com`

### Netlify
1. Domain Settings
2. Add custom domain
3. Configure DNS:
   - CNAME: `seu-site.netlify.app`

### Registrars Populares
- **Registro.br** (Brasil)
- **Namecheap**
- **GoDaddy**
- **Cloudflare**

---

## 📊 Monitoramento

### Analytics

**Google Analytics:**
```html
<!-- Adicionar em index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

### Error Tracking

**Sentry:**
```bash
npm install @sentry/react
```

---

## 🚀 CI/CD

### GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
          # Adicione outras variáveis
      
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

---

## ✅ Checklist Pré-Deploy

- [ ] `npm run build` sem erros
- [ ] Testar build localmente: `npm run preview`
- [ ] Todas as variáveis de ambiente configuradas
- [ ] Firebase configurado e testado
- [ ] APIs funcionando
- [ ] Mapas carregando
- [ ] Autenticação operacional
- [ ] Responsividade testada
- [ ] Performance otimizada
- [ ] SEO configurado
- [ ] Favicons e meta tags
- [ ] README atualizado

---

## 🐛 Troubleshooting

### Build falhou
```bash
# Limpar e reinstalar
rm -rf node_modules dist
npm install
npm run build
```

### 404 nas rotas
- Configure redirects/rewrites
- Veja seção "Redirects para SPA"

### Variáveis não funcionam
- Certifique-se que começam com `VITE_`
- Redeploy após adicionar variáveis
- Limpe cache do navegador

### Mapa não carrega
- Verifique CORS
- Teste URLs de tile do Leaflet
- Veja console do navegador

---

## 📈 Performance

### Otimizações

1. **Imagens:**
   - Use WebP
   - Lazy loading
   - Comprima assets

2. **Code Splitting:**
   - Já implementado com React.lazy

3. **Caching:**
   - Configure headers de cache
   - Use CDN

4. **Bundle Size:**
```bash
npm run build -- --mode production
# Analise dist/
```

---

## 🎉 Deploy Bem-Sucedido!

Após deploy:

1. ✅ Teste todas as funcionalidades
2. ✅ Verifique em diferentes dispositivos
3. ✅ Configure monitoramento
4. ✅ Compartilhe com o mundo! 🌍

---

**Seu Wilds está no ar! 🚀🔥**

