/* API KEYS


live_7537c77c97ef3fdd5b4e7f1dcec930
live_e96d8cd675abb90cb810fb9953f51f
live_b803bbdf56e3178e2b2f87722d83ce

*/

function artilharia(artilheiros){

    i = 0
    o = 1
    var ultimogol = 999;
    var novogol = 998;
    

    div = document.getElementById("faasfsgagdagad");

    while(i < artilheiros.length){
        

        if(ultimogol == novogol){
            i = artilheiros.length
        }else{

            var lista1 = document.createElement("div");
            lista1.setAttribute('class', 'lista-de-artilheiros')
            div.appendChild(lista1);
    
            var lista = document.createElement("div");
            lista.setAttribute('class', 'rank-item')
            lista.innerHTML = o;
            lista1.appendChild(lista);
    
            var lista = document.createElement("img");
            lista.setAttribute('class', 'defaut');
            lista.src = "Imagens/defaut user.png";
            lista1.appendChild(lista);
    
            var lista = document.createElement("img");
            lista.setAttribute('class', 'defaut1');
            lista.src = artilheiros[i].time.escudo;
            lista1.appendChild(lista);
    
            var lista = document.createElement("div");
            lista1.appendChild(lista);
    
            var nome = document.createElement("div");
            nome.setAttribute('class', 'nome-atacante')
            nome.innerHTML = artilheiros[i].atleta.nome_popular;
            lista.appendChild(nome);
    
            var nome = document.createElement("div");
            nome.setAttribute('class', 'posicao-atacante')
            nome.innerHTML = "API NN TEM";
            lista.appendChild(nome);
    
            var lista = document.createElement("div");
            lista.setAttribute('class', 'asfafsafasfsfa');
            lista1.appendChild(lista);
    
            var lista = document.createElement("div");
            lista.setAttribute('class', 'numeros-gols');
            lista.innerHTML = artilheiros[i].gols
            lista1.appendChild(lista);
    
            ultimogol = artilheiros[i].gols;
    
            i = i + 1;
    
            novogol = artilheiros[i].gols;
    
            o = o + 1

        }



    }
}


function tabelas(placares, idRodada) {
    $("#fiashis").addClass('load12');

    i = 0

    

    a = document.getElementById("test");


    h = 0

    g = 0

    while (i < placares.partidas.length) {



        while (h < placares.partidas.length) {
            console.log(placares.partidas[h])
            h = h + 1
        }


        infojogos1 = document.querySelector("#eitaa");
        tishsfasfext = document.createTextNode(idRodada + "ª Rodada");
        



        var infojogos = document.createElement("div");
        infojogos.setAttribute('class', 'jogo__informacoes')
        a.appendChild(infojogos);

        var text = document.createElement("span");
        text.setAttribute('class', 'jogo__informacoes--data')
        text.setAttribute('id', 'test2')
        const weekday = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
        const d = new Date(placares.partidas[i].data_realizacao_iso);
        let day = d.getDay();
        text.innerHTML = weekday[day].bold() + " " + placares.partidas[i].data_realizacao + " " + placares.partidas[i].estadio.nome_popular.bold() + " " + placares.partidas[i].hora_realizacao;
        infojogos.appendChild(text);

        var minhadiv = document.createElement("div");
        minhadiv.setAttribute('class', 'sla')

        a.appendChild(minhadiv);

        var minhadiv3 = document.createElement("div");
        minhadiv3.setAttribute('class', 'eita')

        minhadiv.appendChild(minhadiv3);

        var minhadiv2 = document.createElement("div");
        minhadiv2.setAttribute('class', 'rato')

        minhadiv3.appendChild(minhadiv2);

        var minhaimg = document.createElement("img");
        minhaimg.src = placares.partidas[i].time_mandante.escudo;

        minhadiv2.appendChild(minhaimg);

        var minhadiv4 = document.createElement("div");
        minhadiv4.setAttribute('class', 'equipes__sigla')
        minhadiv4.innerHTML = placares.partidas[i].time_mandante.sigla;
        minhadiv3.appendChild(minhadiv4);

        var minhadiv3 = document.createElement("div");
        minhadiv3.setAttribute('class', 'eita')

        minhadiv.appendChild(minhadiv3);


        var minhadiv4 = document.createElement("div");
        if (placares.partidas[i].placar_mandante == null) {
            minhadiv4.innerHTML = 0
        } else {
            minhadiv4.innerHTML = placares.partidas[i].placar_mandante;
        }
        minhadiv4.setAttribute('class', 'numerosplacar')
        minhadiv3.appendChild(minhadiv4);

        var minhadiv5 = document.createElement("div");
        minhadiv5.setAttribute('class', 'eita1')
        minhadiv3.appendChild(minhadiv5)


        var minhaimg2 = document.createElement("img");
        minhaimg2.src = "Imagens/download (2).png";
        minhaimg2.setAttribute('class', 'placa')
        minhadiv5.appendChild(minhaimg2);

        var minhadiv4 = document.createElement("div");
        if (placares.partidas[i].placar_visitante == null) {
            minhadiv4.innerHTML = 0
        } else {
            minhadiv4.innerHTML = placares.partidas[i].placar_visitante;
        }
        minhadiv4.setAttribute('class', 'numerosplacar')
        minhadiv3.appendChild(minhadiv4);

        var minhadiv3 = document.createElement("div");
        minhadiv3.setAttribute('class', 'eita')
        minhadiv.appendChild(minhadiv3);


        var minhadiv4 = document.createElement("div");
        minhadiv4.setAttribute('class', 'equipes__sigla')
        minhadiv4.innerHTML = placares.partidas[i].time_visitante.sigla;
        minhadiv3.appendChild(minhadiv4);

        var minhadiv2 = document.createElement("div");
        minhadiv2.setAttribute('class', 'rato')

        minhadiv3.appendChild(minhadiv2);

        var minhaimg3 = document.createElement("img");
        minhaimg3.src = placares.partidas[i].time_visitante.escudo;

        minhadiv2.appendChild(minhaimg3);


        if (g < 1) {

            infojogos1.appendChild(tishsfasfext);

            g = g + 1
        }

        i = i + 1



    }
}

