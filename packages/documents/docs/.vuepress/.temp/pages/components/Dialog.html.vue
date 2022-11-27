<template><div><h1 id="dialog" tabindex="-1"><a class="header-anchor" href="#dialog" aria-hidden="true">#</a> Dialog</h1>
<card>
<h2 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> Default</h2>
<docs-warn /><p>It generates a Dialog with the <code v-pre>vs-dialog</code> component, this component is very customizable since it provides a slot to put and make any type of interface to the user’s need</p>
<div slot="example">
  <Dialog-default />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Open Dialog
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Vuesax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              @
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-lock<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>remember<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-checkbox</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Forgot Password?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer-dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>
              Sign In
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>new<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              New Here? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create New Account<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">remember</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  &lt;style lang=<span class="token string">"stylus"</span>>
  <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>vsColor<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>vsColor<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token selector">.not-margin</span>
    <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> normal</span>
    <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span></span>
  <span class="token selector">.con-form</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token selector">.flex</span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> space-between</span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
        <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">.7</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">1</span></span>
    <span class="token selector">.vs-checkbox-label</span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
    <span class="token selector">.vs-input-content</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">.vs-input</span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
  <span class="token selector">.footer-dialog</span>
    <span class="token property-declaration"><span class="token property">display</span> flex</span>
    <span class="token property-declaration"><span class="token property">align-items</span> center</span>
    <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
    <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
    <span class="token selector">.new</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token number">20</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.7</span><span class="token unit">rem</span></span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">color</span> getColor<span class="token punctuation">(</span><span class="token string">'primary'</span><span class="token punctuation">)</span> <span class="token important">!important</span></span>
        <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">6</span><span class="token unit">px</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">text-decoration</span> underline</span>
    <span class="token selector">.vs-button</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
  &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> Type</h2>
<p>You can easily create the most common types of dialogs such as <strong>Alert</strong>, <strong>Confirm</strong> or <strong>Prompt</strong> using the different slots for the structure of the <code v-pre>header</code>,<code v-pre>default</code>, <code v-pre>footer</code> dialog</p>
<div slot="example">
  <Dialog-type />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Alert
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active2=!active2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Confirm
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">border</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active3=!active3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Prompt
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>550px<span class="token punctuation">"</span></span> <span class="token attr-name">not-center</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Vuesax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
            Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=false<span class="token punctuation">"</span></span> <span class="token attr-name">transparent</span><span class="token punctuation">></span></span>
              Ok
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>550px<span class="token punctuation">"</span></span> <span class="token attr-name">not-center</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Vuesax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
            Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active2=false<span class="token punctuation">"</span></span> <span class="token attr-name">transparent</span><span class="token punctuation">></span></span>
              Ok
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active2=false<span class="token punctuation">"</span></span> <span class="token attr-name">dark</span> <span class="token attr-name">transparent</span><span class="token punctuation">></span></span>
              Cancel
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300px<span class="token punctuation">"</span></span> <span class="token attr-name">not-center</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome what is your <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active3=false<span class="token punctuation">"</span></span> <span class="token attr-name">transparent</span><span class="token punctuation">></span></span>
              Ok
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active3=false<span class="token punctuation">"</span></span> <span class="token attr-name">dark</span> <span class="token attr-name">transparent</span><span class="token punctuation">></span></span>
              Cancel
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">active2</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">active3</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  &lt;style lang=<span class="token string">"stylus"</span>>
  <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>vsColor<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>vsColor<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token selector">.con-footer</span>
    <span class="token property-declaration"><span class="token property">display</span> flex</span>
    <span class="token property-declaration"><span class="token property">align-items</span> center</span>
    <span class="token property-declaration"><span class="token property">justify-content</span> flex-end</span>
    <span class="token selector">.vs-button</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token selector">.vs-button__content</span>
        <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">30</span><span class="token unit">px</span></span>
      <span class="token selector">~ .vs-button</span>
        <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">10</span><span class="token unit">px</span></span>
  <span class="token selector">.not-margin</span>
    <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> normal</span>
    <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">padding-bottom</span> <span class="token number">0</span><span class="token unit">px</span></span>
  <span class="token selector">.con-content</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token selector">p</span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
      <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">0</span><span class="token unit">px</span> <span class="token number">10</span><span class="token unit">px</span></span>
    <span class="token selector">.vs-checkbox-label</span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
    <span class="token selector">.vs-input-parent</span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token selector">.vs-input-content</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">.vs-input</span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
  <span class="token selector">.footer-dialog</span>
    <span class="token property-declaration"><span class="token property">display</span> flex</span>
    <span class="token property-declaration"><span class="token property">align-items</span> center</span>
    <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
    <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
    <span class="token selector">.new</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token number">20</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.7</span><span class="token unit">rem</span></span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">color</span> getColor<span class="token punctuation">(</span><span class="token string">'primary'</span><span class="token punctuation">)</span> <span class="token important">!important</span></span>
        <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">6</span><span class="token unit">px</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">text-decoration</span> underline</span>
    <span class="token selector">.vs-button</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
  &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="loading" tabindex="-1"><a class="header-anchor" href="#loading" aria-hidden="true">#</a> loading</h2>
