# 📱 Guia de Ícones PWA - Wilds

## Status Atual

O PWA está configurado e funcional com os ícones existentes:
- ✅ `favicon.ico` - Funciona para navegadores desktop
- ✅ `fire-icon.svg` - Funciona como ícone escalável

## Como Melhorar os Ícones (Opcional)

Para uma melhor experiência PWA, recomenda-se criar ícones PNG nos seguintes tamanhos:

### Ícones Recomendados

```
public/
├── icon-72x72.png       (para iOS)
├── icon-96x96.png       (para Android)
├── icon-128x128.png     (para Android)
├── icon-144x144.png     (para iOS)
├── icon-152x152.png     (para iOS)
├── icon-192x192.png     (Android, padrão)
├── icon-384x384.png     (Android, alta resolução)
└── icon-512x512.png     (Android, splash screen)
```

## Como Criar os Ícones

### Opção 1: Usar ferramenta online
1. Acesse: https://realfavicongenerator.net/
2. Faça upload do logo/ícone do Wilds
3. Configure as opções para iOS, Android e Windows
4. Baixe o pacote de ícones gerado
5. Coloque os arquivos na pasta `public/`

### Opção 2: Criar manualmente
1. Use o logo atual em alta resolução
2. Crie versões em 512x512px, 192x192px, etc.
3. Salve como PNG com fundo transparente (ou fundo sólido se preferir)
4. Coloque na pasta `public/`

## Atualizar o manifest.json

Depois de criar os ícones, atualize o `public/manifest.json`:

```json
{
  "name": "Wilds - Monitoramento de Queimadas",
  "short_name": "Wilds",
  "icons": [
    {
      "src": "/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

## Teste o PWA

### No Desktop (Chrome/Edge):
1. Abra o site
2. Procure o ícone de instalação (+) na barra de endereço
3. Ou acesse `/instalar` e clique em "Instalar Agora"

### No Android (Chrome):
1. Abra o site no Chrome
2. Toque nos 3 pontos (menu)
3. Selecione "Adicionar à tela inicial" ou "Instalar app"

### No iOS (Safari):
1. Abra o site no Safari
2. Toque no botão de compartilhar (quadrado com seta)
3. Role para baixo e toque em "Adicionar à Tela de Início"

## Verificar PWA

Use estas ferramentas para testar:
- **Chrome DevTools**: Lighthouse > Progressive Web App
- **Online**: https://www.pwabuilder.com/
- **Firefox**: about:debugging > Service Workers

## Dicas

- Use fundo transparente para os ícones (PNG)
- Mantenha o design simples e reconhecível em tamanhos pequenos
- Teste em diferentes dispositivos e tamanhos
- O logo atual (fire-icon.svg) funciona bem, mas PNG é mais compatível

## Status da Instalação

✅ PWA configurado e funcional  
✅ Service Worker registrado  
✅ Manifest.json configurado  
✅ Página de instalação criada (`/instalar`)  
⚠️ Ícones PNG otimizados podem ser adicionados (opcional)

