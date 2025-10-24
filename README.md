# 🌍 Wilds - Sistema de Monitoramento de Queimadas

![Wilds Banner](https://via.placeholder.com/1200x300/16a34a/ffffff?text=Wilds+-+Monitoramento+de+Queimadas+com+IA)

## 📋 Sobre o Projeto

**Wilds** é um web app moderno e responsivo para monitoramento de queimadas em tempo real, utilizando inteligência artificial e dados de satélite. O sistema permite a detecção automática de focos de incêndio, denúncias manuais da comunidade, análise climática e visualização de estatísticas detalhadas.

### 🎯 Principais Funcionalidades

- 🗺️ **Mapa Interativo** com dados reais de queimadas via satélite
- 🤖 **IA de Detecção** e previsão de propagação de incêndios
- 🚨 **Sistema de Denúncias** comunitárias com upload de fotos
- 📈 **Dashboard de Estatísticas** com gráficos e análises
- 🌦️ **Integração Climática** em tempo real
- 🔔 **Alertas Personalizados** por localização
- 🌓 **Modo Claro/Escuro** automático
- 📱 **Design Responsivo** para desktop e mobile

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** React 18 + Vite
- **Estilização:** Tailwind CSS
- **Mapas:** React Leaflet
- **Gráficos:** Recharts
- **Ícones:** Lucide React
- **Autenticação:** Firebase Auth
- **API Climática:** OpenWeatherMap
- **Rotas:** React Router DOM

---

## 📦 Instalação e Configuração

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Conta no Firebase (opcional, para autenticação)
- Chave API OpenWeatherMap (opcional, para dados climáticos)

### Passo a Passo

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/wilds.git
cd wilds
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Copie o arquivo `.env.example` para `.env` e preencha com suas credenciais:

```bash
cp .env.example .env
```

Edite o arquivo `.env`:
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu_projeto_id
VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id

# OpenWeatherMap API
VITE_OPENWEATHER_API_KEY=sua_chave_openweather
```

4. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

5. **Acesse no navegador:**
```
http://localhost:3000
```

---

## 🏗️ Estrutura do Projeto

```
wilds/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   └── MobileNav.jsx
│   │   └── Map/
│   │       └── MapComponent.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Reportar.jsx
│   │   ├── Estatisticas.jsx
│   │   ├── Educacao.jsx
│   │   └── Perfil.jsx
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── services/
│   │   └── weatherService.js
│   ├── config/
│   │   └── firebase.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 🎨 Principais Componentes

### Mapa Interativo
Visualização em tempo real de queimadas detectadas com:
- Marcadores coloridos por status (ativo, controlado, extinto)
- Círculos de propagação para queimadas ativas
- Popups com informações detalhadas
- Legenda dinâmica

### Dashboard de Estatísticas
Análises visuais incluindo:
- Gráficos de área, barra, linha e pizza
- Estatísticas por estado e bioma
- Tendências semanais e mensais
- Emissões de CO₂

### Sistema de Denúncias
Formulário completo com:
- Geolocalização automática (GPS)
- Upload de fotos
- Níveis de intensidade
- Validação e moderação

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

---

## 🌐 APIs e Integrações

### OpenWeatherMap
Para dados climáticos em tempo real:
- Temperatura, umidade, vento
- Previsão de chuvas
- Cálculo de risco de incêndio

**Como obter:** [https://openweathermap.org/api](https://openweathermap.org/api)

### Firebase
Para autenticação e armazenamento:
- Login com Google
- Armazenamento de denúncias
- Upload de fotos

**Como configurar:** [https://firebase.google.com](https://firebase.google.com)

### NASA FIRMS (Futuro)
Para dados reais de satélite:
- Detecção de focos de calor
- Dados históricos
- API gratuita

**Saiba mais:** [https://firms.modaps.eosdis.nasa.gov](https://firms.modaps.eosdis.nasa.gov)

---

## 📱 Responsividade

O Wilds foi projetado com **mobile-first** em mente:

### Desktop (1024px+)
- Layout dashboard com sidebar fixa
- Mapa e painéis lado a lado
- Menu lateral sempre visível

### Tablet (768px - 1023px)
- Layout adaptativo
- Sidebar recolhível
- Componentes empilhados

### Mobile (< 768px)
- Mapa em tela cheia
- Menu inferior fixo
- Navegação otimizada por toque
- Botões flutuantes

---

## 🎨 Temas

### Modo Claro
Cores suaves e alta legibilidade para uso diurno

### Modo Escuro
Reduz cansaço visual em ambientes com pouca luz

**Troca automática** baseada nas preferências do sistema ou manual via botão no header.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

**Thierre Yuri**

- GitHub: [@thierreyuri](https://github.com/thierreyuri)
- Email: contato@wilds.app

---

## 🙏 Agradecimentos

- Dados de satélite: NASA FIRMS, INPE, Copernicus
- Ícones: Lucide Icons
- Mapas: OpenStreetMap, Leaflet
- Clima: OpenWeatherMap

---

## 🔮 Roadmap

- [ ] Integração com NASA FIRMS para dados reais de satélite
- [ ] Notificações push em tempo real
- [ ] API pública REST para desenvolvedores
- [ ] App mobile nativo (React Native)
- [ ] Sistema de gamificação e rankings
- [ ] Integração com WhatsApp para alertas
- [ ] Modo offline com cache de dados
- [ ] Simulação de propagação em 3D
- [ ] Machine Learning para previsão avançada

---

## 📞 Suporte

Para reportar bugs ou solicitar features, abra uma issue no GitHub:
[https://github.com/seu-usuario/wilds/issues](https://github.com/seu-usuario/wilds/issues)

---

<div align="center">

**Feito com ❤️ e ♻️ para um Brasil mais verde**

[⬆ Voltar ao topo](#-wilds---sistema-de-monitoramento-de-queimadas)

</div>

