<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	  $data = json_decode(file_get_contents("php://input"), true);
	    file_put_contents("history.json", json_encode($data));
	    }
	    ?>
