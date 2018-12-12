import { CooperProvider } from "./cooper";

describe("CooperProvider", () => {
  let cooperProvider: CooperProvider;

  beforeEach(() => {
    cooperProvider = new CooperProvider();
  });

  it('should create the cooper provider', () => {
    expect(cooperProvider).toBeTruthy();
    expect(cooperProvider instanceof CooperProvider).toEqual(true);
  });

  it('assess should return Excellent', () => {
    let person = { age: 13, gender: 'male' };
    expect(cooperProvider.assess(person, 4000)).toBeDefined();
    expect(cooperProvider.assess(person, 4000)).toEqual('Excellent');
  });

  it('assess should return Above average', () => {
    let person = { age: 15, gender: 'male' };
    expect(cooperProvider.assess(person, 2500)).toEqual('Above average');
  });

  it('assess should return Average', () => {
    let person = { age: 17, gender: 'male' };
    expect(cooperProvider.assess(person, 2500)).toEqual('Average');
    });

  it('assess should return Below average', () => {
    let person = { age: 25, gender: 'male' };
    expect(cooperProvider.assess(person, 2100)).toEqual('Below average');
    });

  it('assess should return Poor', () => {
    let person = { age: 32, gender: 'male' };
    expect(cooperProvider.assess(person, 1400)).toEqual('Poor');
    });

    it('assess should return Invalid age range when outside of age range', () => {
        let person = { age: 12, gender: 'male' };
    expect(cooperProvider.assess(person, 1400)).toEqual('Invalid age range');
    })
});