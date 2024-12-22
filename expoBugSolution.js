Instead of piecemeal fixes, I found the most reliable solution involved a complete project reset.  This involves:

1. Deleting the `node_modules` folder.
2. Deleting the `package-lock.json` file.
3. Running `npm install` or `yarn install` to reinstall all project dependencies.
4. Clearing the Expo cache using `expo start --clear`.
5. Finally, restarting the Expo development server with `expo start`.

If these steps fail, consider creating a new Expo project from scratch to rule out any lingering project-specific problems.