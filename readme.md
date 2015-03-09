# Rin 3.0

A lean, gulp-based HTML & SASS boilerplate for better front-end coding.

<http://sanographix.github.io/rin/>

# Getting Started

### Required Components

- Node.js
    - <http://nodejs.org/>

## Set Up

#### 1) Install gulp:

*Note:* If you have already installed gulp, skip this section.

    $ npm install -g gulp

#### 2) Clone Rin:

    $ git clone git@github.com:sanographix/rin.git test-repo
    $ cd test-repo
    $ npm install

#### 3) Run gulp:

    $ gulp

#### 4) :tada:

<hr/>

# Directory

While you are running Rin, It is watching directories under `sass/`, `js/`, `images/`. Put your project’s scss, js, images files in it. Each files will compile and output to `build/`.


	rin/
	┣┳ sass/
	┃┣ js/
	┃┗ images/
	┃
	┗┳ build/
	 ┗┳ css/
	  ┣ js/
	  ┗ images/


# Images

Rin optimizes gif, jpg, png, svg images automatically using [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin). Each files will output to `build/`.

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

 -> [normalize.css](http://necolas.github.io/normalize.css/)

## _grid.scss

It helps you make simple grid system. Like this:

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

## _button.scss

Example:

    <a class="btn">Normal button</a>
    <a class="btn btn-light">Light color button</a>
    <a class="btn btn-primary">Primary button!</a>
    <a class="btn btn-large">Large button!!</a>

## _variable.scss

Color variables and breakpoints of browser window width.

### Media queries breakpoints

- `mq-lg`
    - Large display (>1240px)
- `mq-md`
    - Tablet display (<1024px)
- `mq-sm`
    - Small tablet & Smartphone (<767px)
- `mq-xs`
    - Smartphone (<480px)

#### Example:

    header h1 {
        font-size: 200%;
        @media #{$mq-lg} {
            font-size: 300%;
        }
        @media #{$mq-sm} {
            font-size: 100%;
        }
        @media #{$mq-xs} {
            font-size: 80%;
        }
    }

### at2x

Variables for retina devices.

- `at2x`
    - All retina devices
- `at2x-tablet`
    - Retina devices (larger than iPad display)
- `at2x-pc`
    - Retina devices larger than PC display (1025px)
    - Use this variables when you need to load too large file size images.

#### Example:

    header h1 {
        background: url("images/title.png");
        @media #{$at2x} {
            background: url("images/title@2x.png");
        }
    }

# JS

js files under `js/` will output to `build/js/scripts.js` with concatenated and compressed.

# Local Server

Rin runs local server by using [BrowserSync](http://www.browsersync.io/). Its default URL is <http://localhost:3000/>. It reloads your browser automatically when you update a file that gulp is watching.

# Author

### Showkaku Sano (sanographix)

Graphic designer from Kyoto.

- <http://www.sanographix.net/>
- Twitter: [@sanographix](http://twitter.com/sanographix/)

# License

### Major components:

* jQuery: MIT/GPL license
* Normalize.css: Public Domain
* html5shiv: MIT/GPL license
* gulp: MIT license
