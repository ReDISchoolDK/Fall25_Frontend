# Beginner Setup Guide

Welcome! This guide will walk you through installing the essential tools, setting up your first project, and making your first Git commit.

If you run into any issues, don’t worry! Just ask your teachers or classmates for help.

---

## 1. Install Git

Git is the version control system we’ll use to track and share code.

### Windows

1. Go to [Git for Windows download page](https://git-scm.com/download/win).
2. Download and run the installer.
3. During setup, you can accept the default options.
4. After installation, open **Git Bash** (a terminal program installed with Git).

### macOS

1. Open **Terminal** (press `Command + Space`, type "Terminal").
2. Run:
   ```bash
   git --version
   ```
   - If Git is not installed, you’ll be prompted to install **Xcode Command Line Tools**. Accept and wait for installation.

### Linux (Ubuntu/Debian)

Run:

```bash
sudo apt update
sudo apt install git
```

**Verify installation:**

```bash
git --version
```

If you see a version number, Git is installed successfully.

---

## 2. Install Volta (Node.js Version Manager)

We’ll use **Volta** to install and manage Node.js.  
Volta makes sure everyone on the team uses the same Node.js and npm versions.

### a. Install Volta

- Go to [Volta’s official site](https://volta.sh/) and follow the instructions.

**Windows:**

- Download and run the installer from [volta.sh](https://volta.sh/).

**macOS / Linux:**

- Open your terminal and run:
  ```bash
  curl https://get.volta.sh | bash
  ```
- Then restart your terminal.

### b. Install Node.js via Volta

Once Volta is installed, run:

```bashWatch this quick tutorial to understand Git fundamentals:
volta install node
```

This installs the latest stable version of Node.js **and** npm.

> 💡 Volta ensures every time you run `node` or `npm`, you’re using the version defined in your project.

---

## 3. Install Visual Studio Code (VS Code)

- Go to [Visual Studio Code website](https://code.visualstudio.com/).
- Download the version for your operating system (Windows, macOS, Linux).
- Install with the default options.
- Open VS Code.

---

## 4. Create from Template & Clone the Starter Repo

### a. Create _your_ repository from the template

1. Visit: https://github.com/ReDISchoolDK/fe-starter
2. Click **Use this template** → **Create a new repository**.
3. Choose **Owner** (your GitHub account).
4. Name it (e.g., `fe-starter-yourname`), optionally add a description.
5. Leave **Include all branches** unchecked (default is fine).
6. Click **Create repository**.

> Using **Use this template** makes a brand-new repo with the starter files (not a fork).

### b. Clone _your new_ repository to your computer

1. On your new repo page (under **your** account), click **Code** and copy the **HTTPS** URL.
2. Open your terminal (Git Bash or VS Code Terminal), then run:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

## 4. Learn the Basics of Git

### Video Tutorial for using Git in VS Code

Watch this quick tutorial to understand Git fundamentals:

👉 [Learn Git Basics in VSCode](https://www.youtube.com/watch?v=i_23KUAEtUM)

**Core Ideas:**

- **Working Directory** = your files
- **Staging Area** = files you’ve marked with `git add`
- **Repository** = history of your commits

**Essential Commands:**

- `git add .` → stage changes
- `git commit -m "message"` → save snapshot
- `git push` → upload to GitHub

---

## 5. Initialize Git & Make Your First Commit

In your project folder:

```bash
cd fe-starter
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Then edit the `index.html` file and commit your changes:

1. Open `src/index.html` in VS Code.
2. Add any text you want (e.g., "Hello, World!").
3. Save the file.
4. Use VS Code’s Source Control panel to stage, commit, and push your changes:

   - Click the **Source Control** icon on the left sidebar.
   - Click the **+** next to changed files to stage them.
   - Enter a commit message (e.g., "Initial commit with Hello World") and click the checkmark to commit.
   - Click the **...** menu and select **Push** to upload your changes to GitHub. 

---

## 6. Add Collaborators (Teachers)

1. Go to your forked repo on GitHub.
2. Navigate: **Settings → Collaborators (or Manage Access)**.
3. Click **Add collaborator**.
4. Enter your teacher’s GitHub username and send an invite.

---

## 8. Helpful Resources

- [Git official website](https://git-scm.com/)
- [FreeCodeCamp: Git in 10 Minutes](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/)
- [GitHub Docs: Fork a repo](https://docs.github.com/articles/fork-a-repo)

---

🎉 Congratulations! You now have:

- Git installed,
- VS Code ready,
- Your own copy of the starter project,
- Your first commit pushed to GitHub.
