export const LINKS = {
  youtube: "https://www.youtube.com/@YakVibes_Bhutan",
  facebook: "https://www.facebook.com/YakVibe",
  soundcloud: "https://soundcloud.com/jigme-dorji-62211426/sets/yakvibes-sacredsounds",
  instagramSobit: "https://www.instagram.com/sobit_sobi/",
};

export const IMAGES = {
  logo: "https://i.imgur.com/bgJgxKq.png",
  hero: "https://i.imgur.com/QaXPHZm.png",
  whiteTara: "https://image.qwenlm.ai/generated-images/82108559-29be-493b-ba42-b05e3cc1f3c5/_result.png",
  medicineBuddha: "https://image.qwenlm.ai/generated-images/02b751ce-f8e4-4255-85bd-188f25714db3/_result.png",
  drangyen: "https://image.qwenlm.ai/generated-images/e0a932a0-8098-49b9-91e3-928d71dfc491/_result.png",
  cham: "https://i.imgur.com/zbo0aP0.jpeg?v=2",
  khengPortrait: "https://image.qwenlm.ai/generated-images/231fce56-4bf0-4389-9b62-7e7154e9f86e/_result.png",
  phubPortrait: "https://image.qwenlm.ai/generated-images/6e2a99ad-78a9-49a5-9abd-39821ae18c87/_result.png",
  valley: "https://image.qwenlm.ai/generated-images/a7fb84a9-6fc2-43b9-9fc3-b7024ac0b422/_result.png",
  artistsHero: "https://i.imgur.com/5TYWAUS.png",
};

export type HomeTrack = {
  title: string;
  artist: string;
  videoId: string;
  externalHref: string;
  description: string;
};

export const homeTracks: HomeTrack[] = [
  {
    title: "White Tara Chant",
    artist: "Phub Zam",
    videoId: "vlw7s1Axke8",
    externalHref: "https://www.youtube.com/watch?v=vlw7s1Axke8",
    description: "The viral chant for health, healing and longevity — 1.3M views.",
  },
  {
    title: "Medicine Buddha Chant",
    artist: "Kheng Sonam Dorji",
    videoId: "2QlSvS0imdI",
    externalHref: "https://www.youtube.com/watch?v=dvKjqodPZEo",
    description: "Meditation music for spiritual growth and inner tranquility — 431K views.",
  },
  {
    title: "Drangyen Majay",
    artist: "Traditional Folk",
    videoId: "Ag4btboeXrY",
    externalHref: "https://www.youtube.com/watch?v=Ag4btboeXrY",
    description: "The beautiful contrast of traditional Bhutanese folk music played on the drangyen lute.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
};

export const team: TeamMember[] = [
  {
    name: "Pinaka Chakraborty",
    role: "Percussion & Rhythm",
    bio: "A Grade tabla artist with All India Radio and a national scholar, Pinaka has performed as a cultural ambassador from Kolkata to Russia. With YakVibes he lays the pulse on drums, chabdrung and shakers.",
    image: "https://i.imgur.com/fNhZcPy.jpeg",
    imageAlt: "Portrait of Pinaka Chakraborty in traditional Bhutanese gho",
  },
  {
    name: "Ganga Ram",
    role: "Strings & Folk Melodies",
    bio: "Ganga Ram carries the music of the Himalayas on the auroo, guitar and metobobchu, weaving valley songs into every performance. He brought that sound to audiences at the Jodhpur RIFF festival and beyond.",
    image: "https://i.imgur.com/sEdYbnZ.jpeg",
    imageAlt: "Portrait of Ganga Ram in traditional Bhutanese gho",
  },
  {
    name: "Kheng Sonam Dorji",
    role: "Drangyen Master & Vocalist",
    bio: "A living treasure of Bhutanese music, Kheng Sonam Dorji performed at the Smithsonian Folklife Festival and founded the Music of Bhutan Research Centre. His drangyen and voice keep the old songs alive for the next generation.",
    image: "https://i.imgur.com/Rf6I3Ss.jpeg?v=2",
    imageAlt: "Portrait of Kheng Sonam Dorji, folk master of the drangyen, in traditional Bhutanese gho",
  },
  {
    name: "Sobit Singh",
    role: "Bass, Keys & Vocals",
    bio: "A singer and songwriter followed by over half a million fans, Sobit bridges tradition and today across the lubang, bass guitar and keyboard. His groove gives YakVibes' ancient melodies a modern heartbeat.",
    image: "https://i.imgur.com/SIugnAG.jpeg",
    imageAlt: "Portrait of Sobit Singh in traditional Bhutanese gho",
  },
];

export type DiscographyTrack = {
  title: string;
  note: string;
  duration: string;
};

export type ArtistFact = { label: string; value: string };

export type Artist = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  eyebrow: string;
  portrait: string;
  portraitAlt: string;
  bio: string[];
  facts: ArtistFact[];
  quote?: string;
  listLabel: string;
  listNote: string;
  discography: DiscographyTrack[];
};

