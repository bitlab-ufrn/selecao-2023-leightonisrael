//Função que verifica palavras inadequadas e substitui-as
function verificaPalavrasInadequadas() {
  
  //Relação das palavras inadequadas de cunho ofensivo
  var palavrasInadequadas =  ['\\bcu\\b', '\\bcaralho\\b', '\\bporra\\b', 'matar', 'suicidio', '\\bcuzão\\b', '\\blascar\\b','\\bcuzuda\\b', '\\bputa\\b', '\\bfoda\\b', '\\bmerda\\b', '\\bcacete\\b', '\\bcorn[o,a]\\b', 'fude', '\\banal\\b', '\\bidiota\\b', '\\baberração\\b', 'aberracao', 'aberraçao', '\\bviado\\b', '\\btraveco\\b', '\\bviadinho\\b', '\\bviadão\\b', '\\bsexo com\\b',  '\\bsexo c\\b', '\\btransar\\b', 'viadao', '\\bvagabund[o, a]\\b', '\\bdesgraça\\b', '\\bbicha\\b', '\\bsapatão\\b', 'sapatao', '\\bsapatilha\\b', '\\bprostituta\\b', '\\bprostituto\\b', '\\bimbecil\\b', '\\bcretin[o, a]\\b', '\\bidiota\\b', '\\bestúpido\\b', '\\blouco\\b', '\\bdoente\\b', '\\bpsicopata\\b', '\\bsociopata\\b', '\\bmaluco\\b', '\\bdébil mental\\b', '\\bretardado\\b', '\\banormal\\b', '\\bdesgraçado\\b', '\\bincompetente\\b', '\\bvagabundo\\b', '\\bpreguiçoso\\b', '\\bcovarde\\b', '\\btraidor\\b', '\\bmentiroso\\b', '\\bfalso\\b', '\\bhipócrita\\b', '\\bcínico\\b', '\\bdesonesto\\b', '\\bladrão\\b', '\\bcorrupt[o, a]\\b', '\\bcriminos[o, a]\\b', '\\bassassin[o, a]\\b', '\\bterrorista\\b', '\\bfilho da puta\\b', '\\bnazista\\b', '\\bfascista\\b', '\\bracista\\b', '\\bhomofóbico\\b', '\\bsexista\\b'];  
  
  //Obtém o valor do campo de comentário
  const comentario = document.getElementById("comentario").value;

  //Verifica e Substitui por asteriscos
  let comentarioModificado = comentario;
  let encontrado = false;
  for (let i = 0; i < palavrasInadequadas.length; i++) {
  const regex = new RegExp(palavrasInadequadas[i], 'gi');
  if (comentarioModificado.match(regex)) {
    comentarioModificado = comentarioModificado.replace(regex, '*'.repeat(palavrasInadequadas[i].length));
    encontrado = true;
    }
  }

  //Exibe uma mensagem se palavras inadequadas foram encontradas
  const mensagemDiv = document.getElementById("mensagem");
  const comentarioBloqueadoDiv = document.getElementById("comentarioBloqueado");
  if (encontrado) {
    mensagemDiv.innerText = "Atenção: Seu comentário foi deletado por ter utilizado uma palavra que infringe a diretriz do site. ";
    comentarioBloqueadoDiv.innerText = comentarioModificado;
    comentarioBloqueadoDiv.style.display = "block";
    document.getElementById("comentario").classList.add("comentario-bloqueado");
    return false;
  } else {
    mensagemDiv.innerText = "";
    comentarioBloqueadoDiv.style.display = "none";
    document.getElementById("comentario").classList.remove("comentario-bloqueado");
  }

  //Adiciona o comentário modificado à lista de comentários
  adicionarComentario(comentarioModificado);

  //Limpa o campo de comentário
  document.getElementById("comentario").value = "";
  return false;
}

//Função para adicionar um comentário na lista de comentários
function adicionarComentario(comentario) {
  const comentariosDiv = document.getElementById("comentarios");
  const comentarioP = document.createElement("p");
  comentarioP.innerText = comentario;
  comentariosDiv.appendChild(comentarioP);
}


