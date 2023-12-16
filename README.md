# commonplace

Welcome to the Commonplace monorepo, where all modules of the Commonplace platform will live.

The Commonplace platform is based on the PVD Things software suite, but will evolve into a modular community operating system for the web.

The "social network" of the past two decades is dying. People are tired of befriending accounts and speaking with avatars. It's time for a software platform that facilitates REAL social networks to form within and between our communities.

More to come.

## Getting Started

### Local Development

#### 1. Clone Commonplace and the API
```
git clone https://github.com/pvdthings/commonplace.git
git clone https://github.com/pvdthings/api.git
```

#### 2. Install dependencies
In Commonplace and the API project, run `npm install`.

#### 3. Set up the API
From the API project, follow its local development instructions. Quite a few environment variables need to be set.

#### 4. Run
Once the API is ready, run both projects.
```
// API
npm start

// Commonplace
npm run dev
```