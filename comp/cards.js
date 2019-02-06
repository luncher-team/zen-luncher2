/*Arroy of Schools*/
const schools = [{
  "id": 1,
  "imgSrc": "http://dummyimage.com/400x220.bmp/5fa2dd/ffffff",
  "name": "Harbin University of Civil Engineering & Architecture",
  "motto": "drive seamless functionalities",
  "addr1": "0 Superior Parkway",
  "addr2": "New Jersey",
  "donation": "$3785.60"
}, {
  "id": 2,
  "imgSrc": "http://dummyimage.com/400x242.jpg/dddddd/000000",
  "name": "Olivet College",
  "motto": "benchmark synergistic ROI",
  "addr1": "629 Ridge Oak Alley",
  "addr2": "Minnesota",
  "donation": "$9136.73"
}, {
  "id": 3,
  "imgSrc": "http://dummyimage.com/400x232.png/cc0000/ffffff",
  "name": "The Global College Lahore",
  "motto": "facilitate sexy relationships",
  "addr1": "6 Columbus Alley",
  "addr2": "Missouri",
  "donation": "$2676.07"
}, {
  "id": 4,
  "imgSrc": "http://dummyimage.com/400x206.png/ff4444/ffffff",
  "name": "Chubu Gakuin University & Chubu Women's College",
  "motto": "scale global users",
  "addr1": "47 Fuller Road",
  "addr2": "Ohio",
  "donation": "$3144.68"
}, {
  "id": 5,
  "imgSrc": "http://dummyimage.com/400x214.jpg/cc0000/ffffff",
  "name": "Universidad Católica de Santo Domingo",
  "motto": "strategize transparent metrics",
  "addr1": "5567 Bay Circle",
  "addr2": "Oklahoma",
  "donation": "$5381.37"
}, {
  "id": 6,
  "imgSrc": "http://dummyimage.com/400x211.png/cc0000/ffffff",
  "name": "St. Vincent College",
  "motto": "integrate end-to-end networks",
  "addr1": "0355 Erie Road",
  "addr2": "North Carolina",
  "donation": "$731.53"
}, {
  "id": 7,
  "imgSrc": "http://dummyimage.com/400x203.jpg/ff4444/ffffff",
  "name": "Academy of Performing Arts, Film and TV Fakulty",
  "motto": "optimize real-time platforms",
  "addr1": "11 Lotheville Terrace",
  "addr2": "Florida",
  "donation": "$5962.55"
}, {
  "id": 8,
  "imgSrc": "http://dummyimage.com/400x216.bmp/5fa2dd/ffffff",
  "name": "Université de Saida",
  "motto": "generate granular platforms",
  "addr1": "34 Old Gate Avenue",
  "addr2": "North Carolina",
  "donation": "$9279.70"
}, {
  "id": 9,
  "imgSrc": "http://dummyimage.com/400x223.bmp/cc0000/ffffff",
  "name": "First Global University to teaching Jainism",
  "motto": "morph e-business paradigms",
  "addr1": "9110 Pankratz Street",
  "addr2": "Tennessee",
  "donation": "$2714.26"
}, {
  "id": 10,
  "imgSrc": "http://dummyimage.com/400x230.bmp/dddddd/000000",
  "name": "Pak-AIMS (American Institute of Management Sciences)",
  "motto": "benchmark 24/365 ROI",
  "addr1": "65 Northland Drive",
  "addr2": "California",
  "donation": "$959.12"
}, {
  "id": 11,
  "imgSrc": "http://dummyimage.com/400x214.png/dddddd/000000",
  "name": "Europäische Betriebswirtschafts-Akademie",
  "motto": "leverage enterprise eyeballs",
  "addr1": "669 Aberg Trail",
  "addr2": "Idaho",
  "donation": "$6441.57"
}, {
  "id": 12,
  "imgSrc": "http://dummyimage.com/400x218.png/dddddd/000000",
  "name": "University of Technology Phnom Penh",
  "motto": "empower back-end web services",
  "addr1": "28927 Columbus Street",
  "addr2": "Missouri",
  "donation": "$3852.65"
}]

/*Object*/
class Card {
  constructor(school){
    this.imgSrc = school.imgSrc
    this.name = school.name;
    this.motto = school.motto;
    this.addr1 = school.addr1;
    this.addr2 = school.addr2;
    this.donation = school.donation;

    this.root = document.querySelector(".card-box");

    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.root.appendChild(this.card);

    this.img = document.createElement('img');//add image
    this.card.appendChild(this.img);
    this.img.src = this.imgSrc;

    this.h2 = document.createElement('h2');//add school name
    this.card.appendChild(this.h2);
    this.h2.innerText = this.name;

    this.mottoP = document.createElement('h3');//add motto
    this.card.appendChild(this.mottoP);
    this.mottoP.innerText = this.motto;

    this.addrA = document.createElement('p');//add street addr
    this.card.appendChild(this.addrA);
    this.addrA.innerText = this.addr1;

    this.addrB = document.createElement('p');//add state
    this.card.appendChild(this.addrB);
    this.addrB.innerText = this.addr2;

    this.donationP = document.createElement('p');//add needed donations
    this.card.appendChild(this.donationP);
    this.donationP.innerText = this.donation;
    this.donationP.classList.add('donation')

    this.btn = document.createElement('button');//add donate button
    this.card.appendChild(this.btn);
    this.btn.innerText = "Donate Now!";
  }
}

schools.forEach((school, index) => new Card(schools[index]))
