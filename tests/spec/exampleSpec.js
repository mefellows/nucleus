describe("The cat", function() {

  it("should meow", function() {
   	var newCat = new cat();
   	var noise = newCat.meow();

   	expect(noise).toEqual("meow");
  });

  it("should bite me when the meow is loud", function() {
   	var newCat = new cat();
   	var simon = new human();
   	console.log(simon);
   	simon.setBitten = jasmine.createSpy();

   	var noise = newCat.meow(5, simon);

   	expect(simon.setBitten).toHaveBeenCalled();
  });

  it("should give me rabies when the meow is super loud and it bites me", function() {
   	var newCat = new cat();
   	var simon = new human();
   	spyOn(simon, 'setBitten').andCallThrough();
   	var noise = newCat.meow(1, simon);
   	expect(simon.setBitten).toHaveBeenCalledWith(true);
  });

  
});