import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableOptionsModel } from '../../common/model/table-options.model';
import { Person } from './model/person.model';

@Component({
  selector: 'app-templates-usage',
  templateUrl: './templates-usage.component.html',
  styleUrls: ['./templates-usage.component.scss']
})
export class TemplatesUsageComponent implements OnInit, AfterViewInit {
  cols: Array<TableOptionsModel>;
  rowsData: Array<any>;

  @ViewChild('rowsHeadersGeneratorTemplateRef') rowsHeadersGeneratorTemplateRef: TemplateRef<any>;
  @ViewChild('rowsDataGeneratortemplateRef') rowsDataGeneratortemplateRef: TemplateRef<any>;

  @ViewChild('headerLastnameDataGeneratortemplateRef') headerLastnameDataGeneratortemplateRef: TemplateRef<any>;
  @ViewChild('fieldLastnameDataGeneratortemplateRef') fieldLastnameDataGeneratortemplateRef: TemplateRef<any>;
  @ViewChild('fieldAgeDataGeneratortemplateRef') fieldAgeDataGeneratortemplateRef: TemplateRef<any>;

  ngOnInit(): void {
    this.initializeRowData();
  }

  ngAfterViewInit(): void {
    this.initializeCols();
  }

  private initializeCols(): void {
    this.cols = new Array<TableOptionsModel>();

    this.cols.push(new TableOptionsModel('name', 'Name'));
    this.cols.push(new TableOptionsModel('lastname', 'Last Name', this.fieldLastnameDataGeneratortemplateRef, this.headerLastnameDataGeneratortemplateRef));
    this.cols.push(new TableOptionsModel('age', 'Age', this.fieldAgeDataGeneratortemplateRef));
  }

  private initializeRowData(): void {
    this.rowsData = new Array<Person>();

    this.rowsData.push(new Person('ovione', 'kenobi', 60));
    this.rowsData.push(new Person('yoda', 'jedi', 1000));
    this.rowsData.push(new Person('luke', 'skywalker', 21));
  }
}
