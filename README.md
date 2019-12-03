# Let's make a slow website fast!

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
- [x] Fallback UIs for images, etc.
- [x] Time to first byte
- [x] Put JS in the page head
- [x] Massive unminified CSS like Normalize
- [x] Too many DOM nodes
- [x] `async` or `defer`
- [x] YouTube video
- [x] Enable compression
- [x] Font loading
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
