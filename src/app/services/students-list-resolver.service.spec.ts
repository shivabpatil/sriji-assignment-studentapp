import { TestBed, inject } from '@angular/core/testing';

import { StudentsListResolverService } from './students-list-resolver.service';

describe('StudentsListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsListResolverService]
    });
  });

  it('should be created', inject([StudentsListResolverService], (service: StudentsListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
