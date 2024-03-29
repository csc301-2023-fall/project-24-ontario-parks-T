# AudioQR Management Solution /Room Three

## Partner Intro

 * Partner: Our partner is John Leadston, Resident Business Analyst at the Ontario Cabinet Office 
 * His email is john.leadston2@ontario.ca.
 * John is our primary contact.
 * He has worked with Ontario Park for a long time.
 * The Cabinet Office is a ministry of the Government of Ontario. Its role is to serve as the Premier's ministry, and as such, its employees are not political appointees but are permanent members of the Ontario public service.


## Description of the project

Our product is an Audio QR Management Solution - an audio system for park guides and its management system based on QR code distribution.

Our product may replace some physical information boards at the park, which are expensive and manpower-consuming to maintain and update and could be more friendly for visually impaired people. Also, people sometimes need to line up in front of information desks for simple questions. 

Our product solved this problem with QR codes: the visitors simply need to scan the QR code on signs to play audio and show texts on their phones. The product also includes a system for the administrators of the park to change the audio files and texts, and generate new QR codes that can be deployed. It is expected to increase the accessibility of guiding information at parks and allow more cost-efficient and easier administrative management. 
​
## Key Features

For Administrators:

* Login:
    * Description: Administrators are allowed to log into their accounts.
    * Details: using account number and password
 
* New Location Creation:
    * Description: Administrators can create new locations to manage
    * Details: Admins can add locations to the system
      
* QR Code Generation:
    * Description: After creating a new location, administrators can generate a QR code for that location.
    * Details: Each location will have a unique QR code, allowing easy access for tourists.
 
* Location Management:
    * Description: Admins can manage location content within the system.
    * Details: They can add new locations, edit existing locations, or remove location content. Each location can be associated with a specific audio file and image.

* Langauage Transimission: 
    * Description: The client and administrators can switch the language.
    * Details: In Canada, people who speak English and French can use the language Transmission feature to understand the content in our system.

* Audio Management:
    * Description: Admins can manage audio content within the system.
    * Details: They can upload new audio files, edit existing ones, or remove outdated content. Each audio file can be associated with a specific location.
 
* Link Location with Audio:
    * Description: Admins can link specific audio files with corresponding locations.
    * Details: Admins can select an audio file from the system and associate it with a particular location. This linking allows tourists to access relevant audio content when scanning the QR code.
 
For Tourists:
* Scanning to access:
    * Description: Tourists can scan the QR code associated with a location.
    * Details: By scanning the QR code using a mobile device, tourists are redirected to a specific webpage associated with that location.
 
* Introduction Audio Playback:
    * Description: Tourists can listen to an introduction audio about the scanned location.
    * Details: Upon scanning the QR code, tourists are presented with an audio introduction detailing the historical or exciting aspects of the location. They can play and listen to this audio content directly from the webpage.
 ​
## Instructions For Users
The instructions will be different for users who are visitors and who are administrators. Please notice administrators are also considered as users here.
* For the tourist side, we target tourists with smart devices that can scan the QR code at locations. If they use their smart device to scan our QR code, they can see the audio corresponding to certain items or landscapes. They could see related pictures of items and listen to the audio. 
* The administrator side has to get the administrator privilege and log in first. Once they log in, the web page will jump to the administrator management page. They can add/edit/delete the audio and corresponding locations there.
 
To access as an administrator:
* Go to the administrator management website, which is http://3.99.190.60:3000/admin/login in our d3 deployment. To register an account, you must use a logged-in account to sign up with a username, email address, and password. If the registration is correctly processed, you create a new account. With the account, you can do any operation mentioned above for the audio and location or register new accounts.
* For developers: You may use the development admin account to log into the system:
```
username: yilz
password: 1
```

To access as a visitor:
* No need for an account, grab your smart device, scan the QR code, and enjoy the audio.  

Clear steps for using each feature described in the previous section:
* For the visitor's side:
    * Scan the QR code, and play the audio.
