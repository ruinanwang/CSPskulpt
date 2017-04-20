# Skulpt

[![Join the chat at https://gitter.im/skulpt/skulpt](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/skulpt/skulpt?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Skulpt is a Javascript implementation of Python 2.x.  Python that runs in your browser!  Python that runs on your iPad!  Its being used several projects including, [Interactive Python Textbooks](http://interactivepython.org) -- You can see skulpt in action there.  Try out [some turtle graphics examples](http://interactivepython.org/runestone/static/thinkcspy/PythonTurtle/InstancesAHerdofTurtles.html) to see Skulpt in action.

[![Build Status](https://travis-ci.org/skulpt/skulpt.png)](https://travis-ci.org/skulpt/skulpt)

## What we have changed

## Origins

Skulpt is the brainchild of Scott Graham.  See [Skulpt.org](http://skulpt.org) for some early demos of skulpt in action.

Brad Miller has been shepherding the development since sometime in 2010/2011.

### Building Skulpt

Building Skulpt is straightforward:

1. Clone the repository from GitHub, ideally using your own fork if you're planning on making any contributions
2. Install node.js and Python 2 (required to run the build scripts)
3. Install the required dependencies using `npm install`
4. Navigate to the repository and run `npm run build`
5. The tests should run and you will find `skulpt.min.js` and `skulpt-stdlib.js` in the `dist`folder


### Contributing

There is plenty of work still to do in making improvements to Skulpt.  If you would like to contribute

1. Create a Github account if you don't already have one
2. Create a Fork of the Skulpt repository -- This will make a clone of the repository in your account.  **DO NOT** clone this one.  Once you've made the fork you will clone the forked version in your account to your local machine for development.
3. Read the HACKING.rst file to get the "lay of the land".  If you plan to work on creating  a module then you may also find this [blog post](http://reputablejournal.com/adding-a-module-to-skulpt.html) helpful.
3. Check the issues list for something to do.
4. Follow the instructions above to get skulpt building
5. Fix or add your own features.  Commit and push to your forked version of the repository.  When everything is tested and ready to be incorporated into the master version...
6. Make a Pull Request to get your feature(s) added to the main repository.


## Community

Check out the mailing list:  https://groups.google.com/forum/?fromgroups#!forum/skulpt

## Acknowledgements

As time goes on its getting more dangerous to try to acknowledge everyone who has contributed to the project.  And, after all, this is git, so their names are all in the historical record.  But there are a few to call out.

* First and foremost to Scott Graham for starting the original project.
* Bob Lacatena for lots of work on Python longs
* Charles Severence for bug fixes and the re module.
* Leszek Swirski and Meredydd Luff for Suspensions
* Albert-Jan Nijburg for countless bug fixes and process improvements
* Ben Wheeler for the new and improved turtle module
* Scott Rixner and students for many bug fixes and improvements
* Of course, The complete list is here:  https://github.com/skulpt/skulpt/graphs/contributors
