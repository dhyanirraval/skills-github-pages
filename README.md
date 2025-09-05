## Genesys Cloud Embeddable Framework — Minimal Media Bar Embed

This repo contains a minimal static example that embeds the Genesys media bar (embedded client) using the official Genesys Cloud Embeddable Framework.

Important: You need a Genesys Cloud org and an OAuth client configured with the appropriate scopes. You also need the Embeddable Framework integration set up in your org if you plan to use a private deployment with a custom `framework.js`.

### Files

- `public/index.html`: Simple page with an `<iframe>` that loads the Embeddable Framework client.
- `public/framework.example.js`: Example config stub for private deployments (rename to `framework.js` when uploading in Genesys admin > Integrations > Private Genesys Cloud Embeddable Framework).

### Quick start (public deployment URL)

1) Replace `<YOUR_REGION_HOST>` and optional query params in `public/index.html` as needed. Common region hosts:

- `apps.usw2.pure.cloud`
- `apps.usw1.pure.cloud`
- `apps.use2.pure.cloud`
- `apps.euw2.pure.cloud`
- `apps.apse2.pure.cloud`
- `apps.apne2.pure.cloud`

2) Serve the static files:

```bash
npx serve public -l 5173
```

3) Open the served page, authenticate to your Genesys Cloud org when prompted.

### Private deployment (upload `framework.js`)

If you’re building a private deployment, create your `framework.js` based on `public/framework.example.js`, then in Genesys Cloud:

- Admin > Integrations > Add “Private Genesys Cloud Embeddable Framework”
- Upload your `framework.js`
- Restrict/allow embedding domains if your org enforces it

### Key docs

- Genesys Cloud Embeddable Framework overview: `https://help.mypurecloud.com/articles/about-genesys-cloud-embeddable-framework/`
- Add a Private Embeddable Framework integration: `https://help.mypurecloud.com/articles/add-a-private-genesys-cloud-embeddable-framework-integration/`
- Release notes: `https://help.mypurecloud.com/articles/release-notes-for-genesys-cloud-embeddable-framework/`

Notes:

- If your org has “Restrict Genesys Cloud Embedding” enabled, add your host domain to “Allow Embeddable Domain(s)”.
- For WebRTC audio, ensure a Genesys WebRTC phone is assigned and browser permissions are granted.

<header>

<!--
  <<< Author notes: Course header >>>
  Include a 1280×640 image, course title in sentence case, and a concise description in emphasis.
  In your repository settings: enable template repository, add your 1280×640 social image, auto delete head branches.
  Add your open source license, GitHub uses MIT license.
-->

# GitHub Pages

_Create a site or blog from your GitHub repositories with GitHub Pages._

</header>

<!--
  <<< Author notes: Step 1 >>>
  Choose 3-5 steps for your course.
  The first step is always the hardest, so pick something easy!
  Link to docs.github.com for further explanations.
  Encourage users to open new tabs for steps!
-->

## Step 1: Enable GitHub Pages

_Welcome to GitHub Pages and Jekyll :tada:!_

The first step is to enable GitHub Pages on this [repository](https://docs.github.com/en/get-started/quickstart/github-glossary#repository). When you enable GitHub Pages on a repository, GitHub takes the content that's on the main branch and publishes a website based on its contents.

### :keyboard: Activity: Enable GitHub Pages

1. Open a new browser tab, and work on the steps in your second tab while you read the instructions in this tab.
1. Under your repository name, click **Settings**.
1. Click **Pages** in the **Code and automation** section.
1. Ensure "Deploy from a branch" is selected from the **Source** drop-down menu, and then select `main` from the **Branch** drop-down menu.
1. Click the **Save** button.
1. Wait about _one minute_ then refresh this page (the one you're following instructions from). [GitHub Actions](https://docs.github.com/en/actions) will automatically update to the next step.
   > Turning on GitHub Pages creates a deployment of your repository. GitHub Actions may take up to a minute to respond while waiting for the deployment. Future steps will be about 20 seconds; this step is slower.
   > **Note**: In the **Pages** of **Settings**, the **Visit site** button will appear at the top. Click the button to see your GitHub Pages site.

<footer>

<!--
  <<< Author notes: Footer >>>
  Add a link to get support, GitHub status page, code of conduct, license link.
-->

---

Get help: [Post in our discussion board](https://github.com/orgs/skills/discussions/categories/github-pages) &bull; [Review the GitHub status page](https://www.githubstatus.com/)

&copy; 2023 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)

</footer>
