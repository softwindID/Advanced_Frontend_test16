In the layout you worked on during the lesson, there is a second tab (Page 2 on the right in the sidebar). On this tab, there are layouts for which you need to create a page with the correct answers to the test.

Mandatory Part:

On the page with the final score, add a link "View Correct Answers" as shown in the "Test Result" frame. When clicked, this link will navigate the user to the page with the correct answers, as depicted in the "Correct Answers (Option 1)" frame.
The page should display all the test questions received from the server (you will need to request them again on this page). Answers that the user selected correctly should be highlighted in green, while those selected incorrectly should be highlighted in red.
To obtain the correct answers, send a GET request to the address ..., where id is the test identifier.
The server will respond with the IDs of the correct options for the entire test.
In case of difficulties, refer to the hints.
Optional but Recommended:

Make the "Skip" link inactive if the answer option has already been selected (at any point during the test).
Replace the use of URL parameters with sessionStorage.
Display the full name on the test results page as shown in the "Correct Answers (Option 2)" frame.
Thoroughly test each step with various scenarios, identify potential bugs or incorrect behavior, and handle these situations in your code.
