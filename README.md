# Portfólio — Paulo

Site de portfólio feito com HTML, CSS e JavaScript puro, com tema claro/escuro.

## Estrutura

```
portfolio/
├── index.html
├── .nojekyll
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    └── foto.jpg
```

> Importante: os nomes das pastas e arquivos são **todos em minúsculo e sem espaços**.
> O GitHub Pages diferencia maiúsculas de minúsculas (`Style.css` ≠ `style.css`),
> e foi isso que quebrava o CSS e o JavaScript antes.

## Como colocar no ar (GitHub Pages)

1. Entre em https://github.com/new e crie um repositório **público**.
   - Para o endereço ficar `https://Paulo2589s.github.io`, use o nome `Paulo2589s.github.io`.
   - Com outro nome (ex.: `portfolio`), o endereço será `https://Paulo2589s.github.io/portfolio/`.
2. Envie os arquivos. Pelo site: **Add file → Upload files**, arraste **o conteúdo** desta pasta
   (`index.html`, `.nojekyll`, `css`, `js`, `img`) e clique em **Commit changes**.
   Pelo terminal:
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit do portfólio"
   git branch -M main
   git remote add origin https://github.com/Paulo2589s/NOME-DO-REPOSITORIO.git
   git push -u origin main
   ```
3. No repositório, vá em **Settings → Pages**.
4. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
5. Em **Branch**, selecione `main` e a pasta `/ (root)` e clique em **Save**.
6. Aguarde 1 a 2 minutos e abra o link que aparece no topo da página de Pages.

## Dicas

- O `index.html` precisa ficar na **raiz** do repositório, não dentro de outra pasta.
- Se o site não atualizar, force a atualização com `Ctrl + F5`.
- Troque o link do LinkedIn em `index.html` (procure por "TROQUE").
- Quando publicar o Pet Adoption, edite o botão "Em breve" no `index.html`.
