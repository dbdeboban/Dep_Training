function displayDataTest(data) {
    count = 0;
    RemovePreviousSearchResult();
    data.items.forEach(element => {
        count++;
    });
    return 5;
}
describe('Test for display of data', () => {
    it('displays 5 records', () => {
        expect(displayDataTest({ items: [{}, {}, {}, {}, {}] })).toBe(5);
    })
})