export const artists: Artist[] = [
  {
    id: "kheng-sonam-dorji",
    index: "01",
    name: "Kheng Sonam Dorji",
    tagline: "Folk master of the drangyen, carrying the songs of eastern Bhutan.",
    eyebrow: "01 · Folk Master — Kheng Region",
    portrait: "https://i.imgur.com/Rf6I3Ss.jpeg?v=2",
    portraitAlt: "Portrait of Kheng Sonam Dorji, folk master of the drangyen, in traditional Bhutanese gho",
    bio: [
      "Kheng Sonam Dorji is one of Bhutan's most beloved folk voices — a keeper of the songs that once travelled on foot between the valleys of eastern Bhutan. His heartfelt cover of the legendary Yak Laby, and his recordings of Zhingkham Maed Lu and Zhung Lam Lam Khar, have carried the Khengpa tradition to listeners far beyond the mountains that shaped it.",
      "With a drangyen resting across his knee, he sings the way the old singers did: unhurried, weathered, and full of the fields, roads and river crossings his songs describe. At YakVibes, his sessions are recorded as they were meant to be heard — close, warm, and without hurry.",
    ],
    facts: [
      { label: "Origin", value: "Kheng, Eastern Bhutan" },
      { label: "Instrument", value: "Drangyen lute" },
      { label: "Known for", value: "Yak Laby cover" },
      { label: "Legacy", value: "Music of Bhutan Research Centre" },
    ],
    quote: "A song is a seed. Plant it in a young heart, and the valley will never forget its own name.",
    listLabel: "Selected Recordings",
    listNote: "Full library on YouTube",
    discography: [
      { title: "Yak Laby", note: "A legendary Bhutanese classic · heartfelt YakVibes cover", duration: "4:40" },
      { title: "Zhungkham Maed Lu", note: "The beloved field song of lower Kheng", duration: "4:52" },
      { title: "Zhung Lam Lam Khar", note: "A travelling song for the old road to the capital", duration: "5:37" },
      { title: "Kheng Zhungdra Medley", note: "Slow classical songs of the Kheng valleys", duration: "8:24" },
      { title: "Semki Tshiglu", note: "Verses of the heart · live YakVibes session", duration: "5:03" },
    ],
  },
  {
    id: "pinaka-chakraborty",
    index: "02",
    name: "Pinaka Chakraborty",
    tagline: "An A Grade tabla artist who gives every chant its heartbeat.",
    eyebrow: "02 · Percussion — Kolkata to the Himalayas",
    portrait: "https://i.imgur.com/fNhZcPy.jpeg",
    portraitAlt: "Portrait of Pinaka Chakraborty, tabla and percussion artist",
    bio: [
      "An A Grade artist with All India Radio and a national scholar, Pinaka Chakraborty has carried Indian rhythm from Kolkata to stages in Russia as a cultural ambassador. Trained in the classical tradition, he brings discipline and warmth to everything he touches.",
      "With YakVibes he trades the concert hall for the valley, laying the pulse on drums, chabdrung and shakers. His percussion is the steady ground beneath the chants — the breath that keeps the music alive.",
    ],
    facts: [
      { label: "Training", value: "A Grade, All India Radio" },
      { label: "Roots", value: "Kolkata, India" },
      { label: "Kit", value: "Drums, chabdrung & shakers" },
      { label: "Stage", value: "Cultural ambassador, Russia" },
    ],
    listLabel: "Highlights",
    listNote: "More on the YakVibes channel",
    discography: [
      { title: "A Grade Artist — All India Radio", note: "Classical tabla, nationally recognised", duration: "" },
      { title: "National Scholar", note: "A lifetime of rhythm research & tradition", duration: "" },
      { title: "Cultural Ambassador", note: "Carrying Indian rhythm from Kolkata to Russia", duration: "" },
      { title: "YakVibes: Sacred Sounds", note: "Percussion across the chant & folk sessions", duration: "" },
    ],
  },
  {
    id: "ganga-ram",
    index: "03",
    name: "Ganga Ram",
    tagline: "Strings that carry the folk melodies of the Himalayas.",
    eyebrow: "03 · Strings — The Sound of the Valleys",
    portrait: "https://i.imgur.com/sEdYbnZ.jpeg",
    portraitAlt: "Portrait of Ganga Ram with his stringed instruments",
    bio: [
      "Ganga Ram Bhandari moves between the auroo, guitar and metobobchu, drawing out the folk melodies that define the Himalayan sound. His playing links the old ways with the new, giving every YakVibes performance its unmistakably Bhutanese voice.",
      "He has carried that sound to audiences perched above the city at the Jodhpur RIFF festival and to listeners around the world. For Ganga Ram, every string is a thread connecting the valleys of the past to the ears of today.",
    ],
    facts: [
      { label: "Instruments", value: "Auroo, guitar & metobobchu" },
      { label: "Stage", value: "Jodhpur RIFF festival" },
      { label: "Craft", value: "Himalayan folk melodies" },
      { label: "Role", value: "Strings & folk melodies" },
    ],
    listLabel: "Highlights",
    listNote: "More on the YakVibes channel",
    discography: [
      { title: "Auroo, Guitar & Metobobchu", note: "The instruments of the Himalayan voice", duration: "" },
      { title: "Jodhpur RIFF Festival", note: "Valley songs performed above the Blue City", duration: "" },
      { title: "Himalayan Folk Melodies", note: "Old ways woven into the YakVibes sound", duration: "" },
      { title: "YakVibes: Sacred Sounds", note: "Strings across the chant & folk sessions", duration: "" },
    ],
  },
  {
    id: "sobit-singh",
    index: "04",
    name: "Sobit Singh",
    tagline: "The voice and low end that bridges two worlds.",
    eyebrow: "04 · Groove & Voice — Tradition Meets Today",
    portrait: "https://i.imgur.com/SIugnAG.jpeg",
    portraitAlt: "Portrait of Sobit Singh, singer and bassist",
    bio: [
      "A singer and songwriter followed by more than half a million fans, Sobit Singh — known as Sasang — moves effortlessly between the lubang, bass guitar, keyboard and aungli. His gift is making ancient melodies feel immediate.",
      "At YakVibes he is the bridge between tradition and today, giving folk and devotional music a modern heartbeat without losing its soul. Through him, the songs of Bhutan reach a whole new generation of listeners.",
    ],
    facts: [
      { label: "Alias", value: "“Sasang”" },
      { label: "Following", value: "500,000+ fans" },
      { label: "Instruments", value: "Lubang, bass, keys & aungli" },
      { label: "Role", value: "Bridge of tradition & today" },
    ],
    listLabel: "Highlights",
    listNote: "More on the YakVibes channel",
    discography: [
      { title: "“Sasang” — Singer & Songwriter", note: "Followed by more than half a million fans", duration: "" },
      { title: "Lubang, Bass, Keys & Aungli", note: "The low end that bridges two worlds", duration: "" },
      { title: "Tradition Meets Today", note: "A modern heartbeat for ancient melodies", duration: "" },
      { title: "YakVibes: Sacred Sounds", note: "Groove & voice across the sessions", duration: "" },
    ],
  },
];

export const mantraLine = "ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྃ";
export const mantraLatin = "Om Mani Padme Hum";
