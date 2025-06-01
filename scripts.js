const searchInput = document.getElementById("search");
const resultDiv = document.getElementById("result");

const guestList = [
  { name: "Prof. Emeritus. Mark Awuku", table: 1 },
  { name: "Mr. Moses Amoako", table: 1 },
  { name: "Dr. Mrs. Vivian Amoako", table: 1 },
  { name: "Elizabeth Kyei", table: 1 },
  { name: "Samuel Akuffo", table: 1 },
  { name: "Charles Amoako", table: 1 },
  { name: "Daniel Akwei", table: 1 },
  { name: "Adobea Addo-Okyireh ESQ.", table: 2 },
  { name: "George Junior Agyei-Nyarko", table: 2 },
  { name: "Bailee Sistrunk", table: 2 },
  { name: "Gideon Appiah", table: 2 },
  { name: "Juliet Dunyo", table: 2 },
  { name: "Susanna Ayeh Kwakye", table: 2 },
  { name: "Olivia Bernadine Leeward", table: 2 },
  { name: "Esther Kessey", table: 2 },
  { name: "Stephen Acheampong", table: 3 },
  { name: "Timmesha Shockley", table: 3 },
  { name: "Solomon Ayittah", table: 3 },
  { name: "Esther Frempong", table: 3 },
  { name: "Jonathan Mortey", table: 3 },
  { name: "Jonique Zikpi", table: 3 },
  { name: "Christian Zikpi", table: 3 },
  { name: "Doreen Adu-Poku", table: 3 },
  { name: "Amma Afful", table: 4 },
  { name: "Jojo Afful", table: 4 },
  { name: "Dr. Daniel Alhassan", table: 4 },
  { name: "Enock Awotwe", table: 4 },
  { name: "Emmanuel Boamah", table: 4 },
  { name: "Dr. Priscilla Cudjoe", table: 4 },
  { name: "Dr. Ernest Bonnah", table: 4 },
  { name: "Emmanuel Djegou", table: 4 },
  { name: "Samuel Sefah Adusei", table: 5 },
  { name: "Kwadwo Amankwah-Nkyi", table: 5 },
  { name: "Elizabeth Arthur", table: 5 },
  { name: "Moses Azu", table: 5 },
  { name: "Melissa Nyagwande", table: 5 },
  { name: "Gregory Vieira", table: 5 },
  { name: "Charity Darkwa", table: 5 },
  { name: "Richmond Owusu Duah", table: 5 },
  { name: "Setorwu Dzesu", table: 6 },
  { name: "Philip Amewuda", table: 6 },
  { name: "Martha Amewuda", table: 6 },
  { name: "Kate Korsah", table: 6 },
  { name: "Matthew Anderson", table: 6 },
  { name: "Tracy Morrison", table: 6 },
  { name: "Jones Adu-Mensah", table: 6 },
  { name: "Isaac Nuetey", table: 6 },
  { name: "Maud Avevor", table: 6 },
  { name: "Ahmed Adebayo", table: 7 },
  { name: "Jane Ibude", table: 7 },
  { name: "Mustapha Mangdow", table: 7 },
  { name: "Dr. Kafayat Yusuf", table: 7 },
  { name: "Mutiat Abdulkareem", table: 7 },
  { name: "Kwame Yeboah", table: 7 },
  { name: "Fletcher Yeboah", table: 7 },
  { name: "Joshua Fayemi", table: 7 },
  { name: "Ernestina Boateng", table: 8 },
  { name: "John Maina", table: 8 },
  { name: "Michael Tsike", table: 8 },
  { name: "Harold Akrofi-Mantey", table: 8 },
  { name: "Derrick Asante", table: 8 },
  { name: "Paul Addai", table: 8 },
  { name: "Frederick Boakye", table: 8 },
  { name: "Gemma Amankwah", table: 8 },
  { name: "Eniola Lawal", table: 9 },
  { name: "Nnamse Nsemeke", table: 9 },
  { name: "Layefa  Angadi", table: 9 },
  { name: "Sodiq Fakorede", table: 9 },
  { name: "Oluwatobiloba Ige", table: 9 },
  { name: "Yinka  Ajayi", table: 9 },
  { name: "Victoria  Olaleye", table: 9 },
  { name: "Bright Ajayi", table: 9 },
  { name: "Robiul Md. Talukder", table: 10 },
  { name: "Murshalina Akhter", table: 10 },
  { name: "Damilola Fakuade", table: 10 },
  { name: "Victor Oledibe", table: 10 },
  { name: "Piali Dey Bristi", table: 10 },
  { name: "Dr. Mene", table: 10 },
  { name: "Pradeep Devkota", table: 10 }
];



searchInput.addEventListener('input', function () {
  const input = this.value.trim().toLowerCase();

  if (!input) {
    resultDiv.innerHTML = "";
    return;
  }

  const guest = guestList.find(g => g.name.toLowerCase() === input) ||
                guestList.find(g => g.name.toLowerCase().includes(input));

  if (guest) {
    const tableNum = guest.table;

    const tablemates = guestList
      .filter(g => g.table === tableNum && g.name !== guest.name)
      .map(g => g.name)
      .join(', ');

    resultDiv.innerHTML = `
      <p>Hello <strong>${guest.name}</strong>, you’re at <strong>Table ${tableNum}</strong>.</p>
      <p>You are seated with: ${tablemates || "No one else at this table."}</p>
    `;
  } else {
    resultDiv.innerHTML = "<p>Name not found. Please try again.</p>";
  }
});

