# Team 24 Subteam 2 Deliverable 2 Report

### A summary of decisions and the options considered for logic/backend

We used the Django web framework for its robust features and ease of development, it is an optimal framework for our size of web application. For D2, we focused on the user story of **“Admin is able to upload, delete, and replace audio in audio repository through admin webpage”** In our implementation, we decided to separate the management of audio and location data to enhance modularity and maintainability. For this user story, only audio management was implemented. We have also restricted access so that only the admin users can visit admin control pages (including audio and location repo). In our sub-team deliverable, we chose SQLite database system as it works well for smaller-scale applications, since we are mainly showing the logic for backend. For deployment, we used Docker to containerize our web app and deployed on Render. We have also set up a CI/CD pipeline in Github Action to automate the process of composing a Docker image, which will be used for auto deployment.

### Individual contributions

* Jingyu was responsible for user management, deployment, and the frontend. This involved containerizing, creating CI/CD pipeline, and deploying the web app, as well as ensuring admin users could effectively interact with the management system and developing a user-friendly interface. 

* Zihan handled audio management and the database. Zihan’s role involved managing and processing audio data (upload, edit, delete), ensuring its proper storage and retrieval. Additionally, Zihan was in charge of the database, ensuring its efficient operation.


### Instructions

We have our app deployed at https://ontario-tour-guide-backend.onrender.com
* Since we are using the free version for this deliverable, the website spins down on idle, the web page load may hang for a bit when you first open it. 

As you enter the website, you will be asked to login.
You can click on register and create a new account. After account creation, you will be lead to the profile page. 
\(sample account: superAdmin password: csc301\)
On the side bar, there are several choices that you can choose.
 * Add: Lead to the add audio page, where you can name and upload new audio
 * Location Repo: Not implemented for D2
 * Audio Repo: Lead to audio manage page, where you can see all audio in database. You can also choose to edit or delete audios.
 * Change Password: Lead to password change page. In order to change password, you will need to enter your old password and enter your new password two times to confirm change.
 * Logout: Log out of the current account

### To run the app locally:

Requires the following tools:
* OS: tested on Windows 11 and MacOS
* Python version above 3.8
* Virtualenv
* Pip

With all the basic tools above, follow the instruction below:<br>
```
git clone https://github.com/csc301-2023-fall/deliverable-2-24-2-wang2431-hejingy4.git
```
			
Next, change to the following directory:<br>
```
cd deliverable-2-24-2-wang2431-hejingy4/ontario_audio_tour
```

Next, create virtual environment for this project using:<br>

* Linux/MacOs: `python3 -m venv venv`

* Windows: `python -m venv venv`

* If you have multiple versions of python: `python<version> -m venv venv`
	
Then, you can activate the virtual environment by using command:<br>
* Linux/MacOs: `source venv/bin/activate`
* Windows: `venv\Scripts\activate`

After activated the venv, install all the required packages using command:<br>
```
pip install -r requirements.txt
```

Then, use these two lines of command to complete setup of database:<br>
```
python manage.py makemigrations
python manage.py migrate
```

Now, you can start the app by using the following command:<br>
```
python manage.py runserver
```
To test the application, run this command:<br>
```
python manage.py test
```