* For the administrator side:
    * 1, reach the login page, which is http://3.99.190.60:3000/admin/login and input your username and password to log in
    * 1.1, in case you do not have an account, you need to ask your colleague who has an account to sign in and create an account for you (this feature is demanded by our partner)
    * 2, At the top of each page, there will be a navigation bar, which includes buttons to Add Location, Add Audio, AudioList, Location List, Register, Logout
    * 3, Location repo page: after logging in, you will be redirected to the location repo page(you can also reach this page by using the Location List button on the Navigation bar) which includes a list of all locations' cards and their QR code on the cards. In addition, there is 1 empty card that can be used to quickly create a location with the location name.
    * 3.1, at the location repo page, you may also use the edit and delete button on the location card to delete the location or jump to the edit page of that location.
    * 4, on the location edit page, you may change the detail information of the location and click save to save the update. please notice that after changing the name of the location, the QR code will change, so you may need to go back to the location repo to collect the updated version of the QR code.
    * 5, you may use the Add Location on the Navigation bar to go to the Add Location page. After finishing the form and clicking the button to create, a new location will be created with the details.
    * 6, you may use the AudioList on the Navigation bar to go to the audio repo page. Similar to the Location repo page, you may delete audio or go to the Edit Audio page with the "delete" and "edit" buttons near the card.
    * 7, on the Edit Audio page, you may change the detailed information of the audio and click save to save the update. Please notice that the update of audio, will not influence the QR code of the location.
    * 8, you may use the Add Audio on the Navigation bar to go to the Add Audio page. After finishing the form and clicking the button to create, a new audio item will be created with detail. (Please check the instructions about file upload below for more details about how to upload audio and images)
    * 9, you may use the Register on the Navigation bar to help a colleague create their account, email, unique username and password will be needed
    * 10, Once you finish your management of the system, you can log out of your administrator account with the button Log out button on the Navigation bar.
    * Instructions about uploading files to the system
    * Please notice, that to reduce the price cost of this demo product, our product will use external URL links to get audio and images. So, when creating an audio item in our system, please use an external storage to hold the real file and copy and paste the sharing link of that file. You may follow the instructions below written by our excellent team members about how to use Microsoft Azure to hold your files and share the URL to use in our system.

Anyone who continues to work on this repository should clearly understand this section and make sure it can provide a careful guide for the visitors and administrators. If any new features are added to the product, please update this section carefully once it's been implemented.

## Development Requirements

Technical Requirements: 
    * Operating System: Any OS that supports Docker (e.g., Linux, macOS, Windows).
    * Docker: Ensure Docker is installed on your machine or server.

Instructions for setting up and running the application can be found [here](#run-project-locally): 
 
## Deployment and Github Workflow

* Our web application is deployed using the AWS Lightsail service on an EC2 instance. The application runs on a virtual machine and is accessible at [http://3.99.190.60:3000/admin/login](http://3.99.190.60:3000/admin/login).
* We chose AWS Lightsail due to its suitability for small to medium-scale workloads and the availability of a free tier for testing deployment without incurring charges.
* We have implemented a GitHub Actions workflow for continuous integration and continuous deployment (CI/CD). This workflow automatically pulls and restarts the Docker container on our virtual machine whenever changes are pushed to the repository's main branch.
* The GitHub Actions workflow automates the build, tagging, and pushing of Docker images to the GitHub Container Registry. It connects to the EC2 instance (ssh to the VM), re-composes docker containers, and run the updated application.

## Coding Standards and Guidelines

### Limited use of globals:
   - We only use globals with the hostname, so this will make it easy for deployment.

### Naming conventions for local variables, global variables, constants and functions:
   - The name of the variable and function must describe the reason for using it clearly and briefly.
   - Local variables are named using camel case lettering starting with lower-case letters (e.g. local data).
   - Global variable names should start with a capital letter (e.g. GlobalData). 
   - Constant names should be formed using capital letters only (e.g. CONSDATA).
   - Using digits in variable names is not suggested, but we do allow it in some situations.

### Indentation:
   -  We use proper indentation (Hierarchical Indentation) in HTML components and Python files so it's easy to review and check our code
   -  There must be a space after giving a comma between two function arguments.
   -  Each nested block should be properly indented and spaced.
   -  Proper Indentation should be there at the beginning and at the end of each block in the program.
   -  All braces should start from the end of a function call or a new line immediately below the function call, and the code following the end of braces also starts from a new line. Exceptions are given for .then() calls, as they are connected highly to the content in the previous braces.

### Error return values and exception handling conventions:
   -  All error codes should be displayed in the console.
   -  In our system, unlogged-in users, will be redirected to the log-in page when they are trying to check protected pages.

### Other
   -  Avoid using a coding style that is too difficult to understand.
   -  Avoid using an identifier for multiple purposes
   -  Code should be well documented
   -  Length of functions should not be very large
   -  Avoid using GOTO statement
​
## Licenses 

We would like to apply the MIT license to our codebase, because we want to make our license clear and simple, and we don't intend to profit from what we created. It wouldn't affect much of our development, except that we may not hard-code any sensitive information, and we will need to make our code structured and readable to share it with others reasonably.

## Special: Upload Audio or Image Files

1. First, download Microsoft Azure Storage Explorer, here is the [link to Microsoft Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer). Click on download now and choose your system. Then, follow the instructions provided by the installer to complete the installation.

   ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/80387981-9600-4a09-9685-75bda7092b71)
3. After the installation is complete, open the Storage Explorer, and the start page will be shown automatically:
   ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/eff8b3f3-b4eb-46cb-bcb6-5b113b5fcc87)
