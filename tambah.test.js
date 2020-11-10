const tambah = require('./tambah')
test('hasil yang diharapkan: 1+2 sama dengan 3', () => {
    expect(tambah(1, 2)).toBe(3)
})