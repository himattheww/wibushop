const mangaData = [
  {
    title: "Attack on Titan",
    author: "Hajime Isayama",
    description:
      "Set in a world where humanity is on the brink of extinction due to gigantic humanoid creatures known as Titans, this series follows the story of Eren Yeager and his friends as they fight against these monstrous beings.",
    dayupdate: "Thursday",
    image: "attack_on_titan.jpg",
  },
  {
    title: "Black Butler",
    author: "Yana Toboso",
    description:
      "Follows the story of Ciel Phantomhive, a young nobleman who forms a contract with a demon named Sebastian Michaelis to seek revenge against those who wronged him.",
    dayupdate: "Monday",
    image: "black_butler.jpg",
  },
  {
    title: "Black Clover",
    author: "Yūki Tabata",
    description:
      "Set in a world where magic is everything, follows the journey of Asta, a boy born without magic, who dreams of becoming the Wizard King, the strongest mage in the Clover Kingdom.",
    dayupdate: "Wednesday",
    image: "black_clover.jpg",
  },
  {
    title: "Detective Conan",
    author: "Gosho Aoyama",
    description:
      "Follows the adventures of Shinichi Kudo, a high school detective who is transformed into a child after being poisoned by a criminal organization, and his quest to solve cases while posing as a young boy named Conan Edogawa.",
    dayupdate: "Friday",
    image: "detective_conan.jpg",
  },
  {
    title: "Death Note",
    author: "Tsugumi Ohba (story) and Takeshi Obata (art)",
    description:
      "Follows the story of Light Yagami, a high school student who gains the power to kill anyone whose name he writes in a mysterious notebook, leading to a game of cat and mouse with a brilliant detective known only as L.",
    dayupdate: "Tuesday",
    image: "death_note.jpg",
  },
  {
    title: "Dragon Ball",
    author: "Akira Toriyama",
    description:
      "Follows the adventures of Goku as he trains in martial arts and searches for the Dragon Balls, powerful artifacts that can grant any wish.",
    dayupdate: "Sunday",
    image: "dragon_ball.jpg",
  },
  {
    title: "Gintama",
    author: "Hideaki Sorachi",
    description:
      "Set in an alternate late-Edo period Japan invaded by aliens, follows the adventures of Gintoki Sakata, a freelance samurai, and his companions as they take on odd jobs to make ends meet.",
    dayupdate: "Saturday",
    image: "gintama.jpg",
  },
  {
    title: "Haikyuu!!",
    author: "Haruichi Furudate",
    description:
      "Follows the journey of Shoyo Hinata, a volleyball player with a short stature but a big heart, as he aims to become a top player and lead his team to victory.",
    dayupdate: "Monday",
    image: "haikyuu.jpg",
  },
  {
    title: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
    description:
      "Set in a world where alchemy is practiced, follows the journey of two brothers, Edward and Alphonse Elric, as they search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
    dayupdate: "Wednesday",
    image: "fullmetal_alchemist.jpg",
  },
  {
    title: "Hunter X Hunter",
    author: "Yoshihiro Togashi",
    description:
      "Follows the adventures of Gon Freecss, a young boy who aspires to become a Hunter—a licensed professional who specializes in fantastic pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals.",
    dayupdate: "Tuesday",
    image: "hunter_x_hunter.jpg",
  },
  {
    title: "Naruto",
    author: "Masashi Kishimoto",
    description:
      "Follows the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village.",
    dayupdate: "Friday",
    image: "naruto.jpg",
  },
  {
    title: "One Piece",
    author: "Eiichiro Oda",
    description:
      "Follows the adventures of Monkey D. Luffy and his pirate crew as they search for the legendary One Piece treasure to become the Pirate King.",
    dayupdate: "Thursday",
    image: "one_piece.jpg",
  },
  {
    title: "One Punch Man",
    author: "ONE (story) and Yusuke Murata (art)",
    description:
      "Follows the story of Saitama, a hero who can defeat any opponent with a single punch, but is bored by the lack of challenge in his life.",
    dayupdate: "Wednesday",
    image: "one_punch_man.jpg",
  },
];

