import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';



const modulesToImportExport = [

    // PrimeNG modules
    ButtonModule,
    SplitButtonModule,
    BadgeModule,
    InputTextModule,
    InputNumberModule,
    FloatLabelModule,
    CheckboxModule,
    RadioButtonModule,
    SelectButtonModule,
    IconFieldModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputIconModule,
    InputMaskModule,
    DropdownModule,
    ChipsModule,
    TooltipModule,
    TabViewModule,
    MenuModule,
    MenubarModule,
    PanelMenuModule,
    CalendarModule,
    TableModule,
    TagModule,
    TagModule,
    DialogModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    MessagesModule,
    ToastModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    ...modulesToImportExport,
  ],
  exports: [

    ...modulesToImportExport,
  ],
})
export class SharedModule { }
