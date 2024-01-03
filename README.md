# Prettier for Melody

![Prettier Banner](https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png)

---

This plugin for Prettier is a fork of [`prettier-plugin-twig-melody`](https://github.com/trivago/prettier-plugin-twig-melody), which is currently unmaintained and [`@supersoniks/prettier-plugin-twig-melody`](https://github.com/bitbirddev/prettier-plugin-twig-melody) with serveral enhancements. The newer version of prettier has removed multiple deprecated methods and functions, and led to several issues which are fixed in this repo.

## Install

```bash
yarn add --dev @afshinhaghighat/prettier-plugin-twig-melody
```

or

```bash
npm install --save-dev @afshinhaghighat/prettier-plugin-twig-melody
```

## Use

```bash
prettier --write "**/*.melody.twig"
```

In your editor, if the plugin is not automatically picked up and invoked (e.g., if you are using format on save, but no formatting is happening when you save), try adding the plugin explicitly in your Prettier configuration (e.g., `.prettierrc.json`) using the `plugins` key:

```json
{
    "printWidth": 80,
    "tabWidth": 4,
    "plugins": ["./node_modules/@afshinhaghighat/prettier-plugin-twig-melody"]
}
```

## Enhancements

-   Preserve `only` keyword in twig templates.
-   Block statements : no empty line between opening end closing `block` statements.
-   Html element : nno empty line between opening and closing tags.
-   Updated `npm` packages to the latest version: `Prettier 3.1.1` is now included and issues related are fixed
