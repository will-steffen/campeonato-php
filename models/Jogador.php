<?php

class Jogador {    
    var $Nome;
    var $Posicao;

    public function __construct($nome, $posicao) {
        $this->Nome = $nome;
        $this->Posicao = $posicao;
    }
}
