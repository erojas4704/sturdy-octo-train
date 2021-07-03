const { calculateRangeOfAProjectile } = require("./app");


describe("Should calculate the range of a projectile", () => {
    test("Test on even ground", () => {
        let result = calculateRangeOfAProjectile(10, 45, 0);
        expect(result).toEqual(10.2);
    });

    test("Test on even ground 2", () => {
        let result = calculateRangeOfAProjectile(14, 78, 0);
        expect(result).toEqual(8.1);
    });

    test("Test on uneven ground ", () => {
        let result = calculateRangeOfAProjectile(10, 45, 14);
        expect(result).toEqual(18.4);
    });
});