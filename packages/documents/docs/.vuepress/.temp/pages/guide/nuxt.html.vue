<template><div><h1 id="vuesax-nuxtjs" tabindex="-1"><a class="header-anchor" href="#vuesax-nuxtjs" aria-hidden="true">#</a> Vuesax + Nuxtjs</h1>
<card>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2>
<p>Vuesax 4 has a plugin for <a href="https://nuxtjs.org/guide/installation#using-code-create-nuxt-app-code-" target="_blank" rel="noopener noreferrer">create-nuxt-app<ExternalLinkIcon/></a> so starting a project is relatively quick just we have to select the Vuesax option within UI frameworks.</p>
  <img src="/nuxt-ui-vuesax.png" >
</card>
<card>
<h2 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h2>
<p>Great, we already have vuesax in our project, but the version may not be updated as it is constantly changing before a stable version.</p>
<p>So we are going to run after finishing installing all <code v-pre>npm install vuesax @ next</code> with this we are going to download the latest vuesax and should not break anything</p>
</card>
<card>
<h2 id="test-a-component" tabindex="-1"><a class="header-anchor" href="#test-a-component" aria-hidden="true">#</a> Test a component</h2>
<p>Now that we have everything correct we are going to test and verify that everything is ready</p>
<p>for this you can enter the pages folder and add a new test call or choose the <code v-pre>index.vue</code> that represents the main page of our project.</p>
<h3 id="add-a-component" tabindex="-1"><a class="header-anchor" href="#add-a-component" aria-hidden="true">#</a> Add a component</h3>
<p>Let’s try adding a simple component like <RouterLink to="/docs/components/">vsButton</RouterLink> the final code could be something like this</p>
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span><span class="token punctuation">></span></span>
        Hello World Vuesax + Nuxtjs
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">.app</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div><p>and if we see the page <code v-pre>/test</code> we find something like this</p>
  <img src="/nuxt-test-page.png" >
</card>
<card>
<h2 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h2>
<h4 id="nuxt-purgecss" tabindex="-1"><a class="header-anchor" href="#nuxt-purgecss" aria-hidden="true">#</a> nuxt-purgecss</h4>
<p>For some reason this plugin removes the css from vuesax and causes the components to not work correctly after running <code v-pre>npm run build</code>, if you are using this plugin at the moment it cannot be used with vuesax 4 to avoid this error</p>
<h4 id="install-the-latest-version" tabindex="-1"><a class="header-anchor" href="#install-the-latest-version" aria-hidden="true">#</a> Install the latest version</h4>
<p>Vuesax 4 is constantly updated before reaching a stable version and therefore whenever you start a project after installing all the packages you have to run <code v-pre>npm install vuesax@next</code></p>
</card>
</div></template>


