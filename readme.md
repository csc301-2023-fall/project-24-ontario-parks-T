# AudioQR Management Solution /Room Three
​
## Partner Intro
 * Partner: Our partner is John Leadston, Resident Business Analyst at the Ontario Cabinet Office 
 * His email is john.leadston2@ontario.ca.
 * John is our primary contact.
 * He has worked with Ontario Park for a long time.
 * The Cabinet Office is a ministry of the Government of Ontario. Its role is to serve as the Premier's ministry, and as such, its employees are not political appointees, but are permanent members of the Ontario public service.



## Description about the project
 * Our product is an AudioQR Management Solution - an audio system for park guides and its management system based on QR code distribution.
 * Our product may replace some physical information boards at the park, which are expensive and manpower-consuming to maintain and update, and are not friendly for people who are visually impaired. Also, sometimes people would need to line up in front of information desks for simple questions. Our product is expected to increase the accessibility of guiding information at parks and to allow more cost-efficient and easier management for administrators. 
​
## Key Features
 For Administrators:
* Login:
    * Description: Administrators are allowed to login into their account.
    * Details: using account number and password
 
 * New Location Creation:
    * Description: Administrators can create new locations to manage
    * Details: Admins can add locations to system
      
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
	* For tourist side, we are targeting tourists who have smart devices that can scan the QR code at locations. If they use their smart device to scan our QR code, they will be able to see the audio that corresponds to certain items or landscapes. They could see related pictures of items and listen to the audio. The picture will be different by four different seasons. 
	* For administrator side, they have to get the administrator privilege and login first. Once they log in, the web page will jump to administrator management page, they can search/ add/edit/delete the audio and corresponding picture there. If the outside season has been changed, the audio and picture will be changed automatically. 

 
* To access as an administrator:
	* Go to the administrator managment website or scan the corresponding QR code.To register an account, you have to sign up with information such as email address ect. If the registeration is correctly processed, you are able to access the administration side. With the account you can do any operation mentioned above for the video.
* To access as a user:
	* No need for an account, grab your smart device, scan the QR code, and enjoy the audio.  

 * Clear steps for using each feature described in the previous section.
 * For the visitors side:
	* Scan the QR code, and play the audio.
	
* For the administrator side:
	* 1, Scan the QR code
	* 2, Switch to administration side
	* 3, Sign in if you don’t have the administrator account with your employee id, email and password. 
	* 4, Now, you are in administration side, you can click any location section
	* 5, Then, you can search for the audio with some text or add some audio from your local device.
	* 6, For Deleting, Editing, Adding the audio, you click management,  there are twooptions Delete this audio, Editing this audio.
	* 6.1, For deletion, it will ask you if you are sure you want to delete it. If you click Yes, it will be deleted No to save the current audio.
	* 6.2, For Editing, you can change the audio and replace the picture of the current audio which will be shown on the user side.  Click Save to save the pdate and No for future changes.
	* 7, If the season is changed, then it will automatically change for all audios.
	* 8, Once you finish your update for audios, you have to log out your administrator account.
	* 9, Once you log out, you can scan this QR code and use it as a user. 

 * This section is critical to testing your application and must be done carefully and thoughtfully.

 * We clearly understand it and we provided a careful guide for users and administrators. If there are any features added in our website, we update this section carefully frequently once we clearly and totally successfully implement it.

 
 ## Development requirements
 * What are the technical requirements for a developer to set up on their machine or server (e.g. OS, libraries, etc.)?
     * Currently, we have not decided on every technical requirements we might need. For D1, we can only say that we will need some libraries including Django, REACT, and CSS templates like Bulma or Bootstrap. We might also need our members to download and set up Postman, in order to test the applications. But again this is only D1, we have not really started any actual implementations, so this part is expected change as our project goes on.
 * Briefly describe instructions for setting up and running the application. You should address this part like how one would expect a README doc of real-world deployed application would be.
     * This part will also be updated as we continue on our project. For D1, it's really impossible for us to make clear instructions on how our application can be set up and run.
 
 ## Deployment and Github Workflow
​* First of all, whenever a member makes a pull request, the request will be reviewed by a project manager. Other members can review and leave comments to the request as well, but only project managers are supposed to merge a pull request. Also, members can leave issues in the issue section, for other members to answer or fix. We will discuss the choice of deployment tools later on, as for D1, we cannot say we will be using any deployment tools for certain. 
     
* The reason we choose such a workflow is because we want our team to be well managed; it would be a mess if everyone can merge pull requests, for example if some one merged a pull request, while other team members do not know this happened, there will be conflicts for sure. We want to avoid any additional work that are not necessary, and that's why we decided that only project managers can merge pull requests.

 ## Coding Standards and Guidelines
  * Since we have not decided what development tools and languages we will use, we can't decide the coding standards we should follow. We will decide our coding standards timely when we have made those decisions.
​
 ## Licenses 

 * We would like to apply the MIT license to our codebase, because we want to make our license clear and simple, and we don't intend to profit from what we created.
 * It wouldn't affect much of our development, except that we may not hard-code any sensitive information, and we will need to make our code structured and readable to share it with others reasonably.
