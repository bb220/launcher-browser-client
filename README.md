# Launcher WebApp

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel)
![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A sleek and modern frontend application for the Launcher platform, designed to provide an engaging user experience while seamlessly integrating with backend services like the Launcher UserService.

Built with Next.js and styled with Tailwind CSS, this web application is optimized for performance and scalability, making it ideal for rapid development and deployment.

---

## Key Features
- 🌟 Intuitive user interface with responsive design
- 🔒 Secure user registration and login
- 📊 Dashboard with dynamic content
- 🌐 API integration with Launcher UserService

---

## Technologies Used
- **Next.js** — React framework for production
- **Tailwind CSS** — Utility-first CSS framework
- **Vercel** — Hosting and deployment platform

---

## Local Setup and Installation

### 1. Clone the repository
```bash
git clone https://github.com/bb220/launcher-webapp.git
cd launcher-webapp
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the app locally
```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🚀 Deployment

This project is continuously deployed via [Vercel](https://vercel.com/). On each push to the `main` branch, Vercel automatically builds and deploys the latest version.

---

## 📦 Environment Variables

The following environment variables may be required:

| Variable Name            | Description                    |
|---------------------------|--------------------------------|
| `NEXT_PUBLIC_API_URL`     | Base URL for backend API       |

Create a `.env.local` file in the project root and add the necessary variables:

```bash
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

---

## ✨ Future Improvements
- HttpOnly cookies for refresh token
- Integration with additional Launcher platform services
- Enhanced UI/UX features

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author
Built by [bb220](https://github.com/bb220)
Open to feedback and collaboration!
