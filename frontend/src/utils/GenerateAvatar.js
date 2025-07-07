const avatarStyles = [
  'avataaars',
  'adventurer',
  'adventurer-neutral',
  'big-ears',
  'big-ears-neutral',
  'big-smile',
  'bottts',
  'croodles',
  'croodles-neutral',
  'fun-emoji',
  'icons',
  'identicon',
  'initials',
  'lorelei',
  'lorelei-neutral',
  'micah',
  'miniavs',
  'open-peeps',
  'personas',
  'pixel-art',
  'pixel-art-neutral',
  'shapes',
  'thumbs'
];

const generateAvatar = (seed, style = 'avataaars') => {
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${seed}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`;
};

export const generateAvatars = (count = 12) => {
  const avatars = [];
  const selectedStyles = ['avataaars', 'adventurer', 'big-smile', 'lorelei', 'micah', 'personas'];
  
  for (let i = 0; i < count; i++) {
    const style = selectedStyles[i % selectedStyles.length];
    const seed = Math.random().toString(36).substring(7);
    avatars.push(generateAvatar(seed, style));
  }
  
  return avatars;
};

export const generateUserAvatar = (identifier) => {
  const styles = ['avataaars', 'adventurer', 'personas'];
  const style = styles[Math.floor(Math.random() * styles.length)];
  return generateAvatar(identifier, style);
};


// const generateDiceBearBottts = (seed) =>
//   `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`;

// const generateDiceBearGridy = (seed) =>
//   `https://api.dicebear.com/7.x/gridy/svg?seed=${seed}`;

// const generateDiceBearAvataaars = (seed) =>
//   `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`;

// export const generateAvatar = () => {
//   const data = [];

//   for (let i = 0; i < 2; i++) {
//     const res = generateDiceBearAvataaars(Math.random());
//     data.push(res);
//   }
//   for (let i = 0; i < 2; i++) {
//     const res = generateDiceBearBottts(Math.random());
//     data.push(res);
//   }
//   for (let i = 0; i < 2; i++) {
//     const res = generateDiceBearGridy(Math.random());
//     data.push(res);
//   }
//   return data;
// };



// const generateDiceBearAvataaars = (seed) =>
//   `https://avatars.dicebear.com/api/avataaars/${seed}.svg`;

// const generateDiceBearBottts = (seed) =>
//   `https://avatars.dicebear.com/api/bottts/${seed}.svg`;

// const generateDiceBearGridy = (seed) =>
//   `https://avatars.dicebear.com/api/gridy/${seed}.svg`;

// export const generateAvatar = () => {
//   const data = [];

//   for (let i = 0; i < 2; i++) {
//     const res = generateDiceBearAvataaars(Math.random());
//     data.push(res);
//   }
//   for (let i = 0; i < 2; i++) {
//     const res = generateDiceBearBottts(Math.random());
//     data.push(res);
//   }
//   for (let i = 0; i < 2; i++) {
//     const res = generateDiceBearGridy(Math.random());
//     data.push(res);
//   }
//   return data;
// };
