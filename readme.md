# AudioQR Management Solution /Room Three
​
<!---
Update the Readme file you created as part of the D1 deliverable to also include the following information:

  ○ Very concise high-level description of your application with the context and value behind the application.
  ○ Basic instructions for use e.g. how to access a deployed version of the application
  ○ A non-technical user should be able to use readme.md to test your first version
  ○ Breakdown and description of the key features
  ○ Describe your Git/GitHub workflow
  ○ Very short description of the license chosen and reason.
-->


## Partner Intro
 * Partner: Our partner is John Leadston, Resident Business Analyst at the Ontario Cabinet Office 
 * His email is john.leadston2@ontario.ca.
 * John is our primary contact.
 * He has worked with Ontario Park for a long time.
 * The Cabinet Office is a ministry of the Government of Ontario. Its role is to serve as the Premier's ministry, and as such, its employees are not political appointees but are permanent members of the Ontario public service.


## Description of the project
 * Our product is an AudioQR Management Solution - an audio system for park guides and its management system based on QR code distribution.
 * Our product may replace some physical information boards at the park, which are expensive and manpower-consuming to maintain and update, and are not friendly for people who are visually impaired. Also, sometimes people would need to line up in front of information desks for simple questions. Our product is expected to increase the accessibility of guiding information at parks and to allow more cost-efficient and easier management for administrators. 
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
   * Details: Each location will have a unique QR code associated with it, allowing easy access for tourists.
 
 * Audio Management:
   * Description: Admins can manage audio content within the system.
   * Details: They can upload new audio files, edit existing ones, or remove outdated content. Each audio file can be associated with a specific location.
 
 * Link Location with Audio:
   * Description: Admins can link specific audio files with corresponding locations.
   * Details: Admins can select an audio file from the system and associate it with a particular location. This linking allows tourists to access relevant audio content when scanning the QR code.
 
 * For Tourists:
 * Scanning to access:
   * Description: Tourists can scan the QR code associated with a location.
   * Details: By scanning the QR code using a mobile device, tourists are redirected to a specific webpage associated with that location.
 
 * Introduction Audio Playback:
   * Description: Tourists can listen to an introduction audio about the scanned location.
   * Details: Upon scanning the QR code, tourists are presented with an audio introduction detailing the historical or interesting aspects of the location. They can play and listen to this audio content directly from the webpage.
 ​
## Instructions
* The instructions will be different for users who are visitors and who are administrators. Please notice, administrators are also considered as users here.
	* For the tourist side, we are targeting tourists who have smart devices that can scan the QR code at locations. If they use their smart device to scan our QR code, they will be able to see the audio that corresponds to certain items or landscapes. They could see related pictures of items and listen to the audio. 
	* For the administrator side, they have to get the administrator privilege and log in first. Once they log in, the web page will jump to the administrator management page, they can add/edit/delete the audio and corresponding locations there.

 
* To access as an administrator:
	* Go to the administrator management website which is http://3.99.190.60:3000/admin/login in our d3 deployment. To register an account, you have to use a logged in account to sign up with username, email address and password. If the registration is correctly processed, you created a new account. With the account, you can do any operation mentioned above for the audio and location or register new accounts.
* To access as a user:
	* No need for an account, grab your smart device, scan the QR code, and enjoy the audio.  

 * Clear steps for using each feature described in the previous section.
 * 
 * For the visitor's side:
	* Scan the QR code, and play the audio.
	
