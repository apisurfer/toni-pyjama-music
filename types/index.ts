export interface Search {
  artists?: ArtistsHits;
  tracks?: TracksHits;
}

interface ArtistsHits {
  hits?: HitArtist[];
}

interface HitArtist {
  artist?: ArtistSearch;
}

interface ArtistSearch {
  adamid: string;
  avatar?: string;
  name: string;
  verified: boolean;
  weburl: string;
}

interface TracksHits {
  hits: HitTracks[];
}

interface HitTracks {
  track: Song;
}

export interface Songs {
  properties?: Properties;
  tracks?: Song[];
  data?: Song[];
}

interface Properties {}

export interface Song {
  artists?: Artist[];
  images?: Images;
  key?: string;
  layout?: string;
  subtitle?: string;
  title?: string;
  url?: string;
  hub?: Hub;
  attributes?: ArtistTopSongsAttributes;
  id?: string;
}

interface Hub {
  actions?: Action[];
  options?: Option[];
}

interface Action {
  id: string;
  uri: string;
}

interface Option {
  actions: Action[];
}

interface Artist {
  adamid: string;
  alias: string;
  id: string;
}

interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor?: string;
}

interface ArtistTopSongsAttributes {
  albumName: string;
  artistName: string;
  artwork: ArtistTopSongsArtwork;
  name: string;
  previews: PreviewArtistTopSongs[];
}

interface ArtistTopSongsArtwork {
  bgColor: string;
  hasP3: boolean;
  height: number;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  url: string;
  width: number;
}

interface PreviewArtistTopSongs {
  url: string;
}

export interface PlayerContextType {
  currentSongs: Song[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong?: Song;
  genreListId: string;
  selectActiveSong: (song: Song, data: Song[], i: number) => void;
  nextSong: (i: number) => void;
  prevSong: (i: number) => void;
  playPause: (play: boolean) => void;
  selectGenreListId: (id: string) => void;
  getTopCharts: () => Songs | Promise<Songs>;
  getSongsBySearch: (searchTerm: string) => Search | Promise<Search>;
  getSongsByGenre: (genre: string) => Songs | Promise<Songs>;
  getSongsByCountry: (countryCode: string) => Songs | Promise<Songs>;
  getSongsByArtist: (artistId: string) => Songs | Promise<Songs>;
}
