# Gulp Starter Kit <sub>for an AMP stack using vHosts</sub>

### by { colochos }

### Quick Overview
I created this repo to easily be able to use Gulp in my future projects and to share it with whoever wants to use it, that includes beginners and advanced programmers. So if you like it, please star it.

If you have any suggestions on how to make this better, please let me know.

**Disclaimer**

This starter kit is meant to be used in the following environment:

- Mac machine running on El Capitan.
- An AMP stack (for a super detailed guide on how to install this stack on your Mac go to [this blog post](https://coolestguidesontheplanet.com/get-apache-mysql-php-and-phpmyadmin-working-on-osx-10-11-el-capitan/).)
- Virtual hosts (for a guide on how to do this go to [this other blog post](https://coolestguidesontheplanet.com/how-to-set-up-virtual-hosts-in-apache-on-mac-osx-10-11-el-capitan/.)
- Node.js and Gulp installed globally (for a guide on how to do this go to [this blog post]())

If you are a total beginner and do not know what an AMP stack or virtual host is, please visit [this blog post](http://www.colochosblog.com).

### What does this Gulp file include?

The Gulp-Starter-Kit will achieve the following:
* Compile Sass and minify your css file.
* Add necessary vendor prefixes to your CSS.
* Concatenate and minify your JavaScript files.
* Load your **vhost** automatically after any changes on your HTML, CSS or JavaScript.

### How to download this repo to your machine
1. Click on ```Fork``` (this will create a copy of this repo in your GitHub)
2. You can either clone  the repo or download a zip file to your local machine.

##### To **clone** the repo:
  1. Open the terminal
  2. Cd into your Sites directory
  3. Run
  ```
  git clone https://github.com/[yourUserName]]/Gulp-Starter-Kit.git
  ```
  (don't forget to modify [yourUserName])
  4. Cd into "Gulp-Starter-Kit"
  5. Change the name from "Gulp-Starter-Kit" to your project's relevant name by running
  ```
  mv /Users/[yourUserName]/Sites/Gulp-Starter-Kit /Users/jPalacios/Sites/newName
  ```

##### To **download** the repo:
  1. Click on ```Clone or download```
  2. Click on Download ZIP
  3. Save it in your Sites directory
  4. Unzip the folder
  5. Change the name from "Gulp-Starter-Kit" to your project's relevant name


### How to start using this repo
1. Set up your vhost. ( [How the hell do I do that?](https://coolestguidesontheplanet.com/how-to-set-up-virtual-hosts-in-apache-on-mac-osx-10-11-el-capitan/) )
2. Open your vhost (If everything works correctly your vhost should show "Chile con carne!")
3. Open your project on your text editor.
4. Open gulpfile.js
5. Change ```opn('http://changeme.local');``` into your vhost's'URL.
6. Open the terminal
7. Cd into your directory
8. Run ```gulp```

### A note about BrowserSync
BrowserSync is meant to open localhost:3000, since I am using an AMP stack the way around this was:

1. I modified the watch task to leave the function blank. So it looked like this:

  ```javascript
  gulp.task('watch', ['sass'], function() {
    browserSync.init({

  });
  ```

2. In the terminal I ran "gulp", which spat out the following message:

  ```javascript
  Copy the following snippet into your website, just before the closing </body> tag
  <script id="__bs_script__">//<![CDATA[
      document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.16.0'><\/script>".replace("HOST", location.hostname));
  //]]></script>
  ```
3. I added that script in my html, just like the message said.
4. I then modified the watch task so that every time that run would run the message would not be shown. The final code looks like this:

  ```javascript
  gulp.task('watch', ['sass'], function() {
    browserSync.init({
      logSnippet: false
    });
  ```
