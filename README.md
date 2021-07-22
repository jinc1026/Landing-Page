# Landing-Page

Author: Jin Choe
Date: 21 July 2021

This project requires to utilize DOM (Document Object Model) manipulation. The task was to build the navigation menu by gathering the section list instead of manually populating them in the html.

There are 3 main functionalities I've built for this project:

1. Build navigation menu using DOM manipulation
The navigation is built first by selecting all section element in the document. 
Then 'li' element is built based on each section data gathered to name the li and ID attribute is later used to scroll to the section.
     
2. Scroll to the appropriate section when the link from navigation is clicked
Using scrollIntoView function, it is able to scroll down to the section that was clicked in the navigation instead of jumping straight down. 
     
3. When a section is near the top of the viewport, add active class to highglight the section
Using getBoundingClientRect function, section is checked once scroll event is triggered if it is near the top of the viewport. If it is, active class is added. If it goes out from the viewport, the active class is removed.