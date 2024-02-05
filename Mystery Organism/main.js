// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//Factory function:
const pAequorFactory = (number, dnaArray) => {
  const pAequor = {
  specimen: number,
  dna: dnaArray,
  mutate() {
    const randomIndex = Math.floor(Math.random() * this.dna.length);
    const currentBase = this.dna[randomIndex];
    let newBase = returnRandBase();
    while (newBase === currentBase) {
      newBase = returnRandBase();
}
      this.dna[randomIndex] = newBase;
      return this.dna;
},
compareDNA(otherOrganism) {
  let commonBases = 0;
  for(let i = 0; i < this.dna.length; i++) {
    if (this.dna[i] === otherOrganism.dna[i]) {
      commonBases++;
    }
  }
  const percentage = ((commonBases / this.dna.length) * 100).toFixed(2);
  console.log(`Specimen #${this.specimen} and Specimen #${otherOrganism.specimen} have ${percentage}% DNA in common.`);
},
willLikelySurvive(){
  let survivalBasis = 0;
  for(let i = 0; i < this.dna.length; i++) {
    if (this.dna[i] === "C" || this.dna[i] === "G"){
      survivalBasis++;
    }
  };
  if(survivalBasis >= 9){
    return true
  } else {
    return false
  };
},
};
  return pAequor;
};

//Array with selected organisms:
const selectedOrganisms = [];
const numberOfInstances = 30;
while (selectedOrganisms.length < numberOfInstances) {
  const organism = pAequorFactory(selectedOrganisms.length + 1, mockUpStrand());
  if(organism.willLikelySurvive){
    selectedOrganisms.push(organism);
  }
}

console.log("Selected Organisms:", selectedOrganisms);