function getRodadaAtual(idRodada) {

    $.ajax({
        type: "GET",
        url: "https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/" + idRodada,
        headers: { 'Authorization': 'Bearer live_e96d8cd675abb90cb810fb9953f51f' },
        contentType: 'json',
        dataType: 'json',
        success: function (rodada) {

            
            tabelas(rodada, idRodada)

            return "ok";

        }, error: function (err) {
            console.log('Erro')
        }
    });
}



function tabela(response) {

    var i = 0
    var p = 0

    

    while (i < response.length) {

        var p = document.createElement("tr");
        p.setAttribute('class', 'teste')
        document.getElementById("tables").appendChild(p);

        var meutd = document.createElement("td");
        if (response[i].posicao <= 4) {
            meutd.setAttribute('class', 'g4')
        } else if (response[i].posicao > 4 && response[i].posicao <= 6) {
            meutd.setAttribute('class', 'sula')
        } else if (response[i].posicao > 16 && response[i].posicao <= 20) {
            meutd.setAttribute('class', 'z4')
        }
        meutd.innerHTML = response[i].posicao;
        p.appendChild(meutd);

        var meutd = document.createElement("td");
        meutd.setAttribute('class', 'tabela-left')
        p.appendChild(meutd);

        var meudiv = document.createElement("div");
        meudiv.setAttribute('class', 'nomes')
        meudiv.innerHTML = response[i].time.nome_popular;
        meutd.appendChild(meudiv);

        var meuimg = document.createElement("img");
        meuimg.src = response[i].time.escudo;
        meuimg.setAttribute('class', 'logo')
        meutd.appendChild(meuimg);


        var meutd = document.createElement("td");
        meutd.setAttribute('class', 'fundoCinza')
        meutd.innerHTML = response[i].pontos;
        p.appendChild(meutd);

        var meutd = document.createElement("td");
        meutd.setAttribute('class', 'fundoBranco')
        meutd.innerHTML = response[i].jogos;
        p.appendChild(meutd);

        var meutd = document.createElement("td");
        meutd.setAttribute('class', 'fundoCinza')
        meutd.innerHTML = response[i].vitorias;
        p.appendChild(meutd)

        var meutd = document.createElement("td");
        meutd.setAttribute('class', 'fundoBranco')
        meutd.innerHTML = response[i].empates;
        p.appendChild(meutd)

        var meutd = document.createElement("td");
        meutd.setAttribute('class', 'fundoCinza')
        meutd.innerHTML = response[i].derrotas;
        p.appendChild(meutd)

        var meutd = document.createElement("td");
        meutd.setAttribute('class', 'fundoBranco')
        meutd.innerHTML = response[i].gols_pro;
        p.appendChild(meutd)

        var meutd = document.createElement("td");
        meutd.setAttribute('class', 'fundoCinza')
        meutd.innerHTML = response[i].gols_contra;
        p.appendChild(meutd)

        var meutd = document.createElement("td");
        meutd.setAttribute('class', 'fundoBranco')
        meutd.innerHTML = response[i].saldo_gols;
        p.appendChild(meutd)

        var meutd = document.createElement("td");
        meutd.setAttribute('class', 'fundoCinza')
        meutd.innerHTML = response[i].aproveitamento;
        p.appendChild(meutd)


        var meutd = document.createElement("td");
        p.appendChild(meutd)

        minhadiv = document.createElement("div")
        meutd.appendChild(minhadiv)
        minhadiv.setAttribute('class', 'fu9afu0as')

        for (const eita of response[i].ultimos_jogos) {
            bolinha = document.createElement("div")
            minhadiv.appendChild(bolinha)
            bolinha.setAttribute('class', eita)
        }



        i = i + 1
        p = p + 1


    }


}



