import { Component, OnInit ,HostListener,OnDestroy} from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { NavigationStart, Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Produk",
    moduleId: module.id,
    templateUrl: "./Produk.component.html"
})
export class ProdukComponent implements OnInit , OnDestroy{
  private routeSub:any; 
  masak = [{
          id: 0,
          image: "~/app/asset/gas.jpg",
          text: "GAS LPG 3 KG",
          harga: 20000
      },
      {
          id: 1,
          image: "~/app/asset/minyak.jpg",
          text: "MINYAK KELAPA 500ML",
          harga: 20000
      },
      {
          id: 2,
          image: "~/app/asset/panci.jpg",
          text: "PANCI",
          harga: 50000
      },
      {
          id: 3,
          image: "~/app/asset/wajan.jpg",
          text: "WAJAN",
          harga: 55000
      }
  ];
  id:number;

  constructor(private page: Page, private router: Router,private route: ActivatedRoute ) {
    this.id = +this.route.snapshot.params.id;
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

  formatuang(harga){
      var p = Number(harga).toFixed(0).split(".");
      return p[0].split("").reverse().reduce(function(acc, num, i) {
          return  num=="-" ? acc : num + (i && !(i % 3) ? "." : "") + acc;
      }, "");
  }

}
