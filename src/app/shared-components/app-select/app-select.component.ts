import {NgModule,Component,Input, Output, OnInit, forwardRef} from '@angular/core';
import {EventEmitter} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export interface SelectType {
    id: string;
    label: string;
    isSelected?: boolean;
}

@Component({
    selector: 'app-select',
    templateUrl: './app-select.component.html',
    styleUrls: ['./app-select.component.less'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => AppSelectComponent),
          multi: true
        }
    ]
})
export class AppSelectComponent implements ControlValueAccessor, OnInit{

    @Input() items: SelectType[] = [];
    @Input() selectedItem: SelectType;
    @Input() displayType = 'label';
    @Input() multiselect = false;
    @Output() doSelect = new EventEmitter<SelectType>();

    public _selectedItem: SelectType = {
        id: '',
        label: ''
    };

    public isOpenList = false;
    isDisabled = false;
    isSelected = false;

    private propagateChange = (_: any) => {};
    private propagateTouched = () => {};

    constructor() { }

    ngOnInit() {
        if (!this.selectedItem) {
            if (this.items.length > 0) {
                this._selectedItem = this.items[0];
            } else {
                this._selectedItem = {
                    id: '',
                    label: ''
                };
            }
        } else {
            this._selectedItem = this.selectedItem;
        }
        console.log(this._selectedItem);
    }

    writeValue(obj: any): void {
        if (obj) {
            this._selectedItem = obj;
        } else {
            if (this.items.length > 0) {
                this._selectedItem = this.items[0];
            } else {
                this._selectedItem = {
                    id: '',
                    label: ''
                };
            }
        }
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    onClick(item) {
        this._selectedItem = item;
        this.propagateChange(this._selectedItem);

        if (!this.multiselect) {
            this.isOpenList = false;
            this.doSelect.emit(item);
        }
    }
}