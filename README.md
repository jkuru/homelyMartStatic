````markdown
# Homely Mart – Static Website

A modern static website built with [React/Vite/Your Framework] and deployed on Firebase Hosting.

**Live Site:** https://your-project-id.web.app *(replace with your actual URL after first deploy)*

## Project Structure

```text
homely-mart/
├── src/                  # Source code
├── public/               # Static assets
├── build/                # Temporary output from npm run build
├── firebase/             # Firebase Hosting directory
│   ├── public/           # ← Final files served (build folder moved & renamed here)
│   └── firebase.json     # Firebase configuration
├── .gitignore
├── package.json
└── README.md             # ← You are here
````

## How to Deploy to Firebase Hosting (Step-by-Step)

### 1\. Install dependencies (first time only)

```bash
npm install
```

### 2\. Build the production site

```bash
npm run build
```

*Creates a fresh `build/` folder in the root.*

### 3\. Move build output to Firebase Hosting folder

```bash
# Remove old files
rm -rf firebase/public

# Move and rename build → firebase/public
mv build firebase/public
```

### 4\. Deploy to Firebase

Replace `<project-alias>` with your actual Firebase project ID or alias:

```bash
firebase deploy --only hosting --project <project-alias>
```

> **Note:** The `firebase.json` file should be located in the `firebase/` folder.

```
```
