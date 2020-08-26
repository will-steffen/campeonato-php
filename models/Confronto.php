<?php

class Confronto {
    var $Time1;
    var $Time2; 

    function __construct($time1, $time2) {
        $this->Time1 = $time1;
        $this->Time2 = $time2;
    }

    function GetVencedor() {
        if(!$this->Time1 && $this->Time2){
            return $this->Time2;
        }

        if(!$this->Time2 && $this->Time1){
            return $this->Time1;
        }

        if($this->Time1->GetHabilidade() > $this->Time2->GetHabilidade()){
            return $this->Time1;
        }
        return $this->Time2;
    }
}

