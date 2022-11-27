<template><div><h1 id="tooltip" tabindex="-1"><a class="header-anchor" href="#tooltip" aria-hidden="true">#</a> Tooltip</h1>
<card>
<h2 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> Default</h2>
<docs-warn /><p>Easily add a tooltip with the <code v-pre>vs-tooltip</code> component, the content within the <code v-pre>default</code> slot is the parent element of the tooltip and the one that triggers to show or hide it</p>
<p>The <code v-pre>tooltip</code> slot is the content inside the tooltip</p>
<div slot="example">
  <Tooltip-default />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          Do hover here
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div></div></div>
</card>
<card>
<h2 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> Position</h2>
<p>Change the position of the tooltip with the properties</p>
<ul>
<li>top (default)</li>
<li>bottom</li>
<li>left</li>
<li>right</li>
</ul>
<div slot="example">
  <Tooltip-position />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">left</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
          left
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
          Top
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">bottom</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
          Bottom
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">right</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
          right
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> Color</h2>
<coloren /><div slot="example">
  <Tooltip-color />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">shadow</span><span class="token punctuation">></span></span>
          Default
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">primary</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          Primary
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">success</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">success</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          Success
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">danger</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">danger</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          Danger
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">warn</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">warn</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          Warning
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">dark</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">dark</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          Dark
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#7d33ff<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#7d33ff<span class="token punctuation">"</span></span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          HEX
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rgb(59,222,200)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rgb(59,222,200)<span class="token punctuation">"</span></span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          RGB
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="border" tabindex="-1"><a class="header-anchor" href="#border" aria-hidden="true">#</a> Border</h2>
<p>Change the style of the tooltip by adding a border and changing the color of the background with the <code v-pre>border</code> or <code v-pre>border-thick</code> property</p>
<div class="custom-container tip">
<p>Now the color property would change the color of the border</p>
</div>
<div slot="example">
  <Tooltip-border />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">transparent</span><span class="token punctuation">></span></span>
          Do hover here
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">danger</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">danger</span> <span class="token attr-name">transparent</span><span class="token punctuation">></span></span>
          Do hover here
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#7d33ff<span class="token punctuation">"</span></span> <span class="token attr-name">border-thick</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#7d33ff<span class="token punctuation">"</span></span> <span class="token attr-name">transparent</span><span class="token punctuation">></span></span>
          Do hover here
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="square" tabindex="-1"><a class="header-anchor" href="#square" aria-hidden="true">#</a> Square</h2>
<p>Change the <code v-pre>border-radius</code> of the tooltip so that it is completely a rectangle</p>
<div slot="example">
  <Tooltip-square />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">square</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">square</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          Do hover here
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="circle" tabindex="-1"><a class="header-anchor" href="#circle" aria-hidden="true">#</a> Circle</h2>
<p>Change the <code v-pre>border-radius</code> of the tooltip to make it more circular</p>
<div class="custom-container tip">
<p>This property only applies when the tooltip has less than one line of text.</p>
</div>
<div slot="example">
  <Tooltip-circle />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">circle</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">circle</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          Do hover here
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="shadow" tabindex="-1"><a class="header-anchor" href="#shadow" aria-hidden="true">#</a> Shadow</h2>
<p>Change the style of the tooltip to have a shadow and the background color</p>
<div slot="example">
  <Tooltip-shadow />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">shadow</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          Do hover here
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="not-arrow" tabindex="-1"><a class="header-anchor" href="#not-arrow" aria-hidden="true">#</a> Not Arrow</h2>
<p>In some cases you may need to remove the arrow from the tooltip for this you can use the <code v-pre>not-arrow</code> property</p>
<div slot="example">
  <Tooltip-notArrow />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">not-arrow</span> <span class="token attr-name">left</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
          left not-arrow
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">not-arrow</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
          Top not-arrow
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">not-arrow</span> <span class="token attr-name">bottom</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
          Bottom not-arrow
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">not-arrow</span> <span class="token attr-name">right</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
          right not-arrow
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="loading" tabindex="-1"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> Loading</h2>
<p>Add an animation and loading style to the tooltip</p>
<div slot="example">
  <Tooltip-loading />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">loading</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          Do hover here loading
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          This is a beautiful button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">loading</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
          Do hover here loading
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2>
<p>We create the tooltip component in such a way that you have a lot of freedom to add anything and create all kinds of interface inside it.</p>
<div slot="example">
  <Tooltip-content />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">gradient</span><span class="token punctuation">></span></span>
          Whats is Vuesax?
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content-tooltip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>
              Whats is Vuesax?
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
              Vuesax is a framework of UI components created with Vuejs
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">bottom</span> <span class="token attr-name">shadow</span> <span class="token attr-name">not-hover</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeTooltip1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">danger</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeTooltip1=!activeTooltip1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          Click Delete User
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content-tooltip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              Confirm
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
              You are sure to delete this user, by doing so you cannot recover the data
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeTooltip1=false<span class="token punctuation">"</span></span> <span class="token attr-name">danger</span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>
                Delete
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeTooltip1=false<span class="token punctuation">"</span></span> <span class="token attr-name">transparent</span> <span class="token attr-name">dark</span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>
                Cancel
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tooltip</span> <span class="token attr-name">shadow</span> <span class="token attr-name">interactivity</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-avatar</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/avatars/avatar-5.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-avatar</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tooltip</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content-tooltip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                  Cosed Tasks
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
                89
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-avatar</span> <span class="token attr-name">circle</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>activeTooltip1=!activeTooltip1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/avatars/avatar-5.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-avatar</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                  Open Tasks
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
                8
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">circle</span> <span class="token attr-name">icon</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-share-alt<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">circle</span><span class="token punctuation">></span></span>
                Message
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">circle</span> <span class="token attr-name">icon</span> <span class="token attr-name">border</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bx-like<span class="token punctuation">'</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tooltip</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">activeTooltip1</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  <span class="token selector">&lt;style lang="stylus"></span>
    <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>colorx<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
        <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>colorx<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
    <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
        <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>

    <span class="token selector">.content-tooltip</span>
      <span class="token selector">.body</span>
        <span class="token property-declaration"><span class="token property">display</span> flex</span>
        <span class="token property-declaration"><span class="token property">align-items</span> flex-start</span>
        <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
        <span class="token selector">.vs-avatar-content</span>
          <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token number">-30</span><span class="token unit">px</span></span>
          <span class="token property-declaration"><span class="token property">border</span> <span class="token number">3</span><span class="token unit">px</span> solid getVar<span class="token punctuation">(</span><span class="token string">'theme-layout'</span><span class="token punctuation">)</span></span>
          <span class="token property-declaration"><span class="token property">box-shadow</span> <span class="token number">0</span><span class="token unit">px</span> <span class="token number">4</span><span class="token unit">px</span> <span class="token number">15</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">.1</span><span class="token punctuation">)</span></span></span>
        <span class="token selector">.text</span>
          <span class="token property-declaration"><span class="token property">display</span> flex</span>
          <span class="token property-declaration"><span class="token property">align-items</span> center</span>
          <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
          <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
          <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.55</span><span class="token unit">rem</span></span>
          <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span></span>
          <span class="token property-declaration"><span class="token property">font-weight</span> normal</span>
          <span class="token selector">span</span>
            <span class="token property-declaration"><span class="token property">font-weight</span> bold</span>
            <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.7</span><span class="token unit">rem</span></span>
      <span class="token selector">footer</span>
        <span class="token property-declaration"><span class="token property">display</span> flex</span>
        <span class="token property-declaration"><span class="token property">align-items</span> center</span>
        <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
      <span class="token selector">h4</span>
        <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">8</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">text-align</span> left</span>
      <span class="token selector">p</span>
        <span class="token property-declaration"><span class="token property">text-align</span> left</span>
        <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">line-height</span> <span class="token number">1</span><span class="token unit">rem</span></span>
        <span class="token property-declaration"><span class="token property">padding-bottom</span> <span class="token number">5</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">padding-left</span> <span class="token number">8</span><span class="token unit">px</span></span>
    &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
</card>
</div></template>