* For the administrator side:
	* 1, reach the login page, which is http://3.99.190.60:3000/admin/login and input your username and passsword to login
	* 1.1, in case you do not have an account, you need to ask your colleague who have an account to sign in and create an account for you (this feature is demanded by our partner)

 	* 2,At the top of each page, there will be an navigation bar, which include buttons to Add Location, Add Audio,AudioList,Location List, Register, Logout
   
   	* 3, Location repo page: after log in, you will be redirected to the location repo page(you can also reach this page by using the Location List button on Navigation bar) which includes a list of all locations' cards and their QR code on the cards. In addition there is 1 empty card can be used to quich create location with location name.
   	* 3.1, at the location repo page you may also use the edit and delete button on the location card to delete the location or jump to the edit page of that location.
   	* 4, at location edit page, you may change the detail imformation of the location and click save to save the update. please notice that after changing the name of location, the QR code will change, so you may need to go back to location repo to collect the updated version of Qr code.
   	* 5, you may use the Add Location on the Navigation bar to go to the add location page. After finish the form and click button to create, a new location will be created with detail.
   	* 6, you may use the AudioList on the Navigation bar to go to the audio repo page. Similar to Location repo page, you may delete audio or go to edit audio page with the "delete" and "edit" button near the card.
   	* 7, at audio edit page, you may change the detail imformation of the audio and click save to save the update. Please notice that the update of audio, will not influence QR code of location, as our partner asked
   	* 8, you may use the Add Audio on the Navigation bar to go to the add audio page. After finish the form and click button to create, a new audio item will be created with detail.(Please check the instuctions about file upload below for more detail about how to upload audios and images)
   	* 9, you may use the Register on the Navigation bar to help a colleague to create their account, email, unqiue username and password will be needed
   	  
   	  
	* 10, Once you finish your management of the system, you can log out of your administrator account with the button Log out button on the Navigation bar.
 * Instructions about uploading files to the system
 	* Please notice, to reduce the price cost of this demo product, our product will use external url links to get audios and images. So, when creating an audio item in our system, please use an extern storage to hold the real file and copy and paste the sharing link of that file. You may follow the below instruction wrote by our excellent team members about how to use microsoft azure storage's service to hold your files and sharing the url to used in our system. 


 * We clearly understand it and we provided a careful guide for users and administrators. If there are any features added to our website, we update this section carefully and frequently once we clearly and totally successfully implement it. 

  ## Development requirements
 * What are the technical requirements for a developer to set up on their machine or server (e.g. OS, libraries, etc.)?
     * Operating System: Any OS that supports Docker (e.g., Linux, macOS, Windows).
     * Docker: Ensure Docker is installed on your machine or server.
 * Briefly describe instructions for setting up and running the application. You should address this part like how one would expect a README doc of a real-world deployed application would be.
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/csc301-2023-fall/project-24-ontario-parks-T.git
   cd /project-24-ontario-parks-T```
2. **Build and Run the Docker Containers:**
   ```bash docker-compose up -d```
   * This command will automatically compose the required Docker images and run the containers in detached mode
3. **Access the Application:**
     * Once the containers are up and running, you can access the application by navigating to http://localhost:3000/admin/login in your web browser
 
 ## Deployment and Github Workflow

 * Our web application is deployed using the AWS Lightsail service on an EC2 instance. The application runs on a virtual machine and is accessible at [http://3.99.190.60:3000/admin/login](http://3.99.190.60:3000/admin/login).
 * We chose AWS Lightsail due to its suitability for small to medium-scale workloads and the availability of a free tier for testing deployment without incurring charges.
 * For continuous integration and continuous deployment (CI/CD), we have implemented a GitHub Actions workflow. This workflow automatically pulls and restarts the Docker container on our virtual machine whenever changes are pushed to the main branch of the repository.
 * The GitHub Actions workflow automates the build, tagging, and pushing of Docker images to the GitHub Container Registry, then it connects to the EC2 instance (ssh to the VM), re-compose docker containers and run the updated application.

 ## Coding Standards and Guidelines
  * Since we have not decided what development tools and languages we will use, we can't decide the coding standards we should follow. We will decide our coding standards timely when we have made those decisions.
​
 ## Licenses 

 * We would like to apply the MIT license to our codebase, because we want to make our license clear and simple, and we don't intend to profit from what we created.
 * It wouldn't affect much of our development, except that we may not hard-code any sensitive information, and we will need to make our code structured and readable to share it with others reasonably.
