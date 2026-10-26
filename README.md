# Yehia's Career Path

## Student
Full Name: Sally Ali Kadi

## Project Description
Yehia's Career Path is a Next.js website that helps Yehia, a Computer Science graduate from Lebanese University, First Branch, organize his career journey.

The website includes a career plan, job opportunities, dynamic opportunity details, a dashboard overview, and an applications page.

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/sally-kadi/yehia-career-path.git
```

### 2. Open the project folder

```bash
cd yehia-career-path
```

### 3. Switch to the Assignment 1 branch

```bash
git switch assignment-1-routing
```

### 4. Install dependencies

```bash
npm install
```

### 5. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Assignment Questions

### 1. Why did you use await when reading params?

In Next.js 16, the params value is asynchronous. We use await params to access the dynamic route parameters before using the opportunity ID.

### 2. Why is the route ID a string?

The ID comes from the URL, so Next.js provides it as a string. For example, the URL /opportunities/1 gives an ID of "1".

### 3. What belongs in the dashboard layout, and what belongs in each dashboard page?

The dashboard layout should contain the shared dashboard navigation that appears on both dashboard pages. Each dashboard page should contain its own specific content, such as the dashboard summary or the applications list.