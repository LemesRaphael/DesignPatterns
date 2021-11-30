import IPlatform from "../platforms/iplatform";
import Live from "./live";

export default class AdvancedLive extends Live {

    constructor(platform: IPlatform) {
        super(platform)
     }

    subtitles(): void {
        console.log('Legendas atividas na trasmissão')
    }

    comments(): void {
        console.log('Comentarios liberados na live')
    }
}