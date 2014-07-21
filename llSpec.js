describe("Linked List", function() {
  var list;

  beforeEach(function() {
	list = new LinkedList();
	list.add("aaaaa");
	list.add("bbb");
	list.add("ccc");
	list.add("ddd");
  });

  it("should display third element", function() {
    expect(list.get(2).data).toEqual("ccc");
  });

});
