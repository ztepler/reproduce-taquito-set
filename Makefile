SHELL := /bin/bash

install:
	npm i

compile:
	ligo compile contract contract.jsligo --michelson-format json -o contract.json
	ligo compile contract contract.jsligo -o contract.tz

deploy:
	node deploy.js

interact:
	node interact.js

