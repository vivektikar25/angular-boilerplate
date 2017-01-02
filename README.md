# angular-boilerplate
This boilerplate uses gulp to make angularJs projects deploy able build.

Prerequisites -
1) Node - Make sure you have installed node on your system.
          (Note: Install Node latest version).
2) npm - Install npm which will serve as package manager for our third party development time dependencies.
          (Note: Ensure successful installation by running command - $ npm --version)
3) bower - Install bower which will serve as package manager for our third party run time dependencies.
            (Note: Ensure successful installation by running command - $ bower --version)
Once repository is cloned...

Getting started with boilerplate setup -

1) Change name of cloned repository with your project name (e.g. -> angular-boilerplate to your-project-name).
2) Get inside your project ($ cd your-project-name/ ).
3) Install dev-dependencies by running following command.
      - $npm install (It will install all dev-dependencies in node_modules directory.)
          (Note: If error thrown required sudoer access then try running command
                  - $sudo chown -R $(whoami) ~/.npm : this will give temporary sudoer access to npm)
          (Warning: Don't directly use sudo to install dependencies with npm.)
4) Install run time dependencies with following command -
      - $bower install.
5) If nothing goes wrong till now then try running following command in your projects root directory
      - $gulp
6) Go to your browser and visit - http://localhost:8383.
7) If you see "Yuuup! Successfuly Installed". then you are good to go.