<p>Add a loading animation to the dialog with the <code v-pre>loading</code> property</p>
<div slot="example">
  <Dialog-loading />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">success</span> <span class="token attr-name">flat</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Open Dialog Loading
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">loading</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Vuesax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              @
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-lock<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-checkbox</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Forgot Password?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer-dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>
              Sign In
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>new<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              New Here? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create New Account<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">checkbox1</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  <span class="token selector">&lt;style lang="stylus"></span>
    <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>vsColor<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
        <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>vsColor<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
    <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
        <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
    <span class="token selector">.not-margin</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">font-weight</span> normal</span>
      <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span></span>
    <span class="token selector">.con-form</span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
      <span class="token selector">.flex</span>
        <span class="token property-declaration"><span class="token property">display</span> flex</span>
        <span class="token property-declaration"><span class="token property">align-items</span> center</span>
        <span class="token property-declaration"><span class="token property">justify-content</span> space-between</span>
        <span class="token selector">a</span>
          <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
          <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">.7</span></span>
          <span class="token selector">&amp;:hover</span>
            <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">1</span></span>
      <span class="token selector">.vs-checkbox-label</span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
      <span class="token selector">.vs-input-content</span>
        <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
        <span class="token selector">.vs-input</span>
          <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token selector">.footer-dialog</span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
      <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">.new</span>
        <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token number">20</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.7</span><span class="token unit">rem</span></span>
        <span class="token selector">a</span>
          <span class="token property-declaration"><span class="token property">color</span> getColor<span class="token punctuation">(</span><span class="token string">'primary'</span><span class="token punctuation">)</span> <span class="token important">!important</span></span>
          <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">6</span><span class="token unit">px</span></span>
          <span class="token selector">&amp;:hover</span>
            <span class="token property-declaration"><span class="token property">text-decoration</span> underline</span>
      <span class="token selector">.vs-button</span>
        <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
    &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="not-close" tabindex="-1"><a class="header-anchor" href="#not-close" aria-hidden="true">#</a> Not close</h2>
<p>You can remove the close button with the <code v-pre>not-close</code> property</p>
<div slot="example">
  <Dialog-notClose />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        active
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">not-close</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Vuesax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              @
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-lock<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-checkbox</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Forgot Password?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer-dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>
              Sign In
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>new<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              New Here? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create New Account<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">checkbox1</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  &lt;style lang=<span class="token string">"stylus"</span>>
  <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>vsColor<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>vsColor<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token selector">.not-margin</span>
    <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> normal</span>
    <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span></span>
  <span class="token selector">.con-form</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token selector">.flex</span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> space-between</span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
        <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">.7</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">1</span></span>
    <span class="token selector">.vs-checkbox-label</span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
    <span class="token selector">.vs-input-content</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">.vs-input</span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
  <span class="token selector">.footer-dialog</span>
    <span class="token property-declaration"><span class="token property">display</span> flex</span>
    <span class="token property-declaration"><span class="token property">align-items</span> center</span>
    <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
    <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
    <span class="token selector">.new</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token number">20</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.7</span><span class="token unit">rem</span></span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">color</span> getColor<span class="token punctuation">(</span><span class="token string">'primary'</span><span class="token punctuation">)</span> <span class="token important">!important</span></span>
        <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">6</span><span class="token unit">px</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">text-decoration</span> underline</span>
    <span class="token selector">.vs-button</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
  &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="scroll" tabindex="-1"><a class="header-anchor" href="#scroll" aria-hidden="true">#</a> Scroll</h2>
