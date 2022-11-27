<template><div><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1>
<card>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<p>Vuesax is a framework of UI components based on Vuejs which means that vuejs has to be in your project so that Vuesax can do the magic.</p>
</card>
<card>
<h2 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> NPM</h2>
<p>You can install vuesax through npm with the command:</p>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuesax@next <span class="token comment"># OR yarn add vuesax@next</span>
</code></pre></div></card>
<card>
<h2 id="uso" tabindex="-1"><a class="header-anchor" href="#uso" aria-hidden="true">#</a> Uso</h2>
<p>To use vuesax in your vuejs project, add this code:</p>
<div class="language-javascript" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
  <span class="token keyword">import</span> Vuesax <span class="token keyword">from</span> <span class="token string">'vuesax'</span>

  <span class="token keyword">import</span> <span class="token string">'vuesax/dist/vuesax.css'</span> <span class="token comment">//Vuesax styles</span>
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuesax<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// options here</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></card>
<card>
<h2 id="individual-components-on-demand" tabindex="-1"><a class="header-anchor" href="#individual-components-on-demand" aria-hidden="true">#</a> Individual components (on demand)</h2>
<p>There are cases that in your project you only need some components of vuesax and for this you can add them as follows</p>
<div class="language-javascript" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> vsButton<span class="token punctuation">,</span> vsSelect<span class="token punctuation">,</span> vsPopup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuesax'</span>
  <span class="token keyword">import</span> <span class="token string">'vuesax/dist/vuesax.css'</span>

  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vsButton<span class="token punctuation">)</span>
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vsSelect<span class="token punctuation">)</span>
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>vsPopup<span class="token punctuation">)</span>
</code></pre></div></card>
<card>
<h2 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h2>
<p>You can use vuesax by loading it via cdn by adding a <code v-pre>&lt;script&gt;</code> tag to your project</p>
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/vuesax@4.0.1-alpha.16/dist/vuesax.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>initial-scale=1, maximum-scale=1, user-scalable=no<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/vue/dist/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/vuesax@4.0.1-alpha.16/dist/vuesax.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre></div></card>
<!-- ### New applications Vue CLI

### Vue UI Install

### Existing applications -->
</div></template>


