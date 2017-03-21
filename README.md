# Re:fuel (WIP)

This is the rough cut of a React Native app for iOS to help drivers of alternative-fuel cars find fueling stations near them.
It consumes an API published by the National Renewable Energy Lab, which provides excellent data on fueling stations nationwide.

**Note 1:** A clone of this app won't run locally, since auth and API credentials are secret.
**Note 2:** This app leverages some of React Native's iOS-specific APIs, and as such, is not ready to build for Android. 

## Todo:
- Styling.
- Finish profile page.
- Make map pins interactive, displaying a pop-up with station details on touch.
- Implement save-able settings.
- Explore offline functionality?

## Login:
Uses Auth0. Users must make an account or login with Google. (The behavior shown below is expected).

<img src="http://g.recordit.co/7c59MECFdV.gif" width="400" alt="gif of failed login" />

## Finding stations:
By default, the app asks permission to access the user's location via the geolocation API. Entering a zip is also an option:

<img src="http://g.recordit.co/kYQDZZbwWG.gif" width="400" alt="gif of searching for Denver stations by zip" />

## Profile:
Part of this project's spec was to integrate a data viz library, which was challenging to do through Xcode, and moreso because we changed the project's name halfway through development, which caused several tricky problems with launching, installing, and building.

<img src="http://g.recordit.co/VnskR5jJ48.gif" width="400" alt="gif of searching for Denver stations by zip" />




