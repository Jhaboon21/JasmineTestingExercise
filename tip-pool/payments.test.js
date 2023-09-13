describe("Payments test", function() {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 10;
        tipAmtInput.value = 2;
    });

    it('should add current payment to all payments on submitPaymentInfo()', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('10');
        expect(allPayments['payment1'].tipAmt).toEqual('2');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    })
  
    it('should return current payment on createCurPayment()', function () {
        createCurPayment();
        let expectedPayment = {
            billAmt: '10',
            tipAmt: '2',
            tipPercent: 20,
        }
        expect(createCurPayment()).toEqual(expectedPayment);
    });

    it('should return undefine on empty inputs on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        createCurPayment();

        let paymentTdList = paymentTbody.querySelectorAll('tr td');
        expect(paymentTdList.length).toEqual(0);
    });
  
    it('should create another row element and pass to appendTD function with input value on appendPaymentTable', function () {
        let curPayment = createCurPayment();
        appendPaymentTable(curPayment);

        let paymentTdList = paymentTbody.querySelectorAll('tr td');
        expect(paymentTdList.length).toEqual(4);
        expect(paymentTdList[0].innerText).toEqual('$10');
        expect(paymentTdList[1].innerText).toEqual('$2');
        expect(paymentTdList[2].innerText).toEqual('20%');
    });
  
    afterEach(function() {
        // teardown logic
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = [];
    });
  });