<?php
include_once "Rodada.php";

class Campeonato {
    var $Nome;
    var $Times = array();    
    var $Rodadas = array();    
    var $rodadaContador = 1;

    function __construct($nome) {
        $this->Nome = $nome;
    }

    function SetTimes($times) {
        $this->Times = $times;
    }

    function NovaRodada() {
        $rodada = new Rodada($this->rodadaContador);
        $times = $this->Times;

        if($rodada->Numero != 1){
            $ultimaRodada = $this->Rodadas[count($this->Rodadas) - 1];
            $times = array();
            foreach($ultimaRodada->Confrontos as $confronto){
                array_push($times, $confronto->Vencedor);
            }
        }

        $rodada->DecidirConfrontos($times);
        array_push($this->Rodadas, $rodada);
        $this->rodadaContador++;
        return $rodada;
    }
}

