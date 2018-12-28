#!/bin/sh
ng build --prod
rsync -avzh --progress dist/trashnetworks/* quinn@qfreas.com:/var/www/html