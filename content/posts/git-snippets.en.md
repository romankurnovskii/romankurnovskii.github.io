---
title: Git snippets
description: Git snippets
toc: true
tags:  [git]
series: [CheatSheet]
categories: [Git, CheatSheet]
date: 2023-01-01
lastmod: 2023-06-14
featuredImage: https://picsum.photos/700/238?grayscale
draft: false
---

## Commits

-`build`: Changes that affect the build system or external dependencies (e.g., updates to package.json, pom.xml, build.gradle, Dockerfile, etc.)
-`chore`: Regular maintenance tasks and changes that don't modify the source code or the test suite (e.g., updating build tasks, package manager config, etc.)
-`ci`: Changes to Continuous Integration configuration files and scripts (e.g., changes in Jenkinsfile, Travis CI configuration, CircleCI, etc.)
-`docs`: Changes only affecting documentation (e.g., changes in README, API docs, comment blocks, etc.)
-`feat`: Introducing a new feature to your application.
-`fix`: A bug fix in your application code.
-`perf`: Performance improvements to your code (e.g., optimizing algorithms, improving efficiency, etc.)
-`refactor`: Changes in the code that neither fix a bug nor add a feature; typically, these changes improve code readability or structure.
-`revert`: If you are reverting a previous commit.
-`style`: Changes to the coding style (e.g., changes in whitespace, formatting, missing semi-colons, etc.) that do not affect the meaning of the code.
-`test`: Adding or updating tests, covering new or existing functionality.

Detailed description in [git commits style](https://www.conventionalcommits.org/en/v1.0.0/#summary)

## Github Actions

### Submodules Sync

```yaml
name: 'Submodules Sync'

on:
  schedule:
    - cron: "0 * * * *"

jobs:
  sync:
    runs-on: ubuntu-latest

    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2
        with:
          submodules: true

      - name: Pull & update submodules recursively
        run: |
          git pull --recurse-submodules
          git submodule update --remote --recursive

      - name: Commit & push changes
        run: |
          git config --global user.name 'Git bot'
          git config --global user.email 'bot@noreply.github.com'
          git commit -am "Auto updated submodule references" && git push || echo "No changes to commit"
```

## Free space in git repo

[Download BFG](https://rtyley.github.io/bfg-repo-cleaner/)

or

```sh
wget https://repo1.maven.org/maven2/com/madgag/bfg/1.14.0/bfg-1.14.0.jar
```

Remove *history* files bigger than 100Kb:

    cd repo
    java -jar bfg-1.14.0.jar --strip-blobs-bigger-than 100K .
    git reflog expire --expire=now --all && git gc --prune=now --aggressive

### Removing an entire commit

Replace "SHA" with the reference you want to get rid of. The "^" in that command is literal.

    git rebase -p --onto SHA^ SHA

We want to remove commits 2 & 4 from the repo. (Higher the the number newer the commit; 0 is the oldest commit and 4 is the latest commit)

    commit 0 : b3d92c5
    commit 1 : 2c6a45b
    commit 2 : <any_hash>
    commit 3 : 77b9b82
    commit 4 : <any_hash>

**Note:** You need to have admin rights over the repo since you are using `--hard` and `-f`.

1. `git checkout b3d92c5` Checkout the last usable commit.
1. `git checkout -b repair` Create a new branch to work on.
1. `git cherry-pick 77b9b82` Run through commit 3.
1. `git cherry-pick 2c6a45b` Run through commit 1.
1. `git checkout master` Checkout master.
1. `git reset --hard b3d92c5` Reset master to last usable commit.
1. `git merge repair` Merge our new branch onto master.
1. `git push -f origin master` Push master to the remote repo.

If didn't publish changes, to remove the latest commit, do:

    git rebase -i HEAD~<number of commits to go back>
    git rebase -i <CommitId>~1
    git reset --hard HEAD^
    git reset --hard commitId
    git rebase -i HEAD~5

If already published to-be-deleted commit:

`git revert HEAD`

### Cleanups

    git stash clear
    git reflog expire --expire-unreachable=now --all
    git fsck --full
    git fsck --unreachable  # Will show you the list of what will be deleted
    git gc --prune=now   # Cleanup unnecessary files and optimize the local repository

## Common git commands

    git rev-list --all --count # count commits
    git clean -fd # To remove all untracked (non-git) files and folders!

## Resources

- [Git commits style](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- [On undoing, fixing, or removing commits in git](https://sethrobertson.github.io/GitFixUm/fixup.html)
- [Truncating git history](https://passingcuriosity.com/2017/truncating-git-history/)
- [clean unused branches](https://www.npmjs.com/package/clear-git-branch?activeTab=explore)
