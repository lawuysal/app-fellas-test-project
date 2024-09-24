# App Fellas Test Project
 A recruitment project for App Fellas 

 Both frontend and backend projects are in this repository. 

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#how-to-compile">How to Compile?</a></li>
    <li>
     <a href="#project-screenshots-and-features">Project Screenshots and Features</a>
     <ul>
        <li><a href="#main-page">Main Page</a></li>
        <li><a href="#date-picking">Date Picking</a></li>
        <li><a href="#dates-picked">Dates Picked</a></li>
        <li><a href="#flight-booked">Flight Booked</a></li>
        <li><a href="#dark-mode">Dark Mode</a></li>
        <li><a href="#my-flights-page">My Flights Page</a></li>
        <li><a href="#mongodb-documents">MongoDB Documents</a></li>
      </ul>
    </li>
  </ol>
</details>


## About the Project
* I used an airport's fligth information API to create this project. [API Link](https://developer.schiphol.nl/)  
* I tried to implement `Single Responsibility Rule` as much as I can do to achive a cleaner and understandable code base with the help of `Typescript`.  

* Also, I used `NodeJS` server as a proxy to bypass API's `CORS` errors. You'll see I didn't send any requests to API directly.
* Design is not responsive, please display it on a PC.

### Built With

* [![Typescript][Typescript]][Typescript-url]
* [![React][React.js]][React-url]
* [![React Router][ReactRouter]][ReactRouter-url]
* [![React Queryff][ReactQuery]][ReactQuery-url]
* [![Shadcn][Shadcn]][Shadcn-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![NodeJS][NodeJS]][NodeJS-url]
* [![ExpressJS][ExpressJS]][ExpressJS-url]

## How to Compile?

 * I used Vite for the React application. To compile it, running `npm install` and `npm run dev` must be enough.

 * I used NodeJS with ExpressJS. To compile it, you must create the `.env.local` file and fill it with `PORT`, from the Schiphol API: `APP_ID`, `APP_KEY` and `RESOURCE_VERSION`, for the MongoDB: `DB_URL` and `DB_PASS` fields.   
 * If you want to get `.env.local` file, I can provide you privately. Because it includes my remote MongoDB server information and you can't connect it without I register your IP to the Atlas service. For the best, you can use your own MongoDB connection. It'll work seamlessly.     
 * Then, run `npm install` and `npm run watch` respectively.   

 If you encounter with a problem, feel free to contact with me.

 
## Project Screenshots and Features   
### Main Page  
![Main Page](https://raw.githubusercontent.com/lawuysal/images/refs/heads/main/app-fellas-screenshots/001.png)  
* In the navbar, `Deals`, `Discover` and `Profile` parts do not work. Navigating to `My Flights` and the dark mode switch works.  
* In the search part, I added a flight direction switcher to choose from "departure" and "arrival" and I added a date picker to filter flights between those dates. 
 * "Search flights" button queries for the dates.  
* "Clear filters" button basically clears the queries in the URL.   
* Since I used the queries for active filtering, it's possible to share queried flights with links from the website.    

### Date Picking
![Date Picking](https://raw.githubusercontent.com/lawuysal/images/refs/heads/main/app-fellas-screenshots/002.png)  
* I used Shadcn for the components. They are really customizable and looks awesome.   

### Dates Picked
![Dates Picked](https://raw.githubusercontent.com/lawuysal/images/refs/heads/main/app-fellas-screenshots/003.png)  
* For the cards, I tried to provide information about flights as much as API let me to do it.  
* For example the `Price` part does not included in the API but I calculated some dates to manipulate it.  
* `Check the details` button does not work. It's just visual sugar. I really wanted to follow design that you sent.  

### Flight Booked
![Flight Booked](https://raw.githubusercontent.com/lawuysal/images/refs/heads/main/app-fellas-screenshots/004.png)
* As you can see buttons was disabled when a flight before today is listed.   
* We can click button to book a flight and we can see them in the `Bookings`(I added main page as `My Flights` button to recognize it easily.) page.   
* Same button turns into `Cancel Booking` to cancel or delete the flight booking from the backend.
* I added a sorting function at the right side of the flight cards. You can sort the flights by `departure dats and times` and `arrival times` in both ascending and descending order, corresponding to the data from the API.  
* Also you can see a toast notification at the bottom-left of the page.    

### Dark Mode
![Dark Mode](https://raw.githubusercontent.com/lawuysal/images/refs/heads/main/app-fellas-screenshots/005.png)
* I added a dark mode with the help of shadcn because some users willingly look for a dark mode to rest their eyes :)    
* I tweaked some colors to make it compatible with the brand coloring.   
* Also, I added another toast notification to indicate that flight booking is deleted.   

### My Flights Page
![My Flights Page](https://raw.githubusercontent.com/lawuysal/images/refs/heads/main/app-fellas-screenshots/006.png)
* This is the `My Flights` or `Bookings` page. I used almost the same flight card here. But their difference is, this card making its own request to gather flight  information from the server using `useGetFlight` hook.      
* Also, I added a little indicator to show how many flights have been booked that found in the database.     

### MongoDB Documents
![MongoDB Documents](https://raw.githubusercontent.com/lawuysal/images/refs/heads/main/app-fellas-screenshots/007.png)
* This is how the booked flights looks in the database. I basically saving the `flightId` and getting the flight information by using it.      

 
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[ReactRouter]: https://img.shields.io/badge/-React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[ReactRouter-url]: https://reactrouter.com/en/main
[ReactQuery]: https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white
[ReactQuery-url]: https://tanstack.com/query/latest
[Shadcn]: https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white
[Shadcn-url]: https://ui.shadcn.com/
[MongoDB]: https://img.shields.io/badge/-MongoDB-4DB33D?style=for-the-badge&logo=mongodb&logoColor=FFFFFF
[MongoDB-url]: https://www.mongodb.com/
[NodeJS]: https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[NodeJS-url]: https://nodejs.org/en
[Tailwind]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[ExpressJS]: https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white
[ExpressJS-url]: https://expressjs.com/
