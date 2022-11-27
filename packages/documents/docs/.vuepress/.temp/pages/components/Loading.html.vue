<template><div><h1 id="loading" tabindex="-1"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> Loading</h1>
<card>
<h2 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> Default</h2>
<docs-warn /><p>Generate a loading with the vuesax function <code v-pre>$vs.loading(options)</code></p>
<div slot="example">
  <Loading-default />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openLoading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Open Loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">openLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">&nbsp;</div><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type <Badge text="Update" type="warn" /></h2>
<p>Change the type of loading with the option <code v-pre>type</code></p>
<p>Tipos de loading:</p>
<ul>
<li>waves</li>
<li>corners</li>
<li>border</li>
<li>points</li>
<li>square</li>
<li>gradient</li>
<li>rectangle</li>
<li>circles</li>
<li>square-rotate</li>
<li>scale</li>
</ul>
<div class="custom-container tip">
<p>Click on the example loading to open it in the whole page</p>
</div>
<div slot="example">
  <Loading-type />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ hasOpenLoading }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(type, i) in types<span class="token punctuation">"</span></span>
        <span class="token attr-name">:ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`box${i}`<span class="token punctuation">"</span></span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClickLoading(type)<span class="token punctuation">"</span></span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-loading<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">hasOpenLoading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">'default'</span><span class="token punctuation">,</span>
          <span class="token string">'waves'</span><span class="token punctuation">,</span>
          <span class="token string">'corners'</span><span class="token punctuation">,</span>
          <span class="token string">'border'</span><span class="token punctuation">,</span>
          <span class="token string">'points'</span><span class="token punctuation">,</span>
          <span class="token string">'square'</span><span class="token punctuation">,</span>
          <span class="token string">'gradient'</span><span class="token punctuation">,</span>
          <span class="token string">'rectangle'</span><span class="token punctuation">,</span>
          <span class="token string">'circles'</span><span class="token punctuation">,</span>
          <span class="token string">'square-rotate'</span><span class="token punctuation">,</span>
          <span class="token string">'scale'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClickLoading</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            type
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>hasOpenLoading <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>hasOpenLoading <span class="token operator">=</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">openLoading</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>ref<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> type<span class="token punctuation">,</span>
            type
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>types<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">openLoading</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">box</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="style">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    .hasOpenLoading
      .box-loading
        opacity 0
        transform <span class="token function">scale</span><span class="token punctuation">(</span>.7<span class="token punctuation">)</span>
    .box-loading
      width 120px
      height 120px
      position relative
      margin 5px
      border-radius 20px
      box-shadow 0px 10px 20px -10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.07<span class="token punctuation">)</span>
      overflow hidden
      cursor pointer
      transition all .25s ease
      &amp;<span class="token punctuation">:</span>hover
        transform <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>-5px<span class="token punctuation">)</span>
        box-shadow 0px 15px 20px -10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.09<span class="token punctuation">)</span>
      >>>.vs-loading
        padding 0px
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> Color</h2>
<p>Change the color of the loading animation with the property <code v-pre>color</code>, the colors can be the main ones of vuesax or (<strong>RGB</strong>, <strong>HEX</strong>)</p>
<div slot="example">
  <Loading-color />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ hasOpenLoading }<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`background: ${color};`<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-color-fill<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loadings<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-loadings<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
          <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(type, i) in types<span class="token punctuation">"</span></span>
          <span class="token attr-name">:ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`box${i}`<span class="token punctuation">"</span></span>
          <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClickLoading(type)<span class="token punctuation">"</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-loading<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#d5397b'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hasOpenLoading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">types</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">'default'</span><span class="token punctuation">,</span>
          <span class="token string">'waves'</span><span class="token punctuation">,</span>
          <span class="token string">'corners'</span><span class="token punctuation">,</span>
          <span class="token string">'border'</span><span class="token punctuation">,</span>
          <span class="token string">'points'</span><span class="token punctuation">,</span>
          <span class="token string">'square'</span><span class="token punctuation">,</span>
          <span class="token string">'gradient'</span><span class="token punctuation">,</span>
          <span class="token string">'rectangle'</span><span class="token punctuation">,</span>
          <span class="token string">'circles'</span><span class="token punctuation">,</span>
          <span class="token string">'square-rotate'</span><span class="token punctuation">,</span>
          <span class="token string">'scale'</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">handleClickLoading</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            type<span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>hasOpenLoading <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>hasOpenLoading <span class="token operator">=</span> <span class="token boolean">false</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">openLoading</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>ref<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> type<span class="token punctuation">,</span>
            type<span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">color</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>loadings<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'.box-loading'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            item<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">''</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>types<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">openLoading</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">box</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>types<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">openLoading</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">box</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  <span class="token selector">&lt;style scoped lang="stylus"></span>
    <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>vsColor<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
        <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>vsColor<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
    <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
        <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
    <span class="token selector">.con-input</span>
      <span class="token property-declaration"><span class="token property">border-radius</span> <span class="token number">10</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">border</span> <span class="token number">4</span><span class="token unit">px</span> solid <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>theme-layout<span class="token punctuation">)</span></span></span>
      <span class="token property-declaration"><span class="token property">box-shadow</span> <span class="token number">0</span><span class="token unit">px</span> <span class="token number">4</span><span class="token unit">px</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">.1</span><span class="token punctuation">)</span></span></span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
      <span class="token property-declaration"><span class="token property">transition</span> all <span class="token number">.25</span><span class="token unit">s</span> ease</span>
      <span class="token selector">&amp;:hover</span>
        <span class="token property-declaration"><span class="token property">transform</span> <span class="token func"><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">-4</span><span class="token unit">px</span><span class="token punctuation">)</span></span></span>
        <span class="token property-declaration"><span class="token property">box-shadow</span> <span class="token number">0</span><span class="token unit">px</span> <span class="token number">8</span><span class="token unit">px</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">.1</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">input</span>
        <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">0</span></span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token number">30</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">height</span> <span class="token number">30</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">border</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">cursor</span> pointer</span>
      <span class="token selector">i</span>
        <span class="token property-declaration"><span class="token property">position</span> absolute</span>
        <span class="token property-declaration"><span class="token property">color</span> <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>theme-layout<span class="token punctuation">)</span></span></span>
        <span class="token property-declaration"><span class="token property">pointer-events</span> none</span>
    <span class="token selector">.con-loadings</span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
      <span class="token property-declaration"><span class="token property">flex-wrap</span> wrap</span>
    <span class="token selector">.center</span>
      <span class="token property-declaration"><span class="token property">flex-wrap</span> wrap</span>
      <span class="token property-declaration"><span class="token property">z-index</span> <span class="token number">200</span></span>
      <span class="token property-declaration"><span class="token property">position</span> relative</span>
      <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">20</span><span class="token unit">px</span> <span class="token number">10</span><span class="token unit">px</span></span>
      <span class="token selector">&amp;.hasOpenLoading</span>
        <span class="token selector">.box-loading</span>
          <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">0</span></span>
          <span class="token property-declaration"><span class="token property">transform</span> <span class="token func"><span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">.7</span><span class="token punctuation">)</span></span></span>
    <span class="token selector">.box-loading</span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token number">120</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">height</span> <span class="token number">120</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">position</span> relative</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">5</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">border-radius</span> <span class="token number">20</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">box-shadow</span> <span class="token number">0</span><span class="token unit">px</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">20</span><span class="token unit">px</span> <span class="token number">-10</span><span class="token unit">px</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">.07</span><span class="token punctuation">)</span></span></span>
      <span class="token property-declaration"><span class="token property">overflow</span> hidden</span>
      <span class="token property-declaration"><span class="token property">cursor</span> pointer</span>
      <span class="token property-declaration"><span class="token property">transition</span> all <span class="token number">.25</span><span class="token unit">s</span> ease</span>
      <span class="token selector">&amp;:hover</span>
        <span class="token property-declaration"><span class="token property">transform</span> <span class="token func"><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">-5</span><span class="token unit">px</span><span class="token punctuation">)</span></span></span>
        <span class="token property-declaration"><span class="token property">box-shadow</span> <span class="token number">0</span><span class="token unit">px</span> <span class="token number">15</span><span class="token unit">px</span> <span class="token number">20</span><span class="token unit">px</span> <span class="token number">-10</span><span class="token unit">px</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">.09</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">>>>.vs-loading</span>
        <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">background</span> <span class="token color">transparent</span> <span class="token important">!important</span></span>
        <span class="token selector">&amp;.vs-loading--gradient<span class="token punctuation">,</span> &amp;.vs-loading--square</span>
          <span class="token selector">.vs-loading__load__animation__2</span>
            <span class="token property-declaration"><span class="token property">background</span> <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>theme-layout<span class="token punctuation">)</span> <span class="token important">!important</span></span></span>
    &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h2>
