<?php
  $fp = fopen('results/data.csv', 'a');

  foreach ($_POST as $fields) {
    fputcsv($fp, $fields);
  }

  fclose($fp);
?>
