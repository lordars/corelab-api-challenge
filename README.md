# corelab-api-challenge
Desafio Corelab!


### Backend
Repository: 
1. Node: ^16.15.0
2. NPM: ^8.5.5
3. Framework: Express.
4. Database: MongoDb Atlhas or Mysql, Mysql base is not fully implemented, but it works.
5. WEBHOOKS ERROS SLACK .. IS TRUE ;)

### Start
  steps:
  1.Donwload https://github.com/lordars/corelab-api-challenge ZIP OR git clone https://github.com/lordars/corelab-api-challenge.
  2. enter the created directory, or unzipped it, open in vscode your favorite.
  3. change or copy .env.example file to .env
  
  ## PORT= 3000  ==> -_- port
  ## DB_URI_MONGO=mongodb+srv://ARIS:Oe1iHphKI317e701@apicluster.75m0a.mongodb.net/bancodaapi?retryWrites=true&w=majority ==> example
  
     create your own mongodb at https://www.mongodb.com/atlas/database
     
     ![image](https://user-images.githubusercontent.com/40031403/177888752-22f91a9c-e567-4a74-b095-afc7d3ddb9b9.png)

  
  ## PUBLIC_URL=http://localhost:3000   ==> -_- Url your site..
  ## JWT_SECRET=URSOLOCO123456 ==> create the token verification key to your liking
  
  
  ## URL_SLACK_HOOK=https://hooks.slack.com/services/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 
  
  ![image](https://user-images.githubusercontent.com/40031403/177889350-2ccb29e3-9a1e-42c7-93fc-a273578312c6.png)
  
  ![image](https://user-images.githubusercontent.com/40031403/177889512-3335d0db-a9eb-447f-b7cc-fed508d168d4.png)
  
  !THE IMAGES ARE REFERENCE TO ANOTHER API, but it serves to describe the error case must be configured to work correctly!!.
  
  ![image](https://user-images.githubusercontent.com/40031403/177890325-6bccad70-5b50-449d-961b-6d109dfdb530.png)
   
   the webhooks are activated as soon as there are errors, they will be sent to the slack you created. For more information:
   https://api.slack.com/messaging/webhooks
  
  In our system we have a dbs crud, but it is not applied, for obvious reasons.
if you want to opt for a mysql database you must change Engine_DB = mysql

  ##  MYSQL_DATABASE=test
  ##  MYSQL_USERNAME=root
  ##  MYSQL_PASSWORD=TeuPwds
  ##   MYSQL_HOST=127.0.0.1
  ##   ENGINE_DB=nosql  

  **Obiuos reasons, The application does not support to make a crud, for the size,
  **and I need time to improve the code, another reason that was created to show the participant's level of knowledge.
