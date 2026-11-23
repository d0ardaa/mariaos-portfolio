/**
 * SEU ARQUIVO DE PERSONALIZAÇÃO / YOUR CONTENT FILE
 * 1. Edite SEUS DADOS em SITE.
 * 2. Inclua somente trabalhos reais em PROJECTS; não publique segredos ou dados internos.
 * 3. Para cada título, resumo e descrição: crie versões pt, es, en.
 * 4. Edite profileImage e figureImage para colocar suas fotos.
 * 5. Links vazios ficam desativados, sem botões quebrados.
 */

export const SITE = {
  name: 'Maria Eduarda',
  location: { pt: 'Brasil', es: 'Brasil', en: 'Brazil' },
  role: {
    pt: 'Desenvolvedora · Dados & Automação',
    es: 'Desarrolladora · Datos y Automatización',
    en: 'Developer · Data & Automation'
  },
  bio: {
    pt: 'Sou desenvolvedora e atuo com dados e automação. Gosto de entender como as coisas funcionam, questionar processos e criar soluções que economizam tempo e tornam o dia a dia mais simples. Sou curiosa por natureza e estou sempre explorando novas tecnologias, aprendendo e transformando ideias em projetos úteis.',
    es: 'Soy desarrolladora y trabajo con datos y automatización. Me gusta entender cómo funcionan las cosas, cuestionar procesos y crear soluciones que ahorren tiempo y simplifiquen el día a día. Soy curiosa por naturaleza y siempre estoy explorando nuevas tecnologías, aprendiendo y convirtiendo ideas en proyectos útiles.',
    en: 'I am a developer working with data and automation. I enjoy understanding how things work, questioning processes, and creating solutions that save time and make everyday tasks easier. I am naturally curious, always exploring new technologies, learning, and turning ideas into useful projects.'
  },
  // FOTO DO PERFIL: coloque sua imagem em public/images/perfil.jpg
  // e troque '' por '/images/perfil.jpg'. Aparece em Sobre mim, no desktop
  // e nos ícones relacionados ao perfil. Sem foto, o ícone clássico continua.
  profileImage: '/images/perfil.png',
  // FIG. 01: para trocar a ilustração da tela inicial por uma imagem,
  // coloque o arquivo em public/images/figura-01.jpg e informe o caminho abaixo.
  figureImage: '',
  figureCaption: {
    pt: 'IDEIAS EM CONSTRUÇÃO',
    es: 'IDEAS EN CONSTRUCCIÓN',
    en: 'IDEAS IN THE MAKING'
  },
  email: 'mariaeduarda99.dev@gmail.com',
  github: 'https://github.com/d0ardaa',
  linkedin: 'https://www.linkedin.com/in/maria-eduarda-amaral-alves/',
  tools: {
    dados: ['Python', 'SQL', 'Pandas', 'Excel', 'PostgreSQL', 'Supabase', 'SheetJS (xlsx)', 'jsPDF', 'PGlite'],
    automacoes: ['REST APIs', 'Microsoft Graph API', 'SharePoint', 'Requests', 'MSAL', 'OpenAI API'],
    dev: ['TypeScript', 'React 19', 'Next.js 15', 'Node.js', 'CSS', 'Tailwind CSS', 'dnd-kit', 'Tkinter', 'CustomTkinter'],
    infraestrutura: ['Supabase Auth', 'RLS', 'Zod', 'Node.js Test Runner', 'React Test Renderer', 'Git', 'GitHub', 'Vercel']
  }
};

