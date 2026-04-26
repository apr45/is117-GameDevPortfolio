# PROCESS.md — Grading the Payload

### 1. One Feature: Automating Deployment via GitHub Actions

**Prompts Used (In Order):**
*(These prompts are a faithful summary of how I directed the AI to help me build the deployment pipeline.)*

1.  **AI:** "Here is my initial file structure for my GitHub. I am using TypeScript, Node.js, and JSX. Any suggestions to add/change/remove?"
    * *Goal: Initial configuration and environment setup.*
2.  **AI:** "Let's focus on the necessary steps to deploying the live site. Remember the tools stated that will be used to build this site!"
    * *Goal: Identify the infrastructure needed for a TSX build.*
3.  **AI:** "Currently receiving issues on GitHub, preventing site deployment. Can you identified the errors on the image provided and provide a resolution? [Image showing 'Missing script: build']"
    * *Goal: Troubleshooting the bridge between the GitHub Action and the package.json.*
4.  **AI:** "Another issue I encounter in GitHub. Elaborate details regarding this problem and just like last time, help me resolve this. [Image showing 'Permission denied to github-actions[bot]. Error 403']"
    * *Goal: Final bug fix regarding security permissions on GitHub.*

### 2. Exit Checks: Pass and Fail

**Feature:** Automated Build and Deploy Pipeline.

| Exit Check | Goal Description | Status (Pass/Fail) | Resolution (if failed) |
| :--- | :--- | :--- | :--- |
| **Check A** | Successfully create `.gitignore` to exclude `node_modules`. | **Pass** | N/A |
| **Check B** | Run `npm run build` locally without errors. | **Pass** | N/A |
| **Check C** | Push to `main` branch, triggering GitHub Action. | **Pass** | N/A |
| **Check D** | Action successfully **installs** and **builds** on virtual runner. | **Fail** | *Issue:* The `package.json` default script was "test", not "build". *Fix:* Modified `package.json` to include proper `"build": "tsc && vite build"` scripts. |
| **Check E** | Action successfully **deploys** artifacts to `gh-pages` branch. | **Fail** | *Issue:* Received an HTTP 403 (Forbidden) error. *Fix:* Updated GitHub repository settings under "Actions > General > Workflow permissions" to "Read and write permissions". |

### 3. Failure-Mode Reflection

**Mode Encountered:** *Inventing When Unsure*

During the initial phase of the deployment feature, I encountered a failure mode where the AI pair directed me based on my *stated goal* ("Deploy a TSX site to GitHub Pages") rather than verifying my *actual environment*. The AI confidently provided a complex deployment guide but did not initially verify my `package.json` scripts or local Node installation. I hit this moment when my initial push failed because the AI had presumed I already had Vite installed and configured, when in reality, my project was initialized with default settings that only had a placeholder "test" script. To change this, I shifted my interaction model. Instead of relying on the AI to guess the solution, I began providing concrete **images and snippets** of my current file contents (`vite.config.ts`, `package.json`, and the specific console errors). Providing this precise context allowed the AI to stop inventing a "correct" setup and start troubleshooting my *actual* setup, ultimately allowing me to resolve the environmental configuration errors.