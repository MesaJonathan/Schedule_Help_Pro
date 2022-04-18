# Schedule Help Pro

## How to get it working on your device

1. Clone onto your device
2. If this is first time running, open a terminal, navigate into the server folder and type "npm install" and hit enter (this installs all necessary packages)
3. Open another terminal, navigate into the client folder and also type "npm install" and hit enter
4. download Moesif Corse changer web extension on chrome/firefox (needed for uf api to work)https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc?hl=en-US, after installation, you have to click on the plugins tab on chrome/firefox and turn it on.
5. Navigate the terminal in VSCode into the "server" folder
6. type "npm run dev" and hit enter to connect to mongoDB (working if logs "server started on 1337") (DOESN'T WORK ON MAC OS)
7. Open a separate terminal in VSCode and navigate into "client" folder
8. Finally type "npm start" and hit enter
9. If all is set up correctly a tab should open up in chrome/safari

## Code Layout

Inside schedule helo pro there are two main folders, client which holds the front-end and server which holds the back-end
Within client is the folder called "public" this holds the html for the react web page and some of the pictures that are loaded in
also within client is the "src" folder which holds all the source files. The pages that are loaded onto the HTML file are contained within a "pages" folder inside "src".

Within the Server folder are all of the files needed to connect to Mongo DB and both request & send user login info.


