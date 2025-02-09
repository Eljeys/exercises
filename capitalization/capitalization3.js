//Den korte løsning:
const strName = "Elias";
const thirdChar = strName
  .substring(0, 2)
  .toLowerCase()
  .concat(strName[2].toUpperCase(), strName.substring(3));

console.log(thirdChar);

//Den lange men mere forklarende løsning:
const strName2 = "Elias";
const thirdChar2 = strName2.substring(0, 2).toLowerCase();
const endString = strName2.substring(3);
const upperCaseChar = strName2[2].toUpperCase();
console.log("Dette er test: " + thirdChar2 + upperCaseChar + endString);

//Nedstående Beskrivelse tager udgangspunkt i den korte løsning:
//1 erklæret en konstant strName som har værdien "Elias" som en string.
//2 erklæret en ny konstant thirdChar som skal fungere som den manipuleret string.
//2.1 thirdChar for tildelt værdien strName.substring(0, 2).toLowerCase()
//Forklaring strName.substring(0, 2).toLowerCase() gør at der laves en ny streng af den eksisterende, streng, hvor den kopiere den eksisterende streng fra indextal 0  op til indextal 2 uden at tælle indextal 2 med, og derefter gøres alle karakterene i den nye streng små ved hjælp af .toLowerCase().

//3 Efter .toLowerCase() tilføjes .concat() som indeholder den opbrindelig string strName, hvor der er blevet defineret at den skal tage indextal 2 og gøre stort ved hjælp af .toUpperCase()
//4 efter strName[2].toUpperCase(), laves der en nye substring uf af den original strig strName, hvor den start fra indextal 3 og køre strengen ud.

//opsumering via de ovenstående steps vil man få en constant:
// thirdChar=strName.substring(0, 2).toLowerCase().concat(strName[2].toUpperCase(), strName.substring(3))
