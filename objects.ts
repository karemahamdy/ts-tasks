// const profile = {
//   name: 'alex',
//   age: 20,
//   coords: {
//     lat: 0,
//     lng: 15
//   },
//   setAge(age: number): void {
//     this.age = age;
//   }
// };

// const { age, name }: { age: number; name: string } = profile;
// const {
//   coords: { lat, lng }
// }: { coords: { lat: number; lng: number } } = profile;


interface Profile {
  name: string;
  age: number;
  coords: {
    lat: number;
    lng: number;
  };
  setAge(age: number): void;
}

const profile: Profile = {
  name: 'alex',
  age: 20,
  coords: { lat: 0, lng: 15 },
  setAge(age) {
    this.age = age;
  }
};

const { /*name,*/ age } = profile;
const { coords: { lat, lng } } = profile;
