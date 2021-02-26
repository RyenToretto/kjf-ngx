import { TestBed } from '@angular/core/testing';

import { TemplateDriveService } from './template-drive.service';

describe('template-drive.service.spec.ts', () => {
    let service: TemplateDriveService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TemplateDriveService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
