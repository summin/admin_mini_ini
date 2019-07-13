<?php   

echo  <<<_END
    <br>
    <div class='row'>
_END;

for ($i = 1; $i < 25; ++$i) {
    echo <<<_END
    <div class="col-6 col-md-2">
    <button class="btn btn-secondary btn-lg btn-block btnclps" type="button" data-toggle="collapse" data-target="#collapseExample$i" aria-expanded="true" aria-controls="collapseExample$i">
      $i
    </button> <br>
    </div>

_END;
}

echo <<<_END
<div class="col-12 text-center dayselected"><h3> Please select the day from above! </h3></div>
<div class="col-12"> <p class="returnedini"></p></div>

_END;

for ($i = 1; $i < 25; ++$i) {
    echo <<<_END

    <div class="col-12 collapse" id="collapseExample$i">
    
    <form>
    <div class="row">
    <div class="col-md-2">
    <h3> "Day $i" </h3> 
    </div>
    <div class="col-md-8 text-center">
    <div class="alert alert-info daysuccessalert" role="alert">
    Configuration of day $i is loaded. Please, change values below and save changes.
    </div>
    </div>
    <div class="col-md-2 text-right">
    <button class="btn btn-primary btnform">Save</button>
    </div>
    </div>
    <br>
_END;

    foreach ($config as $key => $value){
        $strarr = explode(".", $key);
        if ($strarr[0] == $i){
            $pos = strpos($key, $strarr[0]);
            if ($pos !== false) {
                $newkey = substr_replace($key, "" , $pos, strlen($strarr[0]) + 1);
            }
            
            echo <<<_END

            <div class="col-12">
            <label for="$newkey">$newkey</label>
            <input type="text" class="form-control" id="$newkey" name="$newkey" placeholder="$value" value="$value">
            </div>
            <br>
_END;
        }
    }
    echo <<<_END
    </form>
    </div>
_END;

}
echo "</div>";
?>