const Crag = require('../../../server/models/crag');

describe('Crag', () => {
  let crag;

  beforeEach(() => {
    crag = new Crag({
      name: 'Test',
      lat: 123.123456,
      lon: 123.123456
    });
  });

  it('should require a name', (done) => {
    expect(crag.name).toBeTruthy();

    let temp = new Crag();

    temp.validate((error) => {
      expect(error.errors.name).toBeTruthy();
      done();
    });
  });

  it('should should have optional lat and long values', (done) => {
    expect(crag.lat).toBeTruthy();
    expect(crag.lon).toBeTruthy();

    let temp = new Crag({
      name: 'Test'
    });

    temp.validate((error) => {
      expect(error).toBe(null);
      done();
    });
  });

  it('should require lat/lon be number-like up to 6 decimal places', (done) => {
    expect.assertions(5);
    let tempValid = new Crag({
      name: 'Test',
      lat: '123.45678',
      lon: '123.45678'
    });

    let tempInvalid = new Crag({
      name: 'Test',
      lat: 'not a number',
      lon: 'not a number'
    });

    expect(tempValid.lat.split('.')[1].length).toEqual(6);
    expect(tempValid.lon.split('.')[1].length).toEqual(6);

    tempValid.validate((error) => {
      expect(error).toBe(null);
      tempInvalid.validate((error) => {
        expect(error.errors.lat).toBeTruthy();
        expect(error.errors.lon).toBeTruthy();
        done();
      });
    });
  });
});