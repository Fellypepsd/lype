# Como publicar e editar o site (Decap CMS + Netlify)

## O que mudou
- Os posts de design, conteúdo e fotografia agora vivem em 3 arquivos:
  `content/design.json`, `content/conteudo.json`, `content/fotografia.json`.
- `site-data.js` foi reescrito: ele busca (`fetch`) esses 3 arquivos e monta as páginas.
  Não usa mais `localStorage` — por isso as edições agora aparecem para todo mundo, não só no seu navegador.
- `admin.html` foi removido. No lugar, `/admin/` agora carrega o **Decap CMS**, que
  edita esses arquivos JSON fazendo commit direto no seu repositório Git.
- Editar ou excluir um post = um commit no GitHub. O site republica automaticamente.

## Passo a passo (uma vez só)

1. **Suba este projeto para o seu repositório GitHub** (`Fellypepsd/lype`, o mesmo que já está configurado).
   ```
   git add -A
   git commit -m "Troca admin local por Decap CMS"
   git push origin main
   ```

2. **Crie um site no Netlify** apontando para esse repositório.
   - "Add new site" → "Import an existing project" → escolha o repo `lype`.
   - Build command: pode deixar em branco (ou o que já está no `netlify.toml`).
   - Publish directory: `.` (raiz do repositório).

3. **Ative o Netlify Identity** (aba *Identity* do site no Netlify) → "Enable Identity".

4. **Ative o Git Gateway** (dentro de Identity → Services → Git Gateway) → "Enable Git Gateway".
   É isso que dá permissão para o Decap CMS commitar em nome de quem estiver logado, sem
   você precisar guardar token nenhum.

5. **Convide seu próprio usuário** em Identity → Invite users → seu e-mail.
   Você vai receber um e-mail para definir senha.

## Como editar/excluir posts no dia a dia

1. Acesse `https://SEU-SITE.netlify.app/admin/`
2. Faça login com o e-mail/senha do passo 5.
3. Escolha a coleção (Design, Conteúdo ou Fotografia), clique no post, edite ou aperte
   o ícone de excluir. Ao salvar, o Decap CMS commita a alteração no GitHub.
4. O Netlify detecta o commit e republica o site automaticamente (segundos).

## Sobre imagens e vídeos
- Ao subir uma imagem/vídeo novo pelo painel, ele é salvo em `assets/uploads/` e
  commitado no repositório junto com o post — nada de link quebrado.
- Para usar as imagens que já existem no site (`assets/img/...`), digite o caminho
  manualmente no campo de capa/galeria em vez de fazer upload.

## Se preferir não usar Netlify
O Git Gateway é a parte mais simples porque não exige backend seu. Dá pra trocar por
GitHub OAuth + um pequeno proxy, mas isso exige manter um serviço rodando — não é
"site puro" como você pediu. Netlify + Identity + Git Gateway é o caminho que não te
obriga a manter servidor nenhum.
