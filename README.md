# Haskell Server

!Replace WAI with [Yesod](https://github.com/yesodweb/yesod)

- [Great Haskell docs](http://dev.stephendiehl.com/hask/)

- [Warp](https://hackage.haskell.org/package/wai) 
- [Warp info](http://www.aosabook.org/en/posa/warp.html)
- [Yesod](http://www.yesodweb.com/book)
- [Example](http://langnostic.blogspot.co.uk/2013/02/wai-without-yesod-simple-example-of_10.html)
- [Big tutorial](https://haskell-servant.github.io/tutorial/0.4/server.html)
- [Haskell with React](https://github.com/joelburget/react-haskell)

## Todo

- Replace WAI with Yesod
- Add get route for /api/getposts and send arts of projs based on req.query.type
- Add get routes for /api/getarticle and sent the art that url matches req.query.arturl 
- Add get routes for /api/getproject and sent the proj that url matches req.query.projurl 
- Add post route for /api/signup and add req.body to mongoDB