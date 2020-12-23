import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HostListener } from "@angular/core";

@Injectable()
export class SidebarService {
    private _toggle = new BehaviorSubject<any>(false)
    private screenWidth
    constructor() {
        this.getScreenSize()
        this.navStatus()
    }

    toggleNav = (toggle) => {
        this._toggle.next(toggle)
        localStorage.setItem("dossier-sidenav", toggle)
    }

    navStatus = () => {
        let toggle = true
        if (this.screenWidth > 480) {
            toggle = localStorage.getItem("dossier-sidenav") == 'true' ? true : false
        }
        this._toggle.next(toggle)
    }

    get showNav() {
        return this._toggle.asObservable()
    }

    @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
        this.screenWidth = window.innerWidth;
    }
}