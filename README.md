# Music Recommendation Tool

This is a simple project that recommends music to its user, made to demonstrate the use of jQuery and web design in a web application.
(Some assets of the application uses Spotify's work released to the public domain, and I am not claiming that as my own.)

NOTE: This is a public version for observation, and is not the actual version deployed on Heroku. To reproduce that application, you must
use your own client information to authenticate the Spotify web application.

## Installation

This project runs on Node.js, so you would need to install that before running the project. Then, just clone the repository.

    $ node app

### Using your own credentials (Cited by Spotify)
You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. For the examples, we registered these Redirect URIs:

* http://localhost:8888 (needed for the implicit grant flow)
* http://localhost:8888/callback

## Running the Application
In order to run the application, simply type:

    $ node app

Then, open `http://localhost:8888` in a browser of your choosing.