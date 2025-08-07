import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskgenComponent } from './taskgen.component';

describe('TaskgenComponent', () => {
  let component: TaskgenComponent;
  let fixture: ComponentFixture<TaskgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskgenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
