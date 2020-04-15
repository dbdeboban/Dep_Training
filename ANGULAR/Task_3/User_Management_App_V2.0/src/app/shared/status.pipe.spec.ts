import { StatusPipe } from './status.pipe';

describe('StatusPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusPipe();
    expect(pipe).toBeTruthy();
  });
  it('should transform user given using active and deactive',()=>{
    const pipe = new StatusPipe();
    let user = {
      isDeleted:true
    }
    let pipeTransformResult = pipe.transform(user);
    expect(pipeTransformResult).toBe('Deactive');
  })
});