1. If not, you can also manually open the start page by: 
   ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/042de543-f6fc-45d0-b315-bc76933df438)
2. On the start page, click “Attach to a resource”, this will show a window asking for selecting resources.
   ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/d07ae5c8-620b-40f9-bb3f-9422f83bf33b)
3. Choose “Storage account or service”, then select “Connection String (Key or SAS)”, and click “Next”.
   ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/a9f953cd-4189-49a6-acfe-bcbe89d332ba)
   ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/fd4fe99a-e944-4571-9eb6-bce820aad248)

4. In the “Connection string” box, copy the following connection string into the box, this will automatically generate the “Display name”.
          
        DefaultEndpointsProtocol=https;AccountName=yilz;AccountKey=pJgurrQMVAQv+046vz3ZuV6EjP6noKGmx/j1X4Ty989najXstGJ+WC7XaUJkQLU0paGnY/zafkw8+AStoPPNBQ==;EndpointSuffix=core.windows.net

    Account name and key are also presented, in case they are needed:

          Account Name: yilz
          Key: pJgurrQMVAQv+046vz3ZuV6EjP6noKGmx/j1X4Ty989najXstGJ+WC7XaUJkQLU0paGnY/zafkw8+AStoPPNBQ==


    ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/8e7cde4c-a368-479d-a669-358b9eee81e3)
5. Then click “Next” and finally “Connect”.
   ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/f4c2ddd7-bbf6-4bdd-ab0f-b307eddc6c1f)
6. By now, you should be able to find a new storage account being added to the “EXPLORER” panel on the left
   ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/e4125722-ec4d-480e-b0b5-dc0de9bbff52)
7.  Navigate to “Blob Containers”, and double-click on “c-1”.

    ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/3fe7868e-bbdc-46fb-9109-361dcc37db0d)
9.  This should display the window:
    ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/e16b92fa-8046-48df-a216-aa4ed681b5a9)
10.  Now you can upload files by clicking on the “Upload” button on the top. When uploading using the window below, only select the files needed, and do not change the other choices.
    ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/ceb97b64-b8d6-40a3-8ec8-5b1fc877ea45)
