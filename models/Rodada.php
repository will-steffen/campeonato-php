<?php
include_once "Confronto.php";

class Rodada {
    var $Numero;
    var $Confrontos = array();

    function __construct($numero) {
        $this->Numero = $numero;
    }

    function DecidirConfrontos($times) {
        while (count($times) > 0){
            $time1 = $times[rand(0, count($times) - 1)];  
            $times = $this->RetirarTime($times, $time1); 
            $time2 = null;     

            if(count($times) > 0){
                $time2 = $times[rand(0, count($times) - 1)];  
                $times = $this->RetirarTime($times, $time2); 
            }
            $confronto = new Confronto($time1, $time2);
            array_push($this->Confrontos, $confronto);
        }
    }

    private function RetirarTime($times, $time) {
        $timesAuxiliar = array();

        foreach($times as $t){
            if($t->Nome != $time->Nome){
                array_push($timesAuxiliar, $t);
            }
        }

        return $timesAuxiliar;
    }
}


