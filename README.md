# 🖥️ MariaOS 98 — Next.js + 3 idiomas

Site pessoal com estética Windows 98, feito em **Next.js (App Router), React e CSS**. Pode ser personalizado e testado localmente sem publicar nada.

## O que já existe

- 🇧🇷 Português, 🇪🇸 Espanhol e 🇺🇸 Inglês, com troca por bandeiras no canto superior direito.
- URLs compartilháveis: `/pt/`, `/es/` e `/en/`.
- A URL `/` direciona para o último idioma escolhido ou para o idioma do navegador (quando disponível; português como padrão).
- Tradução dos menus, janelas, filtros, biografia, descrições dos projetos e botões.
- Janelas arrastáveis no desktop, controles de minimizar, maximizar e fechar, menu Iniciar, relógio e barra de tarefas.
- Projetos reais separados por Sistemas e Automações, com detalhes para cada projeto.
- Layout adaptado para celular, com bandeiras disponíveis sem cobrir as janelas.

## 1. Como abrir no seu computador

**Você precisa instalar:** [Node.js](https://nodejs.org/) versão 20.9 ou superior e um editor como o [VS Code](https://code.visualstudio.com/).

Abra a pasta extraída no VS Code e no terminal execute:

```bash
npm install
npm run dev
```

Depois visite **http://localhost:3000**. Você pode acessar diretamente:

- http://localhost:3000/pt/
- http://localhost:3000/es/
- http://localhost:3000/en/

Salve as alterações nos arquivos e atualize o navegador. A aplicação utiliza o recarregamento automático do Next.js em modo desenvolvimento.

**Importante:** como este é um projeto Next.js, abrir arquivos `.jsx` com duplo clique ou arrastar o ZIP de código-fonte diretamente no Netlify Drop *não* é suficiente. Primeiro é necessário executar o build.

## 2. Personalize antes de publicar

### Seus dados e projetos: `src/content/site.js`

Edite `SITE.name`, `SITE.role`, `SITE.bio`, `SITE.location`, `SITE.email`, `SITE.github`, `SITE.linkedin` e `SITE.tools`. O cargo agora é **Desenvolvedora · Dados & Automação**, e o campo “Modo de trabalho” foi removido.

Seções traduzidas têm três valores (`pt`, `es`, `en`):

```js
role: {
  pt: 'Desenvolvedora · Dados & Automação',
  es: 'Desarrolladora · Datos y Automatización',
  en: 'Developer · Data & Automation'
}
```

A pasta de projetos contém **apenas os três projetos autorais apresentados**:

1. **HELPFY** — sistema full stack de gestão de tarefas com Kanban, automações, APIs, autenticação, anexos, exportação e leitura com IA. Desenvolvido com TypeScript, SQL, React 19, Next.js 15, PostgreSQL/Supabase e outras ferramentas detalhadas abaixo. Possui galeria com oito capturas fornecidas pela autora.
2. **DocFlow** — aplicação desktop Python para busca, seleção e transferência de documentos no SharePoint via Microsoft Graph, a partir de nomes lidos no Excel. O portfólio mostra o fluxo e um pequeno exemplo didático sanitizado.
3. **PDFFlow** — aplicativo desktop Python/Tkinter para baixar PDFs a partir de links de uma planilha Excel, evitar links repetidos, organizar nomes e registrar o andamento. O portfólio mostra o fluxo e um pequeno exemplo didático sanitizado.

Todos os outros cards de exemplo foram removidos. Categorias sem projetos não aparecem no filtro. Para cadastrar um novo trabalho real, acrescente um objeto ao array `PROJECTS` em `src/content/site.js` com `id`, `category`, textos nos três idiomas, `features`, `technologies` e, opcionalmente, `screenshots`, `workflowSteps`, `codeSample`, `demo` e `repository`. Deixe URLs não publicadas como string vazia (`''`), para não gerar botões quebrados.

Os exemplos demonstrativos de código incluídos nas janelas DocFlow e PDFFlow são **reescritos e genéricos**, sem autenticação, parâmetros internos ou acesso a sistemas corporativos.

### Tecnologias usadas no HELPFY

Na janela **Detalhes → HELPFY**, as tecnologias são apresentadas em **14 áreas** com ferramentas e suas funções no sistema. A janela **Ferramentas** também inclui as ferramentas do HELPFY, organizadas com as utilizadas nos outros dois projetos.

| Área | Tecnologias | Uso no sistema |
| --- | --- | --- |
| Linguagens | TypeScript, SQL | Código e regras do banco |
| Interface | React 19, Next.js 15 | Páginas, formulários, cards e navegação |
| Estilização | CSS, Tailwind CSS | Visual responsivo e modo escuro |
| Servidor e APIs | Next.js sobre Node.js | Processamento, integrações e API de extração |
| Banco de dados | PostgreSQL, Supabase | Boards, cards, bases, usuários e configurações |
| Autenticação | Supabase Auth, RLS | Login e permissões |
| Anexos | SharePoint, Microsoft Graph | Armazenamento e acesso |
| E-mails | Microsoft Graph | Templates e notificações |
| Inteligência artificial | OpenAI API | Leitura de documentos e preenchimento de campos |
| Arrastar e soltar | dnd-kit | Movimentação no Kanban |
| Excel e PDF | SheetJS (`xlsx`), jsPDF | Importação e exportação |
| Validação | Zod e funções próprias | Conferência dos dados |
| Testes | Node.js Test Runner, React Test Renderer, PGlite | Interface, regras e banco |
| Versionamento e publicação | Git, GitHub, Vercel | Histórico e deploy |

**Observação:** esta lista descreve a tecnologia **do projeto HELPFY**, conforme informada pela autora; não significa que essas bibliotecas sejam dependências do **MariaOS**, que é um portfólio separado. As informações são textuais e não contêm credenciais, conexões de produção ou código privado.

### Galeria de telas do HELPFY

A janela **Detalhes → HELPFY** mostra **8 capturas reais** do sistema em um carrossel retrô, com anterior/próxima, miniaturas clicáveis, legendas em português, inglês e espanhol e abertura da imagem original.

As imagens já estão copiadas para `public/images/helpfy/` e cadastradas no primeiro projeto (`id: 'helpfy'`) em `src/content/site.js` dentro do campo `screenshots`.

| Ordem | Arquivo | Conteúdo |
| --- | --- | --- |
| 1 | `01-boards.png` | Visão geral dos Boards e acompanhamento de tarefas |
| 2 | `02-kanban.png` | Quadro Kanban com fases, prioridades e prazos |
| 3 | `03-detalhes-card.png` | Detalhes do card, campos e movimentação entre fases |
| 4 | `04-configuracao-fases.png` | Configuração de fases, campos e regras do fluxo |
| 5 | `05-agentes-ia.png` | Área de configuração dos agentes de IA |
| 6 | `06-colecoes.png` | Coleções de dados reutilizáveis |
| 7 | `07-exportacao-excel.png` | Exportação de cards para Excel com escolha de campos |
| 8 | `08-menu-lateral.png` | Menu de navegação: Boards, Databases, APIs e Administração |

**Para editar:** troque um arquivo PNG por outro com o mesmo nome para manter a galeria funcionando. Para mudar a ordem ou a legenda, edite o array `screenshots` de `src/content/site.js`. Não é necessário usar `import` para as imagens da pasta `public/`: o caminho web é `/images/helpfy/arquivo.png`.

> Revise as imagens antes de publicar para confirmar que nenhum dado interno, identificador pessoal ou informação confidencial está exposto.

### Suas fotos e a FIG. 01 (novidade!)

1. Dentro de `public/`, abra a pasta `images/` (ela já existe nesta versão).
2. Coloque uma foto quadrada ou retrato chamada `perfil.jpg` na pasta `public/images/`.
3. Para trocar a ilustração **FIG. 01** da tela inicial, coloque outra imagem, por exemplo `figura-01.jpg`, na mesma pasta.
4. No início de `src/content/site.js`, preencha os caminhos:

```js
profileImage: '/images/perfil.jpg',
figureImage: '/images/figura-01.jpg',
```

- **`profileImage`**: usa sua foto em **Sobre mim**, no ícone da área de trabalho, no menu Iniciar, no título da janela e na barra de tarefas. É a mesma imagem, para manter a identidade visual consistente.
- **`figureImage`**: substitui a arte **FIG. 01** da tela inicial por outra imagem, dentro de uma moldura retrô.
- **`figureCaption`**: muda a legenda FIG. 01 nos três idiomas.
- Não é preciso usar `perfil.jpg` ou `figura-01.jpg` exatamente: ajuste o caminho para o nome real do arquivo, respeitando maiúsculas/minúsculas. Prefira JPEG, PNG ou WebP otimizados. Não use arquivos muito grandes.
- **Se deixar os campos vazios (`''`), os ícones e a ilustração originais continuam aparecendo.** Isso evita imagens quebradas até você escolher as fotos.
- Ao trocar a imagem, salve e recarregue `http://localhost:3000/pt/`. No Windows, também confira se o arquivo não virou `perfil.jpg.png` por causa das extensões ocultas.

### Textos da interface: `src/content/messages.js`

Contém as traduções para todos os botões, janelas, seções e menus. Mantenha as mesmas chaves em `pt`, `es` e `en`.

### Cores e visual: `src/app/globals.css`

No início do arquivo, altere as variáveis: `--desktop` (cor da área de trabalho), `--navy` (janelas e botões), `--pink` (detalhes), `--paper` (interior das janelas). As bandeiras ficam no bloco `.language-switcher` no fim do CSS.

### Ícones: `public/sprites.svg`

São SVGs próprios, embutidos no projeto. Não dependem de uma biblioteca externa.

## 3. Testar a versão final

```bash
npm run build
```

Com `output: 'export'`, o Next.js gera uma pasta **`out/`**, pronta para hospedagem estática. Para conferir a saída de produção, execute um servidor estático, por exemplo `npx serve out` (caso já tenha `serve` instalado) ou use a extensão Live Server apontando para `out/`.

## 4. Publicar no Netlify depois que estiver pronta

### Opção A: GitHub (recomendado)

1. Crie um repositório no GitHub e envie os arquivos do projeto (sem `node_modules`, `.next` ou `out`).
2. No Netlify: **Add new project → Import an existing project**.
3. Conecte o repositório.
4. Verifique as configurações do `netlify.toml`: **Build command: `npm run build`; Publish directory: `out`**.
5. Publique. Os próximos commits poderão gerar novos deploys automaticamente.

### Opção B: Netlify Drop

1. Execute `npm install` e `npm run build` localmente.
2. Arraste **somente a pasta `out/`** no [Netlify Drop](https://app.netlify.com/drop). Não arraste o código-fonte Next.js nem o ZIP do projeto.

O projeto usa exportação estática, sem APIs de servidor, login ou SSR. Para adicionar funcionalidades com backend mais tarde, será necessário revisar a configuração de deploy.

## Estrutura

```text
mariaos98-next/
├── src/
│   ├── app/
│   │   ├── (root)/page.jsx      # Detecção inicial de idioma
│   │   ├── (root)/layout.jsx
│   │   ├── [locale]/page.jsx     # Rotas pt/es/en
│   │   ├── [locale]/layout.jsx   # Idioma correto no HTML
│   │   └── globals.css          # Tema Windows 98
│   ├── components/Desktop.jsx   # Interface e interações
│   └── content/
│       ├── site.js              # SEU PERFIL E PROJETOS
│       └── messages.js          # Traduções da interface
├── public/
│   ├── sprites.svg
│   ├── images/ (adicione perfil.jpg e figura-01.jpg)
│   ├── flags/ (br.svg, es.svg, us.svg)
│   └── favicon.svg
├── next.config.mjs              # Exportação estática
├── netlify.toml                 # Build e publicação
├── package.json
└── README.md
```

## Privacidade e apresentação profissional

Ao apresentar projetos internos, use apenas descrições, resultados e imagens autorizados. Não publique dados pessoais, nomes de clientes, arquivos, acessos nem códigos confidenciais. Um projeto pode ter uma demonstração com dados fictícios e uma descrição do seu papel técnico sem expor o sistema original.

## Checklist de revisão

- [ ] Substituí os projetos fictícios por trabalhos reais.
- [ ] Traduzi todos os projetos em português, espanhol e inglês.
- [x] Contatos configurados (e-mail, GitHub e LinkedIn); confira se os perfis públicos estão corretos.
- [ ] Ajustei as cores e textos para combinar com minha identidade.
- [ ] Testei os filtros, bandeiras e janelas nos três idiomas.
- [ ] Testei o layout no celular.
- [ ] Executei `npm run build` antes de enviar ao Netlify.


## DocFlow: apresentação pública sem dados internos

O segundo card, **DocFlow**, apresenta de forma descritiva uma automação Python de leitura de Excel, consulta ao SharePoint via Microsoft Graph, seleção e transferência de documentos e geração de relatório. A seção "Trecho de código" é **uma versão demonstrativa reescrita**, não o código-fonte original.

Por segurança, **este portfólio não contém** o projeto Python original, executáveis, planilhas corporativas, arquivos `.env`, tokens, segredos, endereços SharePoint internos nem IDs de ambientes. Não há conexão real ao SharePoint nessa seção: ela serve exclusivamente como demonstração de arquitetura e lógica.

Para alterar o texto ou o exemplo, edite `src/content/site.js` no item `id: 'docflow'`. Traduções de títulos e rótulos estão em `src/content/messages.js`.


## PDFFlow: download de PDFs via Excel (apresentação pública)

O terceiro card, **PDFFlow**, apresenta um aplicativo real de automação de downloads. A automação desktop em Python lê uma planilha Excel com links para documentos, prepara uma lista sem URLs repetidas, baixa PDFs para uma pasta local, padroniza nomes, preserva arquivos já existentes, mostra o progresso e grava um histórico com resultados e erros. A interface é feita com **Tkinter** e o executável original foi empacotado via **PyInstaller**.

Na janela de detalhes há um **fluxo visual** e um **exemplo didático de Python** com nomes de coluna fictícios. O exemplo mostra apenas a preparação de uma fila sem URLs repetidas; não faz downloads nem acessa sistemas reais.

**Segurança:** este ZIP contém somente o código do portfólio MariaOS. O script original `app_baixar_pdfs.py`, executáveis, arquivos de build, ícones corporativos, dados de planilhas, comprovantes, links de origem, credenciais e caminhos internos **não foram incluídos**. Para editar o texto, fluxo ou exemplo, procure `id: 'pdfflow'` em `src/content/site.js`.

### Contatos no portfólio

O botão **Vamos conversar?** (janela Sobre mim) abre a janela **Contato**, que inclui:

- E-mail: `mariaeduarda99.dev@gmail.com` (`mailto:`)
- GitHub: https://github.com/d0ardaa
- LinkedIn: https://www.linkedin.com/in/maria-eduarda-amaral-alves/

Esses links foram informados pela autora. Não foi realizada verificação de propriedade dos perfis.
