// BASIC GIT COMMANDS

/*
git init                -- initiate an empty repo on your local machine
git clone               -- clone an existing repo in a new dir

git status              -- check the status of your files (tracked)
git add .               -- add everything that is not specified in the .gitignore file
git commit              -- commits the change
git commit -m           -- commits the change and the -m Flag is used to add a message about what have you done in the commit
git push [branch name]  -- pushes the files to the specified branch

git remote add origin       -- adds the origin to the path taken from the git url https://github.com/AdrianMadalin/YOUR-REPO-NAME.git
git remote -v               -- see the origin of the remote

git branch                  -- displays the current working branch
git branch [branch-name]    -- creates a new branch
git branch -d [branch-name] -- deletes the specified branch

git checkout [branch-name]  -- switches the branch
git log -n 5                -- shows a list of the last 5 commits messages
git mergetool -t meld


$ git --help
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

// INSTALL MELD
http://meldmerge.org
apt install meld
git mergetool -t meld
*/
