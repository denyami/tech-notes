npm_run:
	gatsby develop --host=0.0.0.0

open_browser:
	xdg-open http://0.0.0.0:3000

firebase_login:
	firebase login --no-localhost
firebase_init:
	firebase init
firebase_deploy:
	firebase deploy
install_heroku:
	curl https://cli-assets.heroku.com/install-ubuntu.sh | sh
path_heroku:
	echo 'PATH="/usr/local/heroku/bin:$(PATH)"' >> ~/.bashrc
heroku_login:
	heroku login --interactive
heroku_create:
	heroku create exampleapp$(whoami)$(date "+%Y%m%d")
