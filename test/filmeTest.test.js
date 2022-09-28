const Filme = require('../src/models/filme');

describe('CRUD Filme', () => {
  it('Deve criar um novo filme', async () => {
    const filme = await Filme.create({
      titulo: 'Titanic',
      diretor: 'James Cameron',
      genero: 'Drama',
      ano: 1997,
    });
    expect(filme.titulo).toBe('Titanic');
  });

  it('Deve achar um filme', async () => {
    const filme = await Filme.find();
    expect(filme.length).toBe(1);
  });

  it('Deve achar um filme pelo id', async () => {
    const filme = await Filme.findById('5f9e3e3f3d8c3c1e3c1a2b2c');
    expect(filme.titulo).toBe('Titanic');
  });

  it('Deve editar um filme', async () => {
    const filme = await Filme.findByIdAndUpdate('5f9e3e3f3d8c3c1e3c1a2b2c', {
      titulo: 'Ilha do Medo',
      diretor: 'Martin Scorsese',
      genero: 'Drama',
      ano: 2010,
    });
    expect(filme.titulo).toBe('Ilha do Medo');
  });

  it('Deve editar um filme', async () => {
    const filme = await Filme.findByIdAndRemove('5f9e3e3f3d8c3c1e3c1a2b2c');
    expect(filme).toBeNull();
  });

  it('Não deve criar um novo filme', async () => {
    try {
      const filme = await Filme.create({
        titulo: 'Titanic',
        diretor: 'James Cameron',
        genero: 'Drama',
      });
    } catch (err) {
      expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    }
  });
});
