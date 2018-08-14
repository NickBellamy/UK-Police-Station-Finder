# Uk Police Station Finder Project

This is a web app that allows the user to find the contact details of their local police station.  Once the user has selected a general area of the UK, they can filter through the neighbourhood names, or use the map to select the marker - selecting a neighbourhood marker triggers a pop up box with the contact information of that neighbourhood's local police station.  The design of the app has been constructed so that it should work well on both desktop and mobile devices 

This project is part of the Udacity Nanodegree program.  No starting code was provided - any code outside of installed npm packages is all my own work.

### The following criteria must be met:

***Interface***

* All application components render on-screen in a responsive manner
* All application components are usable across modern desktop, tablet, and phone browsers

***Application Functionality***

* Includes a text input field or dropdown menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free
* A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied
* Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)
* List functionality is responsive and runs error free
* Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied
* Clicking a marker displays unique information about a location somewhere on the page (modal, separate div, inside an infoWindow)
* Any additional custom functionality provided in the app functions error-free

***Asynchronous Data Usage***

* Application utilizes the Google Maps API or another mapping system and at least one non-Google third-party API
* All data requests are retrieved in an asynchronous manner using either the Fetch API or XMLHttpRequest
* Data requests that fail are handled gracefully using common fallback techniques (i.e. AJAX error or fail methods). 'Gracefully' means the user isn’t left wondering why a component isn’t working. If an API doesn’t load there should be some visible indication on the page that it didn’t load

***Documentation***

* A `README` file is included detailing all steps required to successfully run the application
* Comments are present and effectively explain longer code procedures

***Location Details Functionality***

* Functionality providing additional data about a location is provided and sourced from a 3rd party API. Information can be provided either in the marker’s `infoWindow`, or in an `HTML` element in the `DOM` (a sidebar, the list view, a modal, etc.)
* Provide attribution for the source of additional data. For example, if using Foursquare, indicate somewhere in your UI and in your README that you are using Foursquare data
* Application runs without console errors
* Functionality is presented in a usable and responsive manner

***Accessibility***

* Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus
* Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined
* All content-related images include appropriate alternate text that clearly describes the content of the image

***Offline Use***

* When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access


## Technologies used

React was used to build this app, with the help of the `create-react-app` npm package.  Links to the technologies used can be found below.

* [Create React App](https://github.com/facebook/create-react-app/blob/master/README.md)
* [React Google Maps](https://github.com/tomchentw/react-google-maps)
* [Google Maps API](https://developers.google.com/maps/documentation/)
* [U.K. Police API](https://data.police.uk/docs/)


## Installation

### NPM
* install all project dependencies with `npm install`
* start the development server with `npm start`

### Yarn
* install all project dependencies with `yarn install`
* start the development server with `yarn start`


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
