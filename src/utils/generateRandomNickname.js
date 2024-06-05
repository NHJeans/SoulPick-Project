
export const generateRandomNickname = () => {
  const adjectives = ['멋있는', '잘생긴', '예쁜', '빛나는', '조용한', '말많은', '힘쎈']
  const animals = ['사자', '고양이', '하마', '판다', '독수리', '원숭이', '호랑이']
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  return `${randomAdjective}${randomAnimal}${Math.floor(Math.random() * 1000)}`;
}