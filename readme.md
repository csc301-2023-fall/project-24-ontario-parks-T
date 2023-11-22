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
 * Our product may replace some physical information boards at the park, which are expensive and manpower-consuming to maintain and update and could be more friendly for visually impaired people. Also, people sometimes need to line up in front of information desks for simple questions. Our product is expected to increase the accessibility of guiding information at parks and allow more cost-efficient and easier administrative management. 
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
  * Details: They can add new locations, edit existing locations, or remove location content. Each location can be associated
  with a specific audio file and image.

* Langauage Transimission: 
  * Description: The client and administrators can switch the language.
  * Details: In Canada, people who speak English and French can use the language Transmission feature to understand the content in our system.

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
   * Details: Upon scanning the QR code, tourists are presented with an audio introduction detailing the historical or exciting aspects of the location. They can play and listen to this audio content directly from the webpage.
 ​
## Instructions
* The instructions will be different for users who are visitors and who are administrators. Please notice administrators are also considered as users here.
  * For the tourist side, we target tourists with smart devices that can scan the QR code at locations. If they use their smart device to scan our QR code, they can see the audio corresponding to certain items or landscapes. They could see related pictures of items and listen to the audio. 
  * The administrator side has to get the administrator privilege and log in first. Once they log in, the web page will jump to the administrator management page. They can add/edit/delete the audio and corresponding locations there.
 
* To access as an administrator:
  * Go to the administrator management website, which is http://3.99.190.60:3000/admin/login in our d3 deployment. To register an account, you must use a logged-in account to sign up with a username, email address, and password. If the registration is correctly processed, you create a new account. With the account, you can do any operation mentioned above for the audio and location or register new accounts.
* To access as a user:
  * No need for an account; grab your smart device, scan the QR code, and enjoy the audio.  
* To upload an audio or image file:
  - This is including at the end of this readme file, as it is includes many screenshots.

## Clear steps for using each feature described in the previous section.

### For the visitor's side:

Scan the QR code and play the audio.
  
### For the administrator side:
1. Reach the login page, which is http://3.99.190.60:3000/admin/login, and input your username and password to log in
   1. In case you do not have an account, you need to ask your colleague who has an account to sign in and create an account for you (our partner demands this feature)

1. At the top of each page, there will be a navigation bar, which includes buttons to Add Location, Add Audio, AudioList, Location List, Register, Logout
     
1. Location repo page: After logging in, you will be redirected to the location repo page(you can also reach this page by using the Location List button on the Navigation bar), which includes a list of all locations' cards and their QR code on the cards. In addition, one empty card can be used to quickly create a location with a location name.
   1. At the location repo page, you may also use the edit and delete button on the location card to delete the location or jump to the edit page of that location.
1. At the location edit page, you may change the detail information of the location and click save to save the update. The QR code will change after changing the location's name, so you may need to go back to the location repo to collect the updated version of the QR code.
1. You may use the Add Location on the Navigation bar to go to the Add Location page. After finishing the form and clicking the button to create, a new location will be created with details.
1. You may use the AudioList on the Navigation bar to go to the audio repo page. Like the Location repo page, you may delete audio or go to the edit audio page with the "delete" and "edit" buttons near the card.
1. On the audio edit page, you may change the detail information of the audio and click save to save the update. Please notice that the update of audio will not influence the QR code of the location, as our partner asked
1. You may use the Add Audio on the Navigation bar to go to the Add Audio page. After finishing the form and clicking the button to create, a new audio item will be created with detail.
1. You may use the Register on the Navigation bar to help a colleague create their account; email, unique username, and password will be needed
2. Once you finish managing the system, you can log out of your administrator account with the Logout button on the Navigation bar.

We clearly understand it and provide a careful guide for users and administrators. If any features are added to our website, we update this section carefully and frequently once we clearly and successfully implement it. 
  ## Development requirements
 * What are the technical requirements for a developer to set up on their machine or server (e.g., OS, libraries, etc.)?
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
 * We have implemented a GitHub Actions workflow for continuous integration and continuous deployment (CI/CD). This workflow automatically pulls and restarts the Docker container on our virtual machine whenever changes are pushed to the repository's main branch.
 * The GitHub Actions workflow automates the build, tagging, and pushing of Docker images to the GitHub Container Registry. It connects to the EC2 instance (ssh to the VM), re-composes docker containers, and run the updated application.

  ## Coding Standards and Guidelines
  * Since we have not decided what development tools and languages we will use, we cannot decide what coding standards to follow. We will decide our coding standards in a timely when we have made those decisions.
​
 ## Licenses 

 * We would like to apply the MIT license to our codebase because we want to clarify and simplify our license, and we do not intend to profit from what we created.
 * It would not affect much of our development, except that we may not hard-code any sensitive information and will need to make our code structured and readable to share it with others reasonably.

## Special: Upload Audio or Image Files

1. First, download Microsoft Azure Storage Explorer, here is the [link to Microsoft Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer). Click on download now and choose your system. Then, follow the instructions provided by the installer to complete the installation.
   ![Alt text](image.png) 
2. After the installation is complete, open the Storage Explorer, and the start page will be shown automatically:
   ![Alt text](image-1.png)
1. If not, you can also manually open the start page by: 
   ![Alt text](image-2.png)
2. On the start page, click “Attach to a resource”, this will show a window asking for selecting resources.
   ![Alt text](image-3.png)
3. Choose “Storage account or service”, then select “Connection String (Key or SAS)”, click “Next”.
   ![Alt text](image-4.png)
   ![Alt text](image-5.png)
4. In the “Connection string” box, copy the following connection string into the box, this will automatically generate the “Display name”.
          
        DefaultEndpointsProtocol=https;AccountName=yilz;AccountKey=pJgurrQMVAQv+046vz3ZuV6EjP6noKGmx/j1X4Ty989najXstGJ+WC7XaUJkQLU0paGnY/zafkw8+AStoPPNBQ==;EndpointSuffix=core.windows.net

    Account name and key are also presented, in case if they are needed:

          Account Name: yilz
          Key: pJgurrQMVAQv+046vz3ZuV6EjP6noKGmx/j1X4Ty989najXstGJ+WC7XaUJkQLU0paGnY/zafkw8+AStoPPNBQ==

    ![Alt text](image-6.png)
5. Then click “Next” and finally “Connect”.
   ![Alt text](image-7.png)

6. By now, you should be able to find a new storage account being added to the “EXPLORER” panel on the left
   ![Alt text](image-8.png)
7.  Navigate to “Blob Containers”, double click on “c-1”.
    ![Alt text](image-9.png)
8.  This should display the window:
    ![Alt text](image-10.png)
9.  Now you can upload files by clicking on the “Upload” button on the top. When uploading using the window below, only select the files needed, and do not change the other choices.
    ![Alt text](image-11.png)
10. As an example I have uploaded a new png file. To get the url (link) to the picture, right click on it, and select “Copy URL”.
    ![Alt text](image-12.png)
11. Now you have the url that points to the file you just uploaded in your copyboard. Later on when adding images or audios for a location, you can upload needed files here, and copy the urls to the create page.
