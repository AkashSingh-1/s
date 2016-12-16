$(window).load(function(){
	var openComment, styles, time, char, writeStyle, all;
	styles = "/**\n *\n * Hola! I'm Abhishek Singh...\n * \n * lets do something intersting!!\n * To show everything animating\n * Lets add animation property\n *\n **/\n\n *   {\n  -webkit-transition:all 1s linear;\n }\n\n/**\n *\n * \"Well i didn't see anything!!\"\n * Don't worry u will soon see\n * We are not in 80's lets add some color\n *\n **/\n\n html   {\n  background: #0077B5;\n }\n\n /* \n * It will be a single page so no overflow\n */\n\n body{\n   overflow:hidden;\n }\n\n/**\n * Hold on....\n *\n **/\n\n pre  {\n  color:#fff;\n  white-space:text-wrap;\n }\n\n/** \n *Let's get organised because its always  better\n *\n **/\n\n pre  {\n  max-height:calc(84vh);\n  border:1px solid #ccc;\n  color : #444;\n  width:48%;\n  background:#FAFAFA;\n  white-space:pre-wrap;\n  overflow: auto;\n  box-shadow: 8px 8px 15px #ccc;\n  -webkit-transform : translateX(95%);\n  position:absolute;\n  top: 5%;\n  -webkit-transform-origin:right;\n  font-family: 'Roboto Mono', monospace;\n  font-size:14px;\n }\n\n/**\n  * This looks better \n  * let's add some perspective\n  **/\n pre  {\n  -webkit-transform: perspective(1200px) rotateY(-14deg) translateX(94%);\n }\n\n/**\n *\n * Well this looks better, right??\n * But something's missing..\n * It doesn't feel like coding\n * Until texts are highlighted\n *\n **/\n.comment         { color: #857F6B; font-style: italic; }\n.selector        { color: #F78C6C; }\n.property        { color: #FF5370; }\n.value           { color: #945EB8; }\n\n/**\n * We seems to be on track now...\n * Let's create my website becuase that's\n * what you came to see\n */\n\ndiv.about-me{\n  overflow-x:hidden;\n  width:45%;\n  display:block;\n}\nul.menu{\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  padding:100px 150px;\n  -webkit-transform:rotate(-35deg) skew(20deg, 5deg);\n  -webkit-transform-origin:left;\n  display:block;\n}\nul.menu>li{\n  text-align:center;\n  padding:10px;\n  background:#fff;\n  color: #575757;\n  box-shadow:-2em 2em 0px #444;\n  width:4em;\n  height:2.5em;\n  position:relative;\n  vertical-align:center;\n  -webkit-box-sizing:border-box;\n  -webkit-transition: all 0.5s ease;\n  font-weight:bold;\n}\n\n/* Removing padding of first and\n * last element because they are svg\n */\n\nul.menu>li:nth-child(5), ul.menu>li:first-child{\n  padding-top:0;\n}\n\n/*To make them appear 3d becuase its nice to see */\n\nul.menu>li::after, ul.menu>li::before{\n  content: '';\n  position: absolute;\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  width: .5em;\n}\nul.menu>li::after{\n  height: 4em;\n  background: #e1e1e1;\n  bottom: -2.25em;\n  left: 1.5em;\n  -webkit-transform: rotate(90deg) skew(0, 45deg);\n          transform: rotate(90deg) skew(0, 45deg);\n}\nul.menu>li::before{\n  height: 2.5em;\n  background: #e1e1e1;\n  top: .25em;\n  left: -.5em;\n  -webkit-transform: skewY(-45deg);\n          transform: skewY(-45deg);\n}\n\n/* Designing my cards to giv my details */\n\ndiv.content div{\n   -webkit-transition:all .4s ease-out;\n  padding:20px;\n  display: none;\n  color: #444;\n  background:#eee;\n  width:75%;\n}\n\n/**\n * A shadow to all of my div to\n * make them look better\n */\n\ndiv.content div.con0{\n  box-shadow:0px 0px 25px #B83931;\n}\ndiv.content div.con1{\n  box-shadow:0px 0px 25px #ccc;\n}\ndiv.content div.con2{\n  box-shadow:0px 0px 25px red;\n}\ndiv.content div.con3{\n  box-shadow:0px 0px 25px #800074;\n}\ndiv.con4{\n  box-shadow:0px 0px 25px #ccc;\n}\n\n/* adding perspective to my details card */\n\n.in-out{\n  -webkit-transform:perspective(2000px) rotateY(25deg) translateY(-50px);\n}\n.out-in{\n  -webkit-transform:perspective(2000px) rotateY(-25deg) translateY(-50px);\n}\n\nul.menu li svg path,ul.menu li svg circle, ul.menu li svg{\n  fill:#575757;\n  -webkit-transition:fill 0.1s ease;\n}\nul.menu>li.changeBackground svg path, ul.menu>li.changeBackground svg circle{\n  fill:#fff;\n}\n\n/**\n *Something to highlight the selected nav\n * item */\n\nul.menu>li.changeBackground{\n   background: #ff6e42;\n  color: #fffcfb;\n  -webkit-transform: translate(0.9em, -0.9em);\n          transform: translate(0.9em, -0.9em);\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  box-shadow: -2em 2em 0 #444;\n  cursor:pointer;\n}\nh1{\n  font-size:19px;\n  font-weight:lighter;\n}\n\n/**\n * Let's add some transition to my soical icons\n */\n\nul.follow svg path{\n  -webkit-transition: all 0.4s ease-out;\n}\n.linkedin svg:hover path{\n  fill:#0077B5;\n}\n.facebook svg:hover path{\n  fill: #3b5998;\n}\n.instagram svg:hover path{\n  fill: #fb3958;\n}\n.googleplus svg:hover path{\n  fill: #d34836;\n}\n.twitter svg:hover path{\n  fill: #0084b4;\n}\n";
	openComment = false;
	all = "<style type=\"text/css\" id=\"style-tag\">/**\n *\n * Hola! I'm Abhishek Singh...\n * \n * lets do something intersting!!\n * To show everything animating\n * Lets add animation property\n *\n **/\n\n *    {\n  -webkit-transition:all 1s linear;\n }\n\n/**\n *\n * \"Well i didn't see anything!!\"\n * Don't worry u will soon see\n * We are not in 80's lets add some color\n *\n **/\n\n html    {\n  background: #0077B5;\n }\n\n /* \n * It will be a single page so no overflow\n */\n\n body {\n   overflow:hidden;\n }\n\n/**\n * Hold on....\n *\n **/\n\n pre   {\n  color:#fff;\n  white-space:text-wrap;\n }\n\n/** \n *Let's get organised because its always  better\n *\n **/\n\n pre   {\n  max-height:calc(84vh);\n  border:1px solid #ccc;\n  color : #444;\n  width:48%;\n  background:#FAFAFA;\n  white-space:pre-wrap;\n  overflow: auto;\n  box-shadow: 8px 8px 15px #ccc;\n  -webkit-transform : translateX(95%);\n  position:absolute;\n  top: 5%;\n  -webkit-transform-origin:right;\n  font-family: 'Roboto Mono', monospace;\n  font-size:14px;\n }\n\n/**\n  * This looks better \n  * let's add some perspective\n  **/\n pre   {\n  -webkit-transform: perspective(1200px) rotateY(-14deg) translateX(94%);\n }\n\n/**\n *\n * Well this looks better, right??\n * But something's missing..\n * It doesn't feel like coding\n * Until texts are highlighted\n *\n **/\n.comment          { color: #857F6B; font-style: italic; }\n.selector         { color: #F78C6C; }\n.property         { color: #FF5370; }\n.value            { color: #945EB8; }\n\n/**\n * We seems to be on track now...\n * Let's create my website becuase that's\n * what you came to see\n */\n\ndiv.about-me {\n  overflow-x:hidden;\n  width:45%;\n  display:block;\n}\nul.menu {\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  padding:100px 150px;\n  -webkit-transform:rotate(-35deg) skew(20deg, 5deg);\n  -webkit-transform-origin:left;\n  display:block;\n}\nul.menu>li {\n  text-align:center;\n  padding:10px;\n  background:#fff;\n  color: #575757;\n  box-shadow:-2em 2em 0px #444;\n  width:4em;\n  height:2.5em;\n  position:relative;\n  vertical-align:center;\n  -webkit-box-sizing:border-box;\n  -webkit-transition: all 0.5s ease;\n  font-weight:bold;\n}\n\n/* Removing padding of first and\n * last element because they are svg\n */\n\nul.menu>li:nth-child(5), ul.menu>li:first-child {\n  padding-top:0;\n}\n\n/*To make them appear 3d becuase its nice to see */\n\nul.menu>li::after, ul.menu>li::before {\n  content: '';\n  position: absolute;\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  width: .5em;\n}\nul.menu>li::after {\n  height: 4em;\n  background: #e1e1e1;\n  bottom: -2.25em;\n  left: 1.5em;\n  -webkit-transform: rotate(90deg) skew(0, 45deg);\n          transform: rotate(90deg) skew(0, 45deg);\n}\nul.menu>li::before {\n  height: 2.5em;\n  background: #e1e1e1;\n  top: .25em;\n  left: -.5em;\n  -webkit-transform: skewY(-45deg);\n          transform: skewY(-45deg);\n}\n\n/* Designing my cards to giv my details */\n\ndiv.content div {\n   -webkit-transition:all .4s ease-out;\n  padding:20px;\n  display: none;\n  color: #444;\n  background:#eee;\n  width:75%;\n}\n\n/**\n * A shadow to all of my div to\n * make them look better\n */\n\ndiv.content div.con0 {\n  box-shadow:0px 0px 25px #B83931;\n}\ndiv.content div.con1 {\n  box-shadow:0px 0px 25px #ccc;\n}\ndiv.content div.con2 {\n  box-shadow:0px 0px 25px red;\n}\ndiv.content div.con3 {\n  box-shadow:0px 0px 25px #800074;\n}\ndiv.con4 {\n  box-shadow:0px 0px 25px #ccc;\n}\n\n/* adding perspective to my details card */\n\n.in-out {\n  -webkit-transform:perspective(2000px) rotateY(25deg) translateY(-50px);\n}\n.out-in {\n  -webkit-transform:perspective(2000px) rotateY(-25deg) translateY(-50px);\n}\n\nul.menu li svg path,ul.menu li svg circle, ul.menu li svg {\n  fill:#575757;\n  -webkit-transition:fill 0.1s ease;\n}\nul.menu>li.changeBackground svg path, ul.menu>li.changeBackground svg circle {\n  fill:#fff;\n}\n\n/**\n *Something to highlight the selected nav\n * item */\n\nul.menu>li.changeBackground {\n   background: #ff6e42;\n  color: #fffcfb;\n  -webkit-transform: translate(0.9em, -0.9em);\n          transform: translate(0.9em, -0.9em);\n  -webkit-transition: all .25s linear;\n  transition: all .25s linear;\n  box-shadow: -2em 2em 0 #444;\n  cursor:pointer;\n}\nh1 {\n  font-size:19px;\n  font-weight:lighter;\n}\n\n/**\n * Let's add some transition to my soical icons\n */\n\nul.follow svg path {\n  -webkit-transition: all 0.4s ease-out;\n}\n.linkedin svg:hover path {\n  fill:#0077B5;\n}\n.facebook svg:hover path {\n  fill: #3b5998;\n}\n.instagram svg:hover path {\n  fill: #fb3958;\n}\n.googleplus svg:hover path {\n  fill: #d34836;\n}\n.twitter svg:hover path {\n  fill: #0084b4;\n}\n</style>\n<pre class=\"style-text\" id=\"scroll-text\"><em class=\"comment\">/**\n *\n * Hola! I'm Abhishek Singh...\n * \n * lets do something intersting!!\n * To show everything animating\n * Lets add animation property\n *\n **/</em>\n\n<span class=\"selector\"> *   </span> {<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\">all 1s linear</span>;\n }\n\n<em class=\"comment\">/**\n *\n * \"Well i didn't see anything!!\"\n * Don't worry u will soon see\n * We are not in 80's lets add some color\n *\n **/</em>\n\n<span class=\"selector\"> html   </span> {<span class=\"property\">\n  background</span>:<span class=\"value\"> #0077B5</span>;\n }\n\n <em class=\"comment\">/* \n * It will be a single page so no overflow\n */</em>\n\n<span class=\"selector\"> body</span> {<span class=\"property\">\n   overflow</span>:<span class=\"value\">hidden</span>;\n }\n\n<em class=\"comment\">/**\n * Hold on....\n *\n **/</em>\n\n<span class=\"selector\"> pre  </span> {<span class=\"property\">\n  color</span>:<span class=\"value\">#fff</span>;<span class=\"property\">\n  white-space</span>:<span class=\"value\">text-wrap</span>;\n }\n\n<em class=\"comment\">/** \n *Let's get organised because its always  better\n *\n **/</em>\n\n<span class=\"selector\"> pre  </span> {<span class=\"property\">\n  max-height</span>:<span class=\"value\">calc(84vh)</span>;<span class=\"property\">\n  border</span>:<span class=\"value\">1px solid #ccc</span>;<span class=\"property\">\n  color </span>:<span class=\"value\"> #444</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">48%</span>;<span class=\"property\">\n  background</span>:<span class=\"value\">#FAFAFA</span>;<span class=\"property\">\n  white-space</span>:<span class=\"value\">pre-wrap</span>;<span class=\"property\">\n  overflow</span>:<span class=\"value\"> auto</span>;<span class=\"property\">\n  box-shadow</span>:<span class=\"value\"> 8px 8px 15px #ccc</span>;<span class=\"property\">\n  -webkit-transform </span>:<span class=\"value\"> translateX(95%)</span>;<span class=\"property\">\n  position</span>:<span class=\"value\">absolute</span>;<span class=\"property\">\n  top</span>:<span class=\"value\"> 5%</span>;<span class=\"property\">\n  -webkit-transform-origin</span>:<span class=\"value\">right</span>;<span class=\"property\">\n  font-family</span>:<span class=\"value\"> 'Roboto Mono', monospace</span>;<span class=\"property\">\n  font-size</span>:<span class=\"value\">14px</span>;\n }\n\n<em class=\"comment\">/**\n  * This looks better \n  * let's add some perspective\n  **/</em>\n<span class=\"selector\"> pre  </span> {<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> perspective(1200px) rotateY(-14deg) translateX(94%)</span>;\n }\n\n<em class=\"comment\">/**\n *\n * Well this looks better, right??\n * But something's missing..\n * It doesn't feel like coding\n * Until texts are highlighted\n *\n **/</em>\n<span class=\"selector\">.comment         </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #857F6B</span>;<span class=\"property\"> font-style</span>:<span class=\"value\"> italic</span>; }\n<span class=\"selector\">.selector        </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #F78C6C</span>; }\n<span class=\"selector\">.property        </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #FF5370</span>; }\n<span class=\"selector\">.value           </span> {<span class=\"property\"> color</span>:<span class=\"value\"> #945EB8</span>; }\n\n<em class=\"comment\">/**\n * We seems to be on track now...\n * Let's create my website becuase that's\n * what you came to see\n */</em>\n\n<span class=\"selector\">div.about-me</span> {<span class=\"property\">\n  overflow-x</span>:<span class=\"value\">hidden</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">45%</span>;<span class=\"property\">\n  display</span>:<span class=\"value\">block</span>;\n}\n<span class=\"selector\">ul.menu</span> {<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  padding</span>:<span class=\"value\">100px 150px</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\">rotate(-35deg) skew(20deg, 5deg)</span>;<span class=\"property\">\n  -webkit-transform-origin</span>:<span class=\"value\">left</span>;<span class=\"property\">\n  display</span>:<span class=\"value\">block</span>;\n}\n<span class=\"selector\">ul.menu&gt;li</span> {<span class=\"property\">\n  text-align</span>:<span class=\"value\">center</span>;<span class=\"property\">\n  padding</span>:<span class=\"value\">10px</span>;<span class=\"property\">\n  background</span>:<span class=\"value\">#fff</span>;<span class=\"property\">\n  color</span>:<span class=\"value\"> #575757</span>;<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">-2em 2em 0px #444</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">4em</span>;<span class=\"property\">\n  height</span>:<span class=\"value\">2.5em</span>;<span class=\"property\">\n  position</span>:<span class=\"value\">relative</span>;<span class=\"property\">\n  vertical-align</span>:<span class=\"value\">center</span>;<span class=\"property\">\n  -webkit-box-sizing</span>:<span class=\"value\">border-box</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all 0.5s ease</span>;<span class=\"property\">\n  font-weight</span>:<span class=\"value\">bold</span>;\n}\n\n<em class=\"comment\">/* Removing padding of first and\n * last element because they are svg\n */</em>\n\n<span class=\"selector\">ul.menu&gt;<span class=\"property\">li</span>:nth-child(5), ul.menu&gt;<span class=\"property\">li</span>:first-child</span> {<span class=\"property\">\n  padding-top</span>:<span class=\"value\">0</span>;\n}\n\n<em class=\"comment\">/*To make them appear 3d becuase its nice to see */</em>\n\n<span class=\"selector\">ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:after, ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:before</span> {<span class=\"property\">\n  content</span>:<span class=\"value\"> ''</span>;<span class=\"property\">\n  position</span>:<span class=\"value\"> absolute</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  width</span>:<span class=\"value\"> .5em</span>;\n}\n<span class=\"selector\">ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:after</span> {<span class=\"property\">\n  height</span>:<span class=\"value\"> 4em</span>;<span class=\"property\">\n  background</span>:<span class=\"value\"> #e1e1e1</span>;<span class=\"property\">\n  bottom</span>:<span class=\"value\"> -2.25em</span>;<span class=\"property\">\n  left</span>:<span class=\"value\"> 1.5em</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> rotate(90deg) skew(0, 45deg)</span>;<span class=\"property\">\n          transform</span>:<span class=\"value\"> rotate(90deg) skew(0, 45deg)</span>;\n}\n<span class=\"selector\">ul.menu&gt;<span class=\"property\">li</span>:<span class=\"property\"></span>:before</span> {<span class=\"property\">\n  height</span>:<span class=\"value\"> 2.5em</span>;<span class=\"property\">\n  background</span>:<span class=\"value\"> #e1e1e1</span>;<span class=\"property\">\n  top</span>:<span class=\"value\"> .25em</span>;<span class=\"property\">\n  left</span>:<span class=\"value\"> -.5em</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> skewY(-45deg)</span>;<span class=\"property\">\n          transform</span>:<span class=\"value\"> skewY(-45deg)</span>;\n}\n\n<em class=\"comment\">/* Designing my cards to giv my details */</em>\n\n<span class=\"selector\">div.content div</span> {<span class=\"property\">\n   -webkit-transition</span>:<span class=\"value\">all .4s ease-out</span>;<span class=\"property\">\n  padding</span>:<span class=\"value\">20px</span>;<span class=\"property\">\n  display</span>:<span class=\"value\"> none</span>;<span class=\"property\">\n  color</span>:<span class=\"value\"> #444</span>;<span class=\"property\">\n  background</span>:<span class=\"value\">#eee</span>;<span class=\"property\">\n  width</span>:<span class=\"value\">75%</span>;\n}\n\n<em class=\"comment\">/**\n * A shadow to all of my div to\n * make them look better\n */</em>\n\n<span class=\"selector\">div.content div.con0</span> {<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">0px 0px 25px #B83931</span>;\n}\n<span class=\"selector\">div.content div.con1</span> {<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">0px 0px 25px #ccc</span>;\n}\n<span class=\"selector\">div.content div.con2</span> {<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">0px 0px 25px red</span>;\n}\n<span class=\"selector\">div.content div.con3</span> {<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">0px 0px 25px #800074</span>;\n}\n<span class=\"selector\">div.con4</span> {<span class=\"property\">\n  box-shadow</span>:<span class=\"value\">0px 0px 25px #ccc</span>;\n}\n\n<em class=\"comment\">/* adding perspective to my details card */</em>\n\n<span class=\"selector\">.in-out</span> {<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\">perspective(2000px) rotateY(25deg) translateY(-50px)</span>;\n}\n<span class=\"selector\">.out-in</span> {<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\">perspective(2000px) rotateY(-25deg) translateY(-50px)</span>;\n}\n\n<span class=\"selector\">ul.menu li svg path,ul.menu li svg circle, ul.menu li svg</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\">#575757</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\">fill 0.1s ease</span>;\n}\n<span class=\"selector\">ul.menu&gt;li.changeBackground svg path, ul.menu&gt;li.changeBackground svg circle</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\">#fff</span>;\n}\n\n<em class=\"comment\">/**\n *Something to highlight the selected nav\n * item */</em>\n\n<span class=\"selector\">ul.menu&gt;li.changeBackground</span> {<span class=\"property\">\n   background</span>:<span class=\"value\"> #ff6e42</span>;<span class=\"property\">\n  color</span>:<span class=\"value\"> #fffcfb</span>;<span class=\"property\">\n  -webkit-transform</span>:<span class=\"value\"> translate(0.9em, -0.9em)</span>;<span class=\"property\">\n          transform</span>:<span class=\"value\"> translate(0.9em, -0.9em)</span>;<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  transition</span>:<span class=\"value\"> all .25s linear</span>;<span class=\"property\">\n  box-shadow</span>:<span class=\"value\"> -2em 2em 0 #444</span>;<span class=\"property\">\n  cursor</span>:<span class=\"value\">pointer</span>;\n}\n<span class=\"selector\">h1</span> {<span class=\"property\">\n  font-size</span>:<span class=\"value\">19px</span>;<span class=\"property\">\n  font-weight</span>:<span class=\"value\">lighter</span>;\n}\n\n<em class=\"comment\">/**\n * Let's add some transition to my soical icons\n */</em>\n\n<span class=\"selector\">ul.follow svg path</span> {<span class=\"property\">\n  -webkit-transition</span>:<span class=\"value\"> all 0.4s ease-out</span>;\n}\n<span class=\"selector\">.<span class=\"property\">linkedin svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\">#0077B5</span>;\n}\n<span class=\"selector\">.<span class=\"property\">facebook svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #3b5998</span>;\n}\n<span class=\"selector\">.<span class=\"property\">instagram svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #fb3958</span>;\n}\n<span class=\"selector\">.<span class=\"property\">googleplus svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #d34836</span>;\n}\n<span class=\"selector\">.<span class=\"property\">twitter svg</span>:hover path</span> {<span class=\"property\">\n  fill</span>:<span class=\"value\"> #0084b4</span>;\n}\n</pre>\n<div class=\"about-me\">\n    <ul class=\"menu\">\n      <li class=\"changeBackground\"><svg viewBox=\"0 0 512 512\">\n        <g>\n          <path d=\"M138.814,146.22c3.12,40.976,19.417,23.314,22.779,41.27c5.59,29.848,32.016,51.436,48.466,58.893     c9.597,4.348,19.48,6.53,29.871,6.704v0.009c0.036,0,0.072-0.004,0.108-0.004s0.072,0.004,0.108,0.004v-0.009     c10.39-0.174,20.272-2.355,29.871-6.704c16.45-7.457,42.876-29.045,48.466-58.893c3.362-17.955,19.659-0.294,22.779-41.27     c0-16.33-8.898-20.394-8.898-20.394s4.523-24.171,6.295-42.77C340.854,59.877,325.129,0,241.25,0     c-0.367,0-0.707,0.02-1.065,0.024c-0.013,0-0.025,0-0.038-0.001V0.019c-0.036,0.001-0.072,0.002-0.108,0.002     s-0.072-0.001-0.108-0.002v0.005c-0.013,0.001-0.025,0.001-0.038,0.001c-0.358-0.005-0.698-0.024-1.065-0.024     c-83.878,0-99.604,59.877-97.409,83.056c1.771,18.599,6.295,42.77,6.295,42.77S138.814,129.89,138.814,146.22z\"></path>\n          <path d=\"M430.313,347.371c-42.308-21.523-103.63-48.406-106.573-49.355c-0.033-0.012-0.058-0.014-0.09-0.024     c-1.721-0.613-3.571-0.953-5.504-0.953c-7.188,0-13.285,4.604-15.547,11.021c-0.012-0.008-0.024-0.013-0.036-0.021     c-10.92,26.315-30.979,73.223-43.434,95.842l-3-63.413c0,0,18.705-39.699,20.752-43.336c4.82-8.525,0.479-15.783-8.557-15.783     c-4.482,0-15.695,0-26.926,0c-0.013,0-0.025,0-0.038,0c-0.072,0-0.144,0-0.216,0c-0.013,0-0.025,0-0.038,0     c-0.154,0-0.308,0-0.462,0s-0.308,0-0.462,0c-0.013,0-0.025,0-0.038,0c-0.072,0-0.144,0-0.216,0c-0.013,0-0.025,0-0.038,0     c-11.23,0-22.442,0-26.926,0c-9.036,0-13.376,7.258-8.557,15.783c2.048,3.637,20.752,43.336,20.752,43.336l-2.999,63.413     c-12.455-22.619-32.514-69.524-43.434-95.842c-0.012,0.008-0.024,0.013-0.036,0.021c-2.262-6.414-8.359-11.021-15.547-11.021     c-1.933,0-3.783,0.34-5.504,0.953c-0.032,0.012-0.057,0.015-0.09,0.024c-2.942,0.949-64.265,27.832-106.573,49.355     c-19,9.666-30.467,21.688-30.467,34.34c0,41.826,0,99.58,0,99.58h219.227h0.191h0.105h0.006h0.107h0.191h0.309h0.309h0.191h0.105     h0.006h0.105h0.191H460.78c0,0,0-57.754,0-99.58C460.779,369.059,449.313,357.037,430.313,347.371z\"></path>\n        </g></svg></li>\n      <li class=\"\">&lt; /&gt; </li>\n      <li class=\"\">FUN</li>\n      <li class=\"\"> @ </li>\n      <li class=\"\">\n        <svg viewBox=\"0 0 512 512\">\n          <path d=\"M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z\"></path><path d=\"M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z\"></path><circle cx=\"351.5\" cy=\"160.5\" r=\"21.5\"></circle></svg></li>\n      <li class=\"\"></li>\n    </ul>\n    <div class=\"content\">\n      <div class=\"con0 in-out\" style=\"display: block;\">\n        <ul>\n          <li>Name: Abhishek singh</li>\n          <li>Age: 19</li>\n          <li>Hobbies: Drawing, Painting, Coding, Reading, Football, Volleyball, Try cricket each time but end up realizing that cricket is not my stuff</li>\n        </ul>\n      </div>\n      <div class=\"con1\" style=\"display: none;\">\n        <ol>\n          <li>I have already shown that i know 3 languages pretty well apart from this... i know</li>\n          <li>1. PHP</li>\n          <li>2. MYSQL</li>\n          <li>3. C</li>\n          <li>Bit of java, c++, and few javascript library</li>\n        </ol>\n      </div>\n      <div class=\"con2\" style=\"display: none;\">\n        <ol>\n          <li>Since you came here i have few games</li>\n          <li>HANGMAN</li>\n          <li>TIC TAC TOE</li>\n          <li>Others will be added hopefully</li>\n        </ol>\n      </div>\n      <div class=\"con3\" style=\"display: none;\">\n        <ol>\n          <li>Contact me</li>\n          <li>Email : singhey1@gmail.com</li>\n          <li> &nbsp; </li>\n          <li>Will try to reach you ASAP :)</li>\n        </ol>\n      </div>\n      <div class=\"con4\" style=\"display: none;\">\n        <ul class=\"follow\">\n          <li><h1>Follow me on</h1></li>\n          <li><a href=\"#\" class=\"icon-15 instagram\" title=\"Instagram\"><svg viewBox=\"0 0 512 512\"><g><path d=\"M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z\"></path><path d=\"M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z\"></path><circle cx=\"351.5\" cy=\"160.5\" r=\"21.5\"></circle></g></svg><!--[if lt IE 9]><em>Instagram</em><![endif]--></a></li>\n          <li><a href=\"#\" class=\"icon-10 facebook\" title=\"Facebook\"><svg viewBox=\"0 0 512 512\"><path d=\"M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z\"></path></svg><!--[if lt IE 9]><em>Facebook</em><![endif]--></a></li>\n          <li><a href=\"#\" class=\"icon-14 googleplus\" title=\"GooglePlus\"><svg viewBox=\"0 0 512 512\"><path d=\"M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3\"></path></svg><!--[if lt IE 9]><em>GooglePlus</em><![endif]--></a></li>\n          <li><a href=\"#\" class=\"icon-26 twitter\" title=\"Twitter\"><svg viewBox=\"0 0 512 512\"><path d=\"M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z\"></path></svg><!--[if lt IE 9]><em>Twitter</em><![endif]--></a></li>\n          <li><a href=\"#\" class=\"icon-17 linkedin\" title=\"LinkedIn\"><svg viewBox=\"0 0 512 512\"><path d=\"M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z\"></path></svg><!--[if lt IE 9]><em>LinkedIn</em><![endif]--></a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <span class=\"skip\" style=\"position:absolute;color:#fff;font-weight:bold;border:1px solid #fff;padding:10px 20px;bottom:20px;left:20px\"> Skip Animation </span>\n"
	char = function(a){
		if(a === '/'&& !openComment){
			openComment = true;
			styles = $('.style-text').html()+a;
		}else if(a == '/' && openComment){
			openComment = false;
			styles = $('.style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em>');
		}else if(a == ":"){
			styles = $('.style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<span class="property">$1</span>:');
		}else if(a == ";"){
			styles = $('.style-text').html().replace(/([^:]*)$/,'<span class="value">$1</span>;');
		}else if(a == "{"){
			styles = $('.style-text').html().replace(/(.*)$/, '<span class="selector">$1</span> {');
		}else{
			styles = $('.style-text').html()+a;
		}
		$('.style-text').html(styles);
		var k = $(".style-text").text();
		return $('#style-tag').html(k);
	}

	writeStyle = function(message, index, interval){
		while(index< message.length){
			var pre = $('.style-text');
			var body = $('body');
			$(pre).scrollTop($(pre).prop('scrollHeight'));
			$(body).scrollTop($(body).prop('scrollHeight'));
			char(message[index++]);
			$('span.skip').click(function(){
				index = all.length+1000;
				select();
				return writeStyle(message, message.length+10000, interval);
			});
			return setTimeout(function(){
				return writeStyle(message, index, interval);
			}, interval);
		}
	}
	select();
	
	writeStyle(styles, 0, 20);
	select = function(){
		$('body').html(all);
		$('ul.menu>li:nth-child(1)').addClass('changeBackground');
		$('div.con0').fadeIn(300).addClass('in-out');
	}
	$('ul.menu>li').mouseenter(function(){
		$('ul.menu>li').removeClass('changeBackground');
		k = $(this).index();
		var p = "con" + k;
		$('ul.menu>li:nth-child('+($(this).index()+1)+')').addClass('changeBackground');
		$('div.content>div').fadeOut(100).removeClass('in-out').removeClass('out-in');
		if(k%2==0)
			$('div.'+p).fadeIn(300).addClass('in-out');
		else
			$('div.'+p).fadeIn(300).addClass('out-in');
	});
});
