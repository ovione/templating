import { TemplateRef } from '@angular/core';

export class TableOptionsModel {
    constructor(public field: string, public header: string, fieldTemplateRef?: TemplateRef<any>, headerTemplateRef?: TemplateRef<any>) {}
}
