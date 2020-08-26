<?php
include_once 'models/Jogador.php';
include_once 'models/Time.php';

function GetPosicao() {
    $posicoes = array("Atacante", "Meio-Campo", "Zagueiro", "Goleiro");
    return $posicoes[rand(0, count($posicoes) - 1)];
}
function GerarNome() {
    $countSilabasNome1 = rand(2, 4);
    $countSilabasNome2 = rand(2, 4);
    $nome = '';

    for($i = 0; $i < $countSilabasNome1; $i++){
        $nome .= GetSilaba();
    }
    $nome .= " ";
    for($i = 0; $i < $countSilabasNome2; $i++){
        $nome .= GetSilaba();
    }
    
    return ucwords($nome);
}
function GetSilaba() {
    $consoantes = array('b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'qu', 'r', 's', 't', 'v', 'x', 'z');
    $vogais = array('a', 'e', 'i', 'o', 'u');

    $maxVogalIndex = count($vogais) - 1;
    $vogalIndex = rand(0, $maxVogalIndex);
    $vogal = $vogais[$vogalIndex];

    $consoante = $consoantes[rand(0, count($consoantes) - 1)];
    return $consoante . $vogal;
}

$jogadores = array();
$numeroDeTimes = 8;
$numeroJogadoresPorTime = 5;

for($i = 0; $i < ($numeroJogadoresPorTime * $numeroDeTimes); $i++){
    $nome = GerarNome();
    $posicao = GetPosicao();
    $jogador = new Jogador($nome, $posicao);
    array_push($jogadores, $jogador);
}

$times = array();
for($i = 0; $i < $numeroDeTimes; $i++){
    $time = new Time(GerarNome());
    for($j = 0; $j < $numeroJogadoresPorTime; $j++){
        $indexJogador = $numeroJogadoresPorTime * $i + $j;
        $time->AdicionaJogador($jogadores[$indexJogador]);
    }
    array_push($times, $time);
}

$x = 0;