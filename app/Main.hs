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
import qualified Data.ByteString.Lazy as B

main = do
    let port = 4000
    putStrLn $ "Listening on port " ++ show port
    run port app

app :: Application
app req f = f $
    case pathInfo req of
        -- Place custom routes here
        ["text"] -> sendText
        ["articles"] -> sendArts
        ["projects"] -> sendProjs
        _ -> sendPage

data Post = Post { _id :: Text
                 , title :: Text
                 , url :: Text
                 , created :: Text
                 , subject :: Text
                 , summary :: Text
                 , content :: Text
                 , likes :: Int } deriving (Show, Generic)

instance FromJSON Post
instance ToJSON Post

artJson = [ Post { _id = "fhpzah1lCBUGt9dS4rhM", title = "Mlog - Meeting Action Tracker", url = "lorem-ipsum-dolor-sit-amet", created = "2017-03-28T12:42:24.915Z", subject = "JavaScript", summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", content = "Hello", likes = 1 }, Post { _id = "fhpzah1lCBUGt9dS4rhZ", title = "Mlog - Meeting Action Tracker", url = "lorem-ipsum-dolor-sit-amet", created = "2017-03-28T12:42:24.915Z", subject = "JavaScript", summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", content = "Hello", likes = 1 }, Post { _id = "fhpzah1lCBUGt9dS4rhh", title = "Another - Meeting Action Tracker", url = "lorem-ipsum-dolor-sit-amet", created = "2017-03-28T12:42:24.915Z", subject = "JavaScript", summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", content = "Hello", likes = 1 } ]

projJson = [ Post { _id = "fhpzah1lCBUGt9dS4rhM", title = "Woop - Meeting Action Tracker", url = "lorem-ipsum-dolor-sit-amet", created = "2017-03-28T12:42:24.915Z", subject = "JavaScript", summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", content = "Hello", likes = 1 }, Post { _id = "fhpzah1lCBUGt9dS4rhZ", title = "Mlog - Meeting Action Tracker", url = "lorem-ipsum-dolor-sit-amet", created = "2017-03-28T12:42:24.915Z", subject = "JavaScript", summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", content = "Hello", likes = 1 }, Post { _id = "fhpzah1lCBUGt9dS4rhh", title = "Another - Meeting Action Tracker", url = "lorem-ipsum-dolor-sit-amet", created = "2017-03-28T12:42:24.915Z", subject = "JavaScript", summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", content = "Hello", likes = 1 } ]

sendArts = responseLBS
            status200
            [(hContentType, "application/json")]
            (encode artJson)

sendProjs = responseLBS
            status200
            [(hContentType, "application/json")]
            (encode projJson)

sendText = responseBuilder status200 [ ("Content-Type", "text/plain") ] $ mconcat $ map copyByteString
    [ "text" ]

sendPage = responseFile status200 [(hContentType, "text/html")] "./app/app.html" Nothing