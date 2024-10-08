# Welcome to the TPEO 2024 Full Stack Curriculum!

# Fork Environment
This repository will be using a fork structure, meaning that fellows will **commit to their own local respository** while **pulling new weekly content from this one**. Weekly content will be updated on the master branch, but a copy of all previous week's content will be available via branches.

**Note: From now on we will be referring to the tpeo/full-stack-curriculum-2024 project as the **main** repo and other repositories as the **forked** repo. 
## Forking the Repository 

Navigate to a directory where you'd like to keep all your projects. If you haven't already, we recommend creating a folder like `TPEO` or `GitHub_Projects`.

### Steps to Fork and Clone the Repository:

1. Go to the **main** repository's GitHub page and click the **Fork** button.

2. Clone the repository locally in your project folder of choice by running the following command:
    ```bash
    git clone <your-repo-url>
    ```

3. Change into the directory where the cloned repo is located by running:
    ```bash
    cd <your-repo-name>
    ```

4. Set the **forked** repo's upstream URL, allowing you to pull changes from the **main** repository:
    ```bash
    git remote add upstream https://github.com/tpeo/full-stack-curriculum-2024.git
    ```

5. Verify that the forked repo has the following remote properties by running:
    ```bash
    git remote -v
    ```

    You should see the following output:
    ```bash
    > origin    https://github.com/<YOUR_GITHUB_NAME>/full-stack-curriculum-2024.git (fetch)
    > origin    https://github.com/<YOUR_GITHUB_NAME>/full-stack-curriculum-2024.git (push)
    > upstream  https://github.com/tpeo/full-stack-curriculum-2024.git (fetch)
    > upstream  https://github.com/tpeo/full-stack-curriculum-2024.git (push)
    ```

### How to Check Your Current Directory

To see what directory you're currently in, you can run the following command in your terminal:

- **For Mac/Linux**:
    ```bash
    pwd
    ```
    This prints the full path of your current working directory.

- **For Windows**:
    ```bash
    cd
    ```
    Running `cd` without any arguments will display the current directory path.

This will help you ensure that you're in the right directory before running Git commands! 

## Commiting Changes To the Forked Repository

1. Add files 
    ``` 
    git add <files> 
    ``` 
2. Commit changes
    ```
    git commit -m "<YOUR MESSAGE HERE>"
    ```
3. Push
    ```
    git push origin main 
    ```
## Pulling Changes From Main Repository
You should pull approximately every week when new content arrives. These steps will involve merging the main repository's ```main``` branch with a forked repository's ```main``` branch 
1. Make sure you are on the appropriate branch
    ```
    git checkout main  
    ```
2. Fetch Content from Main Repository
    ```
    git fetch upstream
    ```
3. Merge Upstream with current local branch
    ```
    git merge upstream/main
    ```
