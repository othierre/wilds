# 🚀 Como Subir o Wilds para o GitHub

## ✅ Status Atual

✅ **Repositório Git local criado**  
✅ **Commit inicial feito** (37 arquivos, 9.116+ linhas)  
✅ **Tudo pronto para enviar ao GitHub**

---

## 📋 Passo a Passo para Criar no GitHub

### Opção 1: Interface Web do GitHub (Mais Fácil) 🌐

1. **Acesse o GitHub:**
   - Vá para: https://github.com/new
   - (Faça login se necessário)

2. **Configure o Repositório:**
   - **Repository name:** `wildsai` ou `wilds`
   - **Description:** `🌍 Sistema de Monitoramento de Queimadas com IA e Satélite`
   - **Visibilidade:** 
     - ✅ **Public** (recomendado para portfólio)
     - ⚪ **Private** (se quiser manter privado)
   - ⚠️ **NÃO marque** "Add a README" (já temos)
   - ⚠️ **NÃO marque** "Add .gitignore" (já temos)
   - ⚠️ **NÃO marque** "Choose a license" (já temos MIT)

3. **Clique em "Create repository"**

4. **Copie os comandos que aparecerem** (algo como):
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/wildsai.git
   git branch -M main
   git push -u origin main
   ```

5. **Cole os comandos no terminal do projeto** (que já está aberto)

---

### Opção 2: Via CLI do GitHub (Mais Rápido) ⚡

Se você tem o GitHub CLI instalado:

```bash
# Criar repositório público
gh repo create wildsai --public --source=. --remote=origin

# Fazer push
git push -u origin main
```

Se não tem o GitHub CLI, instale:
```bash
# Windows (com winget)
winget install GitHub.cli

# Ou baixe em: https://cli.github.com/
```

---

## 🎯 Comandos para Executar AGORA

### Se você já criou o repositório no GitHub:

```bash
# Adicionar o remote (substitua SEU-USUARIO pelo seu usuário do GitHub)
git remote add origin https://github.com/SEU-USUARIO/wildsai.git

# Verificar se foi adicionado
git remote -v

# Fazer push
git push -u origin main
```

### Caso dê erro de autenticação:

Se pedir senha e não funcionar, você precisará de um **Personal Access Token**:

1. Vá para: https://github.com/settings/tokens
2. "Generate new token" → "Generate new token (classic)"
3. Marque: `repo` (todos os sub-itens)
4. Copie o token (salve em lugar seguro!)
5. Use o token como senha quando o git pedir

**Ou use GitHub Desktop:** https://desktop.github.com/

---

## 📊 O que Será Enviado

✅ **37 arquivos** incluindo:
- 📱 5 páginas React completas
- 🗺️ Componente de mapa interativo
- 📊 Gráficos e estatísticas
- 📚 10 arquivos de documentação
- ⚙️ Configurações completas
- 🎨 Estilos e tema

✅ **9.116+ linhas de código**

---

## 🔒 Arquivos Protegidos (Não Serão Enviados)

O `.gitignore` já está configurado para **NÃO** enviar:
- ❌ `node_modules/` (dependências)
- ❌ `.env` (suas chaves secretas)
- ❌ `dist/` (build)
- ❌ Arquivos temporários

✅ Apenas o **código-fonte** será enviado!

---

## 🎉 Após o Push

Quando o push for concluído, seu repositório estará no GitHub!

### Acesse:
```
https://github.com/SEU-USUARIO/wildsai
```

### Configure GitHub Pages (Opcional):
1. No repositório, vá em **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Crie workflow para deploy automático (ou use Vercel)

### Adicione Topics:
No GitHub, adicione tags como:
- `react`
- `vite`
- `tailwindcss`
- `leaflet`
- `monitoramento`
- `queimadas`
- `sustentabilidade`
- `meio-ambiente`
- `brasil`

---

## 🚀 Deploy Rápido (Bonus)

Depois que o código estiver no GitHub:

### Vercel (1 minuto):
1. Acesse: https://vercel.com/new
2. Importe o repositório do GitHub
3. Clique em "Deploy"
4. Pronto! ✨

### Netlify (1 minuto):
1. Acesse: https://app.netlify.com/start
2. Conecte com GitHub
3. Selecione o repositório
4. Deploy!

---

## 📝 Comandos Git Úteis

```bash
# Ver status
git status

# Ver histórico
git log --oneline

# Ver remote
git remote -v

# Criar nova branch
git checkout -b nova-feature

# Fazer commit
git add .
git commit -m "feat: nova funcionalidade"

# Enviar mudanças
git push
```

---

## 🆘 Problemas Comuns

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/SEU-USUARIO/wildsai.git
```

### "fatal: refusing to merge unrelated histories"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Esqueci de adicionar algo
```bash
git add arquivo-esquecido.js
git commit --amend --no-edit
git push -f origin main
```

---

## ✅ Checklist Final

Antes de fazer push:

- [ ] Repositório criado no GitHub
- [ ] Remote configurado (`git remote -v`)
- [ ] `.env` **NÃO** está no git
- [ ] Commit feito com sucesso
- [ ] Pronto para `git push`

---

## 🎓 Próximos Passos

Após subir no GitHub:

1. ✅ Adicione uma imagem de preview (screenshot)
2. ✅ Configure o About do repositório
3. ✅ Adicione topics/tags
4. ✅ Crie um GitHub Project (opcional)
5. ✅ Configure Issues e Discussions
6. ✅ Faça deploy na Vercel
7. ✅ Compartilhe o link!

---

**🌟 Seu projeto Wilds estará disponível para o mundo!**

**Autor:** Thierre Yuri  
**Projeto:** Wilds  
**Versão:** 1.0.0

