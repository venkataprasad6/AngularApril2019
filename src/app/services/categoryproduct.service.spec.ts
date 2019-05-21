import { TestBed } from '@angular/core/testing';

import { CategoryproductService } from './categoryproduct.service';

describe('CategoryproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryproductService = TestBed.get(CategoryproductService);
    expect(service).toBeTruthy();
  });
});
