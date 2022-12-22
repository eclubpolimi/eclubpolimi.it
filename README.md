# eclubpolimi.it

The E-Club Polimi website's source code. See it in action at [eclubpolimi.it](https://www.eclubpolimi.it/).
The website is made with [React](https://reactjs.org/) and [Next.js](https://nextjs.org/).

## Getting Started

Follow the steps below to get the website up and running for development.

### Prerequisites

- Node.js 16+  
  Get the latest LTS version for your platform [here](https://nodejs.org/it/download/).

### Installation

1. Clone the repo (can also be done with your preferred git tool)
   ```sh
   git clone https://github.com/eclubpolimi/eclubpolimi.it.git
   ```
2. Install required NPM packages
   ```sh
   cd eclubpolimi.it
   npm ci
   ```

## Usage

From inside the root project folder, you can run the Next development server with

```sh
npm run dev
```

or build the website with

```sh
npm run build
```

and subsequently launch it with

```sh
npm run start
```

## Git Development Workflow

We make extensive use of GitHub's Pull Requests. Every contribution to the repository must be made on a separate branch
from the `master` branch, and then PRd to it. After a review phase, the PR will be merged.
