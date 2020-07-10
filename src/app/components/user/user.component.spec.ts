import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { ProductService } from 'src/app/product.service';
import { of } from 'rxjs';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let mockProductService;
  let CARS = [{
		"brand": "Volkswagen",
		"year": 2012,
		"color": "White",
		"vin": "dsad231ff",
		"price": "$21,212"
	},
	{
		"brand": "Audi",
		"year": 2011,
		"color": "Black",
		"vin": "gwregre345",
		"price": "$48,212"
	},
	{
		"brand": "Renault",
		"year": 2005,
		"color": "Gray",
		"vin": "h354htr",
		"price": "$50,212"
	}];

  beforeEach(async(() => {
    mockProductService = jasmine.createSpyObj(['getCars']);
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: ProductService, useValue: mockProductService }
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should create cars correctly using products service', () => {
    mockProductService.getCars.and.returnValue(of(CARS));
    fixture.detectChanges();

    expect(fixture.componentInstance.cars.length).toBe(3);
  });
});
