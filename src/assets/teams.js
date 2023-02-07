const rawTeams = [
  {
    nameSurname: "Arianna Attard",
    team: "Board",
    role: "Vice-President",
    image: "/netsonsImages/Arianna_Attard.png",
    quote: "If you can dream it, you can do it.",
    quoteAuthor: "Walt Disney",
    marksColor: "#7b0432",
    email: "arianna.attardo@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/arianna-attard-bb95091b8/",
    instagramUrl: "https://www.instagram.com/ariannaattard/",
  },
  {
    nameSurname: "Giovanna Francescato",
    team: "Events",
    role: "Coordinator",
    image: "/netsonsImages/Giovanna_Francescato.png",
    quote: "It always seems impossible until it's done.",
    quoteAuthor: "Nelson Mandela",
    marksColor: "#000000",
    email: "giovanna.francescato@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/giovanna-francescato-30b100170/",
    instagramUrl: "https://www.instagram.com/johanne___/",
  },
  {
    nameSurname: "Ayush Kamalia",
    team: "Events",
    role: "Member",
    image: "/netsonsImages/Ayush_Kamalia.png",
    quote: "There's a way to do it better - find it!",
    quoteAuthor: "Thomas Edison",
    marksColor: "#f48a10",
    email: "ayush.kamalia@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/ayushkamalia/",
    instagramUrl: "https://www.instagram.com/ayush_kamalia/",
  },
  {
    nameSurname: "Riccardo Goldoni",
    team: "Events",
    role: "Member",
    image: "/netsonsImages/Riccardo_Goldoni.png",
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    quoteAuthor: "Napoleon Hill",
    marksColor: "#000080",
    email: "riccardo.goldoni@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/riccardogoldoni/",
    instagramUrl: "https://www.instagram.com/riccardogoldoni/",
  },
  {
    nameSurname: "Dario De Rosa",
    team: "Human Capital",
    role: "Coordinator",
    image: "/netsonsImages/Dario_Derosa.png",
    quote:
      "If you want to understand the entrepreneur, study the juvenile delinquent. The delinquent is saying with his actions \"this sucks. I'm going to do my own thing.",
    quoteAuthor: "Yvon Chouinard",
    marksColor: "#a5e3e0",
    email: "dario.derosa@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/darioderosa1/",
    instagramUrl: "https://www.instagram.com/_derosadario_/",
  },
  {
    nameSurname: "Alejandro Villalta",
    team: "Human Capital",
    role: "Coordinator",
    image: "/netsonsImages/Alejandro_Villalta.png",
    quote:
      "You have to start. Start now, start here and start small. Keep it simple.",
    quoteAuthor: "Jack Dorsey",
    marksColor: "#7b0432",
    email: "alejandro.villalta@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/alejandro-villalta-1686421b2/",
    instagramUrl: "https://www.instagram.com/alejandro.vm24/",
  },
  {
    nameSurname: "Dana Maksut",
    team: "Human Capital",
    role: "Member",
    image: "/netsonsImages/Dana_Maksut.png",
    quote: "Limit is only in your head.",
    quoteAuthor: "",
    marksColor: "#a024ff",
    email: "dana.maksut@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/dana-maksut-97638b1b6/",
    instagramUrl: "https://www.instagram.com/dais_wise/",
  },
  {
    nameSurname: "Eleonora Pezzella",
    team: "Board",
    role: "Treasurer",
    image: "/netsonsImages/Eleonora_Pezzella.png",
    quote:
      "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    quoteAuthor: "Steve Jobs",
    marksColor: "#20b2aa",
    email: "eleonora.pezzella@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/eleonora-pezzella-a051b7225/",
    instagramUrl: "https://www.instagram.com/eleo.pezzella/",
  },
  {
    nameSurname: "Gianluca Lemme",
    team: "Human Capital",
    role: "Member",
    image: "/netsonsImages/Gianluca_Lemme.png",
    quote: "",
    quoteAuthor: "",
    marksColor: "#000000",
    email: "gianluca.lemme@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/gianluca-lemme-269b321a2/",
    instagramUrl: "https://www.instagram.com/gianlucalemme/",
  },
  {
    nameSurname: "Massimo Terzi",
    team: "Human Capital",
    role: "Member",
    image: "/netsonsImages/Massimo_Terzi.png",
    quote:
      "Fatti non foste a viver come bruti, ma per seguir virtute e canoscenza.",
    quoteAuthor: "Dante Alighieri",
    marksColor: "#2c46f2",
    email: "massimo.terzi@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/massimo-terzi-2b26b01a3/",
    instagramUrl: "",
  },
  {
    nameSurname: "Monica Gelsomino",
    team: "Human Capital",
    role: "Member",
    image: "/netsonsImages/Monica_Gelsomino.png",
    quote:
      "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.",
    quoteAuthor: "Henry Ford",
    marksColor: "#000000",
    email: "monica.gelsomino@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/monica-gelsomino-5bb208197/",
    instagramUrl: "https://www.instagram.com/monicagelso/",
  },
  {
    nameSurname: "Pratik Darda",
    team: "Human Capital",
    role: "Member",
    image: "/netsonsImages/Pratik_Darda.png",
    quote: "I never dreamed about success, I worked for it.",
    quoteAuthor: "Estée Lauder",
    marksColor: "#4a0727",
    email: "pratik.darda@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/pratikdarda/",
    instagramUrl: "https://www.instagram.com/the_crazy_pd/",
  },
  {
    nameSurname: "Valeria Amato",
    team: "Board",
    role: "President",
    image: "/netsonsImages/Valeria_Amato.png",
    quote:
      "I think it is possible for ordinary people to choose to be extraordinary.",
    quoteAuthor: "Elon Musk",
    marksColor: "#7b0432",
    email: "valeria.amato@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/valeria-amato/",
    instagramUrl: "https://www.instagram.com/_valeria.amato/",
  },

  {
    nameSurname: "Niccolò Betto",
    team: "Information Technology",
    role: "Coordinator",
    image: "/netsonsImages/Niccolo_Betto.png",
    quote: "Love with your heart, use your head for everything else.",
    quoteAuthor: "Captain Disillusion",
    marksColor: "#1e58f0",
    email: "niccolo.betto@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/niccolo-betto/",
    instagramUrl: "https://www.instagram.com/nick_betto",
  },
  {
    nameSurname: "Francesco Maccari",
    team: "Information Technology",
    role: "Member",
    image: "/netsonsImages/Francesco_Maccari.png",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    quoteAuthor: "Albert Einstein",
    marksColor: "#000000",
    email: "franci.macca@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/francesco-maccari-632444174/",
    instagramUrl: "https://www.instagram.com/francesco.maccari/",
  },
  {
    nameSurname: "Daniele Giorgianni",
    team: "Information Technology",
    role: "Member",
    image: "/netsonsImages/Daniele_Giorgianni.png",
    quote: "The only real mistake is the one from which we learn nothing.",
    quoteAuthor: "Henry Ford",
    marksColor: "#28624e",
    email: "daniele.giorgianni@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/danielegiorgianni/",
    instagramUrl: "https://www.instagram.com/daniele__gio/",
  },
  {
    nameSurname: "Dario Cavalli",
    team: "Information Technology",
    role: "Member",
    image: "/netsonsImages/Dario_Cavalli.png",
    quote:
      "Se ti laurei con 110 sei forte, ma se fai 110 di panca lo sei di più.",
    quoteAuthor: "Dario Cavalli",
    marksColor: "#ffff00",
    email: "dario.cavalli@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/dario-cavalli-03111710/",
    instagramUrl: "",
  },
  {
    nameSurname: "Giovanni Taddei",
    team: "Information Technology",
    role: "Member",
    image: "/netsonsImages/Giovanni_Taddei.png",
    quote: "The principle of knowledge is the discovery of misunderstanding.",
    quoteAuthor: "Albert Einstein",
    marksColor: "#231239",
    email: "giovanni.taddei@eclubpolimi.it",
    linkedinUrl: "",
    instagramUrl: "",
  },
  {
    nameSurname: "Anita Notarianni",
    team: "Board",
    role: "Secretary",
    image: "/netsonsImages/Anita_Notarianni.png",
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    quoteAuthor: "Mark Twain",
    marksColor: "#ff80bf",
    email: "anita.notarianni@eclubpolimi.it",
    linkedinUrl: "",
    instagramUrl: "https://www.instagram.com/anitanotarianni/",
  },
  {
    nameSurname: "Ginevra Carradori",
    team: "Board",
    role: "Communication Manager",
    image: "/netsonsImages/Ginevra_Carradori.png",
    quote: "It always seems impossible until it's done.",
    quoteAuthor: "Nelson Mandela",
    marksColor: "#ead6c8",
    email: "ginevra.carradori@eclubpolimi.it",
    linkedinUrl: "",
    instagramUrl: "https://www.instagram.com/ginevracarradori_/",
  },
  {
    nameSurname: "Ugur Can Gocmen",
    team: "Marketing & Communication",
    role: "Member",
    image: "/netsonsImages/Ugur_Cangocmen.png",
    quote:
      "There is no greater thing you can do with your life and work than follow your passions - in a way that serves the world and you.",
    quoteAuthor: "Richard Branson",
    marksColor: "#7b0432",
    email: "ugur.can@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/ugurcangocmen/",
    instagramUrl: "https://www.instagram.com/can_gocmen/",
  },
];

const teamNames = [
  "Board",
  "Events",
  "Human Capital",
  "Information Technology",
  "Marketing & Communication",
];

export function getTeams() {
  let teams = [];

  for (const team of teamNames) {
    let currentTeam = {
      teamName: team,
      members: [],
    };

    currentTeam.members = rawTeams.flatMap((current) => {
      if (current.team === team) {
        return [
          {
            image: current.image,
            cardText: {
              role: current.role,
              nameSurname: current.nameSurname,
              quote: current.quote,
              quoteAuthor: current.quoteAuthor,
              marksColor: current.marksColor,
              email: current.email,
              linkedinUrl: current.linkedinUrl,
              instagramUrl: current.instagramUrl,
            },
          },
        ];
      } else return [];
    });

    teams.push(currentTeam);
  }

  return teams;
}
