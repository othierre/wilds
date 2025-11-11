# 🌍 Wilds - Sistema de Monitoramento de Queimadas

![Wilds Banner](https://via.placeholder.com/1200x300/16a34a/ffffff?text=Wilds+-+Monitoramento+de+Queimadas+com+IA)

## 📋 Sobre o Projeto

**Wilds** é um web app moderno e responsivo para monitoramento de queimadas em tempo real, utilizando inteligência artificial e dados de satélite. A plataforma foi atualizada para incluir um **blog informativo**, uma **seção educacional** com guias de prevenção e um sistema de gerenciamento de conteúdo (CMS) para facilitar a publicação de novos artigos.

### 🎯 Principais Funcionalidades

- 🗺️ **Mapa Interativo** com dados reais de queimadas via satélite
- 🤖 **IA de Detecção** e previsão de propagação de incêndios
- 🚨 **Sistema de Denúncias** comunitárias com upload de fotos
- 📈 **Dashboard de Estatísticas** com gráficos e análises
- ✍️ **Blog e Conteúdo** gerenciado via Netlify CMS
- 📚 **Guias Educacionais** sobre prevenção, impactos e recuperação
- 🌦️ **Integração Climática** em tempo real
- 🔔 **Alertas Personalizados** por localização
- 🌓 **Modo Claro/Escuro** automático
- 📱 **PWA (Progressive Web App)** com suporte para instalação

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** React 18 + Vite
- **Estilização:** Tailwind CSS
- **Mapas:** React Leaflet
- **Gráficos:** Recharts
- **Ícones:** Lucide React
- **Autenticação:** Firebase Auth
- **Gerenciamento de Conteúdo:** Netlify CMS
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
git clone https://github.com/othierre/wilds.git
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
│   ├── components/      # Componentes reutilizáveis (Header, Sidebar, etc)
│   ├── pages/           # Páginas da aplicação (Home, Blog, Guias)
│   │   ├── guias/       # Páginas da seção educacional
│   │   └── ...
│   ├── context/         # Contextos globais (Autenticação, Tema)
│   ├── services/        # Integrações com APIs externas (Clima)
│   ├── config/          # Configurações (Firebase)
│   ├── App.jsx          # Componente raiz e rotas
│   └── main.jsx         # Ponto de entrada da aplicação
├── content/
│   └── blog/            # Arquivos .md para os posts do blog
├── public/
│   └── admin/           # Configuração do Netlify CMS
├── netlify.toml         # Configurações de deploy e build da Netlify
├── package.json         # Dependências e scripts
└── README.md
```

---

## ✍️ Blog e Gerenciamento de Conteúdo

O projeto agora inclui um blog para publicação de notícias e artigos, integrado com **Netlify CMS**. Isso permite que administradores criem, editem e publiquem posts diretamente de uma interface amigável (`/admin`), sem precisar mexer no código.

- **Caminho do CMS:** `public/admin/`
- **Conteúdo do Blog:** `content/blog/`

Os posts são escritos em Markdown e renderizados dinamicamente na página do blog.

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
Para dados climáticos em tempo real.
**Como obter:** [https://openweathermap.org/api](https://openweathermap.org/api)

### Firebase
Para autenticação e armazenamento de dados.
**Como configurar:** [https://firebase.google.com](https://firebase.google.com)

### Netlify CMS
Para gerenciamento de conteúdo do blog.
**Saiba mais:** [https://www.netlifycms.org/](https://www.netlifycms.org/)

### NASA FIRMS (Futuro)
Para dados reais de satélite.
**Saiba mais:** [https://firms.modaps.eosdis.nasa.gov](https://firms.modaps.eosdis.nasa.gov)

---

## 📱 Responsividade

O Wilds foi projetado com **mobile-first** em mente, garantindo uma experiência de usuário consistente em desktops, tablets e celulares. A interface se adapta para oferecer a melhor usabilidade em cada dispositivo.

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