// Projetos autorais apresentados: HELPFY, DocFlow e PDFFlow.
export const PROJECTS = [
  {
    id: 'helpfy', category: 'sistemas', featured: true, showAllTechnologiesOnCard: true,
    title: { pt: 'HELPFY', es: 'HELPFY', en: 'HELPFY' },
    summary: {
      pt: 'Gestão de tarefas com Kanban, automações, IA e integrações Microsoft 365.',
      es: 'Gestión de tareas con Kanban, automatizaciones, IA e integraciones con Microsoft 365.',
      en: 'Task management with Kanban, automation, AI and Microsoft 365 integrations.'
    },
    description: {
      pt: 'Desenvolvi o HELPFY, um sistema full stack de gestão de tarefas com boards, cards, bancos de dados e fluxos configuráveis. Reúne Kanban com arrastar e soltar, automações, APIs, leitura de documentos com IA, anexos no SharePoint, notificações por e-mail, controles de acesso e importação/exportação de dados.',
      es: 'Desarrollé HELPFY, un sistema full stack de gestión de tareas con tableros, tarjetas, bases de datos y flujos configurables. Integra Kanban con arrastrar y soltar, automatizaciones, APIs, lectura de documentos con IA, archivos adjuntos en SharePoint, notificaciones por correo, control de acceso e importación/exportación de datos.',
      en: 'I developed HELPFY, a full-stack task management system with boards, cards, databases and configurable workflows. It combines drag-and-drop Kanban, automation, APIs, AI document reading, SharePoint attachments, email notifications, access controls and data import/export.'
    },
    features: {
      pt: [
        'Boards e cards em Kanban com arrastar e soltar (dnd-kit)',
        'Automações, integrações por APIs e fluxos configuráveis',
        'Banco PostgreSQL com login e permissões via Supabase Auth e RLS',
        'Anexos no SharePoint e e-mails via Microsoft Graph',
        'Leitura de documentos e preenchimento de campos usando IA',
        'Importação e exportação de informações em Excel e PDF',
        'Interface responsiva com modo escuro e validação de dados'
      ],
      es: [
        'Tableros y tarjetas Kanban con arrastrar y soltar (dnd-kit)',
        'Automatizaciones, integraciones API y flujos configurables',
        'Base de datos PostgreSQL con acceso mediante Supabase Auth y RLS',
        'Archivos adjuntos en SharePoint y correos mediante Microsoft Graph',
        'Lectura de documentos y rellenado de campos con IA',
        'Importación y exportación de información en Excel y PDF',
        'Interfaz adaptable con modo oscuro y validación de datos'
      ],
      en: [
        'Kanban boards and cards with drag and drop (dnd-kit)',
        'Automation, API integrations and configurable workflows',
        'PostgreSQL database with Supabase Auth and RLS access control',
        'SharePoint attachments and email through Microsoft Graph',
        'AI document reading and automatic field population',
        'Excel and PDF data import/export',
        'Responsive dark-mode interface with data validation'
      ]
    },
    technologies: [
      'TypeScript', 'SQL', 'React 19', 'Next.js 15', 'CSS', 'Tailwind CSS',
      'Node.js', 'PostgreSQL', 'Supabase', 'Supabase Auth', 'RLS', 'SharePoint',
      'Microsoft Graph API', 'OpenAI API', 'dnd-kit', 'SheetJS (xlsx)', 'jsPDF',
      'Zod', 'Node.js Test Runner', 'React Test Renderer', 'PGlite', 'Git', 'GitHub', 'Vercel'
    ],
    // Tecnologias informadas pela autora. Cada grupo explica o papel no HELPFY.
    // Esta seção contém somente descrições; não publica código privado, tokens ou configurações.
    techDetails: [
      {
        area: { pt: 'Linguagens', es: 'Lenguajes', en: 'Languages' },
        stack: ['TypeScript', 'SQL'],
        purpose: { pt: 'Código do sistema e regras do banco de dados.', es: 'Código del sistema y reglas de la base de datos.', en: 'Application code and database rules.' }
      },
      {
        area: { pt: 'Interface', es: 'Interfaz', en: 'Interface' },
        stack: ['React 19', 'Next.js 15'],
        purpose: { pt: 'Páginas, formulários, cards e navegação.', es: 'Páginas, formularios, tarjetas y navegación.', en: 'Pages, forms, cards and navigation.' }
      },
      {
        area: { pt: 'Estilização', es: 'Estilos', en: 'Styling' },
        stack: ['CSS', 'Tailwind CSS'],
        purpose: { pt: 'Aparência, responsividade e modo escuro.', es: 'Apariencia, adaptación a pantallas y modo oscuro.', en: 'Visual design, responsiveness and dark mode.' }
      },
      {
        area: { pt: 'Servidor e APIs', es: 'Servidor y APIs', en: 'Server & APIs' },
        stack: ['Next.js', 'Node.js'],
        purpose: { pt: 'Processamento, integrações e API de extração.', es: 'Procesamiento, integraciones y API de extracción.', en: 'Processing, integrations and extraction API.' }
      },
      {
        area: { pt: 'Banco de dados', es: 'Base de datos', en: 'Database' },
        stack: ['PostgreSQL', 'Supabase'],
        purpose: { pt: 'Boards, cards, Databases, usuários e configurações.', es: 'Tableros, tarjetas, bases de datos, usuarios y configuraciones.', en: 'Boards, cards, databases, users and settings.' }
      },
      {
        area: { pt: 'Autenticação e permissões', es: 'Autenticación y permisos', en: 'Authentication & permissions' },
        stack: ['Supabase Auth', 'RLS'],
        purpose: { pt: 'Login e controle de acesso aos dados.', es: 'Inicio de sesión y control de acceso a los datos.', en: 'Sign-in and data access control.' }
      },
      {
        area: { pt: 'Anexos', es: 'Archivos adjuntos', en: 'Attachments' },
        stack: ['SharePoint', 'Microsoft Graph'],
        purpose: { pt: 'Armazenamento e acesso aos arquivos.', es: 'Almacenamiento y acceso a los archivos.', en: 'File storage and access.' }
      },
      {
        area: { pt: 'E-mails', es: 'Correos electrónicos', en: 'Emails' },
        stack: ['Microsoft Graph'],
        purpose: { pt: 'Envio de templates e notificações.', es: 'Envío de plantillas y notificaciones.', en: 'Sending templates and notifications.' }
      },
      {
        area: { pt: 'Inteligência artificial', es: 'Inteligencia artificial', en: 'Artificial intelligence' },
        stack: ['OpenAI API'],
        purpose: { pt: 'Leitura de documentos e preenchimento de campos.', es: 'Lectura de documentos y cumplimentación de campos.', en: 'Document reading and field population.' }
      },
      {
        area: { pt: 'Arrastar e soltar', es: 'Arrastrar y soltar', en: 'Drag and drop' },
        stack: ['dnd-kit'],
        purpose: { pt: 'Movimentação dos cards no Kanban.', es: 'Movimiento de tarjetas en Kanban.', en: 'Moving cards on the Kanban board.' }
      },
      {
        area: { pt: 'Excel e PDF', es: 'Excel y PDF', en: 'Excel & PDF' },
        stack: ['SheetJS (xlsx)', 'jsPDF'],
        purpose: { pt: 'Importação e exportação de informações.', es: 'Importación y exportación de información.', en: 'Importing and exporting information.' }
      },
      {
        area: { pt: 'Validação', es: 'Validación', en: 'Validation' },
        stack: ['Zod', 'Funções próprias'],
        purpose: { pt: 'Conferência dos dados recebidos.', es: 'Validación de los datos recibidos.', en: 'Validation of incoming data.' }
      },
      {
        area: { pt: 'Testes', es: 'Pruebas', en: 'Testing' },
        stack: ['Node.js Test Runner', 'React Test Renderer', 'PGlite'],
        purpose: { pt: 'Testes de interface, regras e banco de dados.', es: 'Pruebas de interfaz, reglas y base de datos.', en: 'Interface, business-rule and database tests.' }
      },
      {
        area: { pt: 'Versionamento e publicação', es: 'Control de versiones y despliegue', en: 'Version control & deployment' },
        stack: ['Git', 'GitHub', 'Vercel'],
        purpose: { pt: 'Histórico do código e deploy.', es: 'Historial del código y despliegue.', en: 'Code history and deployment.' }
      }
    ],
    // Galeria de imagens reais do HELPFY (arquivos em public/images/helpfy/).
    screenshots: [
      { src: '/images/helpfy/01-boards.png', caption: { pt: 'Visão geral dos Boards e acompanhamento de tarefas', es: 'Vista general de tableros y seguimiento de tareas', en: 'Boards overview and task tracking' } },
      { src: '/images/helpfy/02-kanban.png', caption: { pt: 'Quadro Kanban com fases, prioridades e prazos', es: 'Tablero Kanban con fases, prioridades y plazos', en: 'Kanban board with stages, priorities and deadlines' } },
      { src: '/images/helpfy/03-detalhes-card.png', caption: { pt: 'Detalhes do card, campos e movimentação entre fases', es: 'Detalles de la tarjeta, campos y movimientos entre fases', en: 'Card details, fields and stage transitions' } },
      { src: '/images/helpfy/04-configuracao-fases.png', caption: { pt: 'Configuração de fases, campos e regras do fluxo', es: 'Configuración de fases, campos y reglas del flujo', en: 'Stage, field and workflow rule settings' } },
      { src: '/images/helpfy/05-agentes-ia.png', caption: { pt: 'Área de configuração dos agentes de IA', es: 'Área de configuración de agentes de IA', en: 'AI agent configuration screen' } },
      { src: '/images/helpfy/06-colecoes.png', caption: { pt: 'Coleções de dados reutilizáveis', es: 'Colecciones de datos reutilizables', en: 'Reusable data collections' } },
      { src: '/images/helpfy/07-exportacao-excel.png', caption: { pt: 'Exportação de cards para Excel com escolha de campos', es: 'Exportación de tarjetas a Excel con selección de campos', en: 'Export cards to Excel with field selection' } },
      { src: '/images/helpfy/08-menu-lateral.png', caption: { pt: 'Menu de navegação: Boards, Databases, APIs e Administração', es: 'Menú de navegación: tableros, bases de datos, APIs y administración', en: 'Navigation menu: Boards, Databases, APIs and Administration' } },
    ],
    demo: '', repository: ''
  },
  {
    id: 'docflow', category: 'automacoes',
    title: { pt: 'DocFlow', es: 'DocFlow', en: 'DocFlow' },
    summary: {
      pt: 'Automação em Python: planilhas Excel, busca e transferência de documentos no SharePoint.',
      es: 'Automatización en Python: Excel, búsqueda y transferencia de documentos en SharePoint.',
      en: 'Python automation: Excel processing, document search and transfer in SharePoint.'
    },
    description: {
      pt: 'Aplicação desktop desenvolvida em Python para automatizar a localização e a organização de documentos. O programa lê nomes em planilhas Excel, consulta bibliotecas do SharePoint via Microsoft Graph API, seleciona os arquivos necessários por regras de nomenclatura, transfere documentos para o destino e gera um relatório de execução.',
      es: 'Aplicación de escritorio desarrollada en Python para automatizar la búsqueda y organización de documentos. Lee nombres de hojas Excel, consulta bibliotecas de SharePoint mediante Microsoft Graph API, selecciona archivos según reglas de nombres, transfiere documentos al destino y genera un informe de ejecución.',
      en: 'A Python desktop application that automates document discovery and organization. It reads names from Excel sheets, queries SharePoint libraries through Microsoft Graph API, selects required files using filename rules, transfers documents to a destination and generates an execution report.'
    },
    features: {
      pt: [
        'Leitura de nomes em múltiplas abas do Excel com Pandas',
        'Busca de pastas e arquivos no SharePoint via Microsoft Graph API',
        'Seleção de documentos por padrões de nome e regras de prioridade',
        'Transferência de arquivos e prevenção de nomes duplicados',
        'Relatório Excel com status, documentos encontrados e pendências',
        'Interface desktop com progresso e tratamento de falhas de conexão'
      ],
      es: [
        'Lectura de nombres en varias hojas Excel con Pandas',
        'Búsqueda de carpetas y archivos en SharePoint mediante Microsoft Graph API',
        'Selección de documentos mediante patrones de nombre y reglas de prioridad',
        'Transferencia de archivos y prevención de nombres duplicados',
        'Informe Excel con estados, documentos encontrados y pendientes',
        'Interfaz de escritorio con progreso y manejo de fallos de conexión'
      ],
      en: [
        'Read names across multiple Excel sheets with Pandas',
        'Search SharePoint folders and files through Microsoft Graph API',
        'Select documents using filename patterns and priority rules',
        'Transfer files while preventing duplicate destination names',
        'Produce an Excel report with statuses, found files and missing items',
        'Desktop interface with progress feedback and connection error handling'
      ]
    },
    technologies: ['Python', 'Pandas', 'Excel', 'SharePoint', 'Microsoft Graph API', 'MSAL', 'CustomTkinter'],
    workflowSteps: {
      pt: ['Ler nomes no Excel', 'Pesquisar pastas no SharePoint', 'Selecionar documentos por regras', 'Transferir arquivos sem sobrescrever', 'Gerar relatório de resultados'],
      es: ['Leer nombres en Excel', 'Buscar carpetas en SharePoint', 'Seleccionar documentos por reglas', 'Transferir archivos sin sobrescribir', 'Generar informe de resultados'],
      en: ['Read names from Excel', 'Find folders in SharePoint', 'Select documents using rules', 'Transfer files without overwriting', 'Generate a results report']
    },
    // Código ILUSTRATIVO, escrito para o portfolio. Nao e uma copia do codigo privado.
    // Nenhuma autenticacao, URL, ID de ambiente, pessoa ou arquivo real e incluido.
    codeSample: `from pathlib import Path
import pandas as pd


def ler_nomes(arquivo_excel, aba="Exemplo"):
    dados = pd.read_excel(arquivo_excel, sheet_name=aba).fillna("")
    return [str(nome).strip() for nome in dados["Nome"] if str(nome).strip()]


def selecionar_documentos(arquivos, palavras_chave):
    formatos = {".pdf", ".png", ".jpg", ".jpeg"}
    return [
        arquivo for arquivo in arquivos
        if Path(arquivo["name"]).suffix.lower() in formatos
        and any(palavra in arquivo["name"].lower() for palavra in palavras_chave)
    ]`,
    demo: '', repository: ''
  },
  {
    id: 'pdfflow', category: 'automacoes',
    title: { pt: 'PDFFlow', es: 'PDFFlow', en: 'PDFFlow' },
    summary: {
      pt: 'Download em lote de PDFs a partir do Excel, com controle de duplicatas e progresso.',
      es: 'Descarga masiva de PDF desde Excel, con control de duplicados y progreso.',
      en: 'Batch PDF downloads from Excel, with duplicate detection and progress tracking.'
    },
    description: {
      pt: 'Desenvolvi uma ferramenta desktop em Python que transforma links registrados em uma planilha Excel em uma fila de downloads. A aplicação elimina links repetidos, organiza os PDFs em uma pasta local com nomes padronizados, exibe o andamento em tempo real e registra os resultados em um histórico de execução.',
      es: 'Desarrollé una herramienta de escritorio en Python que convierte enlaces registrados en una hoja Excel en una cola de descargas. La aplicación elimina enlaces duplicados, organiza los PDF en una carpeta local con nombres estandarizados, muestra el progreso en tiempo real y registra los resultados en un historial de ejecución.',
      en: 'I developed a Python desktop tool that turns links listed in an Excel spreadsheet into a download queue. It removes duplicate links, organizes PDFs in a local folder using consistent filenames, displays live progress and records results in an execution log.'
    },
    features: {
      pt: [
        'Leitura de planilhas Excel e identificação de links para documentos',
        'Remoção de URLs repetidas para evitar downloads duplicados',
        'Geração de nomes padronizados sem sobrescrever arquivos existentes',
        'Interface desktop com barra de progresso e estimativa de tempo restante',
        'Processamento em segundo plano e opção para cancelar a fila',
        'Registro de downloads concluídos, ignorados e erros em arquivo de log'
      ],
      es: [
        'Lectura de hojas Excel e identificación de enlaces a documentos',
        'Eliminación de URL repetidas para evitar descargas duplicadas',
        'Generación de nombres estandarizados sin sobrescribir archivos existentes',
        'Interfaz de escritorio con barra de progreso y estimación del tiempo restante',
        'Procesamiento en segundo plano y opción de cancelar la cola',
        'Registro de descargas completadas, ignoradas y errores en un archivo de log'
      ],
      en: [
        'Read Excel spreadsheets and identify document links',
        'Remove repeated URLs to prevent duplicate downloads',
        'Generate consistent filenames without overwriting existing files',
        'Desktop interface with a progress bar and remaining-time estimate',
        'Background processing with an option to cancel the queue',
        'Log completed downloads, skipped duplicates and errors'
      ]
    },
    technologies: ['Python', 'Pandas', 'Requests', 'Tkinter', 'Excel', 'PyInstaller'],
    workflowSteps: {
      pt: ['Selecionar uma pasta com a planilha Excel', 'Ler links de PDFs e remover repetições', 'Baixar documentos em uma fila controlada', 'Salvar arquivos com nomes padronizados', 'Apresentar progresso e histórico de execução'],
      es: ['Elegir una carpeta con la hoja Excel', 'Leer enlaces de PDF y eliminar duplicados', 'Descargar documentos en una cola controlada', 'Guardar archivos con nombres estandarizados', 'Mostrar progreso e historial de ejecución'],
      en: ['Select a folder with the Excel spreadsheet', 'Read PDF links and remove duplicates', 'Download documents in a controlled queue', 'Save files using consistent filenames', 'Display progress and an execution log']
    },
    // Apenas um exemplo DIDATICO reescrito. Nao ha links, colunas, arquivos, dados ou codigos corporativos reais.
    // Este codigo prepara uma fila ilustrativa, nao acessa sistemas nem executa downloads.
    codeSample: `import pandas as pd


def preparar_fila(arquivo_excel):
    tabela = pd.read_excel(arquivo_excel)  # modelo ficticio
    urls = tabela["url_documento"].dropna().astype(str)

    fila, vistos = [], set()
    for endereco in urls:
        endereco = endereco.strip()
        if endereco.startswith(("https://", "http://")) and endereco not in vistos:
            fila.append(endereco)
            vistos.add(endereco)

    return fila  # links unicos para processar`,
    demo: '', repository: ''
  }
];
