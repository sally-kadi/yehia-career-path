# Assignment Notes — Yehia's Career Path

This document contains the assignment questions and answers associated with the project.

## 1. Why did you use `await` when reading `params`?

In Next.js 16, the `params` value is asynchronous. We use `await params` to access the dynamic route parameters before using the opportunity ID.

## 2. Why is the route ID a string?

The ID comes from the URL, so Next.js provides it as a string. For example, the URL `/opportunities/1` gives an ID of `"1"`.

## 3. What belongs in the dashboard layout, and what belongs in each dashboard page?

The dashboard layout should contain the shared dashboard navigation that appears on both dashboard pages. Each dashboard page should contain its own specific content, such as the dashboard summary or the applications list.
