# Como Remover o Banner de Desenvolvimento

Quando o projeto estiver pronto para produção com dados reais, siga estas etapas simples:

## Passo 1: Deletar o Arquivo do Banner
```bash
rm src/components/DevelopmentBanner.jsx
```

## Passo 2: Remover a Importação e Uso no Layout

Abra o arquivo `src/components/Layout/Layout.jsx` e:

1. **Remova a linha de importação** (linha ~6):
```javascript
import DevelopmentBanner from '../DevelopmentBanner'
```

2. **Remova o componente** (linha ~34):
```javascript
<DevelopmentBanner />
```

## Passo 3: Commit e Deploy
```bash
git add .
git commit -m "remove: banner de desenvolvimento para produção"
git push origin main
```

Pronto! O banner será removido e o site ficará pronto para produção. 🚀

