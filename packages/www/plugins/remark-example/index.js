const visit = require('unist-util-visit');
const cheerio = require('cheerio');
const Promise = require('bluebird');
const _ = require('lodash');
const fs = require('fs');
const Prism = require('prismjs');
const path = require('path');

try {
  require(`prismjs/components/prism-jsx.js`);
  // replace js with jsx
  Prism.languages['js'] = Prism.languages['jsx'];
} catch (e) {
  // console.log('missing jsx support </3');
}

const lang = Prism.languages['js'];

module.exports = ({ markdownAST }, pluginOptions = {}) =>
  new Promise(resolve => {
    visit(markdownAST, 'html', node => {
      const $ = cheerio.load(node.value);
      const example = $('example');
      const exampleSrc = example.attr('src');
      if (example && exampleSrc) {
        const filePath = `${process.cwd()}/src/pages/examples/${exampleSrc}.js`;
        const code = fs.readFileSync(filePath, 'utf8').trim();
        delete require.cache[path.resolve(filePath)];
        const exampleHeight = example.attr('height');
        const height = exampleHeight ? ` height="${exampleHeight}"` : '';
        const iframe = `<div class="gatsby-highlight-example"><iframe${height} width="100%" src="/examples/${exampleSrc}/" frameborder="0" scrolling="auto" onload="resizeIframe(this)"></iframe></div>`;
        const rawHTML = `<div class="gatsby-highlight"><pre class="language-js"><code>${Prism.highlight(
          code,
          lang
        )}</code></pre></div>`;

        node.type = `html`;
        node.value = iframe + rawHTML;
      }
    });

    return resolve();
  });
