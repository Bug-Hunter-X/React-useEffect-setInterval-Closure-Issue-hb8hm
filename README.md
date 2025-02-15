# React useEffect setInterval Closure Issue

This repository demonstrates a common error when using `setInterval` inside a `useEffect` hook in React.  The issue stems from the closure created by the `useEffect` hook. The callback function within `setInterval` does not see updates to the state variable (`count` in this case).