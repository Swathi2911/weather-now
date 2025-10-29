#  Weather Now

A simple, user-friendly weather web application built using React and the Open-Meteo API.  
It allows users to quickly check current weather conditions for any city around the world.


##  Project Overview

User Persona: Jamie – an outdoor enthusiast who wants to quickly know the current weather before planning activities.

Goal: 
To build an easy-to-use web app that fetches and displays weather details such as temperature, wind speed, and weather condition.

##  Tech Stack

  Frontend Framework: React  
  Styling: Tailwind CSS  
  API Used: [Open-Meteo API](https://open-meteo.com/en/docs)  
  State Management: React useState and useEffect  


##  Features

 Search weather by city name  
 Fetches real-time data from Open-Meteo API  
 Displays temperature, windspeed, and condition  
 Responsive and mobile-friendly layout  
 Error handling for invalid city names  

## How It Works

1. User enters a city name in the search bar.  
2. The app fetches the city’s latitude & longitude using Open-Meteo’s Geocoding API.  
3. It then calls the Weather API to get current weather details.  
4. The weather data is displayed in a clean, card-style layout.  


##  Setup and Run Locally

1. Clone the repository:
  
   git clone https://github.com/Swathi2911/weather-now.git
