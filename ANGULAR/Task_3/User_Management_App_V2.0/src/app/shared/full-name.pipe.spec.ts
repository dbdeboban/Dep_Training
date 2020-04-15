import { FullNamePipe } from './full-name.pipe';

describe('FullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullNamePipe();
    expect(pipe).toBeTruthy();
  });
  it('Should transform lastName and firstName', ()=>{
    const pipe = new FullNamePipe();
    let user ={
      firstName:'ABC',
      lastName:'DEF'
    }
    let pipeTransformedResult = pipe.transform(user);
    expect(pipeTransformedResult).toBe(user.firstName+' '+user.lastName);
  })
});
