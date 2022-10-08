# JOKEMON
 
Jokemon is a turn-based fighting game where you can pick a team of monsters and fight against a computer AI with the same amount of monsters. you have a team of up to 6 monsters who each know 4 moves each. Your goal is to defeat the enemy team by reducing each monster's health on the enemy team to 0.
 
There are 3 current monsters in the game, but the code has been implemented so that adding new monsters is quick and simple.
 
## EXISTING FEATURES
 
### Home Page
 
![homepage](assets\images\title-page.png)
 
- This is the landing page for the game containing links to the other pages of the game
- At the top of the page you have a counter for the scores of your current session.
- you also have your current monster line-up so you can easily check before you start a game
 
### Team selector
 
![team-selector](assets\images\team-select.png)
 
- you may select your team from the pool of monsters in the select team tab
- you can have a maximum or 6 monsters on a team, with any number of duplicates.
- your able to remove the monsters from your team by click "remove", this removes the most recently added monster from the team
 
### Fight screen
 
![fight-screen](assets\images\battle.png)
 
with a team selected you may enter battle. to fight, pick a move, then the speed is calculated
to decide which monster goes first, they then attack, if the other monster is still alive, they
then move, and the game checks if the first monster is alive, this carries on til one faints and
is replaced with another monster if one is available, if not the game is over and the player with
members left wins.
 
### how to play
 
![how-to-play](assets\images\instructions.png)
 
if a player is confused on how to play then they can check this helpful pop-up on the main menu
 
### Upcoming features
 
- add tooltips to moves to let the play know what they do
 
- add a setting that makes swapping out take up a turn, and let it be toggleable
 
 
## TESTING
 
i've run my code through various validators to check the state of my code
 
- html
Only two errors here are regarding my sections not including headers. I have used section in this case as a way to differentiate between my separate pop-ups so adding a header is not applicable
 
![html-check](assets\images\html-check.png)
 
- css
no errors
 
![css-check](assets\images\ccs-check.png)
 
- js
there are various errors here however they are essentially the same two errors, one is says that i am missing a semicolon, however that is not imperative for the code to run, and the second talks about versions however i'm running the latest version of javascript so it doesn't apply
 
![js-check](assets\images\js-check.png)
 
### Manual Testing
 
I have played through various games to test if all links are working correctly.
 
Expected outcome | Actual outcome | pass/fail
--- | --- | ---
clicking start game with an empty team stops you from starting a game | worked as expected | pass
clicking team select opens team select popup | worked as expected | pass
clicking any of the monster buttons adds it to the team | worked as expected | pass
you can't add more than 6 monsters | worked as expected | pass
you can remove monsters using the remove button | worked as expected | pass
clicking instructions opens team instructions popup | worked as expected | pass
clicking start game with at least 1 team member lets you start a game | worked as expected | pass
clicking a move button proceeds the game | worked as expected | pass
clicking a bench position lets me switch monsters | worked as expected | pass
reducing an enemy monster to 0 health makes them change monster | worked as expected | pass
having my health reduced to 0 causes my monster to faint | worked as expected | pass
all move buttons do different moves | worked as expected | pass
defeating all enemy monsters wins me the game | worked as expected | pass
having all my monsters defeated causes me to lost the game | worked as expected | pass
score counters increment accordingly | worked as expected | pass
starting a new game resets all health and stats | worked as expected | pass
 
### known bugs
 
 
- when a enemy monster is switching in after you defeat the previous one, clicking to0 quickly on the move buttons will cause the moves buttons to be unresponsive, i think this has something to do with the async function, and the order which i re-add the event handlers to the buttons
 
- the "run with scissors" move seems to consistently kill its user instead of dealing damage, change to its kill change possible needed
 
## Deployment
 
### GitHub Pages
 
The project was deployed to GitHub Pages using the following steps...
 
1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.
 
### Forking the GitHub Repository
 
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...
 
1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.
 
### Making a Local Clone
 
1.    Log in to GitHub and locate the GitHub Repository
2.    Under the repository name, click "Clone or download".
3.    To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4.    Open Git Bashwire
5.    Change the current working directory to the location where you want the cloned directory to be made.
6.    Type git clone, and then paste the URL you copied in Step 3.
 
    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
 
7. Press Enter. Your local clone will be created.
 
    $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
    > Cloning into `CI-Clone`...
    > remote: Counting objects: 10, done.
    > remote: Compressing objects: 100% (8/8), done.
    > remove: Total 10 (delta 1), reused 10 (delta 1)
    > Unpacking objects: 100% (10/10), done.
 
CREDITS
 
all sprites and icons were made myself.
 
majority of the functionality came from watching this youtube tutorial - https://www.youtube.com/watch?v=1yS-JV4fWqY
 
special thanks to the code institute team and my mentor marcel
 
 
