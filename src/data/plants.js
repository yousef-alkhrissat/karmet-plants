export const IG_DM = 'https://ig.me/m/karmet_plants';
export const IG_PROFILE = 'https://www.instagram.com/karmet_plants/';

export const plantImg = (p) => 'assets/web/' + p.img;

export const plants = [
  { id: 'olive', name: 'Olive bonsai', lat: 'Olea europaea', img: 'olive-bonsai.jpg', w: 933, h: 1400, pos: '50% 60%',
    text: 'The tree of these hills, kept small. Gnarled trunk, silver leaves, and patience in a pot.', light: 'Full sun', water: 'When the top soil is dry', cap: 'An olive trained as a bonsai' },
  { id: 'pachira', name: 'Pachira', lat: 'Pachira aquatica', img: 'pachira.jpg', w: 1050, h: 1400, pos: '50% 40%',
    text: 'The money tree, often with a braided trunk. Glossy hand-shaped leaves that turn towards the window.', light: 'Bright, indirect', water: 'When half the pot is dry', cap: 'Pachira leaves and trunk' },
  { id: 'snake', name: 'Snake plant', lat: 'Dracaena trifasciata', img: 'snake-plant.jpg', w: 933, h: 1400, pos: '50% 50%',
    text: 'Upright, striped, and nearly impossible to kill. Happy in a dim hallway and with being forgotten.', light: 'Any, even low', water: 'Every two to three weeks', cap: 'A sansevieria, the snake plant family' },
  { id: 'monstera', name: 'Swiss cheese plant', lat: 'Monstera deliciosa', img: 'monstera-1400.jpg', w: 1400, h: 1050, pos: '50% 50%',
    text: 'Big leaves that split and open as the plant matures. Give it something to climb and room to spread.', light: 'Bright, indirect', water: 'Weekly in summer', cap: 'Monstera leaves' },
  { id: 'pink', name: 'Pink marble', lat: 'Syngonium podophyllum', img: 'pink-syngonium.jpg', w: 1128, h: 1400, pos: '50% 50%',
    text: 'Arrow-shaped leaves washed in pink. The colour holds best near a bright window out of hard sun.', light: 'Bright to medium', water: 'Keep lightly moist', cap: 'A pink-leaved syngonium' },
  { id: 'cactus', name: 'Cactus', lat: 'Cactaceae', img: 'cactus-pot.webp', w: 1024, h: 683, pos: '45% 50%',
    text: 'Round, ribbed, columnar or woolly. Clay pots, gritty soil and the sunniest sill you have.', light: 'Full sun', water: 'Monthly, rarely in winter', cap: 'A woolly cactus in a clay pot' },
  { id: 'ponytail', name: 'Ponytail palm', lat: 'Beaucarnea recurvata', img: 'ponytail-palm.jpg', w: 1050, h: 1400, pos: '50% 35%',
    text: 'A swollen base that stores water and a fountain of thin leaves on top. Not a palm at all, and very forgiving.', light: 'Bright to full sun', water: 'Every two weeks or less', cap: 'A ponytail palm grown into a tree' },
  { id: 'bougainvillea', name: 'Bougainvillea', lat: 'Bougainvillea glabra', img: 'bougainvillea.jpg', w: 1400, h: 1050, pos: '50% 50%',
    text: 'The flower of Amman walls. Magenta bracts all summer on a balcony or trained up a railing.', light: 'Full sun, outdoors', water: 'Often in summer, less to push flowers', cap: 'Bougainvillea in flower' },
  { id: 'adenium', name: 'Desert rose', lat: 'Adenium obesum', img: 'adenium.jpg', w: 1400, h: 1050, pos: '50% 50%',
    text: 'A fat sculptural trunk crowned with pink flowers. Loves heat and sun, hates wet feet.', light: 'Full sun', water: 'When fully dry', cap: 'Desert rose in flower' },
];

export const plantById = Object.fromEntries(plants.map((p) => [p.id, p]));

// Finder: light × watering habit → [best match, also happy there]
export const matches = {
  sun:    { often: ['bougainvillea', 'olive'], weekly: ['olive', 'adenium'], rarely: ['cactus', 'adenium'] },
  bright: { often: ['monstera', 'pink'], weekly: ['pachira', 'monstera'], rarely: ['ponytail', 'snake'] },
  shade:  { often: ['pink', 'pachira'], weekly: ['pachira', 'snake'], rarely: ['snake', 'ponytail'] },
};
