## Backend
In this project, we use Django rest Framework api, you may sh to the backend folder and run `pip install -r requirements.txt` to install all dependencies.

Then inside the project folder, ontario_audio_tour, is the main backend codes.

In the sub directory ontario_audio_tour (same name with the project folder) is the seetings about the whole api, including installed app and allowed url (you need to add allowed url after deployment).

In sub directory AdminControl (which is an app folder), is api about asset management, including adding/deleting/editing/getting location/audio and binding two.

Also, user managment is also in this app folder, enable register, login, logout user accounts. (we user django defult user and JSON Web Token for authentication)

The backend will create folder qrcode to store qrcodes when locations are created.
