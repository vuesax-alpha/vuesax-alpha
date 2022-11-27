<template><div><h1 id="table" tabindex="-1"><a class="header-anchor" href="#table" aria-hidden="true">#</a> Table</h1>
<card>
<h2 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> Default</h2>
<docs-warn /><p>Create a table simply with the <code v-pre>vs-table</code> component and its<code v-pre>vs-tr</code>, <code v-pre>vs-td</code>,<code v-pre>vs-th</code> components.</p>
<p>This component has a different logic for better data management and freer customization according to needs.</p>
<div slot="example">
  <Table-default />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#thead</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
          Name
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
          Email
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
          Id
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tbody</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span>
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(tr, i) in users<span class="token punctuation">"</span></span>
        <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
          {{ tr.name }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
         {{ tr.email }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
         {{ tr.id }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-table</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Leanne Graham"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Bret"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sincere@april.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"hildegard.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Ervin Howell"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Antonette"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Shanna@melissa.tv"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"anastasia.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementine Bauch"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Samantha"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Nathan@yesenia.net"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ramiro.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Patricia Lebsack"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Karianne"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Julianne.OConner@kory.org"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"kale.biz"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Chelsey Dietrich"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Kamren"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"demarco.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Mrs. Dennis Schulist"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Leopoldo_Corkery"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Karley_Dach@jasper.info"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ola.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Kurtis Weissnat"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Elwyn.Skiles"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"elvis.io"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Maxime_Nienow"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sherwood@rosamond.me"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"jacynthe.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Glenna Reichert"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Delphine"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"conrad.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementina DuBuque"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Moriah.Stanton"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ambrose.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="striped" tabindex="-1"><a class="header-anchor" href="#striped" aria-hidden="true">#</a> Striped</h2>
<p>You can easily strip the table with the <code v-pre>striped</code> property</p>
<div slot="example">
  <Table-striped />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center examplex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-table</span> <span class="token attr-name">striped</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#thead</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Name
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Email
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Id
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tbody</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(tr, i) in users<span class="token punctuation">"</span></span>
            <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
              {{ tr.name }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.email }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.id }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Leanne Graham"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Bret"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sincere@april.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"hildegard.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Ervin Howell"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Antonette"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Shanna@melissa.tv"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"anastasia.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementine Bauch"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Samantha"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Nathan@yesenia.net"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ramiro.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Patricia Lebsack"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Karianne"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Julianne.OConner@kory.org"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"kale.biz"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Chelsey Dietrich"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Kamren"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"demarco.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Mrs. Dennis Schulist"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Leopoldo_Corkery"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Karley_Dach@jasper.info"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ola.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Kurtis Weissnat"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Elwyn.Skiles"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"elvis.io"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Maxime_Nienow"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sherwood@rosamond.me"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"jacynthe.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Glenna Reichert"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Delphine"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"conrad.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementina DuBuque"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Moriah.Stanton"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ambrose.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h2>
<p>Change the state of a tr by adding the color property to the component <code v-pre>vs-tr</code></p>
<div slot="example">
  <Table-state />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-table</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#thead</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Name
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Email
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Id
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tbody</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(tr, i) in users<span class="token punctuation">"</span></span>
            <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr<span class="token punctuation">"</span></span>
            <span class="token attr-name">:danger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr.id == 3<span class="token punctuation">"</span></span>
            <span class="token attr-name">:success</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr.id == 5<span class="token punctuation">"</span></span>
            <span class="token attr-name">:primary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr.id == 8<span class="token punctuation">"</span></span>
            <span class="token attr-name">:warn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr.id == 9<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
              {{ tr.name }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.email }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.id }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Leanne Graham"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Bret"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sincere@april.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"hildegard.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Ervin Howell"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Antonette"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Shanna@melissa.tv"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"anastasia.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementine Bauch"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Samantha"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Nathan@yesenia.net"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ramiro.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Patricia Lebsack"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Karianne"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Julianne.OConner@kory.org"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"kale.biz"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Chelsey Dietrich"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Kamren"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"demarco.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Mrs. Dennis Schulist"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Leopoldo_Corkery"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Karley_Dach@jasper.info"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ola.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Kurtis Weissnat"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Elwyn.Skiles"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"elvis.io"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Maxime_Nienow"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sherwood@rosamond.me"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"jacynthe.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Glenna Reichert"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Delphine"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"conrad.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementina DuBuque"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Moriah.Stanton"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ambrose.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> Pagination</h2>
<p>You can add the pagination functionality for the table using the <code v-pre>#footer</code> slot and the vs-pagination component</p>
<p>To make the development easier you can use the vuesax function that generates the items (<code v-pre>$vs.getPage</code>) based on the page and also the one that generates the total number of pages in the pagination component (<code v-pre>$vs.getLength</code>)</p>
<p>This way of handling data is to improve the freedom of customization without losing the ease of implementation</p>
<div slot="example">
  <Table-pagination />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-table</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#thead</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Name
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Email
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Id
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tbody</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(tr, i) in $vs.getPage(users, page, max)<span class="token punctuation">"</span></span>
            <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
              {{ tr.name }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.email }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.id }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-pagination</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span> <span class="token attr-name">:length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$vs.getLength(users, max)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Leanne Graham"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Bret"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sincere@april.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"hildegard.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Ervin Howell"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Antonette"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Shanna@melissa.tv"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"anastasia.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementine Bauch"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Samantha"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Nathan@yesenia.net"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ramiro.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Patricia Lebsack"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Karianne"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Julianne.OConner@kory.org"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"kale.biz"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Chelsey Dietrich"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Kamren"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"demarco.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Mrs. Dennis Schulist"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Leopoldo_Corkery"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Karley_Dach@jasper.info"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ola.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Kurtis Weissnat"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Elwyn.Skiles"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"elvis.io"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Maxime_Nienow"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sherwood@rosamond.me"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"jacynthe.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Glenna Reichert"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Delphine"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"conrad.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementina DuBuque"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Moriah.Stanton"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ambrose.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="single-selected" tabindex="-1"><a class="header-anchor" href="#single-selected" aria-hidden="true">#</a> Single Selected</h2>
