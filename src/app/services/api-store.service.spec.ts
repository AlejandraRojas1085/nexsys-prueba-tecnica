import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ApiStoreService } from './api-store.service';

describe('ApiStoreService', () => {
  let service: ApiStoreService;
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClientSpy = jasmine.createSpyObj('httpClient', ['get']);
    service = new ApiStoreService(httpClientSpy as any)
    service = TestBed.inject(ApiStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
