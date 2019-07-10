<?php
echo("Fetching from github<br>\n");
echo exec('git fetch --all');
echo("<br>\nResetting to the head of origin/master<br>\n");
echo exec('git reset --hard origin/master');
echo("<br>\nUpdating Composer Dependencies<br>\n");
echo exec('php composer.phar install');
echo("<br>\n</br>Done<br>\n");
