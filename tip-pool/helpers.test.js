describe("Helpers test", function() {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 10;
        tipAmtInput.value = 2;
        submitPaymentInfo();
    });

    it('should sum up all bill payments on sumPaymentTotal', function () {
        //checks with initial values
        expect(sumPaymentTotal('billAmt')).toEqual(10);
        //adds more values
        billAmtInput.value = 20;
        tipAmtInput.value = 5;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(30);
    });

    it('should sum up all tip payments on sumPaymentTotal', function () {
        //checks with initial values
        expect(sumPaymentTotal('tipAmt')).toEqual(2);
        //adds more values
        billAmtInput.value = 20;
        tipAmtInput.value = 5;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(7);
    });

    it('should sum up all tip percents on sumPaymentTotal', function () {
        //checks with initial values
        expect(sumPaymentTotal('tipPercent')).toEqual(20); // 10/2 = 20
        //adds more values
        billAmtInput.value = 20;
        tipAmtInput.value = 5;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(45); // 20/5 + 20 = 45
    });

    it('should calculate bill and tip amount into tip percent in calculateTipPercent()', function () {
        expect(calculateTipPercent(10, 2)).toEqual(20);
        expect(calculateTipPercent(20, 5)).toEqual(25);
        expect(calculateTipPercent(300, 24)).toEqual(8);
    });

    it('should append a newly created td element from the value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
    
        appendTd(newTr, 'newTd');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('newTd');
    });
    
    it('should delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');
    
        appendDeleteBtn(newTr);
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('Delete');
      });
  
  
    afterEach(function() {
        // teardown logic
        allPayments = {};
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
    });
  });