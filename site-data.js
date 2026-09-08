(function(){
  var FILES = {
    design: 'content/design.json',
    conteudo: 'content/conteudo.json',
    fotografia: 'content/fotografia.json'
  };

  var cache = { design: [], conteudo: [], fotografia: [] };

  function isVideo(src){
    return /\.(mp4|webm|mov|m4v)$/i.test(src || '');
  }

  function formatDate(iso){
    if (!iso) return '';
    var d = new Date(iso + 'T12:00:00');
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace('.', '');
  }

  function load(type){
    return fetch(FILES[type], { cache: 'no-store' })
      .then(function(response){
        if (!response.ok) throw new Error('Falha ao carregar ' + FILES[type]);
        return response.json();
      })
      .then(function(data){
        var posts = (data.posts || []).map(function(post){
          return Object.assign({}, post, { type: type, displayDate: formatDate(post.date) });
        });
        cache[type] = posts;
        return posts;
      })
      .catch(function(error){
        console.error(error);
        cache[type] = [];
        return [];
      });
  }

  var ready = Promise.all(Object.keys(FILES).map(load));

  function getPostsByType(type){
    return (cache[type] || []).slice().sort(function(a, b){ return (b.date || '').localeCompare(a.date || ''); });
  }

  function getAllPosts(){
    return getPostsByType('design').concat(getPostsByType('conteudo'), getPostsByType('fotografia'));
  }

  function getPost(id){
    return getAllPosts().find(function(post){ return post.id === id; });
  }

  window.PortfolioData = {
    ready: ready,
    getPostsByType: getPostsByType,
    getAllPosts: getAllPosts,
    getPost: getPost,
    isVideo: isVideo
  };
})();
