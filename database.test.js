const db = require('./database');

beforeAll(async () => {
    await db.sequelize.sync();
});

test('create clown', async () => {
    expect.assertions(1);
    const clown = await db.Clown.create({
        id: 1,
        clownName: 'Dribbles',
        shoeSize: 'Huge',
        bowTie: true,
        noseColour: 'Pink'
    });
    expect(clown.id).toEqual(1);
});

test('get clown', async () => {
    expect.assertions(4);
    const clown = await db.Clown.findByPk(1);
    expect(clown.clownName).toEqual('Dribbles');
    expect(clown.shoeSize).toEqual('Huge');
    expect(clown.bowTie).toEqual(true);
    expect(clown.noseColour).toEqual('Pink');
});

test('delete clown', async () => {
    expect.assertions(1);
    await db.Clown.destroy({
        where: {
            id: 1
        }
    });
    const clown = await db.Clown.findByPk(1);
    expect(clown).toBeNull();
});

afterAll(async () => {
    await db.sequelize.close();
});
