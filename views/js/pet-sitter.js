export const petSitters = await fetchPetSitters();
console.log(petSitters);

export const generatePetSitterCards = async (petSitters) => {
  console.log(petSitters);
  const cardList = document.querySelector("#wrapAllPetSitter");
  // petSitters.sort((a, b) => b.vote_count - a.vote_count);
  cardList.innerHTML = petSitters
    .map(
      (petSitter) => `
      <div class="container my-4">
      <div class="d-flex flex-wrap justify-content-center py-3 border">
        <a href="/" class="d-flex align-items-center m-4 me-md-auto link-body-emphasis text-decoration-none">
          <img class="bi m-2 mx-5" src="../contents/${petSitter.animal}.png" width="150" alt="dog" />
          <div class="fs-4">
            <P class="h2"><strong>${petSitter.name} </strong><strong class="h3">sitter</strong></P>
            <p class="mt-2">comment : <strong class="h5"><strong>${petSitter.comment}</strong></strong></p> 
          </div>
        </a>
        <a href="/" class="d-flex align-items-center m-4 me-md-auto link-body-emphasis text-decoration-none">
          <div href="/" class="m-4 align-self-center me-auto text-decoration-none">
            <div class="fs-3">
              <P class="h4">Career<strong class="h3"><strong> ${petSitter.career}</strong>  month</strong></P>
              <P class="h4">Animal<strong class="h3"><strong> ${petSitter.animal}</strong></strong></P>
              <P class="h4">Grades<strong class="h3"><strong> 5.0</strong></strong></P>
            </div>
          </div>
        </a>
        <a href="/" class="d-flex align-items-center m-4 me-md-auto link-body-emphasis text-decoration-none">
        <div href="/" class="m-4 align-self-center me-auto text-decoration-none">
          <div class="fs-3 text-center">
            <P class="h4 text-black"><strong>예약하기</strong></P>
          </div>
        </div>
        </a>
      </div>
    </div>`
    )
    .join("");
};

async function fetchPetSitters() {
  const response = await fetch("http://localhost:3000/api/pet-sitter");
  const data = await response.json();
  console.log(data.data);
  return data;
}