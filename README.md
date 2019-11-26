# Let's make a slow website fast!
Repo for the ATX Web Performance Meetup where we'll attempt to make a slow website fast on the fly. Here's the [event page](https://www.meetup.com/austin-web-performance/events/266519185/).


## Things to cover
* [ ] `srcset`
* [ ] Image lazy loading
* [ ] `async` or `defer`
* [x] Font loading
* [ ] Minification and concatenation
* [ ] Fallback UIs
* [ ] Avoiding full libraries like lodash/moment/etc.
* [ ] Poor performing animation?
* [ ] Inline critical CSS?


## Optimizing fonts
Here's a [good read](https://www.zachleat.com/web/comprehensive-webfonts/) on all the different font-loading strategies. For, we'll use Google Fonts as it's quite popular and easy to set up.

### Optimization steps
- Ensure you're using WOFF2 (or least WOFF)
- Ensure you're only loading the weights, styles and languages you need
- Use [`font-display`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display) properties to help your visually complete score
- Bonus: Use a JS library like [Web Font Loader](https://github.com/typekit/webfontloader) to make font-loading non-render blocking
- Bonus: Use [https://medium.com/variable-fonts/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369]
