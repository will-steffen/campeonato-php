<?php
include_once 'models/Jogador.php';
include_once 'models/Time.php';
include_once 'models/Campeonato.php';

function GetPosicao() {
    $posicoes = array("Atacante", "Meio-Campo", "Zagueiro", "Goleiro");
    return $posicoes[rand(0, count($posicoes) - 1)];
}

function GerarNome(bool $composto) {
    $nome = GetPalavra();
    if($composto){
        $nome .= " " . GetPalavra();      
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

function GetPalavra() {
    $nome = '';
    $countSilabasNome = rand(2, 3);
    for($i = 0; $i < $countSilabasNome; $i++){
        $nome .= GetSilaba();
    }
    return $nome;
}

function GerarCampeonato($numeroDeTimes, $numeroJogadoresPorTime) {
    $jogadores = array();

    for($i = 0; $i < ($numeroJogadoresPorTime * $numeroDeTimes); $i++){
        $nome = GerarNome(true);
        $posicao = GetPosicao();
        $habilidade = rand(0, 10);
        $jogador = new Jogador($nome, $posicao, $habilidade);
        array_push($jogadores, $jogador);
    }
    
    $times = array();
    for($i = 0; $i < $numeroDeTimes; $i++){
        $time = new Time(GerarNome(false));
        for($j = 0; $j < $numeroJogadoresPorTime; $j++){
            $indexJogador = $numeroJogadoresPorTime * $i + $j;
            $time->AdicionaJogador($jogadores[$indexJogador]);
        }
        array_push($times, $time);
    }
    
    $campeonato = new Campeonato("Brasileirão");
    $campeonato->SetTimes($times);

    return $campeonato;    
}


