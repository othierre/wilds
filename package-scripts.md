# 📜 Scripts Disponíveis

## Desenvolvimento

### Iniciar servidor de desenvolvimento
```bash
npm run dev
```
- Inicia em `http://localhost:3000`
- Hot reload automático
- Console mostra erros em tempo real

### Build para produção
```bash
npm run build
```
- Gera arquivos otimizados em `/dist`
- Minifica e comprime código
- Remove código não usado

### Preview da build
```bash
npm run preview
```
- Testa a build de produção localmente
- Simula ambiente de produção
- Útil antes do deploy

## Manutenção

### Atualizar dependências
```bash
npm update
```

### Verificar vulnerabilidades
```bash
npm audit
```

### Corrigir vulnerabilidades (seguro)
```bash
npm audit fix
```

### Limpar cache e reinstalar
```bash
rm -rf node_modules package-lock.json
npm install
```

## Deploy

### Vercel
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### GitHub Pages
```bash
npm run build
# Suba a pasta dist/ para branch gh-pages
```

## Úteis

### Checar versões
```bash
node --version
npm --version
```

### Listar pacotes instalados
```bash
npm list --depth=0
```

### Adicionar nova dependência
```bash
npm install nome-do-pacote
```

### Remover dependência
```bash
npm uninstall nome-do-pacote
```

