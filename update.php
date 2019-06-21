<?php
echo("Fetching from github<br>\n");
echo exec('git fetch --all');
echo("<br>\nResetting to the head of origin/master<br>\n");
echo exec('git reset --hard origin/master');
echo("<br>\n</br>Done<br>\n");
