# My scratch map
[The countries I've visited on planet Earth.](https://maurizuki.github.io/scratch-map)

Powered by [SVG World Map JS](https://github.com/raphaellepuschitz/SVG-World-Map) 🗺

## How to get yours
1. Fork this repository.
2. [Configure the publishing source for the GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
3. Edit */docs/index.html*: set the parameter of the `map.update()` method to the countries that you have visited, for example `map.update({ US: "#ff0000", GB: "#00ff00" })` highlights the U.S.A. and the United Kingdom in red and green, respectively.
4. Wait until the pages build and deployment workflow ends.
5. If you kept the original repo name, you should find your scratch map at https://*your_user_name*.github.io/scratch-map/.
6. Enjoy! 🫶
