# Week 8: Hosting and TBD

We're nearing the end of the full-stack curriculum. Hosting will be the final topic incorporated into the homework! Hosting allows you (and others!) to finally see your website, which previously only existed on your local development machine, served on the wonderful internet. We'll be using Vercel, since it's amazingly straightforward to connect to Github, and it's free for all personal projects! After hosting, we'll be moving into niche, but still helpful sub-topics within advanced frontend and backend.

# Materials

[Day 16: Hosting](https://docs.google.com/presentation/d/1dAaUaat7mXVX3TNZil-uyQN9AO3li7jM/edit?usp=sharing&ouid=103496217343063808904&rtpof=true&sd=true)

# Homework

This week, after all the hard work done with creating a frontend and connecting it to your own backend, your final task for the todo app will be to host it for all to see. Looking at the demos we do in the curriculum in class will be extremely helpful, but here's a guided summary on how to host on Vercel.

## Hosting Instructions

### Step 1: Prepare Your Environment Variables

1. **Frontend**: 
   - Open your React project.
   - Replace all instances of your backend URL (e.g., `http://localhost:5000`) with `process.env.REACT_APP_BACKEND`.
   - Create a `.env` file in your React project root directory with the following content:
     ```plaintext
     REACT_APP_BACKEND=<your-backend-url>
     ```
   - Replace `<your-backend-url>` with the actual URL of your hosted backend (you will get this after deploying the backend).

2. **Backend**:
   - Ensure your Express.js server is ready to be hosted. If you're using any environment variables, make sure they are defined in a `.env` file.
   - Add your `.env` file to the root directory of your backend project with the necessary environment variables (e.g., `PORT`, `DB_URI`, etc.).

### Step 2: Deploy Your Backend to Vercel

1. **Create a New Vercel Project**:
   - Go to [Vercel](https://vercel.com) and log in.
   - Click on "New Project" and select your backend repository from GitHub.
   - Configure the project settings:
     - Ensure the root directory is set to where your `index.js` or `app.js` file is located.
     - Set the environment variables by clicking on "Environment Variables" and adding the key-value pairs from your `.env` file.
   - Deploy the project. Vercel will provide you with a URL for your backend.

2. **Update the Frontend Environment**:
   - Once your backend is deployed, copy the URL provided by Vercel.
   - Update the `REACT_APP_BACKEND` value in your frontend `.env` file with this URL.

### Step 3: Deploy Your Frontend to Vercel

1. **Create a New Vercel Project**:
   - Go to [Vercel](https://vercel.com) and log in.
   - Click on "New Project" and select your frontend repository from GitHub.
   - Configure the project settings:
     - Ensure the root directory is set to where your `package.json` is located.
     - Set the environment variables by clicking on "Environment Variables" and adding the `REACT_APP_BACKEND` key with the value you configured earlier.
   - Deploy the project. Vercel will provide you with a URL for your frontend.

### Step 4: Test Your Deployed Application

1. **Test the Frontend**:
   - Visit the URL provided by Vercel for your frontend. Ensure that all functionalities work as expected and that it correctly communicates with your deployed backend.

2. **Test the Backend**:
   - Optionally, you can test the backend directly by sending requests to the Vercel-provided URL using Postman or another tool.

3. **Troubleshoot**:
   - If something isn't working as expected, check your environment variables and Vercel logs for errors. Make sure all URLs and environment variables are correctly configured.

### Final Notes

Once your app is successfully deployed and tested, you'll have a live URL that you can share with others! This marks a significant milestone in your journey as a full-stack developer. Hosting your application brings everything together and allows your hard work to be accessible to the world.

Good luck, and happy hosting!