<p>You can change the loading background with the property <code v-pre>loading</code></p>
<div slot="example">
  <Loading-background />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>target<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>target<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`background: ${color};`<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-color-fill<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openLoading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Open Loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#7a76cb'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">openLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>color<span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></div>
</card>
<card>
<h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> Text <Badge text="New" /></h2>
<p>Add a descriptive text of the loading or informing the user that it is loading or that it is missing to load with the property <code v-pre>text</code></p>
<div slot="example">
  <Loading-text />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>target<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>target<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openLoading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Open Loading <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">openLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'Loading...'</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></div>
</card>
<card>
<h2 id="percent" tabindex="-1"><a class="header-anchor" href="#percent" aria-hidden="true">#</a> Percent <Badge text="New" /></h2>
<p>You can add a string of the percentage of load with the <code v-pre>percent</code> property, if you need to change that value use the <code v-pre>changePercent</code> function in the loading instance.</p>
<div slot="example">
  <Loading-percent />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>target<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>target<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openLoading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Open Loading <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Percent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">percent</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">openLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

          <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">percent</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>percent
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>percent <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              loading<span class="token punctuation">.</span><span class="token function">changePercent</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>percent<span class="token operator">++</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>percent <span class="token operator">=</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4800</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></div>
</card>
<card>
<h2 id="progress" tabindex="-1"><a class="header-anchor" href="#progress" aria-hidden="true">#</a> Progress <Badge text="New" /></h2>
<p>Add a progress bar at the top to indicate the loading progress of the loading with the <code v-pre>progress</code> property, the value is a number that determines the percentage and the allowed value is (0 - 100)</p>
<div slot="example">
  <Loading-progress />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>target<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>target<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openLoading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Open Loading <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Progress<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">openLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

          <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>progress <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              loading<span class="token punctuation">.</span><span class="token function">changeProgress</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>progress<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>progress <span class="token operator">=</span> <span class="token number">0</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4100</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></div>
