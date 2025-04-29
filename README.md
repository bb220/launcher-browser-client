# Launcher WebApp

Frontend web application for the Launcher platform.  
This project provides the user-facing experience and connects to backend services such as the Launcher UserService.

---

## Features

- Landing page with placeholder content
- User Registration and Login
- Dashboard for logged in users with placeholder content
---

## Tech Stack

- [Next.js](https://nextjs.org/) (React Framework)
- [Vercel](https://vercel.com/) (Hosting & Deployment)
- [Tailwind CSS](https://tailwindcss.com/) (Optional — if used)
- API integration with Launcher UserService (Coming soon)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

Clone the repository:

```bash
git clone https://github.com/bb220/launcher-webapp.git
cd launcher-webapp
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Deployment

This project is continuously deployed via [Vercel](https://vercel.com/).

On each push to the `main` branch, Vercel automatically builds and deploys the latest version.

---

## Environment Variables

The following environment variables may be required:

| Variable Name            | Description                    |
|---------------------------|--------------------------------|
| `NEXT_PUBLIC_API_URL`     | Base URL for backend API       |

Create a `.env.local` file in the project root and add the necessary variables:

```bash
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

---

## Roadmap

- [x] Initial Frontend Setup
- [ ] Connect frontend to Launcher UserService
- [ ] Add user session management
- [ ] Add UI/UX enhancements
- [ ] Integrate additional Launcher platform services

---

## License

[MIT](LICENSE)

---

## Related Projects

- [Launcher UserService](https://github.com/bb220/launcher-userservice)
