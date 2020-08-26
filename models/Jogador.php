<?php

class Jogador {    
    var $Nome;
    var $Posicao;

    var $Habilidade;

    public function __construct($nome, $posicao, $habilidade) {
        $this->Nome = $nome;
        $this->Posicao = $posicao;
        $this->Habilidade = $habilidade;
    }
}
