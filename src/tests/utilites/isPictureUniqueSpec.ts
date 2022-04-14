import isPictureUnique from '../../utilites/isPictureUnique';

describe('>> Check if the image available and produced in assets/thumb', () => {
  it('Should return false/true if available and not produced', async () => {
    const isParaValid = await isPictureUnique(
      [''],
      ['fjord.jpg'],
      'fjord.jpg',
      210,
      800
    );
    expect(isParaValid.Existing).toEqual(false);
    expect(isParaValid.Available).toEqual(true);
  });
  it('Should return true/true if available and produced', async () => {
    const isParaValid = await isPictureUnique(
      ['fjord-210-800.jpg'],
      ['fjord.jpg'],
      'fjord.jpg',
      210,
      800
    );
    expect(isParaValid.Existing).toEqual(true);
    expect(isParaValid.Available).toEqual(true);
  });
  it('Should return true/false if not available and produced', async () => {
    const isParaValid = await isPictureUnique(
      ['fjord-210-800.jpg'],
      [''],
      'fjord.jpg',
      210,
      800
    );
    expect(isParaValid.Existing).toEqual(true);
    expect(isParaValid.Available).toEqual(false);
  });
  it('Should return false/false if not available and not produced', async () => {
    const isParaValid = await isPictureUnique(
      [''],
      [''],
      'fjord.jpg',
      210,
      800
    );
    expect(isParaValid.Existing).toEqual(false);
    expect(isParaValid.Available).toEqual(false);
  });
});
