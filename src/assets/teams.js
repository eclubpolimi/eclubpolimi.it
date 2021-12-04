const rawTeams = [
  {
    nameSurname: "Francesca Binacchi",
    team: "Board",
    role: "President",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b513604a-d11b-4819-9cd3-e56149f075f8/Francesca_Binacchi.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T172204Z&X-Amz-Expires=86400&X-Amz-Signature=a8fbf10eea88d4c4c16375f8a12558016ea5a97fb43be16740175ed3d9570aa5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Francesca%2520Binacchi.png%22&x-id=GetObject",
    quote: "May your choices reflect your hopes, not your fears.",
    quoteAuthor: "Nelson Mandela",
    marksColor: "#062293",
    email: "francesca.binacchi@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/francescabinacchi/",
    instagramUrl: "",
  },
  {
    nameSurname: "Valeria Gonzalez",
    team: "Board",
    role: "Vice-President",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0fa2836f-3454-48d2-9ec0-b5f86c7b0921/Valeria_Gonzalez.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T172321Z&X-Amz-Expires=86400&X-Amz-Signature=24b83361207ff48102921cee4fd55745f8a51f3de541794de06a925c0f7cf852&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Valeria%2520Gonzalez.png%22&x-id=GetObject",
    quote:
      "If you're not failing every now and again, it's a sign you're not doing anything very innovative.",
    quoteAuthor: "Woody Allen",
    marksColor: "#c70000",
    email: "valeria.gonzalez@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/valeriagonzalezm/",
    instagramUrl: "https://www.instagram.com/valemgm/",
  },
  {
    nameSurname: "Giulia Spallanzani",
    team: "Board",
    role: "Secretary",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3e53b7e8-4dc6-4ec9-92a8-ebc72ea1a2ab/Giulia_Spallanzani.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T172341Z&X-Amz-Expires=86400&X-Amz-Signature=233933cc42607cd7e3a5f655ccab45966289a784595729b4eaca600851968f02&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Giulia%2520Spallanzani.png%22&x-id=GetObject",
    quote:
      "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    quoteAuthor: "Albert Einstein",
    marksColor: "#299e35",
    email: "giulia.spallanzani@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/giulia-spallanzani-3b210716b/",
    instagramUrl: "https://www.instagram.com/giulspallanzani/",
  },
  {
    nameSurname: "Calin Sirbu",
    team: "Board",
    role: "Communication Manager",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4f9ecaae-bb52-4e7e-9471-3663d0a5cf79/Calin_Sirbu.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T172403Z&X-Amz-Expires=86400&X-Amz-Signature=4af14b57dc595537f45755cce18eb83f10c3f22e75b0e14be5617ec953197524&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Calin%2520Sirbu.png%22&x-id=GetObject",
    quote: "My biggest motivation? Just to keep challenging myself.",
    quoteAuthor: "Richard Branson",
    marksColor: "#120068",
    email: "calin.sirbu@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/calinsirbu/",
    instagramUrl: "https://www.instagram.com/iamcalin/",
  },
  {
    nameSurname: "Rebecca Renili",
    team: "Events",
    role: "Coordinator",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e15dc61a-dd4e-4cba-bd37-fed6a944c435/Rebecca_Renili.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T172432Z&X-Amz-Expires=86400&X-Amz-Signature=3977d364a56607d04ec03ec60d6cdb9d2c50d0fbcb6d67f49d4d7ddd4c7a7c38&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Rebecca%2520Renili.png%22&x-id=GetObject",
    quote: "Do it with passion, or not at all.",
    quoteAuthor: "",
    marksColor: "#3caadd",
    email: "rebecca.renili@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/rebecca-renili/",
    instagramUrl: "https://www.instagram.com/rebinelli/",
  },
  {
    nameSurname: "Lorenzo Bottacini",
    team: "Events",
    role: "Coordinator",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/776bb2bf-114e-4a5c-9d4a-514e0ebf9d71/Lorenzo_Bottacini.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T172456Z&X-Amz-Expires=86400&X-Amz-Signature=2acfcc53925b5ccc6069e4f25e2cabaf2a41e01b8412ede0744fcec54c19b17a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Lorenzo%2520Bottacini.png%22&x-id=GetObject",
    quote: "Be clutch.",
    quoteAuthor: "A clutch person",
    marksColor: "#1f5c34",
    email: "lorenzo.bottacini@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/lorenzo-bottacini/",
    instagramUrl: "https://www.instagram.com/lorenzobotta__/",
  },
  {
    nameSurname: "Arianna Attard",
    team: "Events",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6f234ffb-9739-423f-8b1c-90c8c9dd25e8/Arianna_Attard.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T172522Z&X-Amz-Expires=86400&X-Amz-Signature=8dcbb445d1e15a310c521ed83832ac1892b751422a36cf894a992346fc5615c8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Arianna%2520Attard.png%22&x-id=GetObject",
    quote: "If you can dream it, you can do it.",
    quoteAuthor: "Walt Disney",
    marksColor: "#7b0432",
    email: "arianna.attardo@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/arianna-attard-bb95091b8/",
    instagramUrl: "https://www.instagram.com/ariannaattard/",
  },
  {
    nameSurname: "Ayush Kamalia",
    team: "Events",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/44833e78-a478-4139-9177-33bfd845b8f6/Ayush_Kamalia.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T172545Z&X-Amz-Expires=86400&X-Amz-Signature=f884aa883e8e0c8b36a570c9fc031b875a182632bc09b0701fec51b3d1736c0c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Ayush%2520Kamalia.png%22&x-id=GetObject",
    quote: "There's a way to do it better - find it!",
    quoteAuthor: "Thomas Edison",
    marksColor: "#f48a10",
    email: "ayush.kamalia@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/ayushkamalia/",
    instagramUrl: "https://www.instagram.com/ayush_kamalia/",
  },
  {
    nameSurname: "Giovanna Francescato",
    team: "Events",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/06a5e984-b03e-498d-afb0-ef3f76e86f1a/Giovanna_Francescato.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T172854Z&X-Amz-Expires=86400&X-Amz-Signature=718326153c29b676f172b18e94165c8df75fc2f13611fab20252c51010ed9e0f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Giovanna%2520Francescato.png%22&x-id=GetObject",
    quote: "It always seems impossible until it�s done.",
    quoteAuthor: "Nelson Mandela",
    marksColor: "#000000",
    email: "giovanna.francescato@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/giovanna-francescato-30b100170/",
    instagramUrl: "https://www.instagram.com/johanne___/",
  },
  {
    nameSurname: "Moosa Aiman",
    team: "Events",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0f8895fe-dd91-47d9-afba-ee72d5a84376/Moosa_Aiman.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T172922Z&X-Amz-Expires=86400&X-Amz-Signature=255e568e9d70b4ca55860ad14b58e64f44e46f35d724673b6a773c63bcb0e127&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Moosa%2520Aiman.png%22&x-id=GetObject",
    quote: "If opportunity doesn't knock, build a door.",
    quoteAuthor: "Milton Berle",
    marksColor: "#05165c",
    email: "moosa.aiman@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/moosa-aiman-b87694160/",
    instagramUrl: "https://www.instagram.com/the_arrogant_biker/",
  },
  {
    nameSurname: "Riccardo Goldoni",
    team: "Events",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1349b2b5-605e-412f-812c-3d3200d6a50c/Riccardo_Goldoni.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T172958Z&X-Amz-Expires=86400&X-Amz-Signature=1916a593f7b922e56c13ea7b1414ebfefa20a8a3abed1ec416ac851928bf41b2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Riccardo%2520Goldoni.png%22&x-id=GetObject",
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
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/36bad34a-5bd7-4d72-9cc1-9db4ace092cc/Dario_De_Rosa.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173026Z&X-Amz-Expires=86400&X-Amz-Signature=28c4e94cca8653472775aceb5a4d643006860a3a62fc3a76209fd6992b6203ec&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Dario%2520De%2520Rosa.png%22&x-id=GetObject",
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
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/edb02cad-bfb6-43f9-a582-b29110c0cca9/Alejandro_Villalta.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173106Z&X-Amz-Expires=86400&X-Amz-Signature=bcf6d8697c20583f1b2decdb409386ef8510f4e21f3114c2d62d5cba671c27e0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Alejandro%2520Villalta.png%22&x-id=GetObject",
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
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/31c0b054-4840-4efb-83d1-7ba7e6995716/Dana_Maksut.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173135Z&X-Amz-Expires=86400&X-Amz-Signature=a9584c68aaf16a519706674b9c8a6fb3167d6c00a2367d9c4ffd4b7850844bfb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Dana%2520Maksut.png%22&x-id=GetObject",
    quote: "Limit is only in your head.",
    quoteAuthor: "",
    marksColor: "#a024ff",
    email: "dana.maksut@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/dana-maksut-97638b1b6/",
    instagramUrl: "https://www.instagram.com/dais_wise/",
  },
  {
    nameSurname: "Eleonora Pezzella",
    team: "Human Capital",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e23fc912-11db-4180-ae16-e2cea666ca22/Eleonora_Pezzella.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173203Z&X-Amz-Expires=86400&X-Amz-Signature=d8a350bc9fffd08ea55b46a3d6dc5682423ab536f93e34836de1c652bae66bae&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Eleonora%2520Pezzella.png%22&x-id=GetObject",
    quote:
      "If you are working on something that you really care about, you don�t have to be pushed. The vision pulls you.",
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
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a37ea4b-513a-473a-b072-839c873ab6f4/Gianluca_Lemme.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173227Z&X-Amz-Expires=86400&X-Amz-Signature=73a3df9cbe19372bea5bee06166eaa0b53a3ba88144e5cac66d3102c6a55f10e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Gianluca%2520Lemme.png%22&x-id=GetObject",
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
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7732d3af-7764-41db-a038-1d00f005d7d3/Massimo_Terzi.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173252Z&X-Amz-Expires=86400&X-Amz-Signature=f8582c7dcca6db3a95235c705022f867f9e567b5d8d647746706a863c351786a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Massimo%2520Terzi.png%22&x-id=GetObject",
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
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/13f776fa-67f5-41ca-a37d-dc94d238f7f2/Monica_Gelsomino.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173315Z&X-Amz-Expires=86400&X-Amz-Signature=48cadb83a03c55250d73aa12eed06f22592e59adb98addc55387d4ec45cbb7b8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Monica%2520Gelsomino.png%22&x-id=GetObject",
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
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a379fbe6-0ec0-42e0-a82e-dc6ab40d4f63/Pratik_Darda.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173338Z&X-Amz-Expires=86400&X-Amz-Signature=9ad1f97dfac4c0fade80e361f4f52a251335925b19489679d2fa04f7d0b63629&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Pratik%2520Darda.png%22&x-id=GetObject",
    quote: "I never dreamed about success, I worked for it.",
    quoteAuthor: "Estée Lauder",
    marksColor: "#4a0727",
    email: "pratik.darda@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/pratikdarda/",
    instagramUrl: "https://www.instagram.com/the_crazy_pd/",
  },
  {
    nameSurname: "Valeria Amato",
    team: "Information Technology",
    role: "Coordinator",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1d9613b2-247f-464d-b256-6784864fbacd/Valeria_Amato.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173357Z&X-Amz-Expires=86400&X-Amz-Signature=4447463cccddd668b4b409ebdba2c9fef4fc775ea6313115dee38b28568e1f2e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Valeria%2520Amato.png%22&x-id=GetObject",
    quote:
      "I think it is possible for ordinary people to choose to be extraordinary.",
    quoteAuthor: "Elon Musk",
    marksColor: "#7b0432",
    email: "valeria.amato@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/valeria-amato/",
    instagramUrl: "https://www.instagram.com/_valeria.amato/",
  },
  {
    nameSurname: "Daniele Giorgianni",
    team: "Information Technology",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/900fa594-59f1-4961-b366-aa96f9b3edea/Daniele_Giorgianni.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173411Z&X-Amz-Expires=86400&X-Amz-Signature=f855430dd9cfaebc1e68ec2adf31a5a3158f8a1e6242a2dfd5f9795bdc778fbf&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Daniele%2520Giorgianni.png%22&x-id=GetObject",
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
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/30dee7d3-a196-44a1-a323-b748b7f1fb60/Dario_Cavalli.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173444Z&X-Amz-Expires=86400&X-Amz-Signature=78b2974543fbd1b4f9922f40e49df6110358ae477b45cfc693c4254056aa02e2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Dario%2520Cavalli.png%22&x-id=GetObject",
    quote:
      "Se ti laurei con 110 sei forte, ma se fai 110 di panca lo sei di pi�.",
    quoteAuthor: "Dario Cavalli",
    marksColor: "#ffff00",
    email: "dario.cavalli@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/dario-cavalli-03111710/",
    instagramUrl: "",
  },
  {
    nameSurname: "Francesco Maccari",
    team: "Information Technology",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/895978fe-0dab-479b-98f0-d60598530826/Francesco_Melegati_Maccari.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173503Z&X-Amz-Expires=86400&X-Amz-Signature=8ea06b1fa017505e23dba9bae625cded4854f9aac7f5517f322f3d39df18900d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Francesco%2520Melegati%2520Maccari.png%22&x-id=GetObject",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    quoteAuthor: "Albert Einstein",
    marksColor: "#000000",
    email: "franci.macca@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/francesco-maccari-632444174/",
    instagramUrl: "https://www.instagram.com/francesco.maccari/",
  },
  {
    nameSurname: "Giovanni Taddei",
    team: "Information Technology",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/88ba75f4-f9f0-4829-9d03-591058d6882b/Giovanni_Taddei.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173542Z&X-Amz-Expires=86400&X-Amz-Signature=214cea0fdfa4e6a3180eeb4e4598c0c35d467f6e100705c04b39a33999587de0&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Giovanni%2520Taddei.png%22&x-id=GetObject",
    quote: "The principle of knowledge is the discovery of misunderstanding.",
    quoteAuthor: "Albert Einstein",
    marksColor: "#231239",
    email: "giovanni.taddei@eclubpolimi.it",
    linkedinUrl: "",
    instagramUrl: "",
  },
  {
    nameSurname: "Niccolò Betto",
    team: "Information Technology",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8ee17c7a-c421-4f6e-84e4-4660efa7e898/Niccolo_Betto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173558Z&X-Amz-Expires=86400&X-Amz-Signature=aa2fce0ae8c227661455fa06b08dae7f016a1e435467e3bb3c70f68bebfe441d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Niccolo%2520Betto.png%22&x-id=GetObject",
    quote: "Love with your heart, use your head for everything else.",
    quoteAuthor: "Captain Disillusion",
    marksColor: "#1e58f0",
    email: "niccolo.betto@eclubpolimi.it",
    linkedinUrl: "",
    instagramUrl: "https://www.instagram.com/nick_betto",
  },
  {
    nameSurname: "Matteo Zanini",
    team: "Information Technology",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a1de46b7-ccae-431c-99c4-39366bb6be40/Matteo_Zanini.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173620Z&X-Amz-Expires=86400&X-Amz-Signature=cb833f5fc65b9d59c560d4f07d7f1fdae1bbb67aa63d3094dcc5a10e753e50d7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Matteo%2520Zanini.png%22&x-id=GetObject",
    quote: "Innovation distinguishes between a leader and a follower.",
    quoteAuthor: "Steve Jobs",
    marksColor: "#2afa62",
    email: "matteo.zanini@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/matteo-zanini/",
    instagramUrl: "https://www.instagram.com/zanna_tusk/",
  },
  {
    nameSurname: "Anita Notarianni",
    team: "Marketing & Communication",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/77c55d4d-f357-444f-8740-131c7805a633/Anita_Notarianni.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173640Z&X-Amz-Expires=86400&X-Amz-Signature=310a507d49262cf2a40aa725e87b7cc3ca40ded9be67130f9010ec33c4b4f7c8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Anita%2520Notarianni.png%22&x-id=GetObject",
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
    team: "Marketing & Communication",
    role: "Member",
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/74ebcf41-bc04-4807-beb9-b323b51f388c/Ginevra_Carradori.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173713Z&X-Amz-Expires=86400&X-Amz-Signature=e519e4e3ece08d9db6366bffbc1066e882ea7800b8fda41916e5c32de8555927&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Ginevra%2520Carradori.png%22&x-id=GetObject",
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
    image:
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/34fa192c-203a-4311-b0f7-d0606a6cab82/Ugur_Can.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211204T173733Z&X-Amz-Expires=86400&X-Amz-Signature=6b8b02ea0916de2a3df6e86e496dfe8aaeefcfdf3ec8028a1f7215dc3832d482&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Ugur%2520Can.png%22&x-id=GetObject",
    quote:
      "There is no greater thing you can do with your life and work than follow your passions - in a way that serves the world and you.",
    quoteAuthor: "Richard Branson",
    marksColor: "#7b0432",
    email: "ugur.can@eclubpolimi.it",
    linkedinUrl: "https://www.linkedin.com/in/ugurcangocmen/",
    instagramUrl: "https://www.instagram.com/can_gocmen/",
  },
];

/* team object scheme
{
  teamName: "Information Technology",
  members: [
    {
      image: "",
      cardText: {
        role: "",
        nameSurname: "",
        quote: "",
        quoteAuthor: "",
        marksColor: "",
        email: "",
        linkedinUrl: "",
        instagramUrl: "",
      },
    },
  ],
} */

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
