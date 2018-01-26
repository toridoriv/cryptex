const assert = require('assert');
const functions = require('../assets/js/functions');

describe('Checking parameters for functions than only require letters', () => {
  it('Should return true if the user input at least one letter', () => {
    assert.equal(true, functions.checkValidChars('victoria'));
    assert.equal(true, functions.checkValidChars('hamilton123'));
  });
  it('Should return false if the user input only numbers or white spaces', () => {
    assert.equal(false, functions.checkValidChars('12345'));
    assert.equal(false, functions.checkValidChars(''));
    assert.equal(false, functions.checkValidChars(' '));
  });
});

describe('Checking if the Selva/Korpi cipher is working correctly', () => {
  it('Should return translate words from Selva to Korpi an viceversa', () => {
    assert.equal('pactelai', functions.selvaKorpi('victoria'));
    assert.equal('mene123', functions.selvaKorpi('mono123'));
    assert.equal('What happened?', functions.selvaKorpi('Whit hivvonod?'));
    assert.equal('HaMiLtOn', functions.selvaKorpi('HiMaRtEn'));
    assert.equal('Victoria', functions.selvaKorpi('Pactelai'));
  });
  it('Should return error message if the user only inputs numbers or empty spaces', () => {
    assert.equal('Sorry, if you input numbers or empty spaces we\'ve nothing to cipher or decipher :(', functions.selvaKorpi('123'));
    assert.equal('Sorry, if you input numbers or empty spaces we\'ve nothing to cipher or decipher :(', functions.selvaKorpi(' '));
    assert.equal('Sorry, if you input numbers or empty spaces we\'ve nothing to cipher or decipher :(', functions.selvaKorpi(''));
  })
});