// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'senior software engineer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'junior software engineer',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
    id: 5,
    name: 'mesay mekonen',
    job: 'software engineer',
    img: 'data:image/jpeg;base64,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',
    text: 'Software Engineer with BSC in Software Engineering, Coursera and Udemy certified Front End developer in React js with 1+ year of industry experience.'
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let index = 0;
function showIndividual(index){
  let item = reviews[index];

  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
  index++;
  
  if(index > reviews.length-1){
    index = 0;
  }
  showIndividual(index);
})


prevBtn.addEventListener("click", function(){
  index--;
  if(index < 0 ){
    index = reviews.length-1
  }
  showIndividual(index);
})

randomBtn.addEventListener("click", function(){
  let index = Math.floor(Math.random() * 3);
  showIndividual(index);
})