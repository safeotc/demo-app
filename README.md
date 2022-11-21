# SafeOTC

SafeOTC is a decentralized OTC platform.

## Demo app

Demo app is meant to present some basic use cases for trading on the SafeOFC platform.

## Development

### Start

To start development process, run ./bin/start-dev from the main folder. Docker container should spin up with typescript watching process reporting any errors that occur while coding.  
Open your browser of choice and access the app via http://localhost:3000. Note that port 3000 should not be occupied, otherwise docker container will not spin up properly. If you wish to use another port, update ports setting in docker-compose.yml file.

### Stop

To stop development process, run ./bin/stop-dev from the main folder.
