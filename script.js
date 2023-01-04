const data = async () => {
  const mainApi = await Promise.all([
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5"),
  ]);
  const response = await Promise.all(mainApi.map((res) => res.json()));

  for (let i = 0; i < 5; i++) {
    const pokeUrl = await Promise.all(response.map((res) => res.results[i]));
    const names = pokeUrl.map((res) => res.url);
    const url = await Promise.all([fetch(names)]);
    const url2 = await Promise.all(url.map((res) => res.json()));
    await Promise.all(url2.map((res) => console.log(res.name)));

     //console.log(url2);
  }
};

data();

// --------------------------------------------------------Second Methos

// const data2 = async () => {
//   const mainApi = await Promise.all([
//     fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=5"),
//   ]);
//   const response = await Promise.all(mainApi.map((res) => res.json()));
//   const newUrl = await Promise.all(response.map((res) => res.results));
//   const url = await Promise.all(
//     newUrl.map((res) => res.forEach((item) => console.log(item.name)))
//   );
// };

// data2();

// ---------------------------------------> First Method

// const data = async () => {
//   const api = await Promise.all([
//     fetch("https://pokeapi.co/api/v2/pokemon/1/"),
//     fetch("https://pokeapi.co/api/v2/pokemon/2/"),
//     fetch("https://pokeapi.co/api/v2/pokemon/3/"),
//     fetch("https://pokeapi.co/api/v2/pokemon/4/"),
//     fetch("https://pokeapi.co/api/v2/pokemon/5/"),
//   ]);
//   const response = await Promise.all(api.map((res) => res.json()));
//   const name1 = response[0].name;
//   const name2 = response[1].name;
//   const name3 = response[2].name;
//   const name4 = response[3].name;
//   const name5 = response[4].name;

//   Promise.all([name1, name2, name3, name4, name5]).then((items) => {
//     console.log(items);
//   });
// };
// data();
