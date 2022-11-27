<template><div><h1 id="alert" tabindex="-1"><a class="header-anchor" href="#alert" aria-hidden="true">#</a> Alert</h1>
<card>
<h2 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> Default</h2>
<docs-warn /><p>Easily generate an alert with this component apart from functionalities such as hiding it and showing it color change and title icons among other things</p>
<div slot="example">
  <div class="center">
    <vs-alert>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span> Vuesax Framework <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span> created with
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
    Unique and pleasant style, Vuesax is created from scratch and designed for
    all types of developed from the frontend lover to the backend that wants to
    easily create your visual approach to the end user
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
</card>
<card>
<h2 id="solid" tabindex="-1"><a class="header-anchor" href="#solid" aria-hidden="true">#</a> Solid <Badge text="New"/></h2>
<p>You can change the style of the component by adding the <code v-pre>solid</code> property, the property is a<code v-pre> boolean</code> so you can add it without any value.</p>
<div slot="example">
  <div class="center">
    <vs-alert solid>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">solid</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
      Vuesax Framework
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
    created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
    Unique and pleasant style, Vuesax is created from scratch and designed for all types of
    developed from the frontend lover to the backend that wants to easily create
    your visual approach to the end user
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="border" tabindex="-1"><a class="header-anchor" href="#border" aria-hidden="true">#</a> Border <Badge text="New"/></h2>
<p>You can change the style of the component by adding the <code v-pre>border</code> property, the property is a<code v-pre> boolean</code> so you can add it without any value.</p>
<div slot="example">
  <div class="center">
    <vs-alert border >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">border</span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
      Vuesax Framework
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
    created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
    Unique and pleasant style, Vuesax is created from scratch and designed for all types of
    developed from the frontend lover to the backend that wants to easily create
    your visual approach to the end user
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="shadow" tabindex="-1"><a class="header-anchor" href="#shadow" aria-hidden="true">#</a> Shadow <Badge text="New"/></h2>
<p>You can change the style of the component by adding the <code v-pre>shadow</code> property, the property is a<code v-pre> boolean</code> so you can add it without any value.</p>
<div slot="example">
  <div class="center">
    <vs-alert shadow >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">shadow</span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
      Vuesax Framework
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
    created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
    Unique and pleasant style, Vuesax is created from scratch and designed for all types of
    developed from the frontend lover to the backend that wants to easily create
    your visual approach to the end user
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="gradient" tabindex="-1"><a class="header-anchor" href="#gradient" aria-hidden="true">#</a> Gradient <Badge text="New"/></h2>
<p>You can change the style of the component by adding the <code v-pre>gradient</code> property, the property is a<code v-pre> boolean</code> so you can add it without any value.</p>
<div slot="example">
  <div class="center">
    <vs-alert gradient >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">gradient</span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
      Vuesax Framework
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
    created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
    Unique and pleasant style, Vuesax is created from scratch and designed for all types of
    developed from the frontend lover to the backend that wants to easily create
    your visual approach to the end user
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="relief" tabindex="-1"><a class="header-anchor" href="#relief" aria-hidden="true">#</a> Relief <Badge text="New"/></h2>
<p>You can change the style of the component by adding the <code v-pre>relief</code> property, the property is a<code v-pre> boolean</code> so you can add it without any value.</p>
<div slot="example">
  <div class="center">
    <vs-alert relief >
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">relief</span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
      Vuesax Framework
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
    created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
    Unique and pleasant style, Vuesax is created from scratch and designed for all types of
    developed from the frontend lover to the backend that wants to easily create
    your visual approach to the end user
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="animate" tabindex="-1"><a class="header-anchor" href="#animate" aria-hidden="true">#</a> Animate</h2>
<p>A beautiful and simple animation to show and hide the alert to the user</p>
<div slot="example">
  <alert-animate />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">relief</span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
      Vuesax Framework
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
    created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
    Unique and pleasant style, Vuesax is created from scratch and designed for all types of
    developed from the frontend lover to the backend that wants to easily create
    your visual approach to the end user
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> Color</h2>
<p>Change the color of the entire alert with the <code v-pre>color</code> property</p>
<p>In this example you can click on the buttons and dynamically change the color value to display it in the component <strong>vs-alert</strong></p>
<div slot="example">
  <alert-color />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">:color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
        Vuesax Framework
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
      created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color == 'primary'<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color = 'primary'<span class="token punctuation">"</span></span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
      Primary
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color == 'success'<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color = 'success'<span class="token punctuation">"</span></span> <span class="token attr-name">success</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
      Success
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color == 'danger'<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color = 'danger'<span class="token punctuation">"</span></span> <span class="token attr-name">danger</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
      Danger
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color == 'warn'<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color = 'warn'<span class="token punctuation">"</span></span> <span class="token attr-name">warn</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
      Warn
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color == 'dark'<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color = 'dark'<span class="token punctuation">"</span></span> <span class="token attr-name">dark</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
      Dark
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color == '#7d33ff'<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color = '#7d33ff'<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#7d33ff<span class="token punctuation">"</span></span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
      HEX
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color == 'rgb(59,222,200)'<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color = 'rgb(59,222,200)'<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rgb(59,222,200)<span class="token punctuation">"</span></span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
      RGB
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'danger'</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div></div></div>
<div slot="style">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  .alert-example
    .vs-button--active
      transform <span class="token function">translate</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> -5px<span class="token punctuation">)</span>
      border-radius 0px 0px 12px 12px
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre></div></div>
</card>
<card>
<h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> Icon</h2>
<p>Add an icon to the alert easily with the slot <strong>icon</strong></p>
<utils-icon /><div slot="example">
  <div class="center">
    <vs-alert>
      <template #icon>
        <i class='bx bxs-chat'></i>
      </template>
      <template #title>
        Vuesax Alert Icon
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#icon</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bxs-chat<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
        Vuesax Alert Icon
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
      created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> Title</h2>
