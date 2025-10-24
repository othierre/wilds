# 🚀 Guia de Configuração Rápida - Wilds

## Instalação em 5 Minutos

### 1. Instalar Dependências
```bash
npm install
```

### 2. Executar sem Configuração (Modo Demo)
O app funciona com dados mock sem necessidade de APIs:

```bash
npm run dev
```

Acesse: `http://localhost:3000`

---

## Configuração Completa (Opcional)

### 🔥 Firebase (Autenticação)

1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Crie um novo projeto
3. Ative **Authentication** > **Google Sign-In**
4. Copie as credenciais do projeto

### 🌦️ OpenWeatherMap (Dados Climáticos)

1. Crie conta em [OpenWeatherMap](https://openweathermap.org/api)
2. Obtenha sua API Key gratuita (60 chamadas/min)
3. Copie a chave

### ⚙️ Arquivo de Configuração

Copie `env.example` para `.env`:

```bash
cp env.example .env
```

Edite `.env` com suas credenciais:

```env
# Firebase
VITE_FIREBASE_API_KEY=AIza...
VITE_FIREBASE_AUTH_DOMAIN=wilds-abc123.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=wilds-abc123
VITE_FIREBASE_STORAGE_BUCKET=wilds-abc123.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123

# OpenWeatherMap
VITE_OPENWEATHER_API_KEY=abc123def456...
```

### 🚀 Reinicie o Servidor

```bash
npm run dev
```

---

## Funcionalidades por Configuração

| Funcionalidade | Sem Config | Com Firebase | Com OpenWeather |
|---------------|------------|--------------|-----------------|
| Visualizar Mapa | ✅ | ✅ | ✅ |
| Ver Estatísticas | ✅ | ✅ | ✅ |
| Login Google | ❌ | ✅ | ✅ |
| Fazer Denúncias | ❌ | ✅ | ✅ |
| Clima Real | ❌ | ❌ | ✅ |
| Upload Fotos | ❌ | ✅ | ✅ |

---

## Solução de Problemas

### Erro: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Página em branco
Verifique o console do navegador (F12) para erros.

### Firebase não funciona
1. Verifique se as variáveis estão corretas no `.env`
2. Confirme que o Authentication está ativo no Firebase
3. Adicione `localhost` nos domínios autorizados

### Mapa não carrega
- Verifique sua conexão com a internet
- Limpe o cache do navegador
- Teste em modo anônimo

---

## Build para Produção

```bash
npm run build
```

Os arquivos estarão em `dist/`

### Deploy Rápido

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy
```

---

## Suporte

- 📧 Email: suporte@wilds.app
- 💬 Discord: [discord.gg/wilds](https://discord.gg/wilds)
- 🐛 Issues: [GitHub Issues](https://github.com/seu-usuario/wilds/issues)

