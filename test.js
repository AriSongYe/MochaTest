describe("pow", function() {

    describe("raises x to power 3", function() {
        // before(() => alert("테스트를 시작합니다 - 테스트가 시작되기 전"));
        // after(() => alert("테스트를 종료합니다 - 테스트가 종료된 후"));

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function() {

                assert.equal(pow(x, 3), expected);
            });
        }
    
        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });

    it ("n < 0 일 때 결과는 NaN", function() {
        assert.isNaN(pow(2, -1));
    });

    it("n이 정수가 아닐 때 결과는 NaN입니다.", function() {
        assert.isNaN(pow(2, 1.5));
    });
    
});