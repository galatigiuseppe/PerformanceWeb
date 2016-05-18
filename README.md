#Web Performance Optimization

##Udacity's Front-end Developer Nanodegree P4

###Situation:

HTTP requests costs page speed which negatively effects web performance, and consequently the User Experience.  A one percent increase in page speed can help organizations increase conversion. This translates into thousands of dollars in the eCommerce industry.

"Minifying" scripts and compressing images will go a long way with improving page performance. Build tools, such as, Gulp helps the developer's workflow by running automated build-tasks on command.

The User Interface functionality and animations are coded in JavaScript. There are many cost effective ways to code JavaScript. Often a developer will refactor their code with each iteration. The goal is to write simpler code that does not repeat.

Optimizing JavaScript code will help to create a better User Experience. Animations and app functionality will be smooth and fast, thus improving the User Experience.

###Objective:

Score 90% or above on Pagespeed insights.  Refactor JS code so that animations and UI is most optimized.

###Actions:
1) Compress images with tinyjpg.

2) Set src for different viewport widths.

3) Concatenate and minify assets with gulp for production.

4) Inline css for production.

5) Remove google font cdn.

6) Host on github pages.

7) Customize with Bootstrap.

8) Manage dependencies with Bower and NPM.

9) Comment & Beautify code.

10) Refactor scrolling and resize pizza functions so as not to calculate the document.body.scrollTop every time the loop runs.

###Result:

CRP is reduced so that index.html and pizza.html run "in the green" for desktop and mobile page speed tests.  With the exception of index.html running just below 90 on mobile. Pizza.html runs at 60fps while scrolling the page from top to bottom.

## [View the site on gh-pages.](http://jaroot32.github.io/optimizationSite/)

![PizzaAnimationStackTrace](/images/PizzariaStackTrace.png)

#Edits from first submission
##Edits in style.css
###Line 35:
Added transform declaration and backface-visibility property with hidden value.

### 56:
Choosing not to display Cam's face on mobile.

##Edits in main.js
###Line 429, 432, and 435:
Changed the method to getElementById.

###472:
Added changePizzaSizes function back to code.

###473:
Added use strict to the function.

###474:
Changed method to getElementByClassName.

###475:
Changed the for loop to only compute the length of the array once before iterating.

###476:
Swapped the longer window method code with the variable.

###477:
Same edit as line 476.

###478:
Same edit as line 476.

###495:
I moved variable outside of loop so the DOM will only be called once.

### 527:
Changed method to getElementsByClassName.

### 529:
Declared phase variable outside of the loop.

### 530:
Same change as line 475.

### 552:
Trying to refactor this based on viewport width but I am not sure what the variable S stands for. From the comments you wrote in the code review I am thinking I have to write a variable that holds an if statement about the users viewport. Is that correct?

### 553:
Changed number of pizzas to 40. Declared elem outside of the function.

### 561:
Changed method to getElementById.



