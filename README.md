# Yehia's Career Path

## Student
Full Name: sally ali kadi

## Project Description
Yehia's Career Path is a small Next.js website that helps Yehia organize his career journey. It includes a career plan, job opportunities, opportunity details, a dashboard, and an applications page.

## How to Run the Project

Install the dependencies:

npm install

Start the development server:

npm run dev

Then open the local address shown in the terminal.

## Assignment Questions

### 1. Why did you use await when reading params?

In Next.js 16, the params value is asynchronous. We use await params to access the dynamic route parameters before using the opportunity ID.

### 2. Why is the route ID a string?

The ID comes from the URL, so Next.js provides it as a string. For example, the URL /opportunities/1 gives an ID of "1".

### 3. What belongs in the dashboard layout, and what belongs in each dashboard page?

The dashboard layout should contain the shared dashboard navigation that appears on both dashboard pages. Each dashboard page should contain its own specific content, such as the dashboard summary or the applications list.