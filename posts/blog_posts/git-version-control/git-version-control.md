---
title: Git. A Powerful Version Control System
subtitle: Mastering Git for efficient collaboration and version management
description:
slug: git-version-control
published: '2024-06-04'
categories: software
icon: call_merge
draft: false
---

## What is Git?

Git is a widely-used distributed version control system that allows developers to track changes in their source code, collaborate with others, and manage different versions of their projects efficiently. It was initially designed and developed by Linus Torvalds for Linux kernel development but has since become the de facto standard for version control in software development.

## Core Git Concepts

### Repositories

A Git repository is a virtual data storage where your project files and their revision history are stored. You can have local repositories on your machine and remote repositories hosted on platforms like [Github](https://github.com), [GitLab](https://Gitlab.com), or [Bitbucket](https://bitbucket.org/) for collaboration and backup purposes.

### Commits

A commit in Git represents a set of changes made to your project files. Each commit has a unique identifier (SHA-1 hash), author information, a timestamp, and a commit message describing the changes made.

### Branches

Branches in Git allow you to create separate lines of development, enabling you to work on new features, fix bugs, or experiment with changes without affecting the main codebase. The default branch is typically called `main` or `master`.

## Basic Git Workflow

1. **Initialize a Repository**: To start using Git for a new project, navigate to your project directory and run `git init` to create a new local repository.

2. **Stage Changes**: After making changes to your project files, use `git add` to stage the modified files that you want to include in your next commit.

3. **Commit Changes**: Run `git commit` to create a new commit with the staged changes. You'll be prompted to enter a commit message describing the changes you made.

4. **Push to Remote**: If you're working with a remote repository (e.g., GitHub), use `git push` to upload your local commits to the remote repository, allowing others to access your changes.

5. **Pull from Remote**: When collaborating with others, use `git pull` to fetch the latest changes from the remote repository and merge them into your local repository.

## Advanced Git Features

- **Branching and Merging**: Create and switch between different branches using `git branch` and `git checkout`. Merge changes from one branch into another with `git merge`.

- **Resolving Conflicts**: Git will inform you if there are conflicts between your local changes and the remote repository's changes. You'll need to resolve these conflicts manually before committing or merging.

- **Stashing**: Use `git stash` to temporarily save your uncommitted changes and revert your working directory to a clean state, allowing you to switch branches or work on something else.

- **Rebasing**: `git rebase` allows you to reapply your commits on top of a different branch, keeping a linear commit history.

- **Git Log**: View the commit history of your repository with `git log`, which provides details about each commit, such as the commit hash, author, date, and commit message.

## Git Cheat Sheet

### Undoing Changes

- **Magic Time Machine**: `git reflog` shows you a list of every action you've taken in Git, across all branches. Find the commit before you broke everything and use `git reset HEAD@{index}` to go back to that commit.

- **Amend Last Commit**: If you need to make a small change to your last commit, make the change, stage the files (`git add .`), and use `git commit --amend --no-edit` to update the last commit with the new changes.

- **Change Commit Message**: Use `git commit --amend` to change the message of your last commit.

- **Move Commit to New Branch**: To move your last commit to a new branch, create a new branch (`git branch new-branch-name`), remove the last commit from the current branch (`git reset HEAD~ --hard`), and checkout the new branch (`git checkout new-branch-name`).

- **Undo Commit to Wrong Branch**: If you accidentally committed to the wrong branch, use `git reset HEAD~ --soft` to undo the last commit but keep the changes, `git stash` to stash the changes, switch to the correct branch (`git checkout correct-branch`), `git stash pop` to apply the stashed changes, and `git add` and `git commit` to commit the changes to the correct branch.

- **View Unstaged Changes**: If `git diff` shows no changes, use `git diff --staged` to view changes that have been staged but not committed.

- **Revert a Previous Commit**: To undo a commit from several commits ago, find the commit hash with `git log`, and use `git revert [commit-hash]` to create a new commit that undoes the specified commit.

- **Undo File Changes**: To undo changes to a specific file, find a commit hash before the file was changed (`git log`), and use `git checkout [commit-hash] -- path/to/file` to restore the old version of the file.

### Reset Repository State

If your branch is severely broken and you need to reset the state of your repository to match the remote repository, you can use the following commands (warning: these are destructive and unrecoverable actions):

```bash
# Get the latest state of the remote repository
git fetch origin
git checkout master
git reset --hard origin/master

# Delete untracked files and directories
git clean -d --force

# Repeat checkout/reset/clean for each broken branch
```

Git is a powerful tool, but it can be challenging to master. This cheat sheet provides a quick reference for common operations and scenarios, helping you navigate through Git's complexities with confidence.
