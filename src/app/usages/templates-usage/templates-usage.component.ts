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
  colsNormal: Array<TableOptionsModel>;
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
    setTimeout( () => {
      this.initializeCols();
    });

  }

  private initializeCols(): void {
    this.colsNormal = this.initializeColsNotCustomized();
    this.cols = this.initializeColsCustomized();
  }

  private initializeColsNotCustomized(): Array<TableOptionsModel>{
    const cols = new Array<TableOptionsModel>();

    cols.push(new TableOptionsModel('name', 'Name'));
    cols.push(new TableOptionsModel('lastname', 'Last Name'));
    cols.push(new TableOptionsModel('age', 'Age'));

    return cols;
  }

  private initializeColsCustomized(): Array<TableOptionsModel>{
    const cols = new Array<TableOptionsModel>();

    cols.push(new TableOptionsModel('name', 'Name'));
    cols.push(new TableOptionsModel('lastname', 'Last Name', this.fieldLastnameDataGeneratortemplateRef, this.headerLastnameDataGeneratortemplateRef));
    cols.push(new TableOptionsModel('age', 'Age', this.fieldAgeDataGeneratortemplateRef));

    return cols;
  }

  private initializeRowData(): void {
    this.rowsData = new Array<Person>();

    this.rowsData.push(new Person('ovione', 'kenobi', 60));
    this.rowsData.push(new Person('yoda', 'jedi', 1000));
    this.rowsData.push(new Person('luke', 'skywalker', 21));
  }

  fieldClicked(field: string, value: any): void {
    console.log('the field: \'' + field + '\' was clicked with value: ' + value);
  }
}
