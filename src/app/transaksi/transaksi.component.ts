import { Component, OnInit,HostListener,OnDestroy } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { NavigationStart, Router } from '@angular/router';

@Component({
    selector: "Transaksi",
    moduleId: module.id,
    templateUrl: "./transaksi.component.html"
})
export class TransaksiComponent implements OnInit, OnDestroy {
    private routeSub:any; 
    constructor(private page: Page, private router: Router) {
        // this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.routeSub = this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
              // save your data
            }
          });
    }

    @HostListener('unloaded')
    public ngOnDestroy() {
        this.routeSub.unsubscribe();
      }

}
