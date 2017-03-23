{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE DeriveAnyClass #-}
import Data.Aeson
import GHC.Generics
import Data.Text (Text)
import Network.Wai
import Network.Wai.Handler.Warp
import Network.HTTP.Types (status200)
import Network.HTTP.Types.Header (hContentType)
import Blaze.ByteString.Builder (copyByteString)
import Blaze.ByteString.Builder.ByteString (fromLazyByteString)
import qualified Data.ByteString.UTF8 as BU

main = do
    let port = 3000
    putStrLn $ "Listening on port " ++ show port
    run port app

app :: Application
app req f = f $
    case pathInfo req of
        -- Place custom routes here
        ["text"] -> sendText
        ["json"] -> sendJson
        _ -> sendPage

data Obj = Obj { name :: Text, age :: Int, link :: Text } deriving (Show, Generic, ToJSON)

jsonData = Obj { name = "andy", age = 22, link = "http://ashall.co" }

sendJson = responseLBS
            status200
            [(hContentType, "application/json")]
            (encode jsonData)

sendText = responseBuilder status200 [ ("Content-Type", "text/plain") ] $ mconcat $ map copyByteString
    [ "text" ]

sendPage = responseFile status200 [(hContentType, "text/html")] "./app/index.html" Nothing