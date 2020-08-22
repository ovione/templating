import { Component, Input, TemplateRef } from '@angular/core';
import { TableOptionsModel } from '../model/table-options.model';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {
  @Input() cols: Array<TableOptionsModel>;
  @Input() rowsData: Array<any>;
  @Input() rowsGeneratorTemplateRef: TemplateRef<any>;
}
