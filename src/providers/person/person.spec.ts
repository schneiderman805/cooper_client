import { CooperProvider } from './../../providers/cooper/cooper';
import { PersonProvider } from './../../providers/person/person';
import { TestBed, inject } from "@angular/core/testing";


describe("Person Component", () => {
    let personProvider, cooperProvider;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [PersonProvider, CooperProvider]
  }));

  beforeEach(inject([PersonProvider, CooperProvider], (p, c) => {
    personProvider = p;
    cooperProvider = c;
  }));

    it("should create the person provider", () => {
        expect(personProvider).toBeTruthy();
        expect(personProvider instanceof PersonProvider).toEqual(true);
    );

    it('doassessment should be defined', () => {
        spyOn(personProvider, 'doAssessment');

        personProvider.doAssessment(2500);

        expect(personProvider.doAssessment).toHaveBeenCalled();
        expect(personProvider.doAssessment).toHaveBeenCalledWith(2500);
    });

    it('cooper provider should be called', () => {
        personProvider.age = 25;
        personProvider.gender = 'female';
        spyOn(cooperProvider, 'assess');

        personProvider.doAssessment(2200);

        expect(cooperProvider.assess).toHaveBeenCalled();
        expect(cooperProvider.assess).toHaveBeenCalledWith(personProvider, 2200);
    });
});