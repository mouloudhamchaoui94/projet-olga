async function get(url) {
  var response = await fetch(url);
  var data = await response.json();
  return data;
}

// Exemple : files_name = ['frais1', 'frais2']
function view(res) {

  var files_name = [];
  var documents = res['documents'];
  for (var key in documents) {
    files_name.push(documents[key]['filename']);
  }
  
  var text = '<ul>';
  for (var i=0; i<files_name.length; i++) {
    text += `<li>${files_name[i]}</li>`;
  }
  text += '</ul>';
  //Inserer le code HTML dans la page web
  document.getElementById('content').innerHTML = text;
}

// Récupérer les factures
async function getFactures() {
  var res = await get('https://secure.askolga.fr/bucket/d11b9caf55eb2857bb8315018ca25a39d8924af7ea9152d1ebdcbc65e312eac05fece1ce5410d/search/36772eeab52ce546d0b9c7e3175bbba1ba37cb91e5c767f50f583152575165c45fece3b17be66-show.json');
  view(res);
}

// Récupérer les emails
async function getEmails() {
  var res = await get('https://secure.askolga.fr/bucket/d11b9caf55eb2857bb8315018ca25a39d8924af7ea9152d1ebdcbc65e312eac05fece1ce5410d/search/9ff4479c2c67e75b2e553cf7b2632a5d4b959fb085db38ef772d023503e5e04e5ff09df9464cc-show.json');
  view(res);
}

// Récupérer les missions
async function getMissions() {
  var res = await get('https://secure.askolga.fr/bucket/d11b9caf55eb2857bb8315018ca25a39d8924af7ea9152d1ebdcbc65e312eac05fece1ce5410d/search/e96988b40631587793e7c08e484cb777356f4e7fff92824a05772716d32f17cd5ff09e14c8398-show.json');
  view(res);
}

// Récupérer les réunions
async function getReunions() {
  var res = await get('https://secure.askolga.fr/bucket/d11b9caf55eb2857bb8315018ca25a39d8924af7ea9152d1ebdcbc65e312eac05fece1ce5410d/search/b4b2147addf0cd810ef6a37a7b967456e46459c3b089696da788c83fee28eebe5ff09e2b15cb3-show.json');
  view(res);
}

document.getElementById('factures').onclick = getFactures;
document.getElementById('emails').onclick = getEmails;
document.getElementById('missions').onclick = getMissions;
document.getElementById('reunions').onclick = getReunions;