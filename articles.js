const articles = [
    {
        "_id": "fhpzah1lCBUGt9dS4rhM",
        "title": "Lorem Ipsum Dolor Sit Amet ",
        "url": "lorem-ipsum-dolor-sit-amet",
        "created": {
            "$date": "2017-03-28T12:42:24.915Z"
        },
        "subject": "JavaScript",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<\/p>\n<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<\/p>\n<p><img src=\"https://shft.cl/img/i/images.unsplash.com-6455684374691154.jpg\" alt=\"\" width=\"2122\" height=\"1414\" /><\/p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<\/p>\n<pre class=\"language-javascript\"><code>function fadeIn(el) {\n  el.style.opacity = 0;\n\n  var last = +new Date();\n  var tick = function() {\n    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;\n    last = +new Date();\n\n    if (+el.style.opacity &lt; 1) {\n      (window.requestAnimationFrame &amp;&amp; requestAnimationFrame(tick)) || setTimeout(tick, 16);\n    }\n  };\n\n  tick();\n}<\/code><\/pre>\n<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<\/p>\n<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?<\/p>",
        "likes": 1
    },
    {
        "_id": "fhpzah1lCBUGt9dS4rhz",
        "title": "Lorem Ipsum Dolor Sit Amet ",
        "url": "lorem-ipsum-dolor-sit-amet2",
        "created": {
            "$date": "2017-03-28T12:42:24.915Z"
        },
        "subject": "JavaScript",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<\/p>\n<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<\/p>\n<p><img src=\"https://shft.cl/img/i/images.unsplash.com-6455684374691154.jpg\" alt=\"\" width=\"2122\" height=\"1414\" /><\/p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<\/p>\n<pre class=\"language-javascript\"><code>function fadeIn(el) {\n  el.style.opacity = 0;\n\n  var last = +new Date();\n  var tick = function() {\n    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;\n    last = +new Date();\n\n    if (+el.style.opacity &lt; 1) {\n      (window.requestAnimationFrame &amp;&amp; requestAnimationFrame(tick)) || setTimeout(tick, 16);\n    }\n  };\n\n  tick();\n}<\/code><\/pre>\n<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<\/p>\n<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?<\/p>",
        "likes": 1
    },
    {
        "_id": "fhpzah1lCBUGt9dS4rhn",
        "title": "Lorem Ipsum Dolor Sit Amet ",
        "url": "lorem-ipsum-dolor-sit-amet1",
        "created": {
            "$date": "2017-03-28T12:42:24.915Z"
        },
        "subject": "JavaScript",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<\/p>\n<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<\/p>\n<p><img src=\"https://shft.cl/img/i/images.unsplash.com-6455684374691154.jpg\" alt=\"\" width=\"2122\" height=\"1414\" /><\/p>\n<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<\/p>\n<pre class=\"language-javascript\"><code>function fadeIn(el) {\n  el.style.opacity = 0;\n\n  var last = +new Date();\n  var tick = function() {\n    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;\n    last = +new Date();\n\n    if (+el.style.opacity &lt; 1) {\n      (window.requestAnimationFrame &amp;&amp; requestAnimationFrame(tick)) || setTimeout(tick, 16);\n    }\n  };\n\n  tick();\n}<\/code><\/pre>\n<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<\/p>\n<p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?<\/p>",
        "likes": 1
    }
]

module.exports = articles