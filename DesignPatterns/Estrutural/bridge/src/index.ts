import IPlatform from "./platforms/iplatform";
import Twitch from "./platforms/twitch";
import Youtube from "./platforms/youtube";
import AdvancedLive from "./transmissions/advancedlive";
import Live from "./transmissions/live";

function startLive(platform: IPlatform) {
 console.log('aguarde...');

 const live = new Live(platform)

 live.broadcasting();
 live.result();
}

function startAdvancedLive(platform: IPlatform) {
    console.log('aguarde...');

    const live = new AdvancedLive(platform);

    live.broadcasting();
    live.result();
    live.comments();
    live.subtitles();
}

startAdvancedLive(new Youtube())
startAdvancedLive(new Twitch())