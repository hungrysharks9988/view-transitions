import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Math Rock",
    color: colors.teal,
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/44/7f/18/447f189f-8182-0196-8575-b6515b0213d2/cover.jpg/1200x1200bf-60.jpg",
    artists: ["Murphy Radio", "eleventwelfth", "Hulica"],
  },
  {
    id: "2",
    title: "Emo",
    color: colors.rose,
    cover:
      "https://i.scdn.co/image/ab67616d0000b273b0607da1965a3d42c38bf642",
    artists: ["Beeswax", "Alone At Last", "Killed by Butterfly"],
  },
  {
    id: "3",
    title: "Indie",
    color: colors.green,
    cover:
      "https://i.scdn.co/image/ab67616d0000b2734678864f15d909dbef048b2e",
    artists: ["Payung Teduh", "Hindia", "Reality Club", "Fourtwnty"],
  },
  {
    id: "4",
    title: "Hip Hop",
    color: colors.pink,
    cover:
      "https://i.scdn.co/image/ab67616d0000b273e86c0780287f3bd72c7104b9",
    artists: ["Rich Brian", "Ramengvrl", "Basboi", "Saykoji"],
  },
  {
    id: "5",
    title: "Classic",
    color: colors.red,
    cover:
      "https://i.scdn.co/image/ab67616d0000b2730302da910db0e5c94200637d",
    artists: ["Chrisye", "Koes Plus", "God Bless", "Nike Ardilla"],
  },
  {
    id: "6",
    title: "Cyberpunk",
    color: colors.gray,
    cover:
      "https://i.scdn.co/image/ab67616d0000b2731872df03dced5287f1ca5d2a",
    artists: ["Rangga Electroscope", "Mardial", "CVX"],
  },
];

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
];

interface Song {
  id: string;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}
const songScale = "w_40,h_40,c_scale";
export const songs: Song[] = [
  {
    id: "1",
    title: "Sports Between Trenches",
    image: `https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/44/7f/18/447f189f-8182-0196-8575-b6515b0213d2/cover.jpg/600x600bf-60.jpg`,
    artists: ["Murphy Radio"],
    album: "Math Rock Indo",
    duration: "3:45",
  },
  {
    id: "2",
    title: "Fix",
    image: `https://i.scdn.co/image/ab67616d0000b273b0607da1965a3d42c38bf642`,
    artists: ["Beeswax"],
    album: "Saudade",
    duration: "4:02",
  },
  {
    id: "3",
    title: "Akad",
    image: `https://i.scdn.co/image/ab67616d0000b273dcae32d20111acfd6d5668e0`,
    artists: ["Payung Teduh"],
    album: "Ruang Tunggu",
    duration: "4:18",
  },
  {
    id: "4",
    title: "Dat $tick",
    image: `https://i.scdn.co/image/ab67616d0000b273f55de579e56318e87612f99d`,
    artists: ["Rich Brian"],
    album: "Amen",
    duration: "2:08",
  },
  {
    id: "5",
    title: "Seperti Yang Kau Minta",
    image: `https://i.scdn.co/image/ab67616d0000b2730302da910db0e5c94200637d`,
    artists: ["Chrisye"],
    album: "Dekade",
    duration: "4:45",
  },
  {
    id: "6",
    title: "Escape from Jakarta",
    image: `https://i.scdn.co/image/ab67616d0000b2731872df03dced5287f1ca5d2a`,
    artists: ["Rangga Electroscope"],
    album: "1980",
    duration: "3:30",
  },
  {
    id: "7",
    title: "Muak Untuk Memuja",
    image: `https://i.scdn.co/image/ab67616d0000b2735740662d53c2331de6708304`,
    artists: ["Alone At Last"],
    album: "Jiwa",
    duration: "3:55",
  },
  {
    id: "8",
    title: "Secukupnya",
    image: `https://i.scdn.co/image/ab67616d0000b2734678864f15d909dbef048b2e`,
    artists: ["Hindia"],
    album: "Menari Dengan Bayangan",
    duration: "3:28",
  },
  {
    id: "9",
    title: "I Am Me",
    image: `https://i.scdn.co/image/ab67616d0000b273e86c0780287f3bd72c7104b9`,
    artists: ["Ramengvrl"],
    album: "No Bethany",
    duration: "3:35",
  },
  {
    id: "10",
    title: "Rumah Kita",
    image: `https://i.scdn.co/image/ab67616d0000b273b064c1294860b2b8c5643bc7`,
    artists: ["God Bless"],
    album: "Semut Hitam",
    duration: "4:48",
  },
];
