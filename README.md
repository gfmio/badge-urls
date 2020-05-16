# badge-urls

This package provides functions to generate URLs for all badges / shields from <shields.io>.

## Why

Shields are a great way to display information and stats about e.g. an open-source package. But managing them manually is error-prone and slow, especially if you want to generate a large number of shields.

There are other libraries out there offering similar functionality, but they are limited and incomplete. This one contains all supported shields, obtained via scraping the shields.io website, parsing the shield URLs and generating corresponding source code.

## Install

```sh
# Using yarn
yarn add badge-data

# Using NPM
npm install --save badge-data
```

## Usage

The badge objects are nested according to the categories on <shields.io>. Each shield comes with the `label` from the website and a `url` function that generates the url. All shields and helpers come with type definitions.

The `url` function will accept the parameters of the respective shield URL as function arguments plus an additional `options` argument to customise the shield with the options explained on the <shields.io> homepage.

```ts
import { shieldsIO } from "badge-urls";

console.log(badges.license.github.label);
// Will print: GitHub
console.log(badges.license.github.url("gfmio", "badge-urls"));
// Will print: https://img.shields.io/github/license/gfmio/badge-urls
```

Alternatively, you can also import an individual shield module:

```ts
import * as github from "badge-urls/lib/shields.io/shields/license/github";

console.log(github.label);
// Will print: GitHub
console.log(github.url("gfmio", "badge-urls"));
// Will print: https://img.shields.io/github/license/gfmio/badge-urls
```

## License

[MIT](LICENSE)
