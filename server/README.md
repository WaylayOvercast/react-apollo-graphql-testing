

Using Docker {

    # setup a docker-compose.yml file in the ./server route

    - if on Windows OS ensure you use an elevated (admin) Command terminal.
    - ensure Docker-desktop app is installed and running.
    - cd to server/docker-compose.yml route using terminal.

    commands {
        docker-compose up -d    # starts database instance

        docker ps               # will list status/ DB's
    }
}

Using Client Scripts {

    - ensure terminal is in ./server/client route
    
    commands {
        npm run win-build      # only use on windows OS, will build and move contents to ./server/public.
        npm run lin-build      # for Mac & linux OS, will build and move contents to ./server/public.
    }

    - if you have to run win-build ensure server is shutdown before running, as it wont build and sometimes
      will create a new file "build" in the ./server/public directory.
}

Running App {

    note: API serves static react client, no need to run react.

    - ensure build has been properly setup.
    
    commands {
        npm run dev     # will run nodemon instance of the api (might just uninstall nodemon soon tbh)
        npm run server  # runs node on main.js
    }
}