</card>
<card>
<h2 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> Target <Badge text="New" /></h2>
<p>Use the loading on a specific dom element using the <code v-pre>target</code> property and the value can be a string with the <code v-pre>id</code> or the <code v-pre>class</code> only if it is unique for the element, you can also use the element itself as per example using <code v-pre>$refs</code></p>
<div slot="example">
  <Loading-target />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>target<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>target<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-btns<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">flat</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openLoadingButton<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Open Loading <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">dark</span> <span class="token attr-name">flat</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openLoading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Open Loading <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Target<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content-div<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Soy el contenedor <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span> del <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>loading<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">openLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>content<span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'dark'</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">openLoadingButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>button<span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
          <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$vs<span class="token punctuation">.</span><span class="token function">loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>button<span class="token punctuation">,</span>
            <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token string">'0.6'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">'primary'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#fff'</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  <span class="token selector">&lt;style scoped lang="stylus"></span>
    <span class="token selector">.con-btns</span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
      <span class="token selector">b</span>
        <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">5</span><span class="token unit">px</span></span>
    <span class="token selector">.center</span>
      <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
      <span class="token selector">.content-div</span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token number">200</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">height</span> <span class="token number">200</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">box-shadow</span> <span class="token number">0</span><span class="token unit">px</span> <span class="token number">6</span><span class="token unit">px</span> <span class="token number">25</span><span class="token unit">px</span> <span class="token number">-10</span><span class="token unit">px</span> <span class="token func"><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">.1</span><span class="token punctuation">)</span></span></span>
        <span class="token property-declaration"><span class="token property">border-radius</span> <span class="token number">20</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">position</span> relative</span>
        <span class="token property-declaration"><span class="token property">display</span> flex</span>
        <span class="token property-declaration"><span class="token property">align-items</span> center</span>
        <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
        <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
        <span class="token property-declaration"><span class="token property">text-align</span> center</span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.6</span><span class="token unit">rem</span></span>
  &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
</card>
</div></template>


