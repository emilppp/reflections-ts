import { BaseGame, Game } from "./game.interface";
import { Games } from "./games.interface";

let games: Games = {

    1: {
        id: 1,
        type: "scrim",
        map: "ascent",
        vod: "https://www.twitch.tv/videos/997071209",
        kills: 10,
        deaths: 500,
        assists: 3,
        reflections: "blablablabla",
        date: new Date()
    },
    2: {
        id: 2,
        type: "scrim",
        map: "ascent",
        vod: "https://www.twitch.tv/videos/997071209",
        kills: 103,
        deaths: 500,
        assists: 31,
        reflections: "blablablabla",
        date: new Date()
    },
}

export const findAll = async (): Promise<Game[]> => Object.values(games);

export const find = async (id: number): Promise<Game> => games[id];

export const create = async (newGame: BaseGame): Promise<Game> => {
    const id = new Date().valueOf();
    const date = new Date()

    games[id] = {
        id,
        date,
        ...newGame
    };

    return games[id];
};