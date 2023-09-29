# YOUR PRODUCT/TEAM NAME
> _Note:_ This document will evolve throughout your project. You commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What is the product?

 * Our product is an AudioQR Management Solution - an audio system for park guides and its management system based on QR code distribution. We are partnering with John Leadston, a Resident Business Analyst at the Ontario Cabinet Office who has worked with Ontario Park for a long time.
 * John told us that he was hoping our product could replace some physical information boards at the park, which are expensive and manpower-consuming to maintain and update, and are not friendly for people who are visually impaired. Also, sometimes people would need to line up in front of information desks for simple questions. Our product is expected to increase the accessibility of guiding information at parks and to allow more cost-efficient and easier management for administrators.
 * To solve the problem, we plan to launch a website with the potential for future expansion into a mobile app as needed. Our website would allow administrators to easily create web pages linked with QR codes. They can add and edit audio content on the website. There will also be an audio repository where audio files can be edited. By scanning the QR code and accessing the website, visitors would be able to access the audio content and some descriptive photos. They will also be able to playback the audio.
 * Some examples of common use cases would be:
   1. When someone walks into parks, historic sites, etc., they would be able to quickly access to guide audio by scanning QR codes on the benches, trees, etc...
   2. Our website gives admin the ability to update audio content based on the current seasonal themes, when winter comes, the audio can be switched to Christmas.
 * Below is the link to our prototype made with Figma:
   * https://www.figma.com/file/SvfwnclDHxdwv8jXEwm8WI/project-24-ontario-parks-T?type=design&node-id=0%3A1&mode=design&t=XkYAJebEukb7CbmU-1
 * Below is a simple diagram that shows the structure of our project:
 


#### Q2: Who are your target users?

* 	The visitors who come to visit Ontario Parks
* 	Naturalists doing research at the park
* 	Park staff who work and maintain the park
* 	Park administrators from Cabinet Office / Ontario Parks/ Ontario Public Service.
 
#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

 * Our product provides convenient access to audio guides for visitors of the park and provides a user-friendly platform for park administrators to manage audio guide files. This would be a great step for Ontario parks to use technology to continue enhancing visitor experience. Having a website like this also provides the possibility to offer additional features and convenience in the future.
 * Some detailed benefits include: Firstly, our product saves time. Traditionally, parks have information boards that display the information our website is showing. By scanning the QR code, visitors can easily access guiding information on the website instead of spending time looking around to find information boards at the park. By simplifying and centralizing the process of managing audio content, admins can also save lots of time. Secondly, this website increases accessibility for visually impaired users, and illiterate users and even helps those whose first language is not English (if translation capability is implemented). What’s more, our platform could allow park administrators to see how many people have scanned certain QR codes. This provides insights into visitor preferences, which could be used to improve the park experience. This was not possible with traditional information boards.

#### Q4: What are the user stories that make up the Minumum Viable Product (MVP)?

 * As a tourist in the park, I want to scan the QR code that I saw next to a pond, in order to listen to a recorded introduction about it.

   * Acceptance Criteria:
     * For users who scan QR codes around the park, each QR code leads to a webpage that plays a recorded audio.

 * As a naturalist who found a pair of ospreys nesting next to the river, I want to record and post an introduction about them, in order to introduce them to tourists.
	
   * Acceptance Criteria:
     * Admin can upload recordings, and create webpage and QR code for new locations easily through admin webpage.
     * The webpage should have a straightforward and easy-to-use user interface.

 * As a park warden working at the park, I want to post a QR code that leads to a recording next to the entrance of the trail, in order to provide voice guidance and information to tourists who will enter the trail.

   * Acceptance Criteria:
     * The system needs to generate a QR code and its corresponding audio-playing page for different locations.

 * As a park interpreter working at the park, since the season changed, I want to replace some audio at certain locations in the park, in order to make the contents better suit the current season.

   * Acceptance Criteria:
     * Admin can choose from the audio repository and replace audio as they wish.

 * As a manager of the park, I want to easily manage audios for each location, in order to account for new events and changes that occurred in the park.

   * Acceptance Criteria:
     * The webpage needs a location and audio management page.
     * Admin is able to create, delete, and replace both audio and locations.


#### Q5: Have you decided on how you will build it? Share what you know now or tell us the options you are considering.

