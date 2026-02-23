# 📘 Git, GitHub Organizations & Branching – Summary Notes

## 🔑 Overview
Git and GitHub are essential tools for managing code in real-world projects, especially when multiple developers work together.  
- **Git** tracks every change in the codebase.  
- **GitHub** provides a collaborative platform to manage repositories, teams, and workflows.  

Without these tools, teamwork can become chaotic—developers may overwrite each other’s work, lose important changes, or struggle to identify the correct version of the code.

---

## 🏢 GitHub Organizations
A **GitHub Organization** is used when a project is owned by a team rather than an individual.  
- Multiple members can work on the same repositories.  
- Roles and permissions ensure controlled access.  
- Admins manage members, repositories, and permissions.  
- Role-based access prevents accidental or unauthorized changes.  

This setup mirrors professional workflows in companies, bootcamps, and colleges.

---

## 🌿 Branching
Branching allows developers to create separate copies of the main codebase to work on new features or bug fixes without affecting stable code.  
- **Main branch** → Always stable.  
- **Feature/Hotfix branches** → Used for development.  
- Once complete and tested, branches are merged back into `main`.

---

## 🔧 Basics
- `git init` → Start Git in a folder  
- `git status` → See changes made  
- `git add .` → Stage all changes  
- `git add filename` → Stage one file  
- `git commit -m "msg"` → Save staged changes with a short message  

---

## 🌐 Remote Work
- `git clone <URL>` → Copy repo from GitHub to your system  
- `git push origin HEAD` → Push current branch to GitHub  
- `git pull origin <branch>` → Get latest changes from GitHub  
- `git fetch` → Sync with remote (without merging)  

---

## 🌿 Branching Commands
- `git checkout -b <branch>` → Create and switch to a new branch  
- `git switch <branch>` → Move to another branch  
- `git branch` → Show current branch  
- `git branch -a` → List all branches (local + remote)  

---

## 📜 History
- `git log` → View commit history (with unique IDs)  

---

## 📝 Summary of Git Commands
- **Basics**: Initialize Git, check changes, stage files, commit.  
- **Remote Work**: Clone repos, push branches, pull updates, fetch changes.  
- **Branching**: Create/switch branches, list branches.  
- **History**: View commit history with unique IDs.  

---

## 🔄 Pull Request (PR) Process
A **Pull Request (PR)** is how you propose changes from your branch to be merged into the main project.  

### Purpose
- Show what you changed (new files, edits, fixes).  
- Ask teammates or managers to review your work.  
- Discuss improvements before merging into `main`.  

### Steps
1. Commit your changes on a branch.  
2. Push the branch to GitHub.  
3. Open a PR from your branch → `main`.  
4. Add a clear description of what you changed.  
5. Notify the reviewer/manager for approval.  

### Example PR Message