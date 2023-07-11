import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountestComponent } from '../../../src/app/basic/countest/countest.component';

describe('CountestComponent', () => {
  let component: CountestComponent;
  let fixture: ComponentFixture<CountestComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe de hacer match con el snapshot', () => {
      expect(compiled).toMatchSnapshot();
  });

  it('increaseBy debe de incrementar basado en el argumento (5)', () => {
      component.increaseBy(5);
      expect(component.counter).toBe(15)
  });

  it('hacer click en los botones debe incrementar y decrementar en 1', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(11);
    buttons[1].click();
    buttons[1].click();
    expect(component.counter).toBe(9);
  });

  it('Cambiar el counter debe de actualizar la etiqueta H1', () => {
    component.increaseBy(10);
    fixture.detectChanges();
    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('20');
  });


});
