# Devicon

Bower package for the [devicon](https://github.com/konpa/devicon) web font.

## Usage

Add the following `HTML` to your website:

````html
<link href="/css/devicon.css" rel="stylesheet" type="text/css">
````

Alternatively, you can use the minified version:

````html
<link href="/css/devicon.min.css" rel="stylesheet" type="text/css">
````

To use the `git` icon, you could use any of the following:

````html
<!-- Git, plain version -->
<i class="devicon-git-plain"></i>

<!-- Git, plain version with wordmark -->
<i class="devicon-git-plain-wordmark"></i>

<!-- Git, plain version, colored -->
<i class="devicon-git-plain colored"></i>

<!-- Git, plain version with wordmark, colored -->
<i class="devicon-git-plain-wordmark colored"></i>
````

You can view all of the icons [here](http://devicon.fr).

## Customization

To generate an **unminified** stylesheet and source map file, run the following command:

````bash
gulp
````

To generate a **minified** stylesheet, run the following command:

````bash
gulp --production
````