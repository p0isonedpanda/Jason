# Jason
Discord bot for Swinburne Computer Science Discord server

We needed a cool bot for our discord server so I started making one. This is currently tested to be working on Node.js 10.4.0.

## Installation
Installing Jason is pretty easy if you've ever touched bots before, just run `npm install` in the root directory to install all dependancies and create a file named `config.json` with the fields `prefix` and `token`, where you put the bot's command prefix and login token respectively. If you do not know how to do this already then this bot is likely not for you, go learn about making bots from one of the various sources online.

It should be noted also that I run this bot in a Linux environment, and as such it is tailored to work as well as possible there.

## Commands
Right now Jason has a very limited set of commands but these will expand as time goes on and the needs of the server change. So far we have:
* `ping` - Check if Jason is still alive
* `say [text]` - Make Jason say anything you want
* `roll [num of dice]d[num of faces]` - Rolls some dice
* `figlet [text]` - It's figlet, I think you know what this is
* `cowsay [text]` - Seriously you should know what this is

## TODO
* Add random "now playing" states
* Fix up logging so it's more useful
* Add a database backend to track user progress in various in server games