11. As an example I have uploaded a new PNG file. To get the URL (link) to the picture, right-click on it, and select “Copy URL”.
    ![image](https://github.com/csc301-2023-fall/project-24-ontario-parks-T/assets/90294263/5958d524-8514-47fd-9fdc-42ee9265614a)
12. Now you have the URL that points to the file you just uploaded to your clipboard. Later on, when adding images or audio for a location, you can upload needed files here, and copy the URLs to the create page.


# Instructions For Further Development

## Setting Up

**Device Requirements:**
 * Operating System: Any OS that supports Docker (e.g., Linux, macOS, Windows).
 * Docker: Ensure Docker is installed on your machine or server

**Dependencies:**
 * Make sure Python and pip are installed, run `pip install -r requirements.txt` in the backend directory for Python dependencies
 * Make sure Node.js and npm are installed, run `npm install` in the backend directory for Node.js dependencies
 * Install Docker Compose

## Run Project Locally

1. **Clone the Repository:**
```bash
git clone https://github.com/csc301-2023-fall/project-24-ontario-parks-T.git
cd /project-24-ontario-parks-T
```

2. **Change Host Name global variables**

3. **Build and Run the Docker Containers:**
    * run `docker-compose up -d`
    * This command will automatically compose the required Docker images and run the containers in detached mode
    * for local host testing, you need to change the global variables in `frontend/src/components/config.jsx` about the host address to "localhost:3000" and "localhost:8000"

4. **Access the Application:**
    * Once the containers are up and running, you can access the application by navigating to http://localhost:3000/admin/login in your web browser

## Frontend
For Frontend in this project, you will use react, the `jsx` file in the components folder is the key to showing the clients what feature we have.

1. Before you begin the project, you should go to the folder by the path `frontend/src/READEM.md` to download the required application ie. React APP.

2. After you finish downloading, you can start the frontend part.

3. The key technical feature is the `jsx` file in the components folder. The path is `frontend/src/components`.

For the `jsx` file, there is a brief explanation for the future developers.

Admin main page and login page: Several pages focus on logging in on the host side.

Language transfer features: Several files focus on language transfer from ENGLISH to FRENCH  or otherwise.

Location: Location create and edit ie, add, delete, edit.

Audio: Each Audio will have a location, or more different seasons of audio will connect to the same location. For audio, you can update and delete the audio for the location or different seasons of the location.

More Important:

You must connect your `jsx` file in the App.js file, there are a lot of samples to guide you on how to connect.


## Backend
In this project, we use Django rest Framework API, you may sh to the backend folder and run `pip install -r requirements.txt` to install all dependencies.

Then inside the project folder, `ontario_audio_tour`, are the main backend codes.

In the subdirectory `ontario_audio_tour/config` are the settings about the whole API, including the installed app and allowed URL (you need to add the allowed URL after deployment).

In the subdirectory, AdminControl (which is an app folder), is the API about asset management, including adding/deleting/editing/getting location/audio and binding two.

Also, user management is also in this app folder, enabling register, login, and logout user accounts. (we use Django default user and JSON Web Token for authentication)


## Database Connection

For the initial project, we are using a server provided by Microsoft Azure (full name being Azure Database for MySQL flexible server). Servers around the world have similar ways of managing, and since we believe that the Government of Ontario has its own servers, we would not focus on setting up databases here. As for handoff, we would simply explain the parts in our code, that handle connections to the database.

### Required Information for Connecting to a Server
Here is a list of information you would need, but you should have access to many other information as well:
    
-   Hostname
-   Username for connect
-   Password for connect
-   Database Name
-   Database Port
-   SSL or other secure certificates
-   The DBMS used by the server (MySQL, PostgreSQL, etc.)

### Set up database

We have provided an automated script for setting up the database and tables for our system, however, you do need to modify them so that they are connected to your server. The scripts can be found in the folder `test_database`, which is named `create_database.bat`. It will create a database, and tables, and insert some test data.

The way connections are made in this script is very simple. Below is the code for `create_database.bat`:

    @echo off
    setlocal

    :: set connections to database
    set DB_HOST=
    set DB_USER=
    set DB_PASS=
    set DB_NAME=

    set DB_PORT=

    :: the sql files to execute
    set SQL_FILES=create_database_2.sql insert_data_1.sql

    :: loop through the list of SQL files and execute them
    for %%f in (%SQL_FILES%) do (

        echo Executing %%f...
        
        mysql -h %DB_HOST% --port=%DB_PORT% -u %DB_USER% --password=%DB_PASS% -p %DB_NAME% --password=%DB_PASS% --ssl-mode=REQUIRED --ssl-ca=DigiCertGlobalRootCA.crt.pem < %%f

        if errorlevel 1 (
            echo Error executing %%f.
        ) else (
            echo %%f executed successfully.
        )
    
    )

    endlocal

Fill in the missing information, and add the needed secure certificates, then execute this script in the terminal. It will create a database called `test_database`, some tables populated with test data.

### Connect Back-End to Database
Connecting from the backend to the database is similar, and is done in `backend\ontario_audio_tour\config\settings.py`. The following part of the code handles the connection (from line 92 to 105):

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': '',
            'USER': '',
            'PASSWORD': '',
            'HOST': '',
            'PORT': '',
        },
        # 'default': {
        #     'ENGINE': 'django.db.backends.sqlite3',
        #     'NAME': BASE_DIR / 'db.sqlite3',
        # }
    }

If your DBMS is also MySQL, then keep the `ENGINE` key the same, and fill in other information. If not, then according to the DBMS you are using, find the Django engine that supports it, install the dependencies, and change the `ENGINE` key to the corresponding engine.

For example, if you are working with a PostgreSQL server, first install PostgreSQL adapter for Python:

    pip install psycopg2

Make sure the version is compatible with the other packages this project depends on. Then, change the value of the `ENGINE` key to:

    django.db.backends.postgresql

 Finally, apply migrations by the following line to create the necessary tables in the PostgreSQL database:

    python manage.py migratean

Remember to add secure certificates needed for accessing the server. You can do that by adding a key-value pair in the `default` dictionary (the sub-dictionary of `DATABASES`). For example, you can add an SSL certificate by adding the following:

    DATABASES = {
        'default': {
            'ENGINE': '',
            'NAME': '',
            'USER': '',
            'PASSWORD': '',
            'HOST': '',
            'PORT': '',
            'OPTIONS': {
                'sslmode': 'require',
                'sslrootcert': '/path/to/root.crt',
            },
        },
    }

