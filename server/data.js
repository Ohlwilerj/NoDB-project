const data = [
  {
    id: 1,
    first_name: "Mike",
    last_name: "Trout",
    team: "Angels",
    "hrs": 49,
    "batting average": 0.316,
    war: 0.5,
    img: 'https://cdn-s3.si.com/styles/marquee_large_2x/s3/images/mike-trout-tayler-topper.jpg?itok=2pq53b-I'
  },
  {
    id: 2,
    first_name: "Bryce",
    last_name: "Harper",
    team: "Phillies",
    "hrs": 59,
    "batting average": 0.053,
    war: 7.7,
    img: 'https://specials-images.forbesimg.com/imageserve/5cfe6b7f34a5c4000847f0ac/416x416.jpg?background=000000&cropX1=904&cropX2=2420&cropY1=163&cropY2=1680'
  
  },
  {
    id: 3,
    first_name: "Mookie",
    last_name: "Betts",
    team: "Red Sox",
    "hrs": 51,
    "batting average": 0.082,
    war: 1.4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNoLPVui9luuYgpKSpQsiOC07HEiCXuoFZsUk-OY2I8HtcFkbo'
  },
  {
    id: 4,
    first_name: "Nolan",
    last_name: "Arenado",
    team: "Rockies",
    "hrs": 16,
    "batting average": 0.56,
    war: 10.6,
    img:'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-s3.si.com%2Fs3fs-public%2Fstyles%2Fmarquee_large_2x%2Fpublic%2F2019%2F08%2F08%2Fnolan-arenado-lead.jpg%3Fitok%3Du-d922cN&w=1000&q=70'
  },
  {
    id: 5,
    first_name: "Albert",
    last_name: "Pujos",
    team: "Angels",
    "hrs": 20,
    "batting average": 0.406,
    war: 11.5,
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Pujols2019_%28cropped%29.jpg'
  },
  {
    id: 6,
    first_name: "Jose",
    last_name: "Altuve",
    team: "Astros",
    "hrs": 24,
    "batting average": 0.292,
    war: 0.1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4MqtLXgmQPNp-Syusjs7t-pzd23gOP-VuaC4NW6Rp8Ge0BL4c'
  },
  {
    id: 7,
    first_name: "Ronald",
    last_name: "Acuna Jr.",
    team: "Braves",
    "hrs": 50,
    "batting average": 0.103,
    war: 8.9,
    img: 'https://i.kinja-img.com/gawker-media/image/upload/s--hBivGw0s--/c_scale,f_auto,fl_progressive,q_80,w_800/tqictn2wje6v9x8gh0zz.jpg'
  },
  {
    id: 8,
    first_name: "Freddie",
    last_name: "Freeman",
    team: "Braves",
    "hrs": 26,
    "batting average": 0.280,
    war: 12.1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqRGZmLG9-I7WIzQ3ZWGWW5k9Xy8yB8t6_7MhUyrd-7KTq_6o'
  },
  {
    id: 9,
    first_name: "Matt",
    last_name: "Chapman",
    team: "A's",
    "hrs": 50,
    "batting average": 0.297,
    war: 12.8,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsj15DDWY8HZf_CWY-ygjpbfeyNFW0Cw_XgmKsWyYeRPbV4B3OLA'
  },
  {
    id: 10,
    first_name: "Aaron",
    last_name: "Judge",
    team: "Yankees",
    "hrs": 44,
    "batting average": 0.407,
    war: 3.5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpuN9XWbVRduPFVG7UJiExAr_sxhTEf1ZC2eQkXGVkpnJGaRWI'
  },
  {
    id: 11,
    first_name: "Carlos",
    last_name: "Correa",
    team: "Astros",
    "hrs": 24,
    "batting average": 0.039,
    war: 1.8,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLP-zQP0jDbe-UrCwOBnRE31deQC-DRgnGKzYEKRcCoymdzHZ'
  },
  {
    id: 12,
    first_name: "Kris",
    last_name: "Bryant",
    team: "Cubs",
    "hrs": 22,
    "batting average": 0.551,
    war: 10.4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VUVyBEgUcX65reW0UqkiwNKv71OWmzVvpMdgTBD0VxUt3STpKQ'
  },
  {
    id: 13,
    first_name: "Cody",
    last_name: "Belinger",
    team: "Dodgers",
    "hrs": 40,
    "batting average": 0.476,
    war: 13.0,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-Zl9nXsvLZEm3U_0f2LCRK0Y5deQLpbbfaDgnmKOUBnX_r-bSg'
  },
  {
    id: 14,
    first_name: "Max",
    last_name: "Muncy",
    team: "Dodgers",
    "hrs": 40,
    "batting average": 0.31,
    war: 8.1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmf-VoLYGIPUMG_5ItC4mWtKxkHg-O6kTqDCyt59L6zk4LuuQ3VQ'
  },
  {
    id: 15,
    first_name: "Christian",
    last_name: "Yelich",
    team: "Brewers",
    "hrs": 18,
    "batting average": 0.519,
    war: 1.1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBc0YeHLq2oBLAx19RIGy8Q2ZrKoXG7_bMchJMiJVaT8p3Wiw'
  },
  {
    id: 16,
    first_name: "Francisco",
    last_name: "Lindor",
    team: "Indians",
    "hrs": 20,
    "batting average": 0.1,
    war: 2.6,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UBelu2g0SUkXsIFczDMCf-QmrIGHK5xzSMZexXlLKDy7MU1u'
  },
  {
    id: 17,
    first_name: "Joey",
    last_name: "Vatto",
    team: "Reds",
    "hrs": 17,
    "batting average": 0.255,
    war: 6.3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6CBBNJ7U7xY3HJGwWJHsHYoaZOXW9nh5_J8vPQQRcprAYenbN1A'
  },
  {
    id: 18,
    first_name: "Paul",
    last_name: "Goldschmidt",
    team: "Cardinals",
    "hrs": 23,
    "batting average": 0.495,
    war: 8.3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIC2Q4J_dgeWrt5MyGwzhCKiADA9-C0Jje_qVEGy7RUiosRJIivg'
  },
  {
    id: 19,
    first_name: "Manny",
    last_name: "Machado",
    team: "Padres",
    "hrs": 3,
    "batting average": 0.221,
    war: 11.1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9XlOLnwUTa9p3jlJfPNHLYX9es7yYvyOzEftpps-dBszhkho7A'
  },
  {
    id: 20,
    first_name: "Nelson",
    last_name: "Cruz",
    team: "Twins",
    "hrs": 44,
    "batting average": 0.22,
    war: 2.0,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOCb0OxymRYtCKv1vnzd5J2ntTDAnZxOSt9KVuv86ssd1C-u9'
  }
];
module.exports = data