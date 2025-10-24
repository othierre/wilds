# 📝 Guia de Configuração do Blog Wilds

## Status Atual

✅ Blog criado e funcional  
✅ Netlify CMS configurado  
✅ Painel admin pronto (`/admin`)  
✅ Posts de exemplo criados  
✅ Integração com Netlify Identity configurada  

## Como Ativar o Blog no Netlify

### 1. Fazer Deploy no Netlify

Se ainda não fez deploy:

```bash
# Commit das alterações
git add .
git commit -m "feat: adiciona blog com Netlify CMS"
git push origin main
```

### 2. Configurar Netlify Identity

1. Acesse o painel do Netlify: https://app.netlify.com
2. Selecione seu site **Wilds**
3. Vá em **Site settings** > **Identity**
4. Clique em **Enable Identity**

### 3. Configurar Git Gateway

1. Ainda em **Identity**, role até **Services**
2. Clique em **Enable Git Gateway**
3. Isso permitirá que o Netlify CMS edite os posts via Git

### 4. Convidar-se como Admin

1. Em **Identity**, clique em **Invite users**
2. Digite seu email
3. Você receberá um email de convite
4. Clique no link do email e crie sua senha

### 5. Acessar o Painel Admin

1. Acesse: `https://seu-site.netlify.app/admin`
2. Faça login com as credenciais que você criou
3. Pronto! Você pode começar a criar posts!

## Como Usar o CMS

### Criar um Novo Post

1. Acesse `/admin`
2. Clique em **Blog** > **New Blog**
3. Preencha os campos:
   - **Título**: Título do artigo
   - **Data de Publicação**: Data e hora
   - **Descrição**: Breve descrição (meta)
   - **Imagem de Capa**: Upload da imagem
   - **Categoria**: Selecione uma categoria
   - **Tags**: Adicione tags
   - **Autor**: Nome do autor
   - **Conteúdo**: Escreva em Markdown
   - **Destaque**: Marque para aparecer em destaque
4. Clique em **Publish** > **Publish now**

### Editar um Post

1. Acesse `/admin`
2. Clique no post que deseja editar
3. Faça as alterações
4. Clique em **Publish** > **Publish now**

### Deletar um Post

1. Acesse `/admin`
2. Clique no post
3. Clique em **Delete entry**
4. Confirme

## Estrutura de Arquivos

```
wilds/
├── content/
│   └── blog/
│       ├── 2025-01-15-bem-vindo-ao-blog-wilds.md
│       └── 2025-01-10-tecnologia-satelite-monitoramento.md
├── public/
│   ├── admin/
│   │   ├── config.yml (configuração do CMS)
│   │   └── index.html (painel admin)
│   └── uploads/ (imagens do blog)
└── src/
    └── pages/
        ├── Blog.jsx (lista de posts)
        └── BlogPost.jsx (post individual)
```

## Categorias Disponíveis

- 🔥 **Queimadas**: Notícias sobre queimadas
- 🛡️ **Prevenção**: Dicas de prevenção
- 💻 **Tecnologia**: Tecnologia e inovação
- 🌱 **Meio Ambiente**: Impacto ambiental
- 📰 **Notícias**: Notícias gerais

## Markdown Suportado

O editor suporta Markdown completo:

```markdown
# Título H1
## Título H2
### Título H3

**Negrito** e *itálico*

- Lista
- Com itens

1. Lista
2. Numerada

[Link](https://exemplo.com)

![Imagem](url-da-imagem.jpg)

> Citação

\`\`\`
Bloco de código
\`\`\`
```

## Imagens

### Upload de Imagens

1. No editor, clique no campo **Imagem de Capa**
2. Clique em **Upload**
3. Selecione a imagem do seu computador
4. A imagem será salva em `/public/uploads/`

### Imagens no Conteúdo

No Markdown, use:
```markdown
![Descrição da imagem](/uploads/nome-da-imagem.jpg)
```

## URLs Recomendadas para Imagens (Temporárias)

Enquanto você não tem imagens próprias, use Unsplash:

- **Queimadas**: `https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80`
- **Tecnologia**: `https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80`
- **Prevenção**: `https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=800&q=80`
- **Meio Ambiente**: `https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80`

## Solução de Problemas

### Não consigo acessar /admin

- Verifique se o deploy foi feito
- Certifique-se de que está acessando a URL do Netlify, não localhost

### "No identity instance found"

- Ative o Netlify Identity nas configurações do site
- Aguarde alguns minutos após ativar

### Não consigo fazer login

- Verifique seu email para o link de convite
- Se necessário, reenvie o convite no painel do Netlify

### Posts não aparecem no blog

- Por enquanto, os posts são simulados (mock data)
- Para integrar posts reais, será necessário implementar um parser de Markdown
- Recomendo usar `gray-matter` e `remark` para isso

## Próximos Passos (Opcional)

Para integrar posts reais do CMS:

1. Instalar dependências:
```bash
npm install gray-matter remark remark-html
```

2. Criar um script para ler os arquivos `.md` da pasta `content/blog/`

3. Atualizar `Blog.jsx` e `BlogPost.jsx` para usar os posts reais

## Acesso ao Painel

- **URL Local**: `http://localhost:3000/admin` (não funciona)
- **URL Produção**: `https://seu-site.netlify.app/admin`

## Importante

⚠️ O painel admin **SOMENTE funciona em produção** (Netlify), não funciona em localhost!

Para testar localmente, você pode usar o Netlify Dev:

```bash
npm install -g netlify-cli
netlify dev
```

---

**Dúvidas?** Consulte a [documentação oficial do Netlify CMS](https://www.netlifycms.org/docs/)

