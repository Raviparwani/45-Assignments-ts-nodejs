// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.


function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicianNames: string[] = ["Houdini", "Derren Brown", "Penn Jillette","David Copperfield", "Teller"];
  
  show_magicians(magicianNames);
  