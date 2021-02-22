import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ThyDividerBasicExampleComponent } from './basic/basic.component';
import { ThyDividerVerticalExampleComponent } from './vertical/vertical.component';
import { ThyDividerWithTextExampleComponent } from './with-text/with-text.component';

const COMPONENTS = [ThyDividerBasicExampleComponent, ThyDividerVerticalExampleComponent, ThyDividerWithTextExampleComponent];

@NgModule({
    declarations: COMPONENTS,
    entryComponents: COMPONENTS,
    imports: [CommonModule, FormsModule],
    exports: COMPONENTS
})
export class ThyDividerExamplesModule {}