<p>There are cases where you need a scroll because there is a lot of information within the dialog for this you can use the <code v-pre>scroll</code> property</p>
<div slot="example">
  <Dialog-scroll />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">shadow</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Open Dialog
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">scroll</span> <span class="token attr-name">overflow-hidden</span> <span class="token attr-name">not-close</span> <span class="token attr-name">auto-width</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>
            Introduction
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>
            Whats is Vuesax?
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
            Vuesax (pronounced / vjusacksː /, as view sacks) is a framework of UI components created with Vuejs to make projects easily and with a unique and pleasant style, vuesax is created from scratch and designed for all types of developers from the frontend lover to the backend who wants to easily create their visual approach to the end-user

            We are focused on streamlining the work of the programmer by giving components created in their entirety and with independent customization and very easy to implement, so creativity is in our hands but we do not neglect that each project is different both visually and in its ecosystem

            Vuesax does not have a design line such as other component frameworks based on Material Design, we believe that there are already emaciated frameworks that look visually and in UI / UX and we don't want to be one more of the bunch, apart from that we love to create and design new experiences and surprise you with new elements or details that we can only do by being visually free.
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>
            Why Vuesax?
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>

          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
            Vuesax is a relatively new framework with a refreshing design and in the latest trends, vuesax based on vuejs which means that we go hand in hand with one of the most popular javascript frameworks in the world and with a huge community with which you will have all the help and documentation to create and make your project
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            - Vuesax, unlike many frameworks, is designed from scratch and we are not anchored to any design line, this is something great since your project is going to be unique and very different from the others

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            - We are focused on the quick and easy creation of projects giving a beautiful visual line but without forgetting the personalization and independence of the developer

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            - Vuesax uses native css variables for better customization and production changes such as changing to dark theme or changing the main color of the entire application with few javascript lines
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

            - Vuesax is a frame designed to have a great visual impact and that is always in trend with respect to design.
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

            - An open-source community to create, improve and correct any component or function.
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

            - Independent components to avoid importing unnecessary code.
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

            - Markdown documents for better sustainability.
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

            - and much more.
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">checkbox1</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  <span class="token selector">&lt;style lang="stylus">
  .con-content</span>
    <span class="token selector">p</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">20</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">position</span> relative</span>
      <span class="token property-declaration"><span class="token property">display</span> block</span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.9</span><span class="token unit">rem</span></span>

  &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="overflow-hidden-body" tabindex="-1"><a class="header-anchor" href="#overflow-hidden-body" aria-hidden="true">#</a> Overflow Hidden Body</h2>
<p>If you need to remove the page scroll when opening the dialog you can do it with the <code v-pre>overflow-hidden</code> property</p>
<div slot="example">
  <Dialog-overflowHidden />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        active
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">overflow-hidden</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Vuesax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              @
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-lock<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-checkbox</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Forgot Password?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer-dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>
              Sign In
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>new<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              New Here? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create New Account<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">checkbox1</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  <span class="token selector">&lt;style lang="stylus"></span>
    <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>vsColor<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
        <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>vsColor<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
    <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
        <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
    <span class="token selector">.not-margin</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">font-weight</span> normal</span>
      <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span></span>
    <span class="token selector">.con-form</span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
      <span class="token selector">.flex</span>
        <span class="token property-declaration"><span class="token property">display</span> flex</span>
        <span class="token property-declaration"><span class="token property">align-items</span> center</span>
        <span class="token property-declaration"><span class="token property">justify-content</span> space-between</span>
        <span class="token selector">a</span>
          <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
          <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">.7</span></span>
          <span class="token selector">&amp;:hover</span>
            <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">1</span></span>
      <span class="token selector">.vs-checkbox-label</span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
      <span class="token selector">.vs-input-content</span>
        <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
        <span class="token selector">.vs-input</span>
          <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token selector">.footer-dialog</span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
      <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">.new</span>
        <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token number">20</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.7</span><span class="token unit">rem</span></span>
        <span class="token selector">a</span>
          <span class="token property-declaration"><span class="token property">color</span> getColor<span class="token punctuation">(</span><span class="token string">'primary'</span><span class="token punctuation">)</span> <span class="token important">!important</span></span>
          <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">6</span><span class="token unit">px</span></span>
          <span class="token selector">&amp;:hover</span>
            <span class="token property-declaration"><span class="token property">text-decoration</span> underline</span>
      <span class="token selector">.vs-button</span>
        <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
    &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="not-padding" tabindex="-1"><a class="header-anchor" href="#not-padding" aria-hidden="true">#</a> Not Padding</h2>
