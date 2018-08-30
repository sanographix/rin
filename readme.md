# Rin 5

A lean HTML & SASS boilerplate for better front-end coding

<https://sanographix.github.io/rin/>

# Getting Started

### Required Components

- Node.js
    - <http://nodejs.org/>

## Set Up

#### 1) Clone Rin:

    $ git clone git@github.com:sanographix/rin.git test-repo
    $ cd test-repo
    $ npm install

#### 3) Run rin:

    $ npm start

#### 4) :tada:

<hr/>

# Directory

While you are running Rin, It is watching directories under `src/`. Put your project’s templates(ejs), scss, js, images files in it.

`templates/`, `scss/`, `js/`, `images/` files will compile and output to `build/`.

	rin/
	┣┳ src/
	┃┣ templates/
	┃┣ scss/
	┃┣ js/
	┃┗ images/
	┃
	┗┳ build/
	 ┗┳ index.html
	  ┣ css/
	  ┣ js/
	  ┗ images/

# Templates

Rin supports [EJS](http://www.embeddedjs.com/) template. When you edit and save `.ejs` files under `src/templates/pages`, they will output as `.html` to `build/` directory.

## Template tags

### site.json

Put variables which use for every pages.

Example:

	{
	  "siteName": "Example Site",
      "siteRootUrl": "http://example.com/",
      "ogImageUrl": "http://example.com/images/og-image.jpg",
      "fbAppId": "000000000",
      "twitterSite": "@sanographix",
      "googleAnalyticsId": "UA-00000000-1"
	}

### index.ejs

To use variables for particular single page, put variables into `<% var %>` at each page.

#### Example:

	<% var
	pageTitle = "Toppage";
	pageDescription = "Example site";
	%>
	<head>
		<title><%= pageTitle %> - <%= siteName %></title>
		<meta property="og:description" content="<%= pageDescription %>" />
	</head>

#### Result:

	<head>
		<title>Toppage - Example Site</title>
		<meta property="og:description" content="Example site" />
	</head>

# Images

Rin optimizes gif, jpg, png, svg images automatically using [imagemin](https://www.npmjs.com/package/imagemin-cli). Each files will output to `build/images/`.

# CSS

Rin supports scss.

	sass
	┣ style.scss // It imports under /lib files
	┗ lib
       ┣ _core.scss // Edit this files mostly
	   ┣ _button.scss // Buttons
	   ┣ _common.scss // Common components like `body` or `a` etc
	   ┣ _grid.scss // Responsive grid system
	   ┣ _normalize.scss // Normalize
       ┗ _variable.scss // Color variables

## _normalize.scss

 -> [normalize.css](https://necolas.github.io/normalize.css/)

## _grid.scss

It helps you make simple grid system. Like this:

### 3-column

    <div class="l-container">
      <div class="l-row">
        <div class="l-span4">
          Column A
        </div>
        <div class="l-span4">
          Column B
        </div>
        <div class="l-span4">
          Column C
        </div>
      </div>
    </div>

### 2-column

    <div class="l-container">
      <div class="l-row">
        <div class="l-span6">
          Column A
        </div>
        <div class="l-span6">
          Column B
        </div>
      </div>
    </div>

## _button.scss

Example:

    <a class="btn">Normal button</a>
    <a class="btn btn-light">Light color button</a>
    <a class="btn btn-primary">Primary button!</a>
    <a class="btn btn-lg">Large button!!</a>

## _variable.scss

Color variables and breakpoints of browser window width.

### Media queries breakpoints

- `mq-xs`
    - Smartphone (<480px)
- `mq-sm`
    - Smartphone, Tablet (>576px)
- `mq-md`
    - Tablet (>768px)
- `mq-lg`
    - Medium desktop display (>992px)
- `mq-xl`
    - Large desktop display (>1200px)
- `mq-xxl`
    - Extra large desktop display (>1600px)

#### Example:

    header h1 {
        font-size: 100%;
        @media #{$mq-xs} {
            font-size: 80%;
        }
        @media #{$mq-sm} {
            font-size: 150%;
        }
        @media #{$mq-md} {
            font-size: 200%;
        }
        @media #{$mq-lg} {
            font-size: 300%;
        }
    }

# JS

js files under `src/js/` will output to `build/js/scripts.js` with concatenated and compressed.

# Local Server

Rin runs local server by using [BrowserSync](https://www.browsersync.io/). Its default URL is <http://localhost:3000/>. It reloads your browser automatically when you update a file.

# Deploy to gh-pages branch

Run `git subtree` command.

```
git subtree push --prefix build/ origin gh-pages
```
- [Deploy to `gh-pages` from a `dist` folder on the master branch. Useful for use with yeoman](https://gist.github.com/cobyism/4730490)

# Author

### Showkaku Sano (sanographix)

Graphic designer from Kyoto.

- <https://sanographix.net/>
- Twitter: [@sanographix](https://twitter.com/sanographix/)

# License

MIT
