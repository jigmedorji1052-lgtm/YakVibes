export const LINKS = {
  youtube: "https://www.youtube.com/@YakVibes_Bhutan",
  facebook: "https://www.facebook.com/YakVibe",
};

export const IMAGES = {
  hero: "https://i.imgur.com/QaXPHZm.png",
  whiteTara: "https://image.qwenlm.ai/generated-images/82108559-29be-493b-ba42-b05e3cc1f3c5/_result.png",
  medicineBuddha: "https://image.qwenlm.ai/generated-images/02b751ce-f8e4-4255-85bd-188f25714db3/_result.png",
  drangyen: "https://image.qwenlm.ai/generated-images/e0a932a0-8098-49b9-91e3-928d71dfc491/_result.png",
  cham: "https://image.qwenlm.ai/generated-images/d827c8c8-12a8-48aa-8c73-bc72ae9d7e0d/_result.png",
  khengPortrait: "https://image.qwenlm.ai/generated-images/231fce56-4bf0-4389-9b62-7e7154e9f86e/_result.png",
  phubPortrait: "https://image.qwenlm.ai/generated-images/6e2a99ad-78a9-49a5-9abd-39821ae18c87/_result.png",
  valley: "https://image.qwenlm.ai/generated-images/a7fb84a9-6fc2-43b9-9fc3-b7024ac0b422/_result.png",
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
    image: "https://i.imgur.com/ilT0KMA.jpeg",
    imageAlt: "Portrait of Kheng Sonam Dorji in traditional Bhutanese gho",
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
  role: string;
  eyebrow: string;
  portrait: string;
  portraitAlt: string;
  bio: string[];
  facts: ArtistFact[];
  quote: string;
  discography: DiscographyTrack[];
};

export const artists: Artist[] = [
  {
    id: "kheng-sonam-dorji",
    index: "01",
    name: "Kheng Sonam Dorji",
    role: "Folk master of the dranyen, carrying the songs of eastern Bhutan",
    eyebrow: "01 · Folk Master — Kheng Region",
    portrait: IMAGES.khengPortrait,
    portraitAlt: "Portrait of Kheng Sonam Dorji holding a dranyen lute on a wooden porch",
    bio: [
      "Kheng Sonam Dorji is one of Bhutan's most beloved folk voices — a keeper of the songs that once travelled on foot between the valleys of eastern Bhutan. His heartfelt cover of the legendary Yak Laby, and his recordings of Zhingkham Maed Lu and Zhung Lam Lam Khar, have carried the Khengpa tradition to listeners far beyond the mountains that shaped it.",
      "With a dranyen resting across his knee, he sings the way the old singers did: unhurried, weathered, and full of the fields, roads, and river crossings his songs describe. At YakVibes, his sessions are recorded as they were meant to be heard — close, warm, and without hurry.",
    ],
    facts: [
      { label: "Origin", value: "Kheng, Eastern Bhutan" },
      { label: "Instrument", value: "Dranyen lute" },
      { label: "Known for", value: "Zhungkham Maed Lu" },
      { label: "Style", value: "Khengpa folk song" },
    ],
    quote: "A song is a seed. Plant it in a young heart, and the valley will never forget its own name.",
    discography: [
      { title: "Yak Laby", note: "A legendary Bhutanese classic · heartfelt YakVibes cover", duration: "4:40" },
      { title: "Medicine Buddha Chant", note: "Meditation for spiritual growth & tranquility — 431K views", duration: "17:45" },
      { title: "Zhungkham Maed Lu", note: "The beloved field song of lower Kheng", duration: "4:52" },
      { title: "Zhung Lam Lam Khar", note: "A travelling song for the old road to the capital", duration: "5:37" },
      { title: "Kheng Zhungdra Medley", note: "Slow classical songs of the Kheng valleys", duration: "8:24" },
    ],
  },
  {
    id: "phub-zam",
    index: "02",
    name: "Phub Zam",
    role: "Sacred chant vocalist, keeper of melodies for healing and longevity",
    eyebrow: "02 · Sacred Chant — Central Bhutan",
    portrait: IMAGES.phubPortrait,
    portraitAlt: "Portrait of Phub Zam with mala beads, eyes softly closed in chant",
    bio: [
      "Phub Zam's voice carries the liturgical melodies of Bhutan's monasteries into the quiet of everyday life. Her recording of the White Tara chant — now past 1.3 million listens — is among the most-played pieces in the YakVibes library: a long, unhurried session made for healing, longevity, and deep rest.",
      "Trained in the slow, disciplined phrasing of sacred chant, she approaches each session as practice rather than performance. Listeners write to say her chants accompany their morning tea, their meditation cushion, or the last hour before sleep.",
    ],
    facts: [
      { label: "Voice", value: "Sacred chant" },
      { label: "Practice", value: "Healing & longevity mantras" },
      { label: "Roots", value: "Central Bhutan" },
      { label: "Sessions", value: "Recorded live, one take" },
    ],
    quote: "When the chant begins, time slows down. That slowness is where healing lives.",
    discography: [
      { title: "White Tara Chant", note: "The viral chant for health, healing & longevity — 1.3M views", duration: "21:08" },
      { title: "Chenrezig · Om Mani Padme Hum", note: "The mantra of compassion, sung slowly", duration: "12:30" },
      { title: "Vajrasattva Purification Chant", note: "An evening practice, recorded in one take", duration: "14:20" },
      { title: "Green Tara Chant", note: "A session of swift, gentle protection", duration: "15:12" },
      { title: "Sangye Menla Healing Mantra", note: "Morning practice, recorded in one sitting", duration: "10:05" },
    ],
  },
];

export const mantraLine = "ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྃ";
export const mantraLatin = "Om Mani Padme Hum";
