const Crag = require('../../../server/models/crag');

describe('Crag', () => {
  let crag;

  beforeEach(() => {
    crag = new Crag({ name: 'Test' });
  })

  it('should require a name', () => {
    let temp = new Crag();

    temp.validate((err) => {
      expect(err.errors.name).toBeTruthy();
    });
  });

  it('should accept a geo value with lat and long values', () => {
    crag.geo = {
      lat: 'break',
      lon: 'break'
    };

    console.log(crag);

    crag.validate((err) => {
      console.log(err);
    })
  });
})