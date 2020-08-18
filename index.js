const farmAnimals = 'cow horse sheep pig chicken'
const[moo, neigh, baa, oink, cluck] = farmAnimals.split(' ')
let animals = farmAnimals.split(' ');
animals.splice(1,1)
const[Bessie, Dolly, Babe, Little] = animals
animals.pop 
const[black_and_white, black, pink] = animals




const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const[red, orange, yellow, green, blue, indigo, violet] = colors;
colors.splice(5,1);
const[r, o, y, g ,b, v] = colors;
const indg = indigo;



const muppet = {
  name: 'Kermit',
  color: 'green',
  song: 'The Rainbow Connection',
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const {name, color, song, job, partner} = muppet;

const k_muppet = {
  k_name: 'Kermit',
  k_color: 'green',
  k_album: {
    the_muppet_movie: {
      song_1: 'Rainbow Connection',
      song_2: 'Moving Right Along',
      song_3: 'Never Before, Never Again',
      song_4: 'I Hope That Something Better Comes Along',
    },
  },
  k_job: 'Host of The Muppet Show',
  k_partner: 'Miss Piggy'
};

const {k_color, k_job, k_partner} = k_muppet
const {song_2, song_4} = k_muppet.k_album.the_muppet_movie;


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
