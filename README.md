## :sparkles: Support us on GitHub — it makes a difference!

# Sections 📖

✔️ Overview and About Me\
✔️ Expertise \
✔️ Open Source Projects on GitHub\
✔️ Professional Journey\
✔️ Achievements and Certifications 🏆\
✔️ Articles\
✔️ Education and Training\
✔️ Get in Touch

To explore a live example, **[click here](https://example-portfolio.github.io/)**

# Duplicate and Utilize 📝

- This website is fully constructed using the `react-js` library of `javascript`, requiring the installation of `nodejs` and `npm`
- When installing `nodejs` and `npm`, ensure that the versions are equal to or greater than the ones indicated in the badges above
- For those interested in contributing or simply storing the project, the repository can be forked by clicking the button in the top-right corner of this page
- Once `nodejs` and `npm` are successfully installed, clone the repository to your local system using the following command:
  ```bash
   git clone https://github.com/example-portfolio/masterPortfolio.git
  ```
  This command will clone the entire repository to your system.
- To download the necessary dependencies to your system, navigate to the directory where the cloned repository is located and execute the following command:
  ```node
  npm install
  ```
- The project is now ready to be used
- To test it, use `npm start`, which will open the website locally in your browser.

# Personalize for Your Own Portfolio ✒️

In this project, there are four main aspects to customize for a different individual's portfolio: **package.json**, **Personal Details**, **GitHub Details**, and **Logo Splash**.

### package.json

Open this file, located in the primary cloned directory, choose a suitable "name", and modify the "homepage" to `https://<your-github-username>.github.io`. Ensure that you include `https://` to ensure proper font loading.

### Personal Details

The file `src/portfolio.js` contains comprehensive information about the individual. The file structure is as follows:

```javascript
// Home Page
const greeting = {
    ...
}

// Social Media
const socialMediaLinks = {
    ...
}

...
```

To reflect your details on the portfolio website, modify the personal information, experience, education, social media, certifications, blog information, and contact details within the `src/portfolio.js` file.

### Changing Icons on the Homepage "What I Do" Section

1. This section retrieves data from the "skills" section in the `portfolio.js` file.
2. Visit the website: https://icon-sets.iconify.design/
3. Search for the skill you wish to add.
4. Select your preferred icon.
5. Copy the text next to **Selected Icon** and replace it with the `fontAwesomeClassName` for that specific software skill.

#### Using Custom Images Instead of Iconify Icons

1. Place a valid image file in the `public/skills` folder
2. Add the image name to the `imageSrc` attribute of the relevant softwareSkill
3. Remove the `fontAwesomeClassName` property or leave it empty, as `imageSrc` takes precedence over it
4. Apply custom styling to the `img` tag using the `style` property

### GitHub Details

The `git_data_fetcher.mjs` file in the main repository directory is used to fetch data (Pull requests, Issues, Organizations, Pinned projects, etc.) from your GitHub account.

Inside the project, you'll find an `env.example` file. Create a new file named `.env` and copy the contents of `env.example` into it. The following environment variables are present in that file:

```javascript
GITHUB_TOKEN = your_token;
GITHUB_USERNAME = your_username;
```

You can generate a GitHub token as described [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). When generating the token, grant all permissions. Add your GitHub username and the generated token to the `GITHUB_USERNAME` and `GITHUB_TOKEN` variables in the `.env` file.

Now, execute the following command (ensure you've run `npm install` first):

```node
node git_data_fetcher.mjs
```

This command will fetch data from your GitHub and replace my data with yours. Run this command whenever you need to update GitHub-related information on the website.

### Logo Splash

Please note that if you visit [my portfolio](https://example-portfolio.github.io), you'll see an animated logo at the beginning. I designed this logo using [`Figma`](https://www.figma.com/) and animated it using CSS.
This section of the portfolio isn't customizable, but I have solutions for you:

- Design your own logo using `Figma`, `Adobe XD`, `Adobe Illustrator`, or `Inkscape`. To animate it, refer to the files in the `./src/components/Loader` directory, which contain the JavaScript and CSS code for the animation.
- If you don't want a splash screen or don't know how to design a logo, follow these steps:

  - Open the `src/portfolio.js` file and find the `settings` component at the top:
    ```javascript
    // Website related settings
    const settings = {
      isSplash: true,
    };
    ```
  - Change `isSplash` from `true` to `false`
  - Running `npm start` will now directly open the `home` page without the logo animation
  - If you design a logo in the future, edit the files in `./src/components/Loader` and set `isSplash` back to `true` in `src/portfolio.js`.

## Other Customizations

- Modify the website title and other descriptions in `public/index.html`
- Define your own favicon in the `public/icons` directory. If you don't have a favicon, you can generate one using [Favicon Generator](https://www.favicon-generator.org/) and [Favicon IO](https://favicon.io/)
- Edit your website preview (known as the description image). Capture a screenshot of your site running locally, and replace `public/icons/desc.png` with the screenshot. Ensure the screenshot size is 1280x640 for optimal preview.

# Choose a Theme 🌈

- Examine the `src/theme.js` file for available themes and their respective color codes
- At the end of this file, you'll find the following code:
  - `export const chosenTheme = blueTheme;`
  - Replace `blueTheme` with the name of your desired theme
  - You can define new themes in the same manner as existing ones and assign the name of your new theme to `chosenTheme`
- That's it! Changing the theme name will handle the rest
- Verify everything is working by running `npm start`.

# Deployment 📦

- Once you've completed the setup and followed all the steps above, it's time to publish your website!
- I highly recommend using [Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) for the easiest deployment process.
- To deploy your website, you have two options. First, create a GitHub repository named `<your-github-username>.github.io`. Use this exact name—no variations.
- Next, generate a production build and deploy the