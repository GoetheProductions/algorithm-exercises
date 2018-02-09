/*
  based on some magazine text, create a
  harmless ransom note. A single word can only be used as many times as
  it appears in the magazine text

  return a boolean, of weather its possible or not to create the note.
*/

function harmlessRansomNote(noteText, magazineText) {
  var availableWords = magazineText.split(' ');
  var wantedWords = noteText.split(' ');

  var magazineObj = {};

  availableWords.forEach(word => {
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  var noteIsPossible = true;
  wantedWords.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;

      if (magazineObj[word] <= 0) {
        noteIsPossible = false;
      }
    } else {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}
