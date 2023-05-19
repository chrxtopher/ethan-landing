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
          <h3>somedaymaybe</h3>
        </div>
        <div className="social">
          <div className="logo">
            <a
              href="https://open.spotify.com/artist/5e6uOIFDTidvoM2N9OeEJl?si=WX6MRJj_ReKce34SuC5h-g"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Spotify} alt="spotify" />
              <p>Spotify</p>
            </a>
          </div>
          <a
            href="https://open.spotify.com/artist/5e6uOIFDTidvoM2N9OeEJl?si=WX6MRJj_ReKce34SuC5h-g"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Play} alt="play button" />
          </a>
        </div>
        <div className="social">
          <div className="logo">
            <a
              href="https://music.apple.com/us/artist/somedaymaybe/1632804378"
              target="_blank"
              rel="noreferrer"
            >
              <img src={AppleMusic} alt="spotify" />
              <p>Apple Music</p>
            </a>
          </div>
          <a
            href="https://music.apple.com/us/artist/somedaymaybe/1632804378"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Play} alt="play button" />
          </a>
        </div>
        <div className="social">
          <div className="logo">
            <a
              href="https://on.soundcloud.com/e6e2R1vS75wUgmoZ8"
              target="_blank"
              rel="noreferrer"
            >
              <img src={SoundCloud} alt="spotify" />
              <p>SoundCloud</p>
            </a>
          </div>
          <a
            href="https://on.soundcloud.com/e6e2R1vS75wUgmoZ8"
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
