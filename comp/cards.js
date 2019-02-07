/*Arroy of Schools*/
const schools = [{
  "id": 1,
  "imgSrc": "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80",
  "name": "Harbin MS",
  "motto": "drive seamless functionalities",
  "addr1": "0 Superior Parkway",
  "addr2": "New Jersey",
  "donation": "$3785.60"
}, {
  "id": 2,
  "imgSrc": "https://images.unsplash.com/photo-1508824623134-da66caa91eca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=709&q=80",
  "name": "Olivet MS",
  "motto": "benchmark synergistic ROI",
  "addr1": "629 Ridge Oak Alley",
  "addr2": "Minnesota",
  "donation": "$9136.73"
}, {
  "id": 3,
  "imgSrc": "https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "name": "Global Elementary",
  "motto": "facilitate strong relationships",
  "addr1": "6 Columbus Alley",
  "addr2": "Missouri",
  "donation": "$2676.07"
}, {
  "id": 4,
  "imgSrc": "https://images.unsplash.com/photo-1513042966058-0ac1891fdc2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "name": "Chubu Women's School",
  "motto": "scale global users",
  "addr1": "47 Fuller Road",
  "addr2": "Ohio",
  "donation": "$3144.68"
}, {
  "id": 5,
  "imgSrc": "https://images.unsplash.com/photo-1512253077157-2d95165015b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=711&q=80",
  "name": "Santo Domingo HS",
  "motto": "strategize transparent metrics",
  "addr1": "5567 Bay Circle",
  "addr2": "Oklahoma",
  "donation": "$5381.37"
}, {
  "id": 6,
  "imgSrc": "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "name": "St. Vincent College Prep",
  "motto": "integrate end-to-end networks",
  "addr1": "0355 Erie Road",
  "addr2": "North Carolina",
  "donation": "$731.53"
}, {
  "id": 7,
  "imgSrc": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80",
  "name": "HS for Performing Arts",
  "motto": "optimize real-time platforms",
  "addr1": "11 Lotheville Terrace",
  "addr2": "Florida",
  "donation": "$5962.55"
}, {
  "id": 8,
  "imgSrc": "https://images.unsplash.com/photo-1542944951-929275bc9c65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "name": "Rudder Elementary",
  "motto": "generate granular platforms",
  "addr1": "34 Old Gate Avenue",
  "addr2": "North Carolina",
  "donation": "$9279.70"
}, {
  "id": 9,
  "imgSrc": "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "name": "Standard MS",
  "motto": "morph e-business paradigms",
  "addr1": "9110 Pankratz Street",
  "addr2": "Tennessee",
  "donation": "$2714.26"
}, {
  "id": 10,
  "imgSrc": "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=750&q=80",
  "name": "Americas HS",
  "motto": "benchmark 24/365 ROI",
  "addr1": "65 Northland Drive",
  "addr2": "California",
  "donation": "$959.12"
}, {
  "id": 11,
  "imgSrc": "https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  "name": "Jones College Prep",
  "motto": "leverage enterprise eyeballs",
  "addr1": "669 Aberg Trail",
  "addr2": "Idaho",
  "donation": "$6441.57"
}, {
  "id": 12,
  "imgSrc": "https://images.unsplash.com/photo-1531496378573-7be09a2697d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
  "name": "MS of Technology",
  "motto": "empower back-end web services",
  "addr1": "28927 Columbus Street",
  "addr2": "Missouri",
  "donation": "$3852.65"
}]

/*Object*/
/*Create a card class*/
class Card {
  constructor(school){
    /*Constrct data from array*/
    this.imgSrc = school.imgSrc
    this.name = school.name;
    this.motto = school.motto;
    this.addr1 = school.addr1;
    this.addr2 = school.addr2;
    this.donation = school.donation;
    /*Select div that holds cards*/
    this.root = document.querySelector(".card-box");
    /*Create new card*/
    this.card = document.createElement('div');
    this.card.classList.add('card');
    this.root.appendChild(this.card);
    /*Add img to card*/
    this.img = document.createElement('img');
    this.card.appendChild(this.img);
    this.img.src = this.imgSrc;
    /*Add school name to card*/
    this.h2 = document.createElement('h2');
    this.card.appendChild(this.h2);
    this.h2.innerText = this.name;
    /*Add motto to card*/
    this.mottoP = document.createElement('h3');
    this.card.appendChild(this.mottoP);
    this.mottoP.innerText = this.motto;
    /*Add street address to card*/
    this.addrA = document.createElement('p');
    this.card.appendChild(this.addrA);
    this.addrA.innerText = this.addr1;
    /*Add state to card*/
    this.addrB = document.createElement('p');
    this.card.appendChild(this.addrB);
    this.addrB.innerText = this.addr2;
    /*Add donations needed to card*/
    this.donationP = document.createElement('p');
    this.card.appendChild(this.donationP);
    this.donationP.innerText = this.donation;
    /*Add donate button to card*/
    this.btn = document.createElement('button');
    this.card.appendChild(this.btn);
    this.btn.innerText = "Donate Now!";
  }
}

//Start Here
/*Create a new card for each school*/
schools.forEach((school, index) => new Card(schools[index]))
