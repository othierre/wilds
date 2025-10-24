# ⚡ Quick Start - Wilds

## 🚀 Em 3 Minutos

### 1️⃣ Instalar
```bash
npm install
```

### 2️⃣ Executar
```bash
npm run dev
```

### 3️⃣ Acessar
Abra: **http://localhost:3000**

---

## 🎯 Pronto!

Você agora tem acesso a:

✅ **Mapa interativo** com queimadas
✅ **Dashboard** com estatísticas
✅ **Sistema de denúncias** (login necessário)
✅ **Análises detalhadas** em gráficos
✅ **Conteúdo educativo** sobre prevenção

---

## 🔧 Modo Demo vs Produção

### Modo Demo (Atual)
- ✅ Tudo funciona com dados simulados
- ✅ Não precisa de configuração
- ✅ Perfeito para testar
- ❌ Dados não persistem
- ❌ APIs não são reais

### Modo Produção
Para usar APIs reais:

```bash
# 1. Copiar config
cp env.example .env

# 2. Editar .env com suas chaves
# - Firebase (autenticação)
# - OpenWeatherMap (clima)

# 3. Reiniciar
npm run dev
```

---

## 📖 Navegação Rápida

| Página | Acesso | O que faz |
|--------|--------|-----------|
| 🏠 Home | `/` | Mapa + Dashboard |
| 🚨 Reportar | `/reportar` | Fazer denúncia |
| 📊 Stats | `/estatisticas` | Ver gráficos |
| 📖 Educação | `/educacao` | Aprender |
| 👤 Perfil | `/perfil` | Suas denúncias |

---

## 💡 Dicas Rápidas

### No Desktop
- Sidebar fixo à esquerda
- Clique nos marcadores do mapa
- Alterne tema (☀️/🌙) no header

### No Mobile
- Menu inferior fixo
- Swipe no mapa
- Botão flutuante para reportar

---

## 🆘 Problemas?

### Página em branco
```bash
# Limpar e reinstalar
rm -rf node_modules
npm install
```

### Erro de porta
```bash
# Use outra porta
npm run dev -- --port 3001
```

### Mapa não carrega
- Verifique conexão internet
- Limpe cache (Ctrl+Shift+R)

---

## 📚 Próximos Passos

1. 📖 Leia o [README.md](README.md) completo
2. ⚙️ Configure as [APIs](SETUP.md)
3. 🚀 Faça [deploy](DEPLOYMENT.md)
4. 🤝 [Contribua](CONTRIBUTING.md)

---

## 🎉 Divirta-se!

Explore o Wilds e ajude a proteger o meio ambiente! 🌳🔥

**Dúvidas?** Abra uma issue no GitHub!