<p>You can add a descriptive title to the alert with the <code v-pre>slot=&quot;title&quot;</code></p>
<div slot="example">
  <div class="center">
    <vs-alert>
      <template #title>
        Vuesax Alert Title
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    </vs-alert>
  </div>
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
          Vuesax Alert Title
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
        created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
        developed from the frontend lover to the backend that wants to easily create
        your visual approach to the end user
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="hidden-content" tabindex="-1"><a class="header-anchor" href="#hidden-content" aria-hidden="true">#</a> Hidden Content <Badge text="New"/></h2>
<p>You can hide the content of an alert and just leave the title to display the content dynamically</p>
<div slot="example">
  <alert-hiddenContent />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">:hidden-content.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
        Vuesax Framework
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
      created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div></div></div>
</card>
<card>
<h2 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination <Badge text="New"/></h2>
<p>There are times when we need to show a lot of content to the user but we don’t want to extend the text and make the alert very large and tall</p>
<div slot="example">
<alert-pagination /></div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">:page.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
        Vuesax Framework
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#page-1</span><span class="token punctuation">></span></span>
        Pagina 1 - esta pagina es un slot y aquí adentro puedes agregar ya sea texto,
        elementos html o componentes
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#page-2</span><span class="token punctuation">></span></span>
        Pagina 2 - En esta otra pagina puedes poner también lo que necesites
        y es dinámico osea que puedes agregar cuantas paginas necesites
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#page-3</span><span class="token punctuation">></span></span>
        Pagina 3 - esta es la ultima pagina de el ejemplo
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div></div></div>
</card>
<card>
<h2 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer <Badge text="New"/></h2>
<p>Use the <code v-pre>footer</code> slot to add a footer to the alert where for example you can add interactions with the user such as a button or a checkbox.</p>
<div slot="example">
  <div class="center">
    <vs-alert>
      <template #title>
        Vuesax Framework
      </template>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
      created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
      <template #footer>
        <vs-button flat>
          Cancel
        </vs-button>
        <vs-button>
          Accept
        </vs-button>
      </template>
    </vs-alert>
  </div>
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
      Vuesax Framework
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
    created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
    Unique and pleasant style, Vuesax is created from scratch and designed for all types of
    developed from the frontend lover to the backend that wants to easily create
    your visual approach to the end user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span><span class="token punctuation">></span></span>
        Cancel
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span><span class="token punctuation">></span></span>
        Accept
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div></div></div>
</card>
<card>
<h2 id="progress-bar" tabindex="-1"><a class="header-anchor" href="#progress-bar" aria-hidden="true">#</a> Progress bar <Badge text="New"/></h2>
<p>You can add a progress bar to the alert with the progress property and a number of (<code v-pre>0 - 100</code>)</p>
<div slot="example">
  <vs-alert progress="70">
    <template #title>
      Vuesax Framework
    </template>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a <b>UI components framework</b>
    created with <a href="https://vuejs.org/">Vuejs</a> to make projects easily and with a
    Unique and pleasant style, Vuesax is created from scratch and designed for all types of
    developed from the frontend lover to the backend that wants to easily create
    your visual approach to the end user
  </vs-alert>
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>70<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
      Vuesax Framework
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
    created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
    Unique and pleasant style, Vuesax is created from scratch and designed for all types of
    developed from the frontend lover to the backend that wants to easily create
    your visual approach to the end user
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="closable" tabindex="-1"><a class="header-anchor" href="#closable" aria-hidden="true">#</a> Closable <Badge text="New"/></h2>
<p>You can add a close alert icon with the <code v-pre>closable</code> property, the property is a<code v-pre> boolean</code> so you can add it without any value.</p>
<div slot="example">
  <alert-closable />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=!active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      {{ active ? 'Close Alert' : 'Open Alert' }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">closable</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
        Vuesax Framework
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
      created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
      Unique and pleasant style, Vuesax is created from scratch and designed for all types of
      developed from the frontend lover to the backend that wants to easily create
      your visual approach to the end user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br></div></div></div>
</card>
<card>
<h2 id="time-close" tabindex="-1"><a class="header-anchor" href="#time-close" aria-hidden="true">#</a> Time Close <Badge text="New"/></h2>
<p>If you need an alert to have time to hide, you can do so by joining some properties and few lines of code</p>
<div slot="example">
  <alert-time />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">dark</span> <span class="token attr-name">flat</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active=true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        Open Alert 10s
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-alert</span> <span class="token attr-name">dark</span> <span class="token attr-name">:progress</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>progress<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
          Vuesax Framework
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        Vuesax (pronounced / vjusacksː /, as view sacks) is a <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>UI components framework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
        created with <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://vuejs.org/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vuejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span> to make projects easily and with a
        Unique and pleasant style, Vuesax is created from scratch and designed for all types of
        developed from the frontend lover to the backend that wants to easily create
        your visual approach to the end user
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-alert</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">6000</span><span class="token punctuation">,</span>
        <span class="token literal-property property">progress</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">active</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>progress<span class="token operator">++</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>time <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">false</span>
              <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>progress <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
</card>
</div></template>


