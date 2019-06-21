<?php
echo("Fetching from github<br>\n");
echo exec('git fetch --all');
echo("Resetting to the head of origin/master<br>\n");
echo exec('git reset --hard origin/master');
echo("Done<br>\n");
