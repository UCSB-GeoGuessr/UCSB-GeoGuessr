# UCSB-GeoGuessr


1. Tech Stack Recommendations

Front-End

	•	React or Next.js (React-based)
	•	Why? React has a large ecosystem and many UI libraries. Next.js has built-in features like server-side rendering and file-based routing that simplify development.
	•	Mapping/Street View/360° Imagery
	•	Google Maps JavaScript API or Mapbox GL JS for the interactive map where users drop their guesses.
	•	Google Street View API or Mapillary to embed 360° panoramas. If you already have your own 360° images, you could also use a custom 360° viewer (e.g., React 360 Viewer libraries).

Back-End

	•	Node.js (Express) or Next.js API routes if using Next.js
	•	Manages game sessions, user data (scores, etc.), randomizing locations, etc.
	•	Database
	•	PostgreSQL or MongoDB to store location data, user profiles, high scores, etc.
	•	Because your dataset (UCSB/Isla Vista) is relatively small, you could even start with a JSON file or a minimal database.

Hosting / Infrastructure

	•	Vercel or Netlify for hosting front-end (Next.js/React).
	•	AWS (EC2 / S3) or Heroku for back-end services or storing 360° images.
	•	Firebase could be an option for an all-in-one backend (authentication, real-time database) if you want to reduce DevOps overhead.

Additional Considerations

	•	Authentication: Use Auth0, Firebase Auth, or a custom OAuth if you want players to have profiles and track scores.
	•	Analytics & Logging: Tools like Google Analytics or LogRocket for user insights (optional, but helpful to understand player behavior).

2. Minimum Viable Product (MVP)

The simplest version of your GeoGuessr-style game could look like this:
	1.	Randomized Location & Street View
	•	When the user starts the game, they’re presented with a 360° panorama or static image of a random spot in Isla Vista/UCSB.
	2.	Guess Mechanic
	•	The user is shown a map (Google Maps or Mapbox) of the area.
	•	The user pins their guess on the map.
	3.	Distance & Score
	•	Once the user clicks “Guess,” the application calculates the distance between the user’s guess and the actual location.
	•	Displays the user’s distance error and a basic score.
	4.	Play Again
	•	Simple “Next Round” or “Play Again” button to load another random location.

This MVP does not require user accounts, leaderboards, or sophisticated design. It’s purely functional: show location → guess → reveal distance.

3. Steps to Achieve This

Below is a general roadmap, with each phase building upon the previous.

Phase 1: Set Up the Basics

	1.	Collect and Prepare Location Data
	•	Identify a handful of key Isla Vista/UCSB locations.
	•	For each location, gather:
	•	The latitude/longitude coordinates.
	•	A link to a Street View or 360° image resource (whether via Google Street View API, Mapillary, or your own images).
	•	Store this data in a simple JSON or a small database table.
	2.	Initialize the Front-End Project
	•	Create a new React or Next.js app.
	•	Install necessary dependencies (e.g., npm install react-map-gl or npm install @react-google-maps/api for your map).
	3.	Embed a Single 360° Image
	•	Hardcode the first location to test your 360° embed.
	•	Ensure you can pan/zoom around the image.
	4.	Add a Map for Guessing
	•	Render a map centered around Isla Vista or UCSB.
	•	Let the user place a marker by clicking on the map (capture the latitude/longitude in state).
	5.	Calculate Distance
	•	On “Guess,” compute the distance using a formula (e.g., Haversine formula) between the user’s guessed coordinates and the actual location.
	•	Display the distance to the user.
	6.	Build a Simple UI
	•	Show the Street View/360° window.
	•	Show the map.
	•	“Guess” button and distance result.

By the end of Phase 1, you should have a single playable location that demonstrates the core game loop.

Phase 2: Randomization & Multiple Rounds

	1.	Random Location Selection
	•	Instead of hardcoding a location, load your location dataset (JSON or DB) and randomly select one.
	•	Display the corresponding 360°/Street View for that location.
	2.	Multiple Rounds
	•	Let the user play a set number of rounds (e.g., 5).
	•	Track total score over these rounds (sum or average the distance).
	3.	Basic UI Improvements
	•	Add “Next Round” and “End Game” flows.
	•	Show round information (e.g., “Round 3/5”).

Phase 3: User Accounts & Scoring

	1.	Authentication (optional but common in GeoGuessr-like games)
	•	Integrate a simple login system (e.g., Firebase Auth or Auth0).
	•	Store user profile and total game score.
	2.	Leaderboards
	•	Create a database table to store scores, timestamps, and user IDs.
	•	Display the leaderboard in the UI.
	3.	Additional Game Features
	•	Timed mode (limit how long a user can browse the 360° image).
	•	Hints or partial location reveal.

Phase 4: Polish & Scalability

	1.	UI/UX Enhancements
	•	Make the interface mobile-friendly.
	•	Improve your design with a professional UI library (Material UI, Chakra UI, Tailwind, etc.).
	2.	Performance & Caching
	•	Optimize image loading times.
	•	Add caching layers if needed.
	3.	Hosting & Deployment
	•	Deploy the front-end on Vercel or Netlify.
	•	Deploy the back-end on Heroku, AWS, or use Next.js serverless functions.
	4.	Analytics & Testing
	•	Add tools to understand how users interact with the game.
	•	Expand or refine your location set based on user feedback.

Summary

	•	Tech Stack:
	•	Front-End: React or Next.js + Map (Mapbox/Google Maps) + Street View (Google or Mapillary)
	•	Back-End: Node.js (Express) or Next.js API routes + DB (PostgreSQL/MongoDB)
	•	Hosting: Vercel/Netlify for front-end, AWS/Heroku/Firebase for back-end.
	•	MVP:
	1.	One random location from a small set.
	2.	Show 360° view.
	3.	User drops a pin on a map.
	4.	Display distance and a simple score.
	•	Roadmap:
	1.	Basic single-location flow.
	2.	Multiple rounds & randomization.
	3.	Authentication and leaderboards.
	4.	Performance enhancements and UX polish.

