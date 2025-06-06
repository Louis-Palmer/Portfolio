# Portfolio-Site
This portfolio is a Template from [Here](https://github.com/RiadhAdrani/slick-portfolio-svelte-5).  
To run a localhost preview enter commands below into console.   
`npm install`  
`npm run dev` 
## Commit Message Format
[Commit Messge Format inspiration from here.](https://gist.github.com/develar/273e2eb938792cf5f86451fbac2bcd51)  
Structure  
` <Type>-<State>:<Commit Message> `  
  
Example  
`feat-wip: Setup landing page`
### Type
- **feat:** New feature.
- **fix:** Bug fix.
- **com:** Comment or documentation change.
- **style:** Style change, does not effect function of code.
- **ref:** Code change that doesnt fix a bug or add new feature.
- **perf:** Performance change
- **test:** test related code
- **imp:** importing or adding new files, such as packages and images.
  
### State
- **wip:** Work in progress, so incomplete code.
- **fin:** the currently scopped finished version of the code (doesnt mean cannot go back and change it)



# Slick Portfolio With Svelte.

Vercel-like style portfolio template for developers.

[For a reference, check out my personal protfolio, slightly changed, but uses this template.](https://riadhadrani.github.io/RiadhAdrani)

## Libraries

The main libraries used here are :

- `shadcn-svelte` : component library.
- `tailwindcss` : css styling.
- `unocss` : fonts and icons.
  - using `carbon` (and thus the icon names `i-carbon-*`) icons that could be browsed [here](https://icones.js.org/collection/carbon)
- `mode-watcher` : color mode utility.
- `prismjs` : markdown parsing in combination with `marked`, `marked-mangle`, `marked-gfm-heading-id` and `dompurify`.

## Create

You can either clone or fork this repository :

### `fork`

You can fork the project, maintaining a link to the original repo using the `fork` button, make sure the check the `Copy the master branch only` checkbox.

![alt text](./screenshots/image.png)

### `clone`

- using `git` :

```bash
# ssh
git clone git@github.com:RiadhAdrani/slick-portfolio-svelte-5.git protfolio

# https
git clone https://github.com/RiadhAdrani/slick-portfolio-svelte-5.git protfolio
```

- using `degit` npm executable :

```bash
npx degit RiadhAdrani/slick-portfolio-svelte-5 portfolio
```

if you don't have `degit`, it will prompt you to accept, enter `y`.

> You can add the main repo as another remote repo to maintain updates in the future.
>
> ```bash
> # ssh
> git remote add main git@github.com:RiadhAdrani/slick-portfolio-svelte-5.git
> ```

## Deploy to GitHub pages

Before deploying to `GitHub Pages`:

### Enable workflows for `Forks`

If you forked the repo, go to the `Actions` tab in the newly generated repository, and enable workflows, click on the green button `I understand my workflows, go ahead and enable them` :

![alt text](./screenshots/enable-fork-workflow.png)

### Actions Settings

Allow `GitHub Pages` in your repo settings with correct permissions:

- go to your repo `Settings` > `Actions` > `General`
- in `Actions permissions` : make sure that `Allow all actions and reusable workflows` checkbox is checked

![alt text](./screenshots/settings-actions.png)

### svelte.config.js

Depending on the name of your repository, you would like to set the `base` variable to that, starting with a leading slash like this:

```js
const base = '/slick-portfolio-svelte';
```

But if your repository name is the same as your Github domain name; my Github name is `RiadhAdrani` so my domain name is `riadhadrani.github.io` (lower cased), and so the special repository name is also `riadhadrani.github.io`: if that is the case, you need to set the base to an empty string

```js
const base = '';
```

### Launching the build and deploy workflow

If you didn't commit and push the changes in the `svelte.config.js` yet, you can do that now, otherwise you can create an empty commit:

```bash
git commit --allow-empty -m "chore: trigger workflow"
```

and push it to your `master` or `main` branch.

In the `Actions` tab, make sure that the `Build and Deploy` workflow is successful (wait for it to complete): you should have at least one successfull workflow run:

![alt text](./screenshots/build-and-deploy-action.png)

### Enable GitHub pages

- go to your repo's `Settings` > `Pages`
- in Source section, select `Deploy from a branch`.
- in Branch section, select `gh-pages` and `/ (root)` and click on save

![alt text](./screenshots/enable-gh-pages.png)

Again in the `Actions` tab, make sure that the `pages-build-deployment` workflow is successful (wait for it to complete): you should have at least one successfull workflow run:

![alt text](./screenshots/pages-build-deployment-action.png)

> If for some reason no action was launched, try pushing empty commit.

## That's it

That's it, you can click on the latest deployment and visit it.

## Adapt to your needs

If you want to use the template as it is, you can :

- update files in `src/lib/data` with your data.
- update `src/lib/index.css` for custom styling.
- update `src/lib/index.css` for custom markdown styling.

- update `static/favicon.png` to customize the tab's icon.

- You can find `shadcn-svelte` component in `src/lib/components/ui`, other components are arranged by their page, or in the `common` folder.

But feel free to explore and hack the template to your needs if you feel like it.

## Known issues:

- Svelte no longer support `node 14`, use a newer version instead.
