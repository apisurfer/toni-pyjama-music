"use client";

import Link from "next/link";
import { useContext } from "react";

import { PlayerContext } from "@/context/PlayerContext";
import PlayPause from "./PlayPause";
import { Song } from "@/types";

interface Props {
  song: Song;
  isPlaying?: boolean;
  activeSong?: Song;
  i: number;
  data?: Song[];
  adamid?: string;
}

const replaceImgUrl = (inputUrl: string) => {
  return inputUrl.replace(/{w}x{h}bb.jpg$/, "400x400.jpg");
};

const SongCard: React.FC<Props> = ({
  song,
  isPlaying,
  activeSong,
  i,
  data,
  adamid,
}) => {
  const context = useContext(PlayerContext);

  const handlePauseClick = () => {
    context?.playPause(false);
  };

  const handlePlayClick = () => {
    data && context?.selectActiveSong(song, data, i);
    context?.playPause(true);
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title &&
            activeSong?.subtitle === song.subtitle
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          } ${
            activeSong?.attributes?.name === song.attributes?.name &&
            activeSong?.attributes?.artistName === song.attributes?.artistName
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        {song.images && <img src={song.images.coverart} alt="song_img" />}
        {song.attributes?.artwork.url && (
          <img
            src={replaceImgUrl(song.attributes?.artwork.url)}
            alt="song_img"
          />
        )}
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          {song.title ? song.title : song.attributes?.name}
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            href={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : adamid
                ? adamid
                : "/top-artists"
            }
          >
            {song.subtitle ? song.subtitle : song.attributes?.artistName}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
