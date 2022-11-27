<template><div><h1 id="colors" tabindex="-1"><a class="header-anchor" href="#colors" aria-hidden="true">#</a> Colors</h1>
<card>
<h2 id="default-colors" tabindex="-1"><a class="header-anchor" href="#default-colors" aria-hidden="true">#</a> Default Colors</h2>
<p>Vuesax has the main colors that are maintained throughout the application to facilitate change and effective operation</p>
<p>The main colors can be changed and customized to the taste of each developer for a more personalized application</p>
<p>Default colors:</p>
<ul>
<li>primary</li>
<li>success</li>
<li>danger</li>
<li>warn</li>
<li>dark</li>
</ul>
<colors-default /></card>
<card>
<h2 id="customize-theme-colors" tabindex="-1"><a class="header-anchor" href="#customize-theme-colors" aria-hidden="true">#</a> Customize Theme Colors</h2>
<p>You can change the colors as you want and at any time, vuesax uses native css variables which means you can access them and change them whenever you want</p>
<p>equal vuesax gives you several ways to change the main colors either by css or javascript</p>
</card>
<card>
<h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> javascript</h2>
<div class="language-javascript" data-ext="js"><pre v-pre class="language-javascript"><code>  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuesax<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">primary</span><span class="token operator">:</span><span class="token string">'#5b3cc4'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">success</span><span class="token operator">:</span><span class="token string">'rgb(23, 201, 100)'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">danger</span><span class="token operator">:</span><span class="token string">'rgb(242, 19, 93)'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">warning</span><span class="token operator">:</span><span class="token string">'rgb(255, 130, 0)'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dark</span><span class="token operator">:</span><span class="token string">'rgb(36, 33, 69)'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></card>
<card>
<h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h2>
<p>You can change the vuesax variables by means of css like any other css variable</p>
<div class="custom-container tip">
<p>It is important that the colors are in HEX format and only the numerical value for example: <code v-pre>rgb (255,100,50)</code> is equivalent to <code v-pre>255,100,50</code></p>
</div>
<div class="language-css" data-ext="css"><pre v-pre class="language-css"><code>  <span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--vs-primary</span><span class="token punctuation">:</span> 91<span class="token punctuation">,</span> 60<span class="token punctuation">,</span> 196
    <span class="token property">--vs-success</span><span class="token punctuation">:</span> 23<span class="token punctuation">,</span> 201<span class="token punctuation">,</span> 100
    <span class="token property">--vs-danger</span><span class="token punctuation">:</span> 242<span class="token punctuation">,</span> 19<span class="token punctuation">,</span> 93
    <span class="token property">--vs-warn</span><span class="token punctuation">:</span> 254<span class="token punctuation">,</span> 130<span class="token punctuation">,</span> 0
    <span class="token property">--vs-dark</span><span class="token punctuation">:</span> 36<span class="token punctuation">,</span> 33<span class="token punctuation">,</span> 69
  <span class="token punctuation">}</span>
</code></pre></div></card>
<card>
<h2 id="vs-function" tabindex="-1"><a class="header-anchor" href="#vs-function" aria-hidden="true">#</a> VS Function</h2>
<p>You can change the main colors at any point of your application but only on the client side with the existence of the <code v-pre>document object</code> with the function of vuesax<code v-pre> $ vs. setColor</code></p>
<div class="custom-container tip">
<p>You can only use this function when you can obtain the document object, for example it cannot be used in the <code v-pre>created ()</code> of vuejs since the document and the elements are not yet rendered</p>
</div>
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">setColor</span><span class="token punctuation">(</span><span class="token string">'primary'</span><span class="token punctuation">,</span> <span class="token string">'#000'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre></div></card>
</div></template>


