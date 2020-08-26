<?php
include_once "Dados.php";

$campeonato = GerarCampeonato(8, 5);
include "template-campeonato.php";

$campeonato->NovaRodada();
$campeonato->NovaRodada();
$campeonato->NovaRodada();


?>

