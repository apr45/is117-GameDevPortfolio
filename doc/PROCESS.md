# PROCESS.md — Grading the Payload

### 1. One Feature: Automating Deployment via GitHub Actions

**Prompts Used (In Order):**
*(These prompts are a faithful summary of how I directed the AI to help me build the deployment pipeline.)*

1.  **AI:** "Here is my initial file structure of my GitHub. I am using TypeScript, Node.js, and JSX. Any suggestions to add/change/remove?"
    * *Goal: Initial configuration and environment setup.*
2.  **AI:** Let's work on the necessary steps to deploying the live site."
    * *Goal: Identify the infrastructure needed for a TSX build.*
3.  **AI:** "Work on creating a guideline to instruct the AI on the layout of the website based on these goals and task.... [Detailed Goal, Structure, Design, and Audience/Tone provided]"
    * *Goal: Generate AGENTS.md for AI to follow in future uses*

### 2. Exit Checks: Pass and Fail

**Feature:** Automated Build and Deploy Pipeline.

| Exit Check | Goal Description | Status (Pass/Fail) | Resolution (if failed) |
| :--- | :--- | :--- | :--- |
| **Check 1** | Successfully create `.gitignore` to exclude `node_modules`. | **Pass** | N/A |
| **Check 2** | Configure `vite.config.ts` with correct repository `base` path. | **Pass** | N/A |
| **Check 3** | Define Brand Archetypes to guide the visual and tonal direction. | **Pass** | N/A - Selected **The Creator** and **The Magician**. |
| **Check 4** | Integrate Cialdini’s Principles into the user experience design. | **Pass** | N/A - Selected **Unity** (Peer identity) and **Liking** (Relatability). |
| **Check 5** | Establish strict content constraints for scrollytelling readability. | **Pass** | N/A - Set a **100-200 word limit** per scene to ensure engagement. |

### 3. Failure-Mode Reflection

**Mode Encountered:** *Inventing When Unsure*

During the initial phase of the deployment feature, I encountered a failure mode where the AI pair directed me based on my *stated goal* ("Deploy a TSX site to GitHub Pages") rather than verifying my *actual environment*. The AI confidently provided a complex deployment guide but did not initially verify my `package.json` scripts or local Node installation. I hit this moment when my initial push failed because the AI had presumed I already had Vite installed and configured, when in reality, my project was initialized with default settings that only had a placeholder "test" script. To change this, I shifted my interaction model. Instead of relying on the AI to guess the solution, I began providing concrete **images and snippets** of my current file contents (`vite.config.ts`, `package.json`, and the specific console errors). Providing this precise context allowed the AI to stop inventing a "correct" setup and start troubleshooting my *actual* setup, ultimately allowing me to resolve the environmental configuration errors.