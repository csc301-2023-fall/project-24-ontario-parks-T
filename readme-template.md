# AudioQR Management Solution /Room Three
​
> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 
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
 * Clear instructions for how to use the application from the end-user's perspective
 The instructions will be different for users who are the visitors and who are the administrations. More importantly, the administrator also is the user.
	* Recently, we are targeting the user who has a smart device that can scan the QR code. If they have a smart device and scan our QR code, they will be able to see the audio that corresponds to certain items or landscapes. They could see related pictures of items and listen to the audio. The picture will be different by four different seasons. The instruction above is the user side.
	* For the administrator side, they have to get the administrator privilege first. Once they have the privilege, the web page will jump to administrator management which is called the location section, they can search/ add/edit/delete the audio and corresponding picture. If the outside season has been changed, the picture for the current season will be changed automatically. If the administrator does not want to change the picture, they can change it back in the adding section. if the manager does not want to edit the audio, they are considered as users. They could use all features as users.

 * How do you access it? For example: Are accounts pre-created or does a user register? Where do you start? etc. 
 As a administrator:
	* If you don’t have an account, you have to sign up with some important information such as your email address ect. If anything is correct, you are on the administration side. You can do any operation mentioned above for the video.
As a user:
	* You don’t have to worry about too much, grab your smart device, scan the QR code, enjoy the audio.  

 * Provide clear steps for using each feature described in the previous section.
 * For the user side:
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
 * You can see this [example](https://github.com/alichtman/shallow-backup#readme) to get started.
 
 ## Deployment and Github Workflow
​
Describe your Git/GitHub workflow. Essentially, we want to understand how your team members share codebase, avoid conflicts and deploys the application.
​
 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live application
 * What deployment tool(s) are you using? And how?
 * Don't forget to **briefly justify why** you chose this workflow or particular aspects of it!
     * First of all, whenever a member makes a pull request, the request will be reviewed by a project manager. Other members can review and leave comments to the request as well, but only project managers are supposed to merge a pull request. Also, members can leave issues in the issue section, for other members to answer or fix. We will discuss the choice of deployment tools later on, as for D1, we cannot say we will be using any deployment tools for certain. 
     
The reason we choose such a workflow is because we want our team to be well managed; it would be a mess if everyone can merge pull requests, for example if some one merged a pull request, while other team members do not know this happened, there will be conflicts for sure. We want to avoid any additional work that are not necessary, and that's why we decided that only project managers can merge pull requests.

 ## Coding Standards and Guidelines
 Keep this section brief, a maximum of 2-3 lines. You would want to read through this [article](https://www.geeksforgeeks.org/coding-standards-and-guidelines/) to get more context about what this section is for before attempting to answer.
  * These are 2 optional resources that you might want to go through: [article with High level explanation](https://blog.codacy.com/coding-standards-what-are-they-and-why-do-you-need-them/) and [this article with Detailed Explanation](https://google.github.io/styleguide/)
​
 ## Licenses 
​
 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.
​
 * What type of license will you apply to your codebase? And why?
 * What affect does it have on the development and use of your codebase?
