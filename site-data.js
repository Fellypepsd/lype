(function(){
  var STORAGE_KEY = 'fellypePortfolioPosts';

  function readPosts(){
    try {
      var posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(posts) ? posts : [];
    } catch (error) {
      return [];
    }
  }

  function writePosts(posts){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }

  function makeId(title){
    return title.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') || 'novo-projeto';
  }

  function uniqueId(title, posts){
    var base = makeId(title);
    var id = base;
    var count = 2;
    while (posts.some(function(post){ return post.id === id; })) {
      id = base + '-' + count;
      count++;
    }
    return id;
  }

  function addPost(post){
    var posts = readPosts();
    var newPost = Object.assign({}, post, { id: uniqueId(post.title, posts) });
    posts.unshift(newPost);
    writePosts(posts);
    return newPost;
  }

  function deletePost(id){
    var posts = readPosts().filter(function(post){ return post.id !== id; });
    writePosts(posts);
    var deleted = readDeleted();
    if (deleted.indexOf(id) === -1) deleted.push(id);
    localStorage.setItem('fellypePortfolioDeleted', JSON.stringify(deleted));
  }

  function readDeleted(){
    try {
      var deleted = JSON.parse(localStorage.getItem('fellypePortfolioDeleted') || '[]');
      return Array.isArray(deleted) ? deleted : [];
    } catch (error) {
      return [];
    }
  }

  function savePost(post){
    var posts = readPosts();
    var index = posts.findIndex(function(item){ return item.id === post.id; });
    if (index === -1) return false;
    posts[index] = Object.assign({}, posts[index], post);
    writePosts(posts);
    return true;
  }

  function upsertPost(post){
    var posts = readPosts();
    var index = posts.findIndex(function(item){ return item.id === post.id; });
    if (index === -1) {
      posts.unshift(post);
    } else {
      posts[index] = Object.assign({}, posts[index], post);
    }
    writePosts(posts);
    return post;
  }

  function restorePost(id){
    localStorage.setItem('fellypePortfolioDeleted', JSON.stringify(readDeleted().filter(function(item){ return item !== id; })));
  }

  function getPostsByType(type){
    return readPosts().filter(function(post){ return post.type === type; });
  }

  function getPost(id){
    return readPosts().find(function(post){ return post.id === id; });
  }

  window.PortfolioData = {
    readPosts: readPosts,
    addPost: addPost,
    savePost: savePost,
    upsertPost: upsertPost,
    deletePost: deletePost,
    readDeleted: readDeleted,
    restorePost: restorePost,
    getPostsByType: getPostsByType,
    getPost: getPost,
    makeId: makeId
  };
})();
