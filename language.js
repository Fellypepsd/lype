(function(){
  var STORAGE_KEY = 'fellypePortfolioLanguage';
  var translations = {
    'início':'home', 'fotografia':'photography', 'design':'design', 'conteúdo':'content',
    'todas':'all', 'fotos de rua':'street photos', 'fotos editoriais':'editorial photos',
    'Filtrar fotografias':'Filter photographs', 'Fotografia':'Photography',
    'fale comigo:':'get in touch:', '[instagram]':'[instagram]', '[linkedin]':'[linkedin]', '[e-mail]':'[e-mail]',
    'trabalhos recentes':'recent work', '[Já trabalhei com]':'[I have worked with]',
    'vamo criar junto?':'let\'s create together?', 'Dê forma a suas ideias':'Shape your ideas',
    'voltar ao site':'back to site', 'portfolio / administrador':'portfolio / administrator',
    'Novo post':'New post', 'Editar post':'Edit post', 'Publicar post':'Publish post', 'Salvar alterações':'Save changes',
    'Cancelar edição':'Cancel editing', 'Posts disponíveis para editar':'Posts available to edit',
    'Filtrar por tipo':'Filter by type', 'Filtrar por subcategoria':'Filter by subcategory',
    'Todos':'All', 'Todas':'All', 'Restaurar':'Restore', 'Editar':'Edit', 'Excluir':'Delete',
    'Tipo de conteúdo':'Content type', 'Categoria':'Category', 'Título':'Title', 'Data':'Date',
    'Imagem de capa':'Cover image', 'Cliente':'Client', 'Objetivo':'Goal', 'Resultado':'Result',
    'Descrição curta do card':'Short card description', 'Texto da página interna':'Detail page text',
    'Imagens adicionais (opcional, uma por linha)':'Additional images (optional, one per line)',
    'Arquivo de capa (imagem ou vídeo)':'Cover file (image or video)',
    'Arquivos adicionais (imagens ou vídeos)':'Additional files (images or videos)',
    'Portfolio / projeto':'Portfolio / project', 'resumo':'summary', 'cliente':'client', 'objetivo':'goal', 'resultado':'result',
    'o que o cliente estava buscando':'what the client was looking for',
    'Projetos, estudos visuais e reflexões de direção de arte em um fluxo editorial.':'Projects, visual studies and art direction reflections in an editorial flow.',
    'Uma coleção de registros que atravessam rua, pessoas, luz e narrativa visual.':'A collection of images crossing streets, people, light and visual storytelling.',
    'Textos, ideias e reflexões organizadas para serem lidas, compartilhadas e revisitadas.':'Texts, ideas and reflections organized to be read, shared and revisited.',
    'sobre mim':'about me', 'sobre meu trabalho':'about my work',
    'Sou (Luís) Fellype Ferreira, nascido e criado no Rio de Janeiro. Tem interesses em esportes, videogames, música e tudo que envolva tecnologia e criatividade. É completamente apaixonado por açaí, apesar de não aceitá-los como pagamento (ainda)':'I am (Luis) Fellype Ferreira, born and raised in Rio de Janeiro. I am interested in sports, video games, music, and anything involving technology and creativity. I am completely passionate about açaí, although I do not accept it as payment (yet).',
    'Sou (Luís) Fellype Ferreira, nascido e criado no Rio de Janeiro. Tenho interesses em esportes, videogames, música e tudo que envolva tecnologia e criatividade. Sou completamente apaixonado por açaí, apesar de não aceitá-los como pagamento (ainda)':'I am (Luis) Fellype Ferreira, born and raised in Rio de Janeiro. I am interested in sports, video games, music, and anything involving technology and creativity. I am completely passionate about açaí, although I do not accept it as payment (yet).',
    'Sendo um aficionado por criação, aplico meus conhecimentos colecionados ao longo da vida em frentes criativas plurais. Fotógrafo, diretor de arte, designer e criador de conteúdo, busco sempre me aprimorar e me posicionar como artista multimídia.':'Passionate about creation, I apply the knowledge collected throughout my life across multiple creative fields. Photographer, art director, designer and content creator, I am always looking to grow and establish myself as a multimedia artist.',
    'fel[lype] ferreira / portfólio.html':'fel[lype] ferreira / portfolio.html',
    'fel[lype] ferreira / portfólio':'fel[lype] ferreira / portfolio',
    'fotografia — fel[lype] ferreira':'photography — fel[lype] ferreira',
    'design — fel[lype] ferreira':'design — fel[lype] ferreira',
    'conteúdo — fel[lype] ferreira':'content — fel[lype] ferreira',
    'Me conta a sua ideia para colocarmos ela no mundo! Crie um orçamento rapidinho respondendo algumas poucas perguntas ;)':'Tell me your idea so we can bring it to life! Create a quick brief by answering a few questions ;)',
    'Solicitação de Orçamento':'Quote request', 'Solicitação de orçamento':'Quote request',
    'Vamos tirar sua ideia do papel? ✨':'Let\'s bring your idea to life? ✨',
    'sobre você':'about you', 'sobre o projeto':'about the project', 'prazo e envio':'timeline and send',
    'Os três primeiros campos são prioritários. Os demais são opcionais.':'The first three fields are essential. The others are optional.',
    'Continuar':'Continue', 'Voltar':'Back', 'Enviar solicitação':'Send request',
    'E-mail (opcional se informar WhatsApp)':'Email (optional if WhatsApp is provided)',
    'WhatsApp (opcional se informar e-mail)':'WhatsApp (optional if email is provided)',
    'Empresa, marca ou projeto (opcional)':'Company, brand or project (optional)',
    'Instagram, site ou portfólio (opcional)':'Instagram, website or portfolio (optional)',
    'Nome':'Name', 'E-mail':'Email', 'WhatsApp':'WhatsApp', 'Empresa, marca ou projeto':'Company, brand or project', 'Instagram, site ou portfólio':'Instagram, website or portfolio',
    '(opcional se informar WhatsApp)':'(optional if WhatsApp is provided)', '(opcional se informar e-mail)':'(optional if email is provided)', '(opcional)':'(optional)',
    '01. Sobre você':'01. About you', '02. Sobre o projeto':'02. About the project', '07. Prazo':'07. Timeline',
    'Se você está aqui, é porque gostou do meu trabalho, então muito obrigado! Essa seção do site é dedicada para entender suas demandas e coletar informações para começarmos. Pra cima deles!':'If you are here, it is because you liked my work, so thank you! This section is dedicated to understanding your needs and gathering information so we can get started. Let\'s do this!',
    'Se você está aqui, é porque gostou do meu trabalho, então muito obrigado! Essa seção do site é dedicada para entender suas demandas e coletar informações para começarmos.':'If you are here, it is because you liked my work, so thank you! This section is dedicated to understanding your needs and gathering information so we can get started.',
    'Pra cima deles!':'Let\'s do this!',
    'Qual serviço você está procurando?':'What service are you looking for?',
    'Fotografia':'Photography', 'Edição de vídeo':'Video editing', 'Criação de conteúdo':'Content creation', 'Ainda não tenho certeza':'I am not sure yet',
    'Que tipo de trabalho você precisa?':'What kind of work do you need?', 'Onde será realizado o trabalho?':'Where will the work take place?',
    'Existe uma data prevista?':'Is there a planned date?', 'Quantas horas de cobertura você imagina?':'How many hours of coverage do you need?',
    'Conte um pouco sobre o que você imagina para esse projeto.':'Tell me a little about what you imagine for this project.',
    'Você possui referências visuais?':'Do you have visual references?', 'Que tipo de material você precisa?':'What kind of material do you need?',
    'Qual é o principal objetivo desse projeto?':'What is the main goal of this project?', 'Você já possui uma identidade visual?':'Do you already have a visual identity?',
    'Com que frequência você precisa de materiais?':'How often do you need materials?', 'Quais materiais precisam ser criados?':'What materials need to be created?',
    'Qual será o formato do conteúdo?':'What will the content format be?', 'Quantos vídeos você precisa?':'How many videos do you need?',
    'Qual será a duração média dos vídeos?':'What will the average video length be?', 'Os vídeos já foram gravados?':'Have the videos already been recorded?',
    'Como você imagina o estilo do vídeo?':'How do you imagine the video style?', 'Para quais plataformas o conteúdo será produzido?':'Which platforms will the content be produced for?',
    'Que tipo de conteúdo você procura?':'What type of content are you looking for?', 'Qual é o principal objetivo do conteúdo?':'What is the main goal of the content?',
    'Conte um pouco sobre sua marca e seu público.':'Tell me about your brand and audience.', 'Conte o que você já sabe sobre o projeto.':'Tell me what you already know about the project.',
    'Prazo':'Timeline', 'Estas informações me ajudam a entender o momento do projeto.':'This information helps me understand the project timeline.',
    'Existe alguma informação importante que ainda não foi mencionada?':'Is there any important information not mentioned yet?',
    'OBRIGADO PELO CONTATO! ✨':'THANK YOU FOR GETTING IN TOUCH! ✨',
    'Voltar ao portfólio':'Back to portfolio'
  };
  var reverseTranslations = {};
  Object.keys(translations).forEach(function(key){ reverseTranslations[translations[key]] = key; });

  function translateValue(value, language){
    var dictionary = language === 'en' ? translations : reverseTranslations;
    var trimmed = value.trim();
    return dictionary[trimmed] ? value.replace(trimmed, dictionary[trimmed]) : value;
  }

  function applyLanguage(language){
    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var textNode;
    while (textNode = walker.nextNode()) {
      if (!textNode.parentElement.closest('script,style')) textNode.nodeValue = translateValue(textNode.nodeValue, language);
    }
    document.querySelectorAll('title,[aria-label],input[placeholder],textarea[placeholder],option,label,legend,h1,h2,h3,h4,p,span,a,button,strong,small').forEach(function(element){
      ['aria-label','placeholder'].forEach(function(attribute){
        if (element.hasAttribute(attribute)) element.setAttribute(attribute, translateValue(element.getAttribute(attribute), language));
      });
    });
    var title = document.querySelector('title');
    if (title) title.textContent = translateValue(title.textContent, language);
    document.querySelectorAll('[data-language]').forEach(function(button){
      button.textContent = language === 'en' ? 'PT' : 'EN';
      button.setAttribute('aria-label', language === 'en' ? 'Switch to Portuguese' : 'Mudar para inglês');
    });
    syncLanguageLinks(language);
  }

  function setLanguage(language){
    localStorage.setItem(STORAGE_KEY, language);
    applyLanguage(language);
  }

  function syncLanguageLinks(language){
    document.querySelectorAll('a[href]').forEach(function(link){
      var href = link.getAttribute('href');
      if (!/^(index|fotografia|design|conteudo|portfolio-detail|orcamento|admin)\.html(?:\?|$)/.test(href)) return;
      var url = new URL(href, window.location.href);
      url.searchParams.set('lang', language);
      link.setAttribute('href', url.pathname.split('/').pop() + url.search);
    });
  }

  var queryLanguage = new URLSearchParams(window.location.search).get('lang');
  var language = queryLanguage === 'en' || queryLanguage === 'pt' ? queryLanguage : (localStorage.getItem(STORAGE_KEY) || 'pt');
  localStorage.setItem(STORAGE_KEY, language);
  document.querySelectorAll('[data-language]').forEach(function(button){
    button.addEventListener('click', function(){ setLanguage(language === 'en' ? 'pt' : 'en'); language = localStorage.getItem(STORAGE_KEY); });
  });
  applyLanguage(language);
})();
