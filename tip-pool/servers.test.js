describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create another row element and pass to appendTD function with input value on updateServerTable', function () {
    submitServerInfo();
    updateServerTable();

    let servTdList = serverTbody.querySelectorAll('tr td');
    expect(servTdList.length).toEqual(3);
    expect(servTdList[0].innerText).toEqual('Alice');
    expect(servTdList[1].innerText).toEqual('$0.00');
  });

  it('should not add new server if there is empty input on submitServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = "";
    allServers = [];
  });
});