> Short (1-2 min' read max)
 * What is the technology stack? Specify languages, frameworks, libraries, PaaS products or tools to be used or being considered.
   * REST is our framework and it will take care of the frontend and backend of the website, the database will be implemented by SQL.
 * How will you deploy the application?
   * We are trying to build a website, so we would need to deploy it with a server that stores the data, and a domain name.
 * Describe the architecture - what are the high-level components or patterns you will use? Diagrams are useful here.
   * We are trying to use MVC, we will talk more about the patterns in the future meeting if MVC needs to be changed
 * Will you be using third-party applications or APIs? If so, what are they?
   * Currently, we might use RESTful API

----
## Intellectual Property Confidentiality Agreement 
> Note this section is **not marked** but must be completed briefly if you have a partner. If you have any questions, please ask on Piazza.
>  
**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.
5. You will only reference the work you did in your resume, interviews, etc. You agree to not share the code or software in any capacity with anyone unless your partner has agreed to it.

**Your partner cannot ask you to sign any legal agreements or documents pertaining to non-disclosure, confidentiality, IP ownership, etc.**

Briefly describe which option you have agreed to.

----

## Teamwork Details

#### Q6: Have you met with your team?

We had a meal together at Chinatown and discussed what courses we had this year, what we thought about this course, and what we were expecting from the project we were assigned to. We also talked about our hobbies and some of our daily routines.

This is just a screenshot from a meeting we had. We just finished discussing with John, our partner, about what we have done for D1, and what designs John is expecting to see. We had a great meeting with John XD.


* Fun fact about our members?
  * Yifang writes online fictions, he also knows how to compose and arrange electronic music.
  * Zihan, Yuhan, Hao are all cat people.
  * Jingyu‘s favorite movie is Charlie and the Chocolate Factory



#### Q7: What are the roles & responsibilities on the team?

Overall, we all choose our roles based on our interests and previous experiences.

1. Xinyan Lyu, Communicate/front-end developer
* I am responsible for communicating and writing emails to partners and other people outside the team, and I will be contributing mostly to the front end of the project. I am currently learning to do web app development.
2. zha10066, Yifang Zhang, yi1z, enrolled, Project manager/full-stack developer(mainly database)
* I am responsible for managing the project, and I will be contributing to most parts of the project, including frontend, backend, and database. 
3. Zihan Wang, UI/UX designer/full-stack developer
* I am responsible for the user interface and user experience design. Also, I will work on both front and backend development for our website.
4. Hao Yin, Documentarian/ database developer/full-stack developer.
* I am responsible for re-writing meeting minutes, and contributing to most parts of the database and most of the work on frontend.
5. Yuhan Fu, full-stack developer / Documentarian 
* I am responsible for contributing to most web-related parts of the project, including frontend, and backend. Also, I will do Document Management for the group including repo meeting minutes and other team information.
6. Jingyu He, Full-stack Developer/ Product Manager
* I will contribute to both the frontend and backend development of the website. Also, as the product manager, I am responsible of overseeing the end-to-end product development process and defining product goals


#### Q8: How will you work as a team?

Describe meetings (and other events) you are planning to have. 
 * When and where? Recurring or ad hoc? In-person or online?
 * What's the purpose of each meeting?
 * Other events could be coding sessions, code reviews, quick weekly sync meeting online, etc.
 * You should have 2 meetings with your project partner (if you have one) before D1 is due. Describe them here:
   * You must keep track of meeting minutes and add them to your repo under "documents/minutes" folder
   * You must have a regular meeting schedule established for the rest of the term.  
  
#### Q9: How will you organize your team?

List/describe the artifacts you will produce in order to organize your team.       

 * Artifacts can be To-Do lists, Task boards, schedule(s), meeting minutes, etc.
 * We want to understand:
   * How do you keep track of what needs to get done? (You must grant your TA and partner access to systems you use to manage work)
   * **How do you prioritize tasks?**
   * How do tasks get assigned to team members?
   * How do you determine the status of work from inception to completion?

#### Q10: What are the rules regarding how your team works?

**Communications:**
 * What is the expected frequency? What methods/channels will be used? 
 * If you have a partner project, what is your process for communicating with your partner?
 
**Collaboration: (Share your responses to Q8 & Q9 from A1)**
 * How are people held accountable for attending meetings, completing action items? Is there a moderator or process?
 * How will you address the issue if one person doesn't contribute or is not responsive? 