<p>You can add the select functionality with a v-model in the table and the <code v-pre>is-selected</code> property</p>
<div class="custom-container tip">
<p>Using the <code v-pre>data</code> property in the <code v-pre>tr</code> is important as that is the data to be added to the v-model</p>
</div>
<div slot="example">
  <Table-selected />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-table</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#thead</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Name
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Email
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Id
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tbody</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(tr, i) in users<span class="token punctuation">"</span></span>
            <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr<span class="token punctuation">"</span></span>
            <span class="token attr-name">:is-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected == tr<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
              {{ tr.name }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.email }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.id }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-table</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
  {{ selected ? selected : 'Select an item in the table' }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Leanne Graham"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Bret"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sincere@april.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"hildegard.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Ervin Howell"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Antonette"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Shanna@melissa.tv"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"anastasia.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementine Bauch"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Samantha"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Nathan@yesenia.net"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ramiro.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Patricia Lebsack"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Karianne"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Julianne.OConner@kory.org"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"kale.biz"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Chelsey Dietrich"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Kamren"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"demarco.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Mrs. Dennis Schulist"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Leopoldo_Corkery"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Karley_Dach@jasper.info"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ola.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Kurtis Weissnat"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Elwyn.Skiles"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"elvis.io"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Maxime_Nienow"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sherwood@rosamond.me"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"jacynthe.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Glenna Reichert"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Delphine"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"conrad.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementina DuBuque"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Moriah.Stanton"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ambrose.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="multiple-selected" tabindex="-1"><a class="header-anchor" href="#multiple-selected" aria-hidden="true">#</a> Multiple Selected</h2>
<p>You can do multiple select functionality in the table with the <code v-pre>v-model</code> property with its value being an array</p>
<p>for this functionality you can use for example the vuesax checkboxes and the global function <code v-pre>$vs.checkAll</code> in the checkbox of th</p>
<div slot="example">
  <Table-multiple />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-table</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#thead</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span>
                <span class="token attr-name">:indeterminate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected.length == users.length<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>allCheck<span class="token punctuation">"</span></span>
                <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected = $vs.checkAll(selected, users)<span class="token punctuation">"</span></span>
              <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Name
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Email
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Id
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tbody</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(tr, i) in users<span class="token punctuation">"</span></span>
            <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr<span class="token punctuation">"</span></span>
            <span class="token attr-name">:is-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!!selected.includes(tr)<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span> <span class="token attr-name">checkbox</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span> <span class="token attr-name">:val</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
              {{ tr.name }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.email }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.id }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-table</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>
  {{ selected.length > 0 ? selected : 'Select an item in the table' }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">allCheck</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Leanne Graham"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Bret"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sincere@april.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"hildegard.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Ervin Howell"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Antonette"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Shanna@melissa.tv"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"anastasia.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementine Bauch"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Samantha"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Nathan@yesenia.net"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ramiro.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Patricia Lebsack"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Karianne"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Julianne.OConner@kory.org"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"kale.biz"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Chelsey Dietrich"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Kamren"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"demarco.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Mrs. Dennis Schulist"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Leopoldo_Corkery"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Karley_Dach@jasper.info"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ola.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Kurtis Weissnat"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Elwyn.Skiles"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"elvis.io"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Maxime_Nienow"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sherwood@rosamond.me"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"jacynthe.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Glenna Reichert"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Delphine"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"conrad.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementina DuBuque"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Moriah.Stanton"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ambrose.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="expandable-data" tabindex="-1"><a class="header-anchor" href="#expandable-data" aria-hidden="true">#</a> Expandable data</h2>
<p>To add a <code v-pre>tr</code> that can display expanded data use the<code v-pre>#expand</code> slot inside the <code v-pre>vs-tr</code> component.</p>
<div slot="example">
  <Table-expand />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-table</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#thead</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Name
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Email
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Id
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tbody</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(tr, i) in users<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
              {{ tr.name }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.email }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.id }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#expand</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-avatar</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`/avatars/avatar-${i + 1}.png`<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-avatar</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
                    {{ tr.name }}
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span> <span class="token attr-name">icon</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bx-lock-open-alt<span class="token punctuation">'</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span> <span class="token attr-name">icon</span><span class="token punctuation">></span></span>
                    Send Email
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">border</span> <span class="token attr-name">danger</span><span class="token punctuation">></span></span>
                    Remove User
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">editActive</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">edit</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">editProp</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">allCheck</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Leanne Graham"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Bret"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sincere@april.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"hildegard.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Ervin Howell"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Antonette"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Shanna@melissa.tv"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"anastasia.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementine Bauch"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Samantha"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Nathan@yesenia.net"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ramiro.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Patricia Lebsack"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Karianne"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Julianne.OConner@kory.org"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"kale.biz"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Chelsey Dietrich"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Kamren"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"demarco.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Mrs. Dennis Schulist"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Leopoldo_Corkery"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Karley_Dach@jasper.info"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ola.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Kurtis Weissnat"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Elwyn.Skiles"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"elvis.io"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Maxime_Nienow"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sherwood@rosamond.me"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"jacynthe.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Glenna Reichert"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Delphine"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"conrad.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementina DuBuque"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Moriah.Stanton"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ambrose.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
</card>
<card>
<h2 id="edit-data" tabindex="-1"><a class="header-anchor" href="#edit-data" aria-hidden="true">#</a> Edit data</h2>
<p>You can edit the data inside the table easily using the <code v-pre>vs-dialog</code> component and the magic of vuejs</p>
<div slot="example">
  <Table-edit />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-table</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#thead</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Name
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Email
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              Id
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tbody</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(tr, i) in users<span class="token punctuation">"</span></span>
            <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span> <span class="token attr-name">edit</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edit = tr, editProp = 'name', editActive = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              {{ tr.name }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span> <span class="token attr-name">edit</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edit = tr, editProp = 'email', editActive = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            {{ tr.email }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.id }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-table</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editActive<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
            Change Prop {{ editProp }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">@keypress.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editActive = false<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editProp == 'email'<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edit[editProp]<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-select</span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editActive = false<span class="token punctuation">"</span></span> <span class="token attr-name">block</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editProp == 'name'<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edit[editProp]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vuesax<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vuesax<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Vuesax
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vue<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vuejs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Vue
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Javascript<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Javascript
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">disabled</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sass<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Sass
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Typescript<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Typescript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Typescript
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Webpack<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Webpack<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Webpack
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Nodejs<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Nodejs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Nodejs
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-select</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">editActive</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">edit</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">editProp</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Leanne Graham"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Bret"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sincere@april.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"hildegard.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Ervin Howell"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Antonette"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Shanna@melissa.tv"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"anastasia.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementine Bauch"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Samantha"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Nathan@yesenia.net"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ramiro.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Patricia Lebsack"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Karianne"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Julianne.OConner@kory.org"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"kale.biz"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Chelsey Dietrich"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Kamren"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"demarco.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Mrs. Dennis Schulist"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Leopoldo_Corkery"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Karley_Dach@jasper.info"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ola.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Kurtis Weissnat"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Elwyn.Skiles"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"elvis.io"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Maxime_Nienow"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sherwood@rosamond.me"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"jacynthe.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Glenna Reichert"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Delphine"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"conrad.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementina DuBuque"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Moriah.Stanton"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ambrose.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></div>
</card>
<card>
<h2 id="search-and-sort" tabindex="-1"><a class="header-anchor" href="#search-and-sort" aria-hidden="true">#</a> Search and sort</h2>
<p>The search functionality is now independent and you can use the global function <code v-pre>$vs.getSearch</code></p>
<div class="custom-container tip">
<p>The <code v-pre>$vs.getSearch</code> function needs two parameters: the data of the table to filter and the text to search</p>
</div>
<h4 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h4>
<p>sort functionality is independent and you can use the global function <code v-pre>$vs.sortData</code></p>
<div class="custom-container tip">
<p>The <code v-pre>$vs.sortData</code> function needs 3 parameters: the event, the data of the table and the item to be ordered.</p>
</div>
<div slot="example">
  <Table-search />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-table</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">border</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#thead</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span> <span class="token attr-name">sort</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>users = $vs.sortData($event ,users, 'name')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              Name
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span> <span class="token attr-name">sort</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>users = $vs.sortData($event ,users, 'email')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              Email
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span> <span class="token attr-name">sort</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>users = $vs.sortData($event ,users, 'id')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              Id
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tbody</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(tr, i) in $vs.getSearch(users, search)<span class="token punctuation">"</span></span>
            <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr<span class="token punctuation">"</span></span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
              {{ tr.name }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.email }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.id }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Leanne Graham"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Bret"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sincere@april.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"hildegard.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Ervin Howell"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Antonette"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Shanna@melissa.tv"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"anastasia.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementine Bauch"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Samantha"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Nathan@yesenia.net"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ramiro.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Patricia Lebsack"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Karianne"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Julianne.OConner@kory.org"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"kale.biz"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Chelsey Dietrich"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Kamren"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"demarco.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Mrs. Dennis Schulist"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Leopoldo_Corkery"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Karley_Dach@jasper.info"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ola.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Kurtis Weissnat"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Elwyn.Skiles"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"elvis.io"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Maxime_Nienow"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sherwood@rosamond.me"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"jacynthe.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Glenna Reichert"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Delphine"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"conrad.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementina DuBuque"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Moriah.Stanton"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ambrose.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></div>
</card>
<card>
<h2 id="miscellaneous" tabindex="-1"><a class="header-anchor" href="#miscellaneous" aria-hidden="true">#</a> Miscellaneous</h2>
<p>This is a sample of everything united and its functionality together</p>
<div class="custom-container tip">
<p>This component is created for much freer customization regarding data handling, for example if you need server-side pagination you just don’t use the global function <code v-pre>$vs.getSearch</code>.</p>
</div>
<div slot="example">
  <Table-miscellaneous />
</div>
<div slot="template">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-table</span>
        <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">border</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#thead</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span>
                <span class="token attr-name">:indeterminate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected.length == users.length<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>allCheck<span class="token punctuation">"</span></span>
                <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected = $vs.checkAll(selected, users)<span class="token punctuation">"</span></span>
              <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span> <span class="token attr-name">sort</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>users = $vs.sortData($event ,users, 'name')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              Name
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span> <span class="token attr-name">sort</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>users = $vs.sortData($event ,users, 'email')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              Email
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-th</span> <span class="token attr-name">sort</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>users = $vs.sortData($event ,users, 'id')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              Id
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-th</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#tbody</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-tr</span>
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span>
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(tr, i) in $vs.getPage($vs.getSearch(users, search), page, max)<span class="token punctuation">"</span></span>
            <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr<span class="token punctuation">"</span></span>
            <span class="token attr-name">:is-selected</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!!selected.includes(tr)<span class="token punctuation">"</span></span>
            <span class="token attr-name">not-click-selected</span>
            <span class="token attr-name">open-expand-only-td</span>
          <span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span> <span class="token attr-name">checkbox</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-checkbox</span> <span class="token attr-name">:val</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tr<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selected<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span> <span class="token attr-name">edit</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edit = tr, editProp = 'name', editActive = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              {{ tr.name }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.email }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-td</span><span class="token punctuation">></span></span>
            {{ tr.id }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-td</span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#expand</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>con-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-avatar</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`/avatars/avatar-${i + 1}.png`<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-avatar</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
                    {{ tr.name }}
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span> <span class="token attr-name">icon</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bx bx-lock-open-alt<span class="token punctuation">'</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">flat</span> <span class="token attr-name">icon</span><span class="token punctuation">></span></span>
                    Send Email
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-button</span> <span class="token attr-name">border</span> <span class="token attr-name">danger</span><span class="token punctuation">></span></span>
                    Remove User
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-button</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-pagination</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span> <span class="token attr-name">:length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$vs.getLength($vs.getSearch(users, search), max)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-table</span><span class="token punctuation">></span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-dialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editActive<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span>
            Change Prop {{ editProp }}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-input</span> <span class="token attr-name">@keypress.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editActive = false<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editProp == 'email'<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edit[editProp]<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-select</span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editActive = false<span class="token punctuation">"</span></span> <span class="token attr-name">block</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>editProp == 'name'<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edit[editProp]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vuesax<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vuesax<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Vuesax
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vue<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vuejs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Vue
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Javascript<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Javascript
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">disabled</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sass<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Sass<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Sass
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Typescript<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Typescript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Typescript
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Webpack<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Webpack<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Webpack
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vs-option</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Nodejs<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Nodejs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            Nodejs
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-option</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-select</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vs-dialog</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></div>
<div slot="script">
<div class="language-html" data-ext="html"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">data</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">editActive</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">edit</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">editProp</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token literal-property property">allCheck</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
        <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Leanne Graham"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Bret"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sincere@april.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"hildegard.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Ervin Howell"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Antonette"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Shanna@melissa.tv"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"anastasia.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementine Bauch"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Samantha"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Nathan@yesenia.net"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ramiro.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Patricia Lebsack"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Karianne"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Julianne.OConner@kory.org"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"kale.biz"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Chelsey Dietrich"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Kamren"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Lucio_Hettinger@annie.ca"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"demarco.info"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Mrs. Dennis Schulist"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Leopoldo_Corkery"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Karley_Dach@jasper.info"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ola.org"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Kurtis Weissnat"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Elwyn.Skiles"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Telly.Hoeger@billy.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"elvis.io"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Nicholas Runolfsdottir V"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Maxime_Nienow"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Sherwood@rosamond.me"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"jacynthe.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Glenna Reichert"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Delphine"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Chaim_McDermott@dana.io"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"conrad.com"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
            <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"Clementina DuBuque"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"Moriah.Stanton"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"email"</span><span class="token operator">:</span> <span class="token string">"Rey.Padberg@karina.biz"</span><span class="token punctuation">,</span>
            <span class="token string-property property">"website"</span><span class="token operator">:</span> <span class="token string">"ambrose.net"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre></div></div>
</card>
<card>
<h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions <Badge text="New"/></h2>
<p>We create this component with a different logic and maybe something not very common as a first point we want development to be more free and for the programmer to have many options and customization based on what he needs and wants to create, for example a very important theme it is the queries of the data in the server and that now they are not manipulated by the component until you yourself using a vuesax function impose it</p>
<p>So now we use global functions that you can use if you need them such as</p>
<ul>
<li>$vs.checkAll: it makes the check functionality to all the items and if they are all in check it removes them</li>
<li>$vs.sortData: it makes it possible to move all the elements from bottom to top or from top to bottom and to their initial position (in order to save this position, a property is added to the iterated object)</li>
<li>$vs.getSearch: returns the items that match the search in the entire array</li>
<li>$vs.getPage: returns the elements of the page based on the items and the maximum to show</li>
<li>$vs.getLength: returns the length for pagination based on the items and the maximum</li>
</ul>
</card>
<card>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
</card>
</div></template>


