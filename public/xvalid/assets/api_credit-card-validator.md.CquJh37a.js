import{_ as s,c as i,a0 as e,o as t}from"./chunks/framework.ByI-fec-.js";const k=JSON.parse('{"title":"CreditCardValidator Class","description":"","frontmatter":{},"headers":[],"relativePath":"api/credit-card-validator.md","filePath":"api/credit-card-validator.md","lastUpdated":1690535755000}'),r={name:"api/credit-card-validator.md"};function l(n,a,d,h,p,o){return t(),i("div",null,a[0]||(a[0]=[e(`<h1 id="creditcardvalidator-class" tabindex="-1">CreditCardValidator Class <a class="header-anchor" href="#creditcardvalidator-class" aria-label="Permalink to &quot;CreditCardValidator Class&quot;">​</a></h1><p>The <code>CreditCardValidator</code> class provides methods to validate credit card numbers, including numeric check, Luhn algorithm, and supported card types.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="isvalidcreditcardnumber" tabindex="-1"><code>IsValidCreditCardNumber</code> <a class="header-anchor" href="#isvalidcreditcardnumber" aria-label="Permalink to &quot;\`IsValidCreditCardNumber\`&quot;">​</a></h3><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsValidCreditCardNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> creditCardNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>The <code>IsValidCreditCardNumber</code> method validates whether the given credit card number is valid.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><ul><li><code>creditCardNumber</code> (string): The credit card number to validate.</li></ul><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><ul><li><code>true</code> if the credit card number is valid.</li><li><code>false</code> if the credit card number is not valid.</li></ul><h4 id="remarks" tabindex="-1">Remarks <a class="header-anchor" href="#remarks" aria-label="Permalink to &quot;Remarks&quot;">​</a></h4><ul><li>The credit card number must not be null, empty, or contain only whitespace characters.</li><li>The method removes any spaces or dashes from the credit card number before validation.</li><li>The credit card number must be numeric and not empty.</li><li>The credit card number must pass the Luhn algorithm (modulus 10 checksum).</li><li>The credit card number must match one of the supported card types: Visa, MasterCard, American Express (Amex), Discover, or Diners Club.</li></ul><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XValid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> creditCardNumber</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;4111 1111 1111 1111&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Example card number (Visa)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isValid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CreditCardValidator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsValidCreditCardNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(creditCardNumber);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (isValid)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Valid credit card number!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Invalid credit card number!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>That&#39;s it! You can use the <code>CreditCardValidator</code> class in your C# code to validate credit card numbers based on the defined checks and supported card types. If you have any questions or need more information, feel free to explore other sections of the API reference or check out the <a href="/xvalid/get-started.html">Get Started</a> page for an overview of XValid.</p>`,15)]))}const u=s(r,[["render",l]]);export{k as __pageData,u as default};