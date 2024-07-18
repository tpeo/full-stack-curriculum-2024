# Canvas API Demo Steps

### 1. Open Canvas and log in
### 2. Open Postman
Create a new collection and add a request inside that collection for this Canvas API Demo. To create a collection, click on the plus (+) button on the collections tab. To add a request, click on the three dots next to the collection name that reads "View more actions" when hovered over. Then click on "Add request."

![image](https://github.com/user-attachments/assets/6f900503-dfc5-4f39-b4a3-93ef82ecfa33)

![image](https://github.com/user-attachments/assets/99b27e7f-48db-448c-8d3f-fb5e05b02bd9)

![image](https://github.com/user-attachments/assets/85efb59c-96c9-4bdf-833b-24b77b7a06c1)

### 3. Return to the Canvas home page
Open inspect element on the home page and navigate to the network tab. Then, refresh the page. Numerous API calls should pop up, including one from https://utexas.instructure.com/ and another from https://utexas.instructure.com/api/v1/dashboard/dashboard_cards, labeled as dashboard_cards. These were the two API calls we looked at, but feel free to explore further.

![image](https://github.com/user-attachments/assets/08050d8b-ebce-432c-aa8e-5c7232e99831)

### 4. Opening our first API call
Let's start with the API call from https://utexas.instructure.com/ (it should be at the very top). Click on the API call to open the headers section, which contains important information about the call, including the Request URL, Request Method, Status Code, and the Cookie.

![image](https://github.com/user-attachments/assets/d7eca29e-94c4-4d78-8214-e80bdedc767e)

### 5. Configure Postman
In Postman, open your new request. Copy-paste the request URL into your request and ensure the request method is correct. Then, click on the headers tab. Scroll down and add a new key-value pair. Label the key as "Cookie" and the value should be copy-pasted from the inspect element (make sure there are no special characters, otherwise the API call will not work). Now, send the request. Overall, it should look something like this: 

![image](https://github.com/user-attachments/assets/ff6afa2d-64f1-4bf0-91d4-bb70adb22164)

### 6. Further steps
Please feel free to mess around and run other API calls in the network tab like the dashboard_cards request.

