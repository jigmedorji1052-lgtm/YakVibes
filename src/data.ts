export const LINKS = {
  youtube: "https://www.youtube.com/@YakVibes_Bhutan",
  facebook: "https://www.facebook.com/YakVibe",
  email: "mailto:contact@yakvibes.bt",
};

export const IMAGES = {
  hero: "https://image.qwenlm.ai/generated-images/2bdeeed9-cd65-420d-8166-73c506bd2b7d/_result.png",
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
  image: string;
  alt: string;
  description: string;
  tags: string[];
  duration: string;
  href: string;
};

export const homeTracks: HomeTrack[] = [
  {
    title: "White Tara Chant",
    artist: "Phub Zam",
    image: IMAGES.whiteTara,
    alt: "Hands holding mala prayer beads above a brass singing bowl in butter-lamp light",
    description:
      "Refresh your mind, heart, and body with this spiritual chanting for health, healing, and longevity.",
    tags: ["Chant", "Healing"],
    duration: "21:08",
    href: LINKS.youtube,
  },
  {
    title: "Medicine Buddha Chant",
    artist: "Kheng Sonam Dorji",
    image: IMAGES.medicineBuddha,
    alt: "A monk in maroon robes chanting beside golden statues",
    description:
      "A powerful meditation music piece composed for spiritual growth and inner tranquility.",
    tags: ["Chant", "Meditation"],
    duration: "17:45",
    href: LINKS.youtube,
  },
  {
    title: "Drangyen Majay",
    artist: "Traditional Folk",
    image: IMAGES.drangyen,
    alt: "A traditional Bhutanese drangyen lute leaning against a carved window",
    description:
      "The beautiful contrast of traditional Bhutanese folk music played on the drangyen lute.",
    tags: ["Folk", "Dranyen"],
    duration: "6:10",
    href: LINKS.youtube,
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
      "Kheng Sonam Dorji is one of Bhutan's most beloved folk voices — a keeper of the songs that once travelled on foot between the valleys of eastern Bhutan. His recordings of Zhingkham Maed Lu and Zhung Lam Lam Khar have carried the Khengpa tradition to listeners far beyond the mountains that shaped it.",
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
      { title: "Zhungkham Maed Lu", note: "The beloved field song of lower Kheng", duration: "4:52" },
      { title: "Zhung Lam Lam Khar", note: "A travelling song for the old road to the capital", duration: "5:37" },
      { title: "Drangyen Majay", note: "Traditional lute piece · YakVibes arrangement", duration: "6:10" },
      { title: "Kheng Zhungdra Medley", note: "Slow classical songs of the Kheng valleys", duration: "8:24" },
      { title: "Semki Tshiglu", note: "Verses of the heart · live YakVibes session", duration: "5:03" },
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
      "Phub Zam's voice carries the liturgical melodies of Bhutan's monasteries into the quiet of everyday life. Her recordings of the White Tara and Medicine Buddha chants are among the most-listened-to pieces in the YakVibes library — long, unhurried sessions made for healing, longevity, and deep rest.",
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
      { title: "White Tara Chant", note: "Chanting for health, healing & longevity", duration: "21:08" },
      { title: "Medicine Buddha Chant", note: "Composed for spiritual growth & tranquility", duration: "17:45" },
      { title: "Chenrezig · Om Mani Padme Hum", note: "The mantra of compassion, sung slowly", duration: "12:30" },
      { title: "Green Tara Chant", note: "A session of swift, gentle protection", duration: "15:12" },
      { title: "Sangye Menla Healing Mantra", note: "Morning practice, recorded in one sitting", duration: "10:05" },
    ],
  },
];

export const mantraLine = "ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྃ";
export const mantraLatin = "Om Mani Padme Hum";
