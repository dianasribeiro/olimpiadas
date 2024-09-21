function pesquisar(){
    
     // Seleciona a seção HTML onde os resultados serão exibidos
        let section = document.getElementById("resultados-pesquisa");

        let campoPesquisa = document.getElementById("campo-pesquisa").value //utilizamos o metodo camel case(não se usa o traço)
        
        // se o campoPesquisa for uma string sem nada
        if(!campoPesquisa ){
            section.innerHTML = "<p>Nada foi encontrado.Você precisa digitar o nome de um atleta ou esportes</p>"
            return
        }

        campoPesquisa = campoPesquisa.toLowerCase()

        // Inicializa uma string vazia para armazenar o HTML dos resultados
        let resultados = "";
        let titulo = "";
        let descricao = "";
        let tags = "";
    
        // Itera sobre cada dado da lista de dados e cria o HTML correspondente
        for (let dado of dados) {
            titulo = dado.titulo.toLowerCase()
            descricao = dado.descricao.toLowerCase()
            tags = dado.tags.toLowerCase()
            // se titulo includes campoPesquisa 
            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) { 
                 // Cria um novo elemento HTML para cada resultado 
                resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
            }
        }
        
        if(!resultados ){
            resultados = "<p>Nada foi encontrado</p>"

         }

        // Atualiza o conteúdo HTML da seção com os resultados gerados
        section.innerHTML = resultados;
    }



//console.log(dados); no lugar da Rayssa Leal poderiamos colocar ${dados[0].titulo} dentro do h2






           


