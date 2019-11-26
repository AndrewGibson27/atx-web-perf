# Let's make a slow website fast!
Repo for the ATX Web Performance Meetup where we'll attempt to make a slow website fast on the fly. Here's the [event page](https://www.meetup.com/austin-web-performance/events/266519185/).

## How to run the project
This assumes you have Python installed.

`python -m SimpleHTTPServer 3000`

Go to `http://localhost:3000/part-1`


## Methodology
- Lighthouse tested via incognito Chrome
- Simulated 4G slowdown
- Mobile


## Things to cover
* [x] `srcset`
* [x] Image lazy loading
* [x] Fallback UIs for images, etc.
* [ ] `async` or `defer`
* [x] Font loading
* [ ] Minification and concatenation
* [ ] Avoiding full libraries like lodash/moment/etc.
* [ ] Poor performing animation?
* [ ] Inline critical CSS?


## Optimizing fonts
Here's a [good read](https://www.zachleat.com/web/comprehensive-webfonts/) on all the different font-loading strategies. For now, we'll use Google Fonts as it's quite popular and easy to set up.

### Steps
- Ensure you're using WOFF2 (or least WOFF)
- Ensure you're only loading the weights, styles and languages you need
- Use [`font-display`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) properties to help your visually complete score
- Bonus: Use a JS library like [Web Font Loader](https://github.com/typekit/webfontloader) to make font-loading non-render blocking
- Bonus: Use [variable fonts](https://medium.com/variable-fonts/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369)


## Optimizing images
We'll start with a few large stock photos from this [website](https://picsum.photos/images).

### Steps
- Ensure they're compressed as much as possible
- Use [`srcset`](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) to provide multiple size options
- Provide a same-aspect-ratio placeholder to prevent page reflow (see [padding-bottom hack](https://www.smashingmagazine.com/2013/09/responsive-images-performance-problem-case-study/))
- Lazy load them, maybe with [this library](https://github.com/aFarkas/lazysizes)
- Bonus: Use WebP format
