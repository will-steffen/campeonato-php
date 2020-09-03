<?php
include_once "Dados.php";

$campeonato = GerarCampeonato(8, 5);
$campeonato->NovaRodada();
$campeonato->NovaRodada();
$campeonato->NovaRodada();

?>



<html>

<head>
    <title>
        Campeonato teste PHP
    </title>
    <link rel="stylesheet" type="text/css" href="/campeonato-php/content/style.css" />    
    <link rel="stylesheet" type="text/css" href="/campeonato-php/content/Treant.css" />    
    <link rel="stylesheet" type="text/css" href="/campeonato-php/content/example7.css" />    
</head>

<body>
    <?php include "template-campeonato.php"; ?>
    <?php include "template-chave.php"; ?>  

    <div class="chart Treant loaded" id="OrganiseChart6"></div>
    <script src="/campeonato-php/content/raphael.js"> </script>
    <script src="/campeonato-php/content/Treant.js"> </script>
    <script src="/campeonato-php/content/script.js"> </script>
</body>

</html>