<p>If you need to remove the padding from the dialog to make a more personalized interface you can do it with the <code v-pre>not-padding</code> property</p>
<div slot="example">
  <Dialog-notPadding />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        active
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">not-close</span> <span class="token attr-name">auto-width</span> <span class="token attr-name">not-padding</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/foto1.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  <span class="token selector">&lt;style lang="stylus">
  .con-image</span>
    <span class="token property-declaration"><span class="token property">border-radius</span> inherit</span>
    <span class="token selector">img</span>
      <span class="token property-declaration"><span class="token property">display</span> block</span>
      <span class="token property-declaration"><span class="token property">position</span> relative</span>
      <span class="token property-declaration"><span class="token property">border-radius</span> inherit</span>
      <span class="token property-declaration"><span class="token property">max-width</span> <span class="token number">350</span><span class="token unit">px</span></span>
  &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="nested-dialogs" tabindex="-1"><a class="header-anchor" href="#nested-dialogs" aria-hidden="true">#</a> Nested Dialogs</h2>
<p>You can nest as many <code v-pre>vs-dialog</code> as you need without problem</p>
<div slot="example">
  <Dialog-nested />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Open Dialog 1
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">overflow-hidden</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>
            Nested dialogs
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active2=!active2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Open Dialog 2
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Vuesax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              @
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-lock<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-checkbox</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Forgot Password?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer-dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>
              Sign In
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>new<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              New Here? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create New Account<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">active2</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">checkbox1</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  &lt;style lang=<span class="token string">"stylus"</span>>
  <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>vsColor<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>vsColor<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>

  <span class="token selector">.con-content</span>
    <span class="token property-declaration"><span class="token property">display</span> flex</span>
    <span class="token property-declaration"><span class="token property">align-items</span> center</span>
    <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
    <span class="token selector">p</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">20</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">position</span> relative</span>
      <span class="token property-declaration"><span class="token property">display</span> block</span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.9</span><span class="token unit">rem</span></span>
  <span class="token selector">.not-margin</span>
    <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> normal</span>
    <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span></span>
  <span class="token selector">.con-form</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token selector">.flex</span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> space-between</span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
        <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">.7</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">1</span></span>
    <span class="token selector">.vs-checkbox-label</span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
    <span class="token selector">.vs-input-content</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">.vs-input</span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
  <span class="token selector">.footer-dialog</span>
    <span class="token property-declaration"><span class="token property">display</span> flex</span>
    <span class="token property-declaration"><span class="token property">align-items</span> center</span>
    <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
    <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
    <span class="token selector">.new</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token number">20</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.7</span><span class="token unit">rem</span></span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">color</span> getColor<span class="token punctuation">(</span><span class="token string">'primary'</span><span class="token punctuation">)</span> <span class="token important">!important</span></span>
        <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">6</span><span class="token unit">px</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">text-decoration</span> underline</span>
    <span class="token selector">.vs-button</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
  &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="full-screen" tabindex="-1"><a class="header-anchor" href="#full-screen" aria-hidden="true">#</a> full Screen</h2>