window.onload = function (e) {

    $.ajax({
        type: "GET",
        url: "https://api.api-futebol.com.br/v1/campeonatos/10/rodadas",
        headers: { 'Authorization': 'Bearer live_e96d8cd675abb90cb810fb9953f51f' },
        contentType: 'json',
        dataType: 'json',
        success: function (rodadas) {
            

            i = 0;
            o = 0;

            while (o < 1) {
                var rodadaStatus = rodadas[i].proxima_rodada.status;
                if (rodadaStatus == "agendada" && o < 1) {
                    var rodadaId = rodadas[i].proxima_rodada.rodada;
                    $(".seta").click(function () {
                        if(rodadaId > 1){
                            text = $("#eitaa")
                            text.empty()
    
                            const div = $("#test");
                            div.empty()

                            $("#fiashis").removeClass('load12');
    
                            rodadaId = rodadaId - 1;
                            
                            getRodadaAtual(rodadaId);
                            
                        }else{
                            alert("Voce ja chegou na ultima rodada")
                        }
                        
                    });
                    $(".seta2").click(function () {
                        if(rodadaId < 36){
                            text = $("#eitaa")
                            text.empty()

                            const div = $("#test");
                            div.empty()


                            rodadaId = rodadaId + 1;
                            
                            getRodadaAtual(rodadaId);
                        }else{
                            alert("Voce atinfio o maximo de rodadas")
                        }
                    });
                    
                    getRodadaAtual(rodadaId);
                    o = o + 1;
                } else {
                    i = i + 1;
                    
                }

            }

        }, error: function (err) {
            console.log('Erro')
        }
    });


    $.ajax({
        type: "GET",
        url: "https://api.api-futebol.com.br/v1/campeonatos/14/tabela",
        headers: { 'Authorization': 'Bearer test_48bb84f25ab4cd9c26e317546a574a' },
        contentType: 'json',
        dataType: 'json',
        success: function (response) {

            
            tabela(response);


        }, error: function (err) {
            console.log('Erro')
        }
    });

    $.ajax({
        type: "GET",
        url: "https://api.api-futebol.com.br/v1/campeonatos/{campeonato_id}/artilharia",
        headers: { 'Authorization': 'Bearer test_48bb84f25ab4cd9c26e317546a574a' },
        contentType: 'json',
        dataType: 'json',
        success: function (response) {

            console.log(response)
            artilharia(response)

        }, error: function (err) {
            console.log('Erro na artilharia')
        }
    });




    var a = document.getElementById('barra-lateral');
    $(a).on("click", function (e) {
        if ($('.menu').hasClass('active')) {
            $('.menu').removeClass('active');
            $("#atb").removeClass('abl');
        } else {
            $('.menu').addClass('active');
            $("#atb").addClass('abl');
        }
    });

    var a = document.getElementById("atb")
    $(a).on("click", function (e) {
        $("#atb").removeClass('abl');
        $('.menu').removeClass('active');
    });


    var btn = document.getElementById('fajufisifbsfauifi');
    $(btn).on("click", function (e) {
        if ($('#1').hasClass('load13')) {
            $('#1').removeClass('load13');
            $('#1').addClass('load12');
            $('#2').addClass('load13');
            $('#fajosbfvgusfayuisgfspiy').removeClass('bordaverde');
            $('#fajufisifbsfauifi').addClass('bordaverde');
            $('#2').removeClass('load12');
            
        } 
    });

    var btn = document.getElementById('fajosbfvgusfayuisgfspiy');
    $(btn).on("click", function (e) {
        if ($('#2').hasClass('load13')) {
            $('#2').removeClass('load13');
            $('#2').addClass('load12');
            $('#1').addClass('load13');
            $('#fajufisifbsfauifi').removeClass('bordaverde');
            $('#fajosbfvgusfayuisgfspiy').addClass('bordaverde');
            $('#1').removeClass('load12');
            
        } 
    });

    

    var btn = document.getElementById('btn-div');
    $(btn).on("click", function (e) {
        if ($('.container').hasClass('load12')) {
            $('.container').removeClass('load12');
            $('.container').addClass('load13');
        } else {
            $('.container').addClass('load12');
            $('.container').removeClass('load13');
        }
    });
   
    
}
