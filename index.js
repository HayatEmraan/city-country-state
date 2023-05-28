async function getCountryData() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  const countryData = countries.map((country) => {
    try {
      const countryName = country.name.common;
      if (countryName == "Antarctica") {
        console.log("something went wrong");
      } else {
        const dialCode1 = country.idd?.root;
        const region = country?.region;
        const cioc = country?.cioc;
        const cca3 = country?.cca3;
        const cca2 = country?.cca2;
        const ccn3 = country?.ccn3;
        const dialCode2 = country?.idd?.suffixes[0];
        const dialCode = dialCode1 == "+1" ? dialCode1 : dialCode1 + dialCode2;
        const svg = country.flags.svg;
        const png = country.flags.png;
        const flags = {png, svg};
        return {
          countryName,
          dialCode,
          region,
          flags,
          cca2,
          ccn3,
          cca3,
          cioc,
        };
      }
    } catch (err) {
      console.log(err);
    }
  });

  //   JSON output
  const jsonData = JSON.stringify(countryData, null, 2);
  console.log(jsonData);
}

getCountryData();
