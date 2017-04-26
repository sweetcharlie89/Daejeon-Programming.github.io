var members = [ //name of the memenbers pages to create proper links
  'sylvain', 'chulhee'
]

members.sort(); //to get the list sorted alphabetically

var pageList = document.getElementById('page-list');

members.map(function(member) {
  let linkElt = document.createElement('a');
  linkElt.href = 'pages/' + member + '.html';
  linkElt.textContent = member;
  listElt = document.createElement('li');
  listElt.appendChild(linkElt);
  pageList.appendChild(listElt);
});
