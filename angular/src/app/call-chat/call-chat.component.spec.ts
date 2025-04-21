import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallChatComponent } from './call-chat.component';

describe('CallChatComponent', () => {
  let component: CallChatComponent;
  let fixture: ComponentFixture<CallChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
