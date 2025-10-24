# 🤝 Contribuindo para o Wilds

Obrigado por considerar contribuir com o Wilds! Este documento fornece diretrizes para contribuições.

## Como Contribuir

### 🐛 Reportar Bugs

1. Verifique se o bug já foi reportado nas [Issues](https://github.com/seu-usuario/wilds/issues)
2. Abra uma nova issue com:
   - Título descritivo
   - Passos para reproduzir
   - Comportamento esperado vs. atual
   - Screenshots (se aplicável)
   - Ambiente (navegador, OS, versão)

### ✨ Sugerir Features

1. Abra uma issue com tag `enhancement`
2. Descreva detalhadamente:
   - Problema que resolve
   - Solução proposta
   - Alternativas consideradas
   - Impacto no projeto

### 🔧 Enviar Pull Requests

1. **Fork** o repositório
2. Crie uma **branch** da `main`:
   ```bash
   git checkout -b feature/minha-feature
   ```
3. Faça suas alterações seguindo os padrões do projeto
4. **Commit** suas mudanças:
   ```bash
   git commit -m "feat: adiciona funcionalidade X"
   ```
5. **Push** para seu fork:
   ```bash
   git push origin feature/minha-feature
   ```
6. Abra um **Pull Request**

## Padrões de Código

### JavaScript/React

- Use **componentes funcionais** com hooks
- Prefira **arrow functions**
- Use **destructuring** quando possível
- Mantenha componentes **pequenos e focados**

### Estilo de Commit

Siga [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação (sem mudança de código)
- `refactor:` Refatoração
- `test:` Adicionar/modificar testes
- `chore:` Tarefas de manutenção

Exemplos:
```
feat: adiciona filtro por estado no mapa
fix: corrige erro ao fazer upload de foto
docs: atualiza README com instruções de deploy
```

### Nomenclatura

- **Componentes:** PascalCase (`MapComponent.jsx`)
- **Funções:** camelCase (`getUserData`)
- **Constantes:** UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Arquivos:** kebab-case para utilitários (`weather-service.js`)

### Tailwind CSS

- Use classes utilitárias do Tailwind
- Evite CSS customizado quando possível
- Use modo dark: `dark:bg-gray-800`
- Siga padrões responsivos: `sm:`, `md:`, `lg:`

## Estrutura de Componentes

```jsx
import { useState } from 'react'
import { Icon } from 'lucide-react'

const MeuComponente = ({ prop1, prop2 }) => {
  const [state, setState] = useState(false)

  const handleAction = () => {
    // lógica aqui
  }

  return (
    <div className="card">
      {/* JSX aqui */}
    </div>
  )
}

export default MeuComponente
```

## Testes

Antes de enviar um PR:

1. ✅ Teste no navegador (Chrome, Firefox, Safari)
2. ✅ Teste em mobile (responsividade)
3. ✅ Teste modo claro e escuro
4. ✅ Verifique console por erros
5. ✅ Teste com e sem login

## Áreas que Precisam de Ajuda

### 🔴 Alta Prioridade
- [ ] Integração com NASA FIRMS API
- [ ] Sistema de notificações push
- [ ] Testes automatizados (Jest/Vitest)
- [ ] Otimização de performance

### 🟡 Média Prioridade
- [ ] Internacionalização (i18n)
- [ ] PWA e modo offline
- [ ] Acessibilidade (WCAG)
- [ ] Documentação de API

### 🟢 Baixa Prioridade
- [ ] Mais temas de cores
- [ ] Animações avançadas
- [ ] Easter eggs
- [ ] Gamificação

## Revisão de Código

PRs serão revisados considerando:

- ✅ Código limpo e legível
- ✅ Funcionalidade testada
- ✅ Sem warnings no console
- ✅ Responsivo
- ✅ Acessível
- ✅ Documentado (se necessário)

## Comunicação

- 💬 **Discord:** Para discussões rápidas
- 📧 **Email:** Para assuntos formais
- 🐛 **GitHub Issues:** Para bugs e features
- 📝 **Discussions:** Para ideias e perguntas

## Código de Conduta

- Seja respeitoso e inclusivo
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Mantenha ambiente profissional e acolhedor

## Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto (MIT).

---

**Obrigado por tornar o Wilds melhor! 🌱🔥**

