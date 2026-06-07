# Portfólio – Renan W. M. da Cruz

Site de portfólio profissional com React, Three.js e Framer Motion.

## 🚀 Como rodar localmente

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Abrir no navegador: http://localhost:5173
```

## 📦 Como fazer o build para produção

```bash
npm run build
```

A pasta `dist/` conterá os arquivos prontos para hospedar.

---

## 🌐 Como hospedar (opções gratuitas)

### Opção 1 — Vercel (recomendado, 0 configuração)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale a CLI: `npm i -g vercel`
3. Na pasta do projeto: `vercel`
4. Siga o wizard — o site estará online em ~1 minuto

### Opção 2 — Netlify

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Faça o build: `npm run build`
3. Arraste a pasta `dist/` para o painel do Netlify
4. URL gerada automaticamente — pode adicionar domínio próprio

### Opção 3 — GitHub Pages

1. Faça push do código para um repositório no GitHub
2. Em `vite.config.js`, adicione: `base: '/nome-do-repo/'`
3. Instale: `npm i -D gh-pages`
4. Em `package.json`, adicione: `"deploy": "gh-pages -d dist"`
5. Execute: `npm run build && npm run deploy`

### Opção 4 — Domínio próprio

Após hospedar no Vercel ou Netlify, adicione seu domínio nas configurações do painel e aponte o DNS (registro CNAME ou A) para o endereço fornecido.

---

## 🛠 Stack

- **React 18** — UI
- **Three.js** — fundo 3D com partículas e geometrias
- **Framer Motion** — animações e transições de página
- **Vite** — build ultra-rápido

## 📁 Estrutura

```
src/
  components/
    Background3D.jsx   # Cena Three.js (partículas, torus, icosaedro)
    Nav.jsx            # Navegação responsiva com menu mobile
  pages/
    Home.jsx           # Hero com métricas
    About.jsx          # Sobre, formação e certificações
    Experience.jsx     # Timeline de experiências
    Projects.jsx       # Grid de projetos com modal de detalhes
    Skills.jsx         # Barras de habilidades animadas
    Contact.jsx        # Página de contato
  data/
    index.js           # Todos os dados do portfólio (edite aqui!)
  App.jsx              # Roteamento entre páginas
  main.jsx             # Entry point
  index.css            # Variáveis CSS e reset
```

## ✏️ Como atualizar o conteúdo

Edite o arquivo `src/data/index.js` — todos os textos, projetos, experiências e habilidades estão centralizados lá.
