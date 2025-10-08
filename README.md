# React Tabs Project

A React-based tab interface that fetches job data from an external API and displays it with a dynamic button selector. Users can view job information such as company, title, dates, and responsibilities, with a clean UI inspired by a [Figma design](#figma-url).

---

## 🖼️ Figma URL

[Tabs - Figma Design](https://www.figma.com/file/FJC19b9eUWS62HKR8L9Dmn/Tabs?node-id=0%3A1&t=8Rio02EFK1r9ItDW-1)

---

## 🚀 Features

- Fetches job data from a remote API
- Displays job title, company, dates, and duties
- Tab-style navigation for switching between jobs
- Loading state while fetching data
- Reusable components (`JobInfo`, `JobDuties`, `BtnContainer`)
- Unique job IDs generated using `uuid`

---

## ⚙️ Setup & Run the App

This project uses [Vite](https://vitejs.dev/) for fast development.

Run the following commands in your terminal:

```bash
# Clone the repository
git clone https://github.com/your-username/react-tabs-project.git
cd react-tabs-project

# Install dependencies and run the dev server
npm install && npm run dev
