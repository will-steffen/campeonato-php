<h1 class="h1-campeonato">Informações do Campeonato 
    <button onclick="showCampeonatoInfo()">Exibir/Esconder</button>
</h1>

<section style="display: block" id="section-campeonato-info">
    Nome: <?php echo $campeonato->Nome; ?> <br>
    Quantidade de Times: <?php echo count($campeonato->Times); ?> <br>
    Times:
    <ul>
    <?php 
        for($i = 0; $i < count($campeonato->Times); $i++){
            echo '<li> ' . $campeonato->Times[$i]->Nome .' </li>';
        }
    ?>
    </ul>
</section>


<script>
    var display = 'block';
    function showCampeonatoInfo() {        
        if(display == 'none'){
            display = 'block';
        }else{
            display = 'none';
        }
        var section = document.getElementById('section-campeonato-info');
        section.style.display = display;
    }
</script>





<style>
    body{
        font-family: sans-serif;
    }      
    .h1-campeonato button {
        background-color: #333;
        border-radius: 5px;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
    }
</style>