<p>If you need the dialog to be the total window size you can do it with the <code v-pre>full-screen</code> property</p>
<div slot="example">
  <Dialog-fullScreen />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">gradient</span> <span class="token attr-name">warn</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Open Dialog
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">overflow-hidden</span> <span class="token attr-name">full-screen</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Vuesax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              @
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-lock<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-checkbox</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Forgot Password?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer-dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>
              Sign In
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>new<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              New Here? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create New Account<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">checkbox1</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  &lt;style lang=<span class="token string">"stylus"</span>>
  <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>vsColor<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>vsColor<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token selector">.not-margin</span>
    <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> normal</span>
    <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span></span>
  <span class="token selector">.con-form</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token selector">.flex</span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> space-between</span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
        <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">.7</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">1</span></span>
    <span class="token selector">.vs-checkbox-label</span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
    <span class="token selector">.vs-input-content</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">.vs-input</span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
  <span class="token selector">.footer-dialog</span>
    <span class="token property-declaration"><span class="token property">display</span> flex</span>
    <span class="token property-declaration"><span class="token property">align-items</span> center</span>
    <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
    <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
    <span class="token selector">.new</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token number">20</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.7</span><span class="token unit">rem</span></span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">color</span> getColor<span class="token punctuation">(</span><span class="token string">'primary'</span><span class="token punctuation">)</span> <span class="token important">!important</span></span>
        <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">6</span><span class="token unit">px</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">text-decoration</span> underline</span>
    <span class="token selector">.vs-button</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
  &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="blur" tabindex="-1"><a class="header-anchor" href="#blur" aria-hidden="true">#</a> blur</h2>
<p>You can add a blur style to all the elements behind the dialog with the <code v-pre>blur</code> property, this functionality depends on the css property <a href="https://caniuse.com/#feat=css-backdrop-filter" target="_blank" rel="noopener noreferrer">backdrop-filter<ExternalLinkIcon/></a></p>
<div slot="example">
  <Dialog-blur />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        active
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">blur</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Vuesax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              @
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-lock<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-checkbox</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Forgot Password?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer-dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>
              Sign In
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>new<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              New Here? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create New Account<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">checkbox1</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  <span class="token selector">&lt;style lang="stylus"></span>
    <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>vsColor<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
        <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>vsColor<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
    <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
        <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
    <span class="token selector">.not-margin</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">font-weight</span> normal</span>
      <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span></span>
    <span class="token selector">.con-form</span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
      <span class="token selector">.flex</span>
        <span class="token property-declaration"><span class="token property">display</span> flex</span>
        <span class="token property-declaration"><span class="token property">align-items</span> center</span>
        <span class="token property-declaration"><span class="token property">justify-content</span> space-between</span>
        <span class="token selector">a</span>
          <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
          <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">.7</span></span>
          <span class="token selector">&amp;:hover</span>
            <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">1</span></span>
      <span class="token selector">.vs-checkbox-label</span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
      <span class="token selector">.vs-input-content</span>
        <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
        <span class="token selector">.vs-input</span>
          <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token selector">.footer-dialog</span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
      <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">.new</span>
        <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token number">20</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">px</span></span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.7</span><span class="token unit">rem</span></span>
        <span class="token selector">a</span>
          <span class="token property-declaration"><span class="token property">color</span> getColor<span class="token punctuation">(</span><span class="token string">'primary'</span><span class="token punctuation">)</span> <span class="token important">!important</span></span>
          <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">6</span><span class="token unit">px</span></span>
          <span class="token selector">&amp;:hover</span>
            <span class="token property-declaration"><span class="token property">text-decoration</span> underline</span>
      <span class="token selector">.vs-button</span>
        <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
    &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="square" tabindex="-1"><a class="header-anchor" href="#square" aria-hidden="true">#</a> Square</h2>
<p>Change the dialog style by removing the border radius and making it rectangular</p>
<div slot="example">
  <Dialog-square />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">dark</span> <span class="token attr-name">flat</span> <span class="token attr-name">square</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Open Dialog
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">square</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Vuesax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              @
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-lock<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-checkbox</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Forgot Password?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer-dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>
              Sign In
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>new<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              New Here? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create New Account<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">checkbox1</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  &lt;style lang=<span class="token string">"stylus"</span>>
  <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>vsColor<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>vsColor<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token selector">.not-margin</span>
    <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> normal</span>
    <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span></span>
  <span class="token selector">.con-form</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token selector">.flex</span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> space-between</span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
        <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">.7</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">1</span></span>
    <span class="token selector">.vs-checkbox-label</span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
    <span class="token selector">.vs-input-content</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">.vs-input</span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
  <span class="token selector">.footer-dialog</span>
    <span class="token property-declaration"><span class="token property">display</span> flex</span>
    <span class="token property-declaration"><span class="token property">align-items</span> center</span>
    <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
    <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
    <span class="token selector">.new</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token number">20</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.7</span><span class="token unit">rem</span></span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">color</span> getColor<span class="token punctuation">(</span><span class="token string">'primary'</span><span class="token punctuation">)</span> <span class="token important">!important</span></span>
        <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">6</span><span class="token unit">px</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">text-decoration</span> underline</span>
    <span class="token selector">.vs-button</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
  &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="prevent-close" tabindex="-1"><a class="header-anchor" href="#prevent-close" aria-hidden="true">#</a> Prevent Close</h2>
