<?php
include "data.php";

$template = "tx.executeSql('INSERT INTO construccion(id,html) VALUES (?,?)',[";
generateDatabaseDocument($array);

	function generateDatabaseDocument($array){
		global $template;
		$i = 1;
		foreach ($array as $key => $row) {
			echo $template.$i.",'".$row."'])\n";
			$i++;
		}
	}
?>
