# Let's make a slow website fast, Part 1

Repo for the ATX Web Performance Meetup where we'll attempt to make a slow website fast on the fly. Here's the [event page](https://www.meetup.com/austin-web-performance/events/266519185/).

## How to run the project

- Navigate to part-1 directory from the command line.
- Run`npm install` to install the Node.js dependencies
- Run `node server.js` to start the server.
- Navigate to http://localhost:3000/ in your web browser.

## Methodology

- Lighthouse tested via incognito Chrome
- Simulated 4G slowdown
- Mobile

## Things to cover

- [x] `srcset`
- [x] Image lazy loading
- [x] Fallback UIs for images (same-aspect-ratio gray boxes)
- [x] Improving time to first byte
- [x] Moving JS out of the page `<head>`
- [x] Removing excess DOM nodes
- [x] `async` or `defer` on scripts
- [x] Lazy loading iframes with `loading="lazy"`
- [x] Using `font-display`
- [x] Minification and concatenation
- [x] Avoiding full libraries like lodash/moment/etc.

## Reducing Server Response Times (TTFB)

### Steps

- Compression
- Minification
- HTTP2
- Optimize database queries, long tasks, etc.
- Caching
- CDN
- Server Hardware

## Optimizing JavaScript

### Steps

- Code splitting
- Move scripts to bottom of page, or use `async`/`defer`
- Use performance tab of Chrome DevTools to optimize long tasks
- Make API calls lazily using `IntersectionObserver`
- Use ES6 modules to take advantage of tree-shaking
- Avoid using entire utility libraries like Moment or Lodash (just pull out the functions you need)
- Minification and concatenation

## Optimizing CSS

- Inline critical CSS
- Use code splitting to only load the styles needed for the current route
- Minification and concatenation

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

### Code snippets

Here's an example of using the padding-bottom hack to create a placeholder to prevent reflow.

```css
figure {
  background-color: #DCDCDC;
  margin: 50px 0;
  position: relative;
  padding-top: 66.67%;
}
figure img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

## Miscellaneous

- Use `loading="lazy"` on things like images, videos and `<iframe>s` (check browser support tables)
- Take advantage of preconnecting, preloading and prefetching
