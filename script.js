const inventions = {
    1940: "The Helicopter – Igor Sikorsky",
    1941: "The Modern Computer – Konrad Zuse",
    1942: "The Jet Engine – Frank Whittle",
    1943: "The B-29 Superfortress Bomber – Boeing",
    1944: "The First Programmable Computer – Konrad Zuse",
    1945: "The Microwave Oven – Percy Spencer",
    1946: "The Electronic Numerical Integrator – John W. Mauchly & J. Presper Eckert",
    1947: "The Transistor – John Bardeen, Walter Brattain, and William Shockley",
    1948: "The Polaroid Camera – Edwin Land",
    1949: "The First Computer Disk – IBM",
    1950: "Credit Card – Frank McNamara",
    1951: "The First Solar Cell – Charles F. Perry",
    1952: "The First Computer Mouse – Douglas Engelbart",
    1953: "The First Atomic Power Plant – USSR",
    1954: "The First Practical Color TV – RCA",
    1955: "Polio Vaccine – Jonas Salk",
    1956: "The First Commercial Computer – UNIVAC I",
    1957: "Sputnik Satellite – USSR",
    1958: "The Integrated Circuit – Jack Kilby & Robert Noyce",
    1959: "The Microchip – Jack Kilby & Robert Noyce",
    1960: "Laser – Theodore Maiman",
    1961: "First Human in Space – Yuri Gagarin",
    1962: "Audio Tape Recorder – Sony",
    1963: "The Push-Button Telephone – John E. Karlin",
    1964: "The First Computer with Mouse Interface – Douglas Engelbart",
    1965: "The Video Tape Recorder – Ampex",
    1966: "The First Supermarket Barcode – IBM",
    1967: "The First Video Game – Ralph H. Baer",
    1968: "The Fluorescent Lamp – George Inman",
    1969: "The Internet – ARPANET",
    1970: "The Digital Watch – Hamilton Watch Company",
    1971: "Email – Ray Tomlinson",
    1972: "The Video Cassette Recorder – JVC",
    1973: "Mobile Phone – Martin Cooper",
    1974: "The First Personal Computer – Altair 8800",
    1975: "The First Laser Printer – Gary Starkweather",
    1976: "Apple Computer – Steve Jobs & Steve Wozniak",
    1977: "The First Home Computer – Apple II",
    1978: "The Walkman – Sony",
    1979: "The Rubik's Cube – Ernő Rubik",
    1980: "Personal Computer – IBM",
    1981: "The First CD Player – Sony",
    1982: "The First Mobile Phone Call – Martin Cooper",
    1983: "Cellular Phone – Motorola",
    1984: "The Macintosh – Apple",
    1985: "The DVD – Sony",
    1986: "The Clamshell Cellphone – Motorola",
    1987: "The Camcorder – JVC",
    1988: "The First Internet Browser – Tim Berners-Lee",
    1989: "The World Wide Web – Tim Berners-Lee",
    1990: "The Hubble Space Telescope – NASA",
    1991: "The First Text Message – Neil Papworth",
    1992: "The Smartphone – IBM",
    1993: "The First Web Browser – Mosaic",
    1994: "Amazon – Jeff Bezos",
    1995: "Windows 95 – Microsoft",
    1996: "The DVD Player – Philips",
    1997: "Google – Larry Page & Sergey Brin",
    1998: "The iMac – Apple",
    1999: "Bluetooth – Ericsson",
    2000: "The USB Flash Drive – IBM",
    2001: "Wikipedia – Jimmy Wales & Larry Sanger",
    2002: "The Roomba – iRobot",
    2003: "Skype – Niklas Zennström & Janus Friis",
    2004: "Facebook – Mark Zuckerberg",
    2005: "YouTube – Steve Chen, Chad Hurley, Jawed Karim",
    2006: "Twitter – Jack Dorsey, Noah Glass, Biz Stone, Evan Williams",
    2007: "iPhone – Apple",
    2008: "Android – Google",
    2009: "Bitcoin – Satoshi Nakamoto",
    2010: "iPad – Apple",
    2011: "Google+ – Google",
    2012: "Instagram – Kevin Systrom, Mike Krieger",
    2013: "Tesla Model S – Tesla",
    2014: "Apple Watch – Apple",
    2015: "Self-Driving Cars – Google",
    2016: "Pokémon Go – Niantic",
    2017: "Amazon Echo – Amazon",
    2018: "The Foldable Smartphone – Samsung",
    2019: "Electric Airplane – Alice by Aviation",
    2020: "COVID-19 Vaccine – Pfizer, Moderna, Johnson & Johnson",
    2021: "Quantum Computing Breakthrough – IBM",
    2022: "AI-Generated Art – DALL·E 2 by OpenAI",
    2023: "Self-Driving Delivery Robots – Starship Technologies",
    2024: "AI-Driven Robotic Surgery – Various Innovators",
    2025: "Space Tourism – SpaceX"
};

function showInvention() {
    const yearInput = document.getElementById("yearInput").value;
    const result = document.getElementById("result");

    if (yearInput === "") {
        result.innerHTML = "<h2>Please enter a year between 1940 and 2025.</h2>";
        return;
    }

    const year = parseInt(yearInput);

    if (isNaN(year) || year < 1940 || year > 2025) {
        result.innerHTML = "<h2>Please enter a valid year between 1940 and 2025.</h2>";
        return;
    }

    if (inventions[year]) {
        result.innerHTML = `<h2>Invention in ${year}:</h2><p>${inventions[year]}</p>`;
    } else {
        result.innerHTML = `<h2>No invention found for ${year}. Try another year!</h2>`;
    }
}

function resetPage() {
    document.getElementById("yearInput").value = "";
    document.getElementById("result").innerHTML = "";
}
