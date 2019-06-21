<?php
echo("Fetching from github\n");
exec('git fetch --all');
echo("Resetting to the head of origin/master\n");
exec('git reset --hard origin/master');
echo("Done\n");
