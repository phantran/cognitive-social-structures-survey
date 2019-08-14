# CognitiveSocialStructuresSurvey

Make sure you have Nodejs and NPM installed on your machine.Then follow the steps below to set up the web server.
1. Use cd command on terminal to the folder you want to set up the project.
2. Clone the project by using `git clone https://github.com/phantran/CognitiveSocialStructuresSurvey.git`
3. Install the dependencies by using the command `npm install`
4. Open another terminal and execute `mongod` to have the Mongo database running.
5. Create a folder and name it `Collected_Data`
6. Run the server on your local host with this command `node app.js`
7. Open a browser and access the index of the website with the address of localhost: `http://localhost:3000`


## Deploy the application by Ngrok:
1. Download ngrok: https://ngrok.com/download
2. Unzip the downloaded file
3. Open terminal and cd to the folder that contains the downloaded ngrok file
4. run this command in the terminal `./ngrok http 3000`
5. Copy the generated tunnel url and paste it into a browser to access the survey application

## Deploy the application by cloud service (AWS):
Register an AWS free account: https://aws.amazon.com/ec2/getting-started/
Then launch the free EC2 instance, download the key pair file .pem to your computer

1. Connect to EC2 instance by openning terminal and run the following command:

`ssh -i "KEY PAIR PEM FILE NAME" "URL TO YOUR INSTANCE"`

For example: the domain name of my ec2 instance is ec2-user@ec2-13-59-244-56.us-east-2.compute.amazonaws.com
please check the EC2 instance console for the domain name
The command will be changed if you stop the instance

2. Install nvm on the instance by running this command in terminal

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash`

3. Exit and reconnect to instance (exit -> step 1)

4. Install npm by running

`nvm install node`

5. Install git by running

`sudo yum install git`

6. Clone the repository 

`git clone https://github.com/phantran/CognitiveSocialStructuresSurvey.git CognitiveSocialStructure`

7. Change directory to CognitiveSocialStructure folder

`cd CognitiveSocialStructure`

8. Run `npm install` 

9. Install mongodb

On another terminal run the following commands:

`touch /etc/yum.repos.d/mongodb-org-4.0.repo`

`sudo nano /etc/yum.repos.d/mongodb-org-4.0.repo`

- Copy and paste the following to the file above

`[mongodb-org-4.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/4.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc`

- Run `sudo yum -y install mongodb-org`

- Run the following commands 

`sudo service mongod start`

`sudo service mongod status`

10. Run this command on the terminal to run the web app
`node app.js` 

11. Add inbound rule on AWS console: Custome TCP rule, port 3000, source 0.0.0.0/0

12. Access the web app by the domain name of the EC2 instance

