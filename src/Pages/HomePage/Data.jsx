import AOT from "../../Assets/Anime and Manga Cover/Shingeki_no_Kyojin.jpg";
import Kuroshitsuji from "../../Assets/Anime and Manga Cover/Black_Butler_1.png";
import BlackClover from "../../Assets/Anime and Manga Cover/black clover.jpg";
import Bleach1 from "../../Assets/Anime and Manga Cover/bleach.webp";
import Bleach2 from "../../Assets/Anime and Manga Cover/bleachh.jpg";
import Deathnote1 from "../../Assets/Anime and Manga Cover/death note.jpg";
import Deathnote2 from "../../Assets/Anime and Manga Cover/Death_Note_29.webp";
import DetectiveConan1 from "../../Assets/Anime and Manga Cover/detective conan manga.jpg";
import DetectiveConan2 from "../../Assets/Anime and Manga Cover/detective conan.jpg";
import DragonBall1 from "../../Assets/Anime and Manga Cover/dragon ball super.jpg";
import DragonBall2 from "../../Assets/Anime and Manga Cover/dragon ball.jpeg";
import FullMetalAlchemist1 from "../../Assets/Anime and Manga Cover/fullmetalalchemist.jpg";
import FullMetalAlchemist2 from "../../Assets/Anime and Manga Cover/fullmetalalchemist2.jpg";
import Gintama from "../../Assets/Anime and Manga Cover/gintama.jpg";
import Haikyuu from "../../Assets/Anime and Manga Cover/haikyuu.jpg";
import HunterxHunter from "../../Assets/Anime and Manga Cover/hunter x hunter.jpeg";
import Naruto from "../../Assets/Anime and Manga Cover/naruto.jpg";
import OnePiece from "../../Assets/Anime and Manga Cover/one piece.jpg";
import OnePunchman from "../../Assets/Anime and Manga Cover/OnePunchMan_manga_cover.png";

const mangaData = [
  {
    title: "Attack on Titan",
    author: "Hajime Isayama",
    description:
      "Set in a world where humanity is on the brink of extinction due to gigantic humanoid creatures known as Titans, this series follows the story of Eren Yeager and his friends as they fight against these monstrous beings.",
    dayupdate: "Thursday",
    image: AOT,
    link: "/manga/aot",
  },
  {
    title: "Black Butler",
    author: "Yana Toboso",
    description:
      "Follows the story of Ciel Phantomhive, a young nobleman who forms a contract with a demon named Sebastian Michaelis to seek revenge against those who wronged him.",
    dayupdate: "Monday",
    image: Kuroshitsuji,
    link: "/manga/blackbutler",
  },
  {
    title: "Black Clover",
    author: "Yūki Tabata",
    description:
      "Set in a world where magic is everything, follows the journey of Asta, a boy born without magic, who dreams of becoming the Wizard King, the strongest mage in the Clover Kingdom.",
    dayupdate: "Wednesday",
    image: BlackClover,
    link: "/manga/blackclover",
  },
  {
    title: "Detective Conan",
    author: "Gosho Aoyama",
    description:
      "Follows the adventures of Shinichi Kudo, a high school detective who is transformed into a child after being poisoned by a criminal organization, and his quest to solve cases while posing as a young boy named Conan Edogawa.",
    dayupdate: "Friday",
    image: DetectiveConan2,
    link: "/manga/detectiveconan",
  },
  {
    title: "Death Note",
    author: "Tsugumi Ohba (story) and Takeshi Obata (art)",
    description:
      "Follows the story of Light Yagami, a high school student who gains the power to kill anyone whose name he writes in a mysterious notebook, leading to a game of cat and mouse with a brilliant detective known only as L.",
    dayupdate: "Tuesday",
    image: Deathnote2,
    link: "/manga/deathnote",
  },
  {
    title: "Dragon Ball",
    author: "Akira Toriyama",
    description:
      "Follows the adventures of Goku as he trains in martial arts and searches for the Dragon Balls, powerful artifacts that can grant any wish.",
    dayupdate: "Sunday",
    image: DragonBall1,
    link: "/manga/dragonball",
  },
  {
    title: "Gintama",
    author: "Hideaki Sorachi",
    description:
      "Set in an alternate late-Edo period Japan invaded by aliens, follows the adventures of Gintoki Sakata, a freelance samurai, and his companions as they take on odd jobs to make ends meet.",
    dayupdate: "Saturday",
    image: Gintama,
    link: "/manga/gintama",
  },
  {
    title: "Haikyuu!!",
    author: "Haruichi Furudate",
    description:
      "Follows the journey of Shoyo Hinata, a volleyball player with a short stature but a big heart, as he aims to become a top player and lead his team to victory.",
    dayupdate: "Monday",
    image: Haikyuu,
    link: "/manga/haikyuu",
  },
  {
    title: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
    description:
      "Set in a world where alchemy is practiced, follows the journey of two brothers, Edward and Alphonse Elric, as they search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
    dayupdate: "Wednesday",
    image: FullMetalAlchemist1,
    link: "/manga/fullmetalalchemist",
  },
  {
    title: "Hunter X Hunter",
    author: "Yoshihiro Togashi",
    description:
      "Follows the adventures of Gon Freecss, a young boy who aspires to become a Hunter—a licensed professional who specializes in fantastic pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals.",
    dayupdate: "Tuesday",
    image: HunterxHunter,
    link: "/manga/hunterxhunter",
  },
  {
    title: "Naruto",
    author: "Masashi Kishimoto",
    description:
      "Follows the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village.",
    dayupdate: "Friday",
    image: Naruto,
    link: "/manga/naruto",
  },
  {
    title: "One Piece",
    author: "Eiichiro Oda",
    description:
      "Follows the adventures of Monkey D. Luffy and his pirate crew as they search for the legendary One Piece treasure to become the Pirate King.",
    dayupdate: "Thursday",
    image: OnePiece,
    link: "/manga/onepiece",
  },
  {
    title: "One Punch Man",
    author: "ONE (story) and Yusuke Murata (art)",
    description:
      "Follows the story of Saitama, a hero who can defeat any opponent with a single punch, but is bored by the lack of challenge in his life.",
    dayupdate: "Wednesday",
    image: OnePunchman,
    link: "/manga/onepunchman",
  },
];

const animeData = [
  {
    title: "Attack on Titan",
    author: "Hajime Isayama",
    description:
      "Set in a world where humanity is on the brink of extinction due to gigantic humanoid creatures known as Titans, this series follows the story of Eren Yeager and his friends as they fight against these monstrous beings.",
    dayupdate: "Thursday",
    image: AOT,
    link: "/anime/aot",
  },
  {
    title: "Black Butler",
    author: "Yana Toboso",
    description:
      "Follows the story of Ciel Phantomhive, a young nobleman who forms a contract with a demon named Sebastian Michaelis to seek revenge against those who wronged him.",
    dayupdate: "Monday",
    image: Kuroshitsuji,
    link: "/anime/blackbutler",
  },
  {
    title: "Black Clover",
    author: "Yūki Tabata",
    description:
      "Set in a world where magic is everything, follows the journey of Asta, a boy born without magic, who dreams of becoming the Wizard King, the strongest mage in the Clover Kingdom.",
    dayupdate: "Wednesday",
    image: BlackClover,
    link: "/anime/blackclover",
  },
  {
    title: "Detective Conan",
    author: "Gosho Aoyama",
    description:
      "Follows the adventures of Shinichi Kudo, a high school detective who is transformed into a child after being poisoned by a criminal organization, and his quest to solve cases while posing as a young boy named Conan Edogawa.",
    dayupdate: "Friday",

    image: DetectiveConan2,
    link: "/anime/detectiveconan",
  },
  {
    title: "Death Note",
    author: "Tsugumi Ohba (story) and Takeshi Obata (art)",
    description:
      "Follows the story of Light Yagami, a high school student who gains the power to kill anyone whose name he writes in a mysterious notebook, leading to a game of cat and mouse with a brilliant detective known only as L.",
    dayupdate: "Tuesday",
    image: Deathnote2,
    link: "/anime/deathnote",
  },
  {
    title: "Dragon Ball",
    author: "Akira Toriyama",
    description:
      "Follows the adventures of Goku as he trains in martial arts and searches for the Dragon Balls, powerful artifacts that can grant any wish.",
    dayupdate: "Sunday",
    image: DragonBall1,
    link: "/anime/dragonball",
  },
  {
    title: "Gintama",
    author: "Hideaki Sorachi",
    description:
      "Set in an alternate late-Edo period Japan invaded by aliens, follows the adventures of Gintoki Sakata, a freelance samurai, and his companions as they take on odd jobs to make ends meet.",
    dayupdate: "Saturday",
    image: Gintama,
    link: "/anime/gintama",
  },
  {
    title: "Haikyuu!!",
    author: "Haruichi Furudate",
    description:
      "Follows the journey of Shoyo Hinata, a volleyball player with a short stature but a big heart, as he aims to become a top player and lead his team to victory.",
    dayupdate: "Monday",
    image: Haikyuu,
    link: "/anime/haikyuu",
  },
  {
    title: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
    description:
      "Set in a world where alchemy is practiced, follows the journey of two brothers, Edward and Alphonse Elric, as they search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
    dayupdate: "Wednesday",
    image: FullMetalAlchemist1,
    link: "/anime/fullmetalalchemist",
  },
  {
    title: "Hunter X Hunter",
    author: "Yoshihiro Togashi",
    description:
      "Follows the adventures of Gon Freecss, a young boy who aspires to become a Hunter—a licensed professional who specializes in fantastic pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals.",
    dayupdate: "Tuesday",
    image: HunterxHunter,
    link: "/anime/hunterxhunter",
  },
  {
    title: "Naruto",
    author: "Masashi Kishimoto",
    description:
      "Follows the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village.",
    dayupdate: "Friday",
    image: Naruto,
    link: "/anime/naruto",
  },
  {
    title: "One Piece",
    author: "Eiichiro Oda",
    description:
      "Follows the adventures of Monkey D. Luffy and his pirate crew as they search for the legendary One Piece treasure to become the Pirate King.",
    dayupdate: "Thursday",
    image: OnePiece,
    link: "/anime/onepiece",
  },
  {
    title: "One Punch Man",
    author: "ONE (story) and Yusuke Murata (art)",
    description:
      "Follows the story of Saitama, a hero who can defeat any opponent with a single punch, but is bored by the lack of challenge in his life.",
    dayupdate: "Wednesday",
    image: OnePunchman,
    link: "/anime/onepunchman",
  },
];

export const aniMangaList = {
  mangaData,
  animeData,
};
