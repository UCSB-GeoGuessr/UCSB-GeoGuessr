## Running GeoGuessr Locally

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)

# UCSB-GeoGuessr

Tech Stack

Front-End

	•	Next.js (React-based)
	•	Why? React has a large ecosystem and many UI libraries. Next.js has built-in features like server-side rendering and file-based routing that simplify development.
	•	Map Options: Leaflet, Google Maps JavaScript API, Mapbox GL JS (for the interactive map where users drop their guesses)
	•	Why Leaflet? 
		•	Simple Needs: our application only needs basic map functionality (dropping pins and calculating distances), which Leaflet handles well.
		•	Lightweight: Leaflet’s simplicity reduces overhead, making it faster and easier to implement.
		•	Free and Open: No cost or licensing concerns, making it beginner-friendly and budget-friendly.
	•	Street View/360° Imagery: Google Street View API 

Back-End

	•	Next.js API routes
	•	Manages game sessions, user data (scores, etc.), randomizing locations, etc.
	•	Database: PostgreSQL via Supabase (to store location data, user profiles, high scores, etc)
		•	PostgreSQL was selected for its structured data management, strong support for relational data, and advanced geospatial capabilities through the PostGIS extension, which is ideal for handling location-based queries and calculating distances in a GeoGuessr-style application. Its strict schema ensures data integrity, making it a robust choice for scaling the project in the future.

Hosting / Infrastructure
	•	Vercel for hosting front-end due to being optimized for Next.js with native support for server-side rendering (SSR), static site generation (SSG), and API routes.
	•Supabase (Hosting databases)

2. Minimum Viable Product (MVP)

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

3. Steps to Achieve This

Phase 1: Set Up the Basics

	1.	Collect and Prepare Location Data
	•	Identify a handful of key Isla Vista/UCSB locations.
	•	For each location, gather:
	•	The latitude/longitude coordinates.
	•	A link to a Street View or 360° image resource 
	•	Store this data in a simple JSON or a small database table in Postgres.
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
	•	Deploy the front-end on Vercel
	•	Deploy the back-end on Heroku, AWS, or use Next.js serverless functions.
	4.	Analytics & Testing
	•	Add tools to understand how users interact with the game.
	•	Expand or refine your location set based on user feedback.