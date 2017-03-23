{-# LANGUAGE OverloadedStrings #-}

import Network.Wai (responseFile, Application)
import Network.Wai.Handler.Warp (run)
import Network.HTTP.Types (status200)
import Network.HTTP.Types.Header (hContentType)

main = do
    let port = 3000
    putStrLn $ "Listening on port " ++ show port
    run port app

app :: Application
app req f =
    f $ responseFile status200 [(hContentType, "text/html")] "./app/index.html" Nothing