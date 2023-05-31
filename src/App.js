import Play from "./svgs/play.svg";
import Spotify from "./svgs/spotify.svg";
import AppleMusic from "./svgs/apple-music.svg";
import SoundCloud from "./svgs/soundcloud.svg";

function App() {
  return (
    <div>
      <div className="backdrop"></div>
      <div className="focus">
        <div className="cover"></div>
        <div className="title">
          <h1>homesick</h1>
          <p>somedaymaybe</p>
        </div>
        <div className="social">
          <div className="logo">
            <a
              href="https://open.spotify.com/track/469OkU9m6zdoK8K9CBIBrH?si=Ucfwr_WGRYWYWZX0IeQ0tA&nd=1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Spotify} alt="spotify" />
              <p>Spotify</p>
            </a>
          </div>
          <a
            href="https://open.spotify.com/track/469OkU9m6zdoK8K9CBIBrH?si=Ucfwr_WGRYWYWZX0IeQ0tA&nd=1"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Play} alt="play button" />
          </a>
        </div>
        <div className="social">
          <div className="logo">
            <a
              href="https://music.apple.com/us/album/homesick-feat-skizzy-mars-single/1688463995"
              target="_blank"
              rel="noreferrer"
            >
              <img src={AppleMusic} alt="spotify" />
              <p>Apple Music</p>
            </a>
          </div>
          <a
            href="https://music.apple.com/us/album/homesick-feat-skizzy-mars-single/1688463995"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Play} alt="play button" />
          </a>
        </div>
        <div className="social">
          <div className="logo">
            <a
              href="https://soundcloud.com/someday_maybe/homesick"
              target="_blank"
              rel="noreferrer"
            >
              <img src={SoundCloud} alt="spotify" />
              <p>SoundCloud</p>
            </a>
          </div>
          <a
            href="https://soundcloud.com/someday_maybe/homesick"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Play} alt="play button" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