### Matching Database to Models
One specific thing about Django is that the tables in the database should be matched to the file `backend\ontario_audio_tour\AdminControl\models.py`. If you want to make any changes to the columns in the database, make sure you also change the corresponding attributes in `models.py`.

### Connecting to Current Development Server
Below is the needed parameters for connecting to the server we used for early development and testing.

  
    Django Engine = django.db.backends.mysql
    Database Name = test_database
    Username = yilz
    Password = csc301P24!
    Hostname = yilz-1.mysql.database.azure.com
    Port = 3306

## Storage Place
Currently, the storage space also uses servers from Microsoft Azure and is not coupled with our source code. For later development, you can switch storage places to the one provided by the Government of Ontario, and use the URL to the files when creating an audio. You can refer to this process in [this section](#special-upload-audio-or-image-files).

### Connecting to Current Storage Space
Below is the needed parameters for connecting to the storage we used for early development and testing.

    Account name: yilz
    Connection string: SharedAccessSignature=sv=2023-01-03&ss=btqf&srt=sco&st=2023-12-09T22%3A51%3A15Z&se=2023-12-10T22%3A51%3A15Z&sp=rwdxftlacup&sig=aNj7nAjpciIcye%2FLHYIufFDWfikQV7%2BTDc2IaQEqofI%3D;BlobEndpoint=https://yilz.blob.core.windows.net;FileEndpoint=https://yilz.file.core.windows.net;QueueEndpoint=https://yilz.queue.core.windows.net;TableEndpoint=https://yilz.table.core.windows.net;
    SAS token:sv=2023-01-03&ss=btqf&srt=sco&st=2023-12-09T22%3A51%3A15Z&se=2023-12-10T22%3A51%3A15Z&sp=rwdxftlacup&sig=aNj7nAjpciIcye%2FLHYIufFDWfikQV7%2BTDc2IaQEqofI%3D

Alternatively, the following set of parameters can also be used:

    Account Name: yilz
    Key: pJgurrQMVAQv+046vz3ZuV6EjP6noKGmx/j1X4Ty989najXstGJ+WC7XaUJkQLU0paGnY/zafkw8+AStoPPNBQ==

## Deployment and CI/CD Details
 * Our web application is deployed using the AWS Lightsail service on an EC2 instance. The application runs on a virtual machine and is accessible at [http://3.99.190.60:3000/admin/login](http://3.99.190.60:3000/admin/login).
 * We chose AWS Lightsail due to its suitability for small to medium-scale workloads and the availability of a free tier for testing deployment without incurring charges.
 * We have implemented a GitHub Actions workflow for continuous integration and continuous deployment (CI/CD). It is triggered when changes are pushed to the repository's main branch. Please remember to enable this workflow if you want continuous deployment. Below are details of this GitHub Actions workflow:
	 - It automates the build, tagging, and pushing of new Docker images (for both front end and API) to the GitHub Container Registry.
	 - It automatically connects to the EC2 instance (ssh to the VM), pulls updated images and re-composes docker containers.
	 - It restarts the Docker containers and runs the updated application on our VM.
	 - Docker images are automatically updated to our GitHub Container Registry:
ghcr.io/csc301-2023-fall/ontario-park-audio-api
ghcr.io/csc301-2023-fall/ontario-park-audio-frontend
 * Since we have an entirely automated deployment process, it is easy to re-deploy this application. However, to change things, below are the instructions:
	 - To modify the CI/CD pipeline (the whole auto-deployment process), visit the build-push-image.yml file under the .github/workflows directory.
	 - To modify details of composing docker images, please visit the compose.yml under the main directory, and the dockerfile in the frontend and backend directory.
	 - To modify details on the deployment tool, below is the credential for our AWS Lightsail account:
	> `https://lightsail.aws.amazon.com/ls/webapp/ca-central-1/instances/AWS_Ontario_Park/connect` <br>
	> `jingyu.he@mail.utoronto.ca` <br>
	> CSC301aa!
 * To access the EC2 VM to view container status and other things, directly open a virtual terminal on the above-mentioned website, or SSH into the VM in the terminal:
	1. Download the private key to your device
	2. Open a terminal in the directory that contains the private key file and run the below lines:(in this case, LightsailDefaultKey-ca-central-1.pem is the name of the key file)
	```
	echo LightsailDefaultKey-ca-central-1.pem > private_key && chmod 600 private_key
	ssh -o StrictHostKeyChecking=no -i private_key ec2-user@3.99.190.60
	```
