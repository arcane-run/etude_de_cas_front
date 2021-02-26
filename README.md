# Arcane Study Case

## Introduction
The goal of this project is to develop a minimal front-end application using React.js framework in order to handle users on the platform.

## BackEnd
The BackEnd part is a REST API in python using :
  - Flask
  - SQLAlchemy
  - Marshmallow

### Prerequesites
You need to have :
* 3.7 python installed : https://www.python.org/downloads/release/python-370/

* Pipenv installed :
```sh
# Install pipenv
$ pip3 install pipenv
```
See as well the [Pipenv documentation]

### Installation
Once you have cloned the repository and are in it, you need to activate venv :
```sh
# Activate venv
$ cd ./backend
$ pipenv shell
```
Then you need to install dependencies :
```sh
# Install dependencies automatically
$ pipenv install
```

## Run the server
### First use
You need to create your local SQlite Database :
```sh
# Create DB and fill it with fictional data
$ python databaseCreation.py
```

### Run the server
To run the server :
```sh
# Run server (http://localhost:5000)
$ python app.py
```

## FrontEnd

Install depedencies:
```sh
$ cd ./frontend
$ nvm use
$ npm install
```

Start the project:
```sh
npm start
```
