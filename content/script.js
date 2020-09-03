var display = 'block';
function showCampeonatoInfo() {
    if (display == 'none') {
        display = 'block';
    } else {
        display = 'none';
    }
    var section = document.getElementById('section-campeonato-info');
    section.style.display = display;
}



function Node(time, htmlClass) {
    this.text = {
        name: {
            val: time.Nome + ': ' + time.Habilidade
        }
    };
    this.HTMLclass = htmlClass;
    this.children = [];
}

function gerarTabela() {    
    var confrontoFinal = campeonato.Rodadas[2].Confrontos[0];
    var vencedorNode = new Node(confrontoFinal.Vencedor, 'winner');  

    var finalTime1 = new Node(confrontoFinal.Time1); 
    var finalTime2 = new Node(confrontoFinal.Time2); 

    vencedorNode.children = [
        finalTime1,
        finalTime2
    ];



    var semiFinais = campeonato.Rodadas[1].Confrontos;
    var semiFinal1 = semiFinais.filter(x => x.Vencedor.Nome == confrontoFinal.Time1.Nome)[0];
    var semiFinal2 = semiFinais.filter(x => x.Vencedor.Nome == confrontoFinal.Time2.Nome)[0];

    var semiFinal1Time1 = new Node(semiFinal1.Time1); 
    var semiFinal1Time2 = new Node(semiFinal1.Time2); 
    var semiFinal2Time1 = new Node(semiFinal2.Time1); 
    var semiFinal2Time2 = new Node(semiFinal2.Time2); 

    finalTime1.children = [
        semiFinal1Time1,
        semiFinal1Time2
    ];

    finalTime2.children = [
        semiFinal2Time1,
        semiFinal2Time2
    ];

    var quartas = campeonato.Rodadas[0].Confrontos;
    var quarta11 = quartas.filter(x => x.Vencedor.Nome == semiFinal1.Time1.Nome)[0];
    var quarta12 = quartas.filter(x => x.Vencedor.Nome == semiFinal1.Time2.Nome)[0];
    var quarta21 = quartas.filter(x => x.Vencedor.Nome == semiFinal2.Time1.Nome)[0];
    var quarta22 = quartas.filter(x => x.Vencedor.Nome == semiFinal2.Time2.Nome)[0];

    semiFinal1Time1.children = [
        new Node(quarta11.Time1),
        new Node(quarta11.Time2)
    ];

    semiFinal1Time2.children = [
        new Node(quarta12.Time1),
        new Node(quarta12.Time2)
    ];

    semiFinal2Time1.children = [
        new Node(quarta21.Time1),
        new Node(quarta21.Time2)
    ];

    semiFinal2Time2.children = [
        new Node(quarta22.Time1),
        new Node(quarta22.Time2)
    ];

    renderTabela(vencedorNode);    
}

function renderTabela(nodePrincipal) {
    var tree_structure = {
        chart: {
            container: "#OrganiseChart6",
            levelSeparation:    20,
            siblingSeparation:  15,
            subTeeSeparation:   15,
            rootOrientation: "EAST",
    
            node: {
                HTMLclass: "tennis-draw",
                drawLineThrough: true
            },
            connectors: {
                type: "step",
                style: {
                    "stroke-width": 2,
                    "stroke": "#ccc"
                }
            }
        },
        nodeStructure: nodePrincipal
    };

    new Treant( tree_structure );
}

gerarTabela();