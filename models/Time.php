<?php

class Time {
    var $Nome;
    var $Jogadores = array();

    public function __construct($nome) {
        $this->Nome = $nome;
    }

    public function AdicionaJogador(Jogador $jogador) {
        array_push($this->Jogadores, $jogador);
    }
}