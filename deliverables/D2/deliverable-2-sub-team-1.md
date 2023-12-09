# Team 24 Subteam 1 (Frontend) Deliverable 2 Report

### Decisions on implementations

Through working on deliverable 2, we have explored different layouts of our visitor-end webpage, and different tech stacks to implement our frontend for tourist. In this deliverable, we are implementing the user story of "tourist loads the location webpage and plays the audio on it"

- First, we explored Building the webpage with pure HTML, CSS, and Javascript, and tried two different layouts. This was easy to write, but we soon realized that it would soon grow cumbersome and complicated as we try to implement more complex features. We explored this implementation in the directory ``root/src``. 

- Then, we tried to use React to build our webpages. We chose React because of its great reputation and extensive use. It's also easy to begin with. For now, we have created another directory ``root/demo2.0_with_react``, and turned our raw HTML into React JSX in this directory.

- However, React is much more complex to deploy, so for Deliverable 2, we decided to deploy our HTML version of the webpage first, and also write tests on this version. All tests and deployed webpage builds are in the developer directory ``root/src_with_tester``. If you need to review our test or current deployment, please find them in this directory.

    - For our tests, we use Jasmine to run tests, and Puppeteer to simulate user input. 

We have explored two different layouts in HTML. The First one is more complex and uses more picture assets to enrich viewing experience, and the second one is plain and concise, following exactly what we have in [our Figma prototype](https://www.figma.com/file/SvfwnclDHxdwv8jXEwm8WI/project-24-ontario-parks-T?type=design&node-id=0-1&mode=design&t=FwWSR7J1goTyzmwv-0). However, through discussiong and comparison, we decided that we don't need to follow exactly what we have in our prototype, and the new layout is apparently more visually satisfying. This would create better user experience for the park visitors. Thus, we decided to use this layout in all future designs.

It is worth noting that the audio resource on our website is dynamically populated based on the return values from 'script.js,' rather than being hardcoded. This design choice enhances the reusability and expandability of the webpage, making it adaptable to changing requirements. Collaborating effectively with the backend subteam can leverage this flexible HTML structure to its fullest potential, ensuring seamless integration.

Please kindly review our submitted work within the src_with_tester directory, encapsulating our meticulous efforts and strategic decisions for Deliverable 2.

### Individual contributions

- Xinyan Lyu (Max): Explored the prototype layout. Wrote readme files and deliverable markdowns. Provided code reviews and tested deployment on different platforms. Though didn't directly contribute to building the final deployed webpage, learned a lot about React and explored the possibility of modulizing webpage components with React.

- Yuhan Fu (Brandon): I played a pivotal role in our project, designing a responsive website UI adaptable to various screen sizes and implementing it in HTML and React app version. After implementing the in-use HTML webpage, I successfully learned basic react app development and transitioned the design into a React app version. I also acquired expertise in Jasmine and Puppeteer, using them to create meticulous tests for different screen sizes, ensuring optimal user experience. Additionally, I contributed to the project's documentation by crafting the instruction part in this file and the README document. Taking initiative, I deployed the website on my teach.cs homepage and generated a QR code for easy access. Last but not least, I also make the instruction video about how to get our repo and test our code. My multifaceted involvement in design, development, testing, documentation, and outreach significantly enhanced the project's overall success.

### Instructions for testing and reviewing D2

As described in the first section, we have three different directories, each containing a similar webpage with different implementations. The implementation we would use in deliverable 2 is in the directory ``root/src_with_tester``. It's built with raw HTML, fully deployed, and contains complete tests.

To facilitate the testing process for our project, kindly follow the outlined instructions below. We all includes a video in this deliverable directory called Instructions_for_testing_D2.mp4, you may check it to have clear thoughs about of how to do the test.

Before proceeding with the testing, ensure you have cloned our repository. If not, please execute the following command:

        git clone https://github.com/csc301-2023-fall/deliverable-2-24-1-fuyuhan6-lyuxiny2.git
        
Also make sure you have Node.js installed on your system. Node.js serves as the foundation for our testing environment,you need to first install [Node.js](https://nodejs.org/en) and install the nessesary Node.js. 


As the package.json sepecified, we will use [Jasmine](https://jasmine.github.io/index.html) and [Puppeteer](https://pptr.dev/) to test our front end.

Navigate to the directory root/src_with_tester in your terminal or console. Here, execute the following command to install the required packages:

        cd root/src_with_tester
        npm install
        
This command will automatically download and install all the essential dependencies specified in our package.json file, ensuring a seamless testing experience.

Once the dependencies are installed, you can run our existing tests effortlessly. Execute the following command within the root/src_with_tester directory:

        npm test

This command triggers the testing process, allowing you to assess the functionality and stability of our frontend components in both desktop and mobile window sizes.

If you encountered any issues during testing, please try to reinstall Jasmine and Puppeteer sparately, for this might fix the problem of beforeAll function failure: 

        npm install jasmine
        npm install puppeteer

### Deployment

The work which users(tourist) will use is deployed on Yuhan Fu's teach.cs personal page, scan to use this Qrcode to access or use this link [link to deploy webpage](https://www.teach.cs.toronto.edu/~fuyuhan6/user_webpage/public/)
![plot](./QR_code_demo.jpg)
The webpage is constructed using the HTML code and resources located in the 'src_with_teste' directory. 

Upon accessing the page, users will encounter a welcoming title: "Welcome from Ontario Park." Notably, the page features an audio card displaying an Ontario Parks icon. This audio element is fully functional and can be played by the users.

Furthermore, there is a responsive navigation bar positioned above the page content. In mobile phone-sized screens, the navigation bar collapses to ensure optimal user experience. Although the navigation bar is responsive, it primarily serves as a structural element and does not currently offer additional functionalities.

