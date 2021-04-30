export interface BaseGame {
    type: string,
    map: string,
    vod: string,
    kills: number,
    deaths: number,
    assists: number,
    reflections: string,
}

export interface Game extends BaseGame {
    id: number,
    date: Date
}