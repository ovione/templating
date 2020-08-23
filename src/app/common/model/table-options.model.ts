import { TemplateRef } from '@angular/core';

export class TableOptionsModel {
    constructor(public field: string, public header: string, public fieldTemplateRef?: TemplateRef<any>, public headerTemplateRef?: TemplateRef<any>) {}
}
