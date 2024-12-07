# React useEffect setInterval Memory Leak

This repository demonstrates a common mistake when using `setInterval` within a React component's `useEffect` hook: forgetting to clear the interval when the component unmounts. This leads to memory leaks and unexpected behavior.

## Bug

The `bug.js` file contains a component that uses `setInterval` to update a counter every second. However, it does not clear the interval when the component unmounts, resulting in multiple intervals running concurrently after repeated renders. This causes a memory leak.

## Solution

The `bugSolution.js` file provides the corrected implementation.  It uses a cleanup function within `useEffect` to `clearInterval` when the component unmounts or when the component is re-rendered. This prevents memory leaks and ensures that only one interval is active at any time.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.
5. Observe the behavior of the counter in the browser.  With the buggy version, you will notice issues after remounting the component. The solution avoids these issues.