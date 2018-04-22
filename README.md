# Angular Watson Voice

An [IBM Watson](https://www.ibm.com/watson/) speech to text application in Angular and Node. Uses the [speech-javascript-sdk](https://github.com/watson-developer-cloud/speech-javascript-sdk) library for speech to text services in web browsers.

## Requirements

1. Get IBM Watson service credentials

    * Sign up for a free [IBM Cloud account](https://console.bluemix.net/registration/?target=%2Fdeveloper%2Fwatson%2Fservices) or [log in](https://console.bluemix.net/login?state=%2Fdeveloper%2Fwatson%2Fservices).

    * Go to the [Watson Developer Services](https://console.bluemix.net/developer/watson/services) page.

    * Select Speech to Text and create a project.

    * Copy the credentials to authenticate to your service instance (will be used later in `.env` config).

1. Install the [Angular CLI](https://cli.angular.io/)

    ```bash
    npm install -g @angular/cli
    ```

## Getting Started

1. Clone this repository

    ```bash
    git clone https://github.com/stevengregory/angular-watson-voice.git
    cd angular-watson-voice
    ```

1. Install the npm packages

    ```bash
    npm install
    ```

1. Configure environment settings

    Create a `.env` file and place it in the root directory of the project. Add the following username & password and replace the values with your IBM Watson service credentials. No worries, the
    file is in the `.gitignore` so it won't get pushed to the GitHub repository.

    ```javascript
    SPEECH_TO_TEXT_USERNAME=your_ibm_project_username
    SPEECH_TO_TEXT_PASSWORD=your_ibm_project_password
    ```

## Running the app locally

1. Build the Angular app and launch the node server.

    Running this command will start both the client app & token server and open the browser to `http://localhost:4200`.

   ```bash
   npm start
    ```