<p>With the <code v-pre>prevent-close</code> property you do not close the dialog by clicking outside or pressing the <strong>esc</strong> key</p>
<div slot="example">
  <Dialog-preventClose />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">danger</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Open Dialog
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">prevent-close</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>not-margin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Welcome to <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>Vuesax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>


        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input1<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              @
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input2<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-lock<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-input</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Remember me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-checkbox</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Forgot Password?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer-dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">block</span><span class="token punctuation">></span></span>
              Sign In
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>new<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              New Here? <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create New Account<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input1</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">input2</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">checkbox1</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div></div></div>
<div slot="style">
<div class="language-stylus" data-ext="styl"><pre v-pre class="language-stylus"><code>  &lt;style lang=<span class="token string">"stylus"</span>>
  <span class="token func"><span class="token function">getColor</span><span class="token punctuation">(</span>vsColor<span class="token punctuation">,</span> alpha <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"rgba(var(--vs-"</span><span class="token operator">+</span>vsColor<span class="token operator">+</span><span class="token string">"), "</span><span class="token operator">+</span>alpha<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token func"><span class="token function">getVar</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span></span>
      <span class="token func"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"var(--vs-"</span><span class="token operator">+</span>var<span class="token operator">+</span><span class="token string">")"</span><span class="token punctuation">)</span></span>
  <span class="token selector">.not-margin</span>
    <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
    <span class="token property-declaration"><span class="token property">font-weight</span> normal</span>
    <span class="token property-declaration"><span class="token property">padding</span> <span class="token number">10</span><span class="token unit">px</span></span>
  <span class="token selector">.con-form</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
    <span class="token selector">.flex</span>
      <span class="token property-declaration"><span class="token property">display</span> flex</span>
      <span class="token property-declaration"><span class="token property">align-items</span> center</span>
      <span class="token property-declaration"><span class="token property">justify-content</span> space-between</span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
        <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">.7</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">opacity</span> <span class="token number">1</span></span>
    <span class="token selector">.vs-checkbox-label</span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.8</span><span class="token unit">rem</span></span>
    <span class="token selector">.vs-input-content</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">10</span><span class="token unit">px</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
      <span class="token selector">.vs-input</span>
        <span class="token property-declaration"><span class="token property">width</span> <span class="token number">100</span><span class="token unit">%</span></span>
  <span class="token selector">.footer-dialog</span>
    <span class="token property-declaration"><span class="token property">display</span> flex</span>
    <span class="token property-declaration"><span class="token property">align-items</span> center</span>
    <span class="token property-declaration"><span class="token property">justify-content</span> center</span>
    <span class="token property-declaration"><span class="token property">flex-direction</span> column</span>
    <span class="token property-declaration"><span class="token property">width</span> <span class="token func"><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token unit">%</span><span class="token punctuation">)</span></span></span>
    <span class="token selector">.new</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">margin-top</span> <span class="token number">20</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token unit">px</span></span>
      <span class="token property-declaration"><span class="token property">font-size</span> <span class="token number">.7</span><span class="token unit">rem</span></span>
      <span class="token selector">a</span>
        <span class="token property-declaration"><span class="token property">color</span> getColor<span class="token punctuation">(</span><span class="token string">'primary'</span><span class="token punctuation">)</span> <span class="token important">!important</span></span>
        <span class="token property-declaration"><span class="token property">margin-left</span> <span class="token number">6</span><span class="token unit">px</span></span>
        <span class="token selector">&amp;:hover</span>
          <span class="token property-declaration"><span class="token property">text-decoration</span> underline</span>
    <span class="token selector">.vs-button</span>
      <span class="token property-declaration"><span class="token property">margin</span> <span class="token number">0</span><span class="token unit">px</span></span>
  &lt;/style>
</code></pre></div></div>
</card>
<card>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
</card>
</div></template>


