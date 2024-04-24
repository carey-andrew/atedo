<p align="center"> 
Atedo is a portfolio site made in collaboration with a stakeholder. In the long term we are exploring adding a video gallery page to display and market the stakeholders assets.
    <br> 
    <br>
![Image](https://github.com/carey-andrew/atedo/assets/137008062/c6487352-9d0a-4a95-8540-3c5d54e5c9ba)


 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Tech Stack](#tech_stack)
- [Lessons Learned](#lessons_learned)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

We were approached with a brief to design and build a website that could be used to display and market videos and images taken from events that the client attended. We needed to design the site with specific criteria in mind that was laid out by the stakeholder. It was requested that the images and banner video on the landing page be easily changed by the stakeholder when required.

## 💡 Idea / Solution <a name = "idea"></a>

Our solution to this was to build a smart, modern looking website that integrated with a simple CMS style interface that allows the stakeholder to update the images and videos when necessary.



## 🛑 Dependencies / Limitations <a name = "limitations"></a>

- We discovered that video hosting can be expensive and difficult to set up with the necessary bandwidth required especially if a product needs to be scaled up easily.
- The stakeholder would also like new users to be able to access the gallery page after an event, so a secure sign up is needed, especially as in the long term there may be a monetized aspect to downloading the videos from the site.
- The nature of the group's time and availability has meant that we have had to work independently for much of the project, keeping each other updated on slack or video calls.

## 💻 Setting Up A Local Enivronment <a name = "getting_started"></a>

We came to an agreement to have weekly deployment aligned with each sprint, a production branch called "dev" acted as production branch before each deploment to ensure the app works and looks as intended. This was a vital step into detecting any errors, bugs and ultimately gaining feedback. Using Next as our React App, we had a development server that helped with 
the build that was accessed using "npm run dev" in the terminal (a default script in the package.json to run Next dev). We used feature branches to develop and then rebase or merge to main.

## 🚀 Future Scope <a name = "future_scope"></a>

We want a functional interface that the stakeholder can use easily to update their content, both on the landing page and in the gallery page. This would greatly increase the usability beyond that of a portfolio page.

Our next sprint goal, would be to start on login and authentication. This is important to safeguarding the content of the gallery page so that entries are private to each event. 


## 🏁 Visit Our Website <a name = "vist_our_website"></a>

You can visit our website here -> <a href="https://atedo.vercel.app/">Atedo.</a>

## ⛏️ Tech Stack <a name = "tech_stack"></a>

- [NextJs](https://nextjs.org/) - Web Framework
- [JavaScript](https://www.javascript.com/) - Coding Language
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Plawright](https://playwright.dev/) - Testing
  

## 🏫 Lessons Learned <a name = "lessons_learned"></a>

- Good planning in general goes a long way and then the code basically writes itself.
- Having a different Scrum Master per day allowed for easy decision making, task priorisation and day-to-day structure.
- Making big decisions as a team and moving on with the intended plan. We decided not to use Express and or have auth early on but we kept them in mind for future progress.
- Accessibility is extremely important. We learned to have this in mind from the very beginning of the process, from desing all the way through.
- Understanding about the architecture of a full-stack app starting with a the visual aspect.
- Playwright testing - check for the box rather than the content. We don't want brittle tests!


