
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('126.60');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 13987,
    years: 9,
    rate: 4.7
  };
  expect(calculateMonthlyPayment(values)).toEqual('159.08');
});

it('should return a correct result if yearly rate is 0', function () {
  const values = {
    amount: 1200,
    years: 1,
    rate: 0
  };
  expect(calculateMonthlyPayment(values)).toEqual('100.00');
})