const animeData = [
  {
    title: "Attack on Titan",
    author: "Hajime Isayama",
    description:
      "Set in a world where humanity is on the brink of extinction due to gigantic humanoid creatures known as Titans, this series follows the story of Eren Yeager and his friends as they fight against these monstrous beings.",
    dayupdate: "Thursday",
    image: "attack_on_titan.jpg",
  },
  {
    title: "Black Butler",
    author: "Yana Toboso",
    description:
      "Follows the story of Ciel Phantomhive, a young nobleman who forms a contract with a demon named Sebastian Michaelis to seek revenge against those who wronged him.",
    dayupdate: "Monday",
    image: "black_butler.jpg",
  },
  {
    title: "Black Clover",
    author: "Yūki Tabata",
    description:
      "Set in a world where magic is everything, follows the journey of Asta, a boy born without magic, who dreams of becoming the Wizard King, the strongest mage in the Clover Kingdom.",
    dayupdate: "Wednesday",
    image: "black_clover.jpg",
  },
  {
    title: "Detective Conan",
    author: "Gosho Aoyama",
    description:
      "Follows the adventures of Shinichi Kudo, a high school detective who is transformed into a child after being poisoned by a criminal organization, and his quest to solve cases while posing as a young boy named Conan Edogawa.",
    dayupdate: "Friday",
    image: "detective_conan.jpg",
  },
  {
    title: "Death Note",
    author: "Tsugumi Ohba (story) and Takeshi Obata (art)",
    description:
      "Follows the story of Light Yagami, a high school student who gains the power to kill anyone whose name he writes in a mysterious notebook, leading to a game of cat and mouse with a brilliant detective known only as L.",
    dayupdate: "Tuesday",
    image: "death_note.jpg",
  },
  {
    title: "Dragon Ball",
    author: "Akira Toriyama",
    description:
      "Follows the adventures of Goku as he trains in martial arts and searches for the Dragon Balls, powerful artifacts that can grant any wish.",
    dayupdate: "Sunday",
    image: "dragon_ball.jpg",
  },
  {
    title: "Gintama",
    author: "Hideaki Sorachi",
    description:
      "Set in an alternate late-Edo period Japan invaded by aliens, follows the adventures of Gintoki Sakata, a freelance samurai, and his companions as they take on odd jobs to make ends meet.",
    dayupdate: "Saturday",
    image: "gintama.jpg",
  },
  {
    title: "Haikyuu!!",
    author: "Haruichi Furudate",
    description:
      "Follows the journey of Shoyo Hinata, a volleyball player with a short stature but a big heart, as he aims to become a top player and lead his team to victory.",
    dayupdate: "Monday",
    image: "haikyuu.jpg",
  },
  {
    title: "Fullmetal Alchemist",
    author: "Hiromu Arakawa",
    description:
      "Set in a world where alchemy is practiced, follows the journey of two brothers, Edward and Alphonse Elric, as they search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
    dayupdate: "Wednesday",
    image: "fullmetal_alchemist.jpg",
  },
  {
    title: "Hunter X Hunter",
    author: "Yoshihiro Togashi",
    description:
      "Follows the adventures of Gon Freecss, a young boy who aspires to become a Hunter—a licensed professional who specializes in fantastic pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals.",
    dayupdate: "Tuesday",
    image: "hunter_x_hunter.jpg",
  },
  {
    title: "Naruto",
    author: "Masashi Kishimoto",
    description:
      "Follows the journey of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village.",
    dayupdate: "Friday",
    image: "naruto.jpg",
  },
  {
    title: "One Piece",
    author: "Eiichiro Oda",
    description:
      "Follows the adventures of Monkey D. Luffy and his pirate crew as they search for the legendary One Piece treasure to become the Pirate King.",
    dayupdate: "Thursday",
    image: "one_piece.jpg",
  },
  {
    title: "One Punch Man",
    author: "ONE (story) and Yusuke Murata (art)",
    description:
      "Follows the story of Saitama, a hero who can defeat any opponent with a single punch, but is bored by the lack of challenge in his life.",
    dayupdate: "Wednesday",
    image: "one_punch_man.jpg",
  },
];

export const aniMangaList = {
  mangaData,
  animeData,